import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/songReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
