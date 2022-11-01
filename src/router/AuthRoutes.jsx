import {Navigate, Route, Routes} from "react-router-dom";

import {LoginView} from "../views/LoginView";
import {RegisterView} from "../views/RegisterView";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginView />} path="/login" />
      <Route element={<RegisterView />} path="/register" />
      <Route element={<Navigate to="/login" />} path="/*" />
    </Routes>
  );
};
