import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    getListSucess(state, action) {
      state.data = action.payload;
    },
  },
});
export const { getListSucess } = coffeeSlice.actions;

export const fetchCoffee = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://papuacoffee.onrender.com/coffee/list"
    );
    dispatch(getListSucess(response.data.coffees));
  } catch (error) {
    console.log(error);
  }
};

export default coffeeSlice.reducer;
