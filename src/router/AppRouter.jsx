import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectIsLoggedIn} from "../redux/userSlice";

import {AuthRoutes} from "./AuthRoutes";
import {MainRoutes} from "./MainRoutes";

export const AppRouter = () => {
  const loggedIn = true;
  //useSelector(selectIsLoggedIn);

  return (
    <Routes>
      {loggedIn ? (
        <Route element={<MainRoutes />} path="/*" />
      ) : (
        <Route element={<AuthRoutes />} path="/auth/*" />
      )}
      <Route element={<Navigate to="/auth/login" />} path="/*" />
    </Routes>
  );
};
