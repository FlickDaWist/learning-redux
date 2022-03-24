import store from "./store/store";
import { productAdded, productMarkAsDiscount } from "./store/product/action";

store.dispatch(productAdded({ name: "Tomato", price: 1000 }));
store.dispatch(productAdded({ name: "Apple", price: 2000 }));
store.dispatch(
  productAdded({ name: "Orange", price: 4000, hasDiscount: true })
);

store.dispatch(productMarkAsDiscount({ id: 2, hasDiscount: true }));

console.log(store.getState());
