import { configureStore } from '@reduxjs/toolkit';
import { goalsReducer } from '@/redux/slices/goals.ts';
import { authReducer } from '@/redux/slices/auth.ts';

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    auth: authReducer
  },
});

export default store;