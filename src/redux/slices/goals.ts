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

export const fetchDeleteGoal = createAsyncThunk('goals/fetchDeleteGoal', async (id) => {
  await axios.delete(`/goals/${id}`);
  return id;
});


export const fetchEditGoal = createAsyncThunk('goals/fetchEditGoal', async (goal) => {
  const { data } = await axios.patch(`/goals/${goal.id}`, goal);
  return data;  // Return the updated goal
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
      })
      .addCase(fetchDeleteGoal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeleteGoal.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.items = state.items.filter(goal => goal.id !== action.payload);
      })
      .addCase(fetchDeleteGoal.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchEditGoal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEditGoal.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.items = state.items.map(goal => goal.id === action.payload.id ? action.payload : goal);
      })
      .addCase(fetchEditGoal.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const goalsReducer = goalsSlice.reducer;