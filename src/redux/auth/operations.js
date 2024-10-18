import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../contacts/operations";

const setAuthHeader = (token) => {
  apiUrl.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await apiUrl.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await apiUrl.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await apiUrl.post("/users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const saveToken = thunkApi.getState().auth.token;
      if (!saveToken) {
        return thunkApi.rejectWithValue("Token not found");
      }
      setAuthHeader(saveToken);
      const { data } = await apiUrl.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
