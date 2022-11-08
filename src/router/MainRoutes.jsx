import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "../components/layouts/MainLayout";
import BalanceView from "../views/BalanceView";
import ChargeView from "../views/ChargeView";
import ExpensesView from "../views/ExpensesView";
import {HomeView} from "../views/HomeView";
import MovementsView from "../views/MovementsView";
import SendView from "../views/SendView";

export const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route element={<HomeView />} path="/home" />
        <Route element={<BalanceView />} path="/balance" />
        <Route element={<ChargeView />} path="/charge" />
        <Route element={<ExpensesView />} path="/expenses" />
        <Route element={<MovementsView />} path="/movements" />
        <Route element={<SendView />} path="/send" />
        <Route element={<Navigate to="/home" />} path="/*" />
      </Routes>
    </MainLayout>
  );
};
