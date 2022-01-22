import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  details: {},
  subtotal: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.products.push(...action.payload);
    },
    incItem: (state, action) => {
      state.cart.push(action.payload);
    },
    decItem: (state, action) => {
      var index = state.cart.findIndex((item) => item.title === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    addDetails: (state, action) => {
      state.details = action.payload;
    },
    quantityAdd: (state, action) => {
      var index = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      if (index === -1) {
        state.subtotal.push(action.payload.subtotal);
      } else {
        state.subtotal[index] = action.payload.subtotal;
      }
      // state.test[2].num = state.test[2].num + action.payload.subtotal;
    },
    quantityTest: (state, action) => {
      var index = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      state.cart[index].newprice =
        state.cart[index].newprice + action.payload.newprice;
      state.cart[index].quantity = state.cart[index].quantity + 1;
    },
    quantityDec: (state, action) => {
      //   var index = state.cart.findIndex(
      //     (item) => item.title === action.payload.title
      //   );

      //   state.subtotal[index] = action.payload.subtotal;
      // },
      var index = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      state.cart[index].newprice =
        state.cart[index].newprice - action.payload.newprice;
      state.cart[index].quantity = state.cart[index].quantity - 1;
    },
  },
});

export const {
  setproducts,
  incItem,
  decItem,
  addDetails,
  quantityAdd,
  quantityDec,
  quantityTest,
} = productSlice.actions;

export const selectDetail = (state) => state.product.details;
export const selectProduct = (state) => state.product.products;
export const selectCart = (state) => state.product.cart;
export const selectTotal = (state) => state.product.subtotal;

export default productSlice.reducer;
