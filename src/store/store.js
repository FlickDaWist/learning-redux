import reducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, api),
});

export default store;
