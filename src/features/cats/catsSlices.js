import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadCats } from './catsAPI';
const initialState = {
 cats:[]
};


export const incrementAsyncCat = createAsyncThunk(
  'counter/fetchCount2',
  async (amount) => {
    const response = await loadCats(amount);
    return response;
  }
);

export const catsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsyncCat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsyncCat.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cats = action.payload;
      });
  },
});

export default catsSlice.reducer;
