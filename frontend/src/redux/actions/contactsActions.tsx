import axios from 'axios';
import { Dispatch } from 'redux';
import * as actions from '../constants/contactConstants';
import { IContact } from '../../interfaces/IContact';

export const fetchContacts = () => 
async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actions.FETCH_CONTACTS_REQUEST });

        const { data } = 
        await axios.get(`/api/contacts/`);

        dispatch({ type: actions.FETCH_CONTACTS_SUCCESS, payload: data });
        
    } catch (error: any) {
        dispatch({ 
            type: actions.FETCH_CONTACTS_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }
}

export const createContact = (contactData: IContact) => async (dispatch: Dispatch, getState: any) => {

    try {
        dispatch({ type: actions.CREATE_CONTACT_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/JSON",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/contacts`, contactData, config);
        dispatch({ type: actions.CREATE_CONTACT_SUCCESS });

    } catch (error: any) {
        dispatch({ 
            type: actions.CREATE_CONTACT_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}

export const updateContact = (contactId: IContact['_id'], contactData: IContact) => async (dispatch: Dispatch, getState: any) => {

    try {
        
        dispatch({ type: actions.UPDATE_CONTACT_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${userInfo.token}`
            }
        };

        await axios.put(`/api/contacts/${contactId}`, contactData, config);
        dispatch({ type: actions.UPDATE_CONTACT_SUCCESS });

    } catch (error: any) {
        dispatch({ 
            type: actions.UPDATE_CONTACT_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}

export const deleteContact = (contactId: IContact['_id']) => async (dispatch: Dispatch, getState: any) => {

    try {
        dispatch({ type: actions.DELETE_CONTACT_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/contacts/${contactId}`, config);
        dispatch({ type: actions.DELETE_CONTACT_SUCCESS });

    } catch (error: any) {
        dispatch({ 
            type: actions.DELETE_CONTACT_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}