import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (cart, action) => {
      if (cart.lists.length <= 0) {
        cart.lists.push(action.payload);
      } else {
        cart.lists.map((val, i) => {
          if (val.productId == action.payload.productId) {
            cart.lists[i].productCount += action.payload.productCount;
          } else {
            cart.lists.push(action.payload);
          }
        });
      }
    },

    increaseProductCount: (cart, action) => {
      cart.lists.map((val, i) => {
        if (val.productId == action.payload.productId) {
          cart.lists[i].productCount += 1;
        }
      });
    },

    decreaseProductCount: (cart, action) => {
      cart.lists.map((val, i) => {
        if (val.productId == action.payload.productId) {
          cart.lists[i].productCount -= 1;
        }
      });
    },
  },
});

export const { addProductToCart, increaseProductCount, decreaseProductCount } =
  cartSlice.actions;
export default cartSlice.reducer;
