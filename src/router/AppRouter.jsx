import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRoutes} from "./AuthRoutes";
import {MainRoutes} from "./MainRoutes";

export const AppRouter = () => {
  const isAuth = true;

  return (
    <Routes>
      {isAuth ? (
        <Route element={<MainRoutes />} path="/*" />
      ) : (
        <Route element={<AuthRoutes />} path="/auth/*" />
      )}
      <Route element={<Navigate to="/auth/login" />} path="/*" />
    </Routes>
  );
};
