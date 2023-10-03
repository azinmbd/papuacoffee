import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartSlice";
import authReducer from "../redux/features/authSlice";
import coffeeReducer from "../redux/features/coffeeSlice";
import registerReducer from "../redux/features/userRegisterSlice";
import coffeeInfoReducer from "../redux/features/coffeeInfoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["omitedPart"],
};
const reducer = combineReducers({
  allCart: cartReducer,
  auth: authReducer,
  coffee: coffeeReducer,
  userRegister: registerReducer,
  coffeeInfo: coffeeInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
