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
      products.lists.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        hasDiscount: action.payload.hasDiscount,
      });
    },

    productRemoved: (products, action) => {
      listAfterRemove = products.lists.filter((val) => {
        return val.id !== action.payload.id;
      });
      products.lists = listAfterRemove;
    },

    apiProductsRequestSucceeded: (products, action) => {
      products.lists.push(...action.payload);
    },
  },
});

export const { productAdded, productRemoved, apiProductsRequestSucceeded } =
  productSlice.actions;
export default productSlice.reducer;
