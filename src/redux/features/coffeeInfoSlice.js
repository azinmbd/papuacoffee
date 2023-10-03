import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const coffeeInfoSlice = createSlice({
  name: 'coffeeInfo',
  initialState,
  reducers: {
    fetchCoffeeStart(state) {
      state.isLoading = true;
    },
    fetchCoffeeSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchCoffeeFailure(state, action) {
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchCoffeeStart, fetchCoffeeSuccess, fetchCoffeeFailure } =
  coffeeInfoSlice.actions;

export const fetchCoffeeInfo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://papuacoffee.onrender.com/coffee/${id}`, {id});
    dispatch(fetchCoffeeSuccess(response.data.coffee));
  } catch (error) {
    dispatch(fetchCoffeeFailure(error.message));
  }
};

export default coffeeInfoSlice.reducer;
