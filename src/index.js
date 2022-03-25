import store from "./store/store";
import { productAdded, productMarkAsDiscount } from "./store/product/action";
import { changeEmail, changeUsername } from "./store/currUser";
import { addProductToCart, decreaseProductCount, increaseProductCount } from "./store/cart";

store.dispatch(productAdded({ name: "Tomato", price: 1000 }));
store.dispatch(productAdded({ name: "Apple", price: 2000 }));
store.dispatch(
  productAdded({ name: "Orange", price: 4000, hasDiscount: true })
);

store.dispatch(productMarkAsDiscount({ id: 2, hasDiscount: true }));

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "https://fakestoreapi.com/products?limit=5",
    method: "GET",
  },
});

store.dispatch(
  changeUsername({
    value: "Oka",
  })
);

store.dispatch(
  changeEmail({
    value: "oka@gmail.com",
  })
);

store.dispatch(
  addProductToCart({
    productId: 1,
    productCount: 20,
  })
);

store.dispatch(
  decreaseProductCount({
    productId: 1,
  })
);

store.dispatch(
  increaseProductCount({
    productId: 1,
  })
);

console.log(store.getState());
