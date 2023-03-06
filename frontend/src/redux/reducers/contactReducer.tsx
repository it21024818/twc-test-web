import * as actions from '../constants/contactConstants';
import { AnyAction } from 'redux'
import { IContact } from '../../interfaces/IContact';

const initialState: { contacts: IContact[] } = {
    contacts: [],
};

export const contactsFetchReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.FETCH_CONTACTS_REQUEST:
            return {
                loading: true
            };
        case actions.FETCH_CONTACTS_SUCCESS:
            return {
                loading: false,
                rooms: action.payload.rooms,
                count: action.payload.count
            };
        case actions.FETCH_CONTACTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const contactCreateReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case actions.CREATE_CONTACT_REQUEST:
            return {
                loading: true
            };
        case actions.CREATE_CONTACT_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case actions.CREATE_CONTACT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actions.CREATE_CONTACT_RESET:
            return {}
        default:
            return state;
    }
}

export const contactUpdateReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case actions.UPDATE_CONTACT_REQUEST:
            return {
                loading: true
            };
        case actions.UPDATE_CONTACT_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case actions.UPDATE_CONTACT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actions.UPDATE_CONTACT_RESET:
            return {}
        default:
            return state;
    }
}

export const contactDeleteReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case actions.DELETE_CONTACT_REQUEST:
            return {
                loading: true
            };
        case actions.DELETE_CONTACT_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case actions.DELETE_CONTACT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actions.DELETE_CONTACT_RESET:
            return {}
        default:
            return state;
    }
}