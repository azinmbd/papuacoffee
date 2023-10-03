import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  orders: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (find >= 0) {
        state.cart[find].qty += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += qty;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload && item.qty>1) {
          return { ...item, qty: item.qty - 1 };
        } 
        return item;
      });
    },
    submitOrder(state) {
      state.orders.push(state.cart);
      state.cart = []
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  submitOrder
} = cartSlice.actions;

export default cartSlice.reducer;
