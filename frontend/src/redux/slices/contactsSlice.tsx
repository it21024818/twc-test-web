
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';
import { AppThunk } from "../store";
import { api } from "../../pages/api/index";

interface ContactsState {
  isLoading: boolean;
  error: string | null;
  contacts: Contact[];
}

const initialState: ContactsState = {
  isLoading: false,
  error: null,
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContactsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getContactsSuccess(state, action: PayloadAction<Contact[]>) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    getContactsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const { id } = action.payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact(state, action: PayloadAction<string>) {
      const { payload: id } = action;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
});

export const {
  getContactsStart,
  getContactsSuccess,
  getContactsFailure,
  addContact,
  updateContact,
  deleteContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;

export const fetchContacts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getContactsStart());
    const response = await api.get("/contacts");
    dispatch(getContactsSuccess(response.data));
  } catch (error) {
    // dispatch(getContactsFailure(error.message));
  }
};

export const createContact = (contact: Contact): AppThunk => async (dispatch) => {
  try {
    const response = await api.post("/contacts", contact);
    dispatch(addContact(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const updateExistingContact = (contact: Contact): AppThunk => async (dispatch) => {
  try {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    dispatch(updateContact(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteExistingContact = (id: string): AppThunk => async (dispatch) => {
  try {
    await api.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    console.error(error);
  }
};
