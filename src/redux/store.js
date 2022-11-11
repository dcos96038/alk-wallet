import {configureStore} from "@reduxjs/toolkit";
import TooltipsSlice from "./TooltipsSlice";
import {userReducer} from "./userSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    tooltips: TooltipsSlice,
  },
});
