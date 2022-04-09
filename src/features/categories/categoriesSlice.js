import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadCategories } from './categoriesAPI';
const initialState = {
 categories:[]
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => {
    const response = await loadCategories();
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
