import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // api call garda wrapper garnu parxa
    // call ta hunxa tara state maa save garna sakidaina
    //create action folder
    // yo vitra asyn code lekhna hudaina and not allowed
    //solution vaneko : make action folder and euta fileAction.jsx
    //tesma api call garne

    getproducts: (state, action) => {
      // state maa rakhne data payload ko
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { getproducts } = ProductSlice.actions;
