import { createSlice } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
      try {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );


const initialState = {
    list : [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState:  {
        list : [],
    },
})