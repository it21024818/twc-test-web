import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

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
  const response = await axios.post(`${API_BASE_URL}/users`, {
    email,
    password,
  });
  return response.data;
};
