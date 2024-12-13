import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItem: [],
  numberItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItem.find((i) => i.cartID === product.cartID);

      if (item) {
        item.quantity += product.quantity;
      } else {
        state.cartItem.push(product);
      }
      state.numberItemsInCart += product.quantity;
      state.cartTotal += product.price * product.quantity;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item added  to cart ");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItem.find((item) => item.cartID === cartID);

      state.cartItem = state.cartItem.filter((item) => item.cartID !== cartID);
      state.numberItemsInCart -= product.quantity;
      state.cartTotal - product.price * product.quantity;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("item removed from cart ");
    },
    editItem: (state, action) => {
      const { cartID, quantity } = action.payload;
      const item = state.cartItem.find((item) => item.cartID === cartID);
      state.numberItemsInCart += quantity - item.quantity;
      state.cartTotal += item.price * (quantity - item.quantity);
      item.quantity = quantity;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
