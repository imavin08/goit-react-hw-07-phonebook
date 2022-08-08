import { createSlice } from '@reduxjs/toolkit';

export const myFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { filter } = myFilter.actions;
