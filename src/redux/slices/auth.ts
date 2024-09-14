import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/axios.ts';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
  data: any;
  role: string | null;
}

const initialState: AuthState = {
  data: null,
  role: null,
};

// Логин
export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params) => {
    const { data } = await axios.post('/user/login', params);
    return data;
  }
);

// Регистрация
export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post('/user/register', params);
    return data;
  }
);

// Получение данных о пользователе
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/user/me');
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        const decodedToken: any = jwtDecode(action.payload.token);
        state.role = decodedToken.role;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload;
        if (action.payload.token) {
          const decodedToken: any = jwtDecode(action.payload.token);
          state.role = decodedToken.role;
        }
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        const decodedToken: any = jwtDecode(action.payload.token);
        state.role = decodedToken.role;
      });
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);
export const selectRole = (state: any) => state.auth.role;

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
