import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import authRedcer from './slices/authSlice';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authRedcer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;

