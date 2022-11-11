import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { accountReducer } from "./accountSlice";
import TooltipsSlice from "./TooltipsSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    tooltips: TooltipsSlice,

  },
});
