import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "../Layout";
import {HomeView} from "../views/HomeView";

export const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<HomeView />} path="/home" />
        <Route element={<Navigate to="/home" />} path="/*" />
      </Routes>
    </Layout>
  );
};
