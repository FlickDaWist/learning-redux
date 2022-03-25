import { combineReducers } from "redux";
import productReducer from "./product";
import userReducer from "./currUser";
import cartReducer from "./cart";

export default combineReducers({
  products: productReducer,
  currUser: userReducer,
  cart: cartReducer,
});
