// import axios from "axios";
import { apiProductsRequestSucceeded } from "../product";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiRequest") return next(action);

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  fetch(url, {
    method: method,
  })
    .then((x) => x.json())
    .then((y) => {
      store.dispatch(apiProductsRequestSucceeded(y));
    });
};

export default api;
