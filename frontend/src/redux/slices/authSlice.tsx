import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../../pages/api/index";

interface AuthState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

// Login async thunk
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const { email, password } = credentials;
    const response = await login(email, password);
    return response.user;
  }
);

// Logout async thunk
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await logout();
});

// Register async thunk
export const registerAsync = createAsyncThunk(
  "auth/register",
  async (user: { email: string; password: string }) => {
    const { email, password } = user;
    const response = await register(email, password);
    return response.user;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default authSlice.reducer;
