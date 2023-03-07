export interface Contact {
    id: string;
    fullName: string;
    number: string;
    emailAddress: string;
    gender: string;
  }
  
  export interface ContactsState {
    contacts: Contact[];
    isLoading: boolean;
    error: string | null;
  }
  
  export interface AddContactPayload {
    fullname: string;
    number: string;
    emailAddress: string;
    gender: string;
  }
  
  export interface EditContactPayload extends AddContactPayload {
    id: string;
  }
  
  export interface DeleteContactPayload {
    id: string;
  }
  
  export interface FetchContactsPayload {
    contacts: Contact[];
  }
  