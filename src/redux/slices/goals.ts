import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from '@/axios.ts';

interface GoalsState {
  items: any;
  status: 'loading' | 'loaded' | 'error';
}

const initialState : GoalsState = {
  items: [],
  status: 'loading'
};

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const { data } = await axios.get('/goals');
  return data;
});

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchGoals.fulfilled, (state, action: PayloadAction) => {
        state.status = 'loaded';
        state.items = action.payload;
      })
      .addCase(fetchGoals.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const goalsReducer = goalsSlice.reducer;