import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
  lists: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

    productAdded: (products, action) => {
      products.list.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        hasDiscount: action.payload.hasDiscount,
      });
    },

    productRemoved: (products, action) => {
      listAfterRemove = products.list.filter((val) => {
        return val.id !== action.payload.id;
      });
      products.list = listAfterRemove;
    },
    

  },
});

export const { productAdded, productRemoved } = productSlice.actions;
export default productSlice.reducer;
