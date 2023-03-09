import { Contact } from "@/redux/types";
import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:5000";

// Authentication API calls
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_BASE_URL}/auth/logout`);
  return response.data;
};

// User registration API calls
export const register = async (
  email: string,
  password: string
) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, {
    email,
    password,
  });
  return response.data;
};

// Function to get all contacts
export const getAllContacts = async (): Promise<AxiosResponse<Contact[]>> => {
  const res = await axios.get(`${API_BASE_URL}/contacts`);
  return res.data;
};

// Function to add a new contact
export const addContact = async (contact: Contact): Promise<AxiosResponse<Contact>> => {
  const res = await axios.post(`${API_BASE_URL}/contacts`, contact);
  return res.data;
};

// Function to update an existing contact
export const updateContact = async (contact: Contact): Promise<AxiosResponse<Contact>> => {
  const res = await axios.put(`${API_BASE_URL}/contacts/${contact.id}`, contact);
  return res.data;
};

// Function to delete an existing contact
export const deleteContact = async (id: string): Promise<AxiosResponse> => {
  const res = await axios.delete(`${API_BASE_URL}/contacts/${id}`);
  return res.data;
};