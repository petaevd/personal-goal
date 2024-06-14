import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/axios.ts';

interface AuthState {
  data: any;
  status: 'loading' | 'loaded' | 'error';
}

const initialState: AuthState = {
  data: null,
  status: 'loading',
};

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params) => {
    const { data } = await axios.post('/user/login', params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post('/user/register', params);
    return data;
  }
);

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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action: PayloadAction) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action: PayloadAction) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action: PayloadAction) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectIsAuth = ( state ) => Boolean(state.auth.data);
export const authReducer =  authSlice.reducer;
export const { logout } = authSlice.actions;
