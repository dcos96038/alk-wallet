import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "../Layout";
import BalanceView from "../views/BalanceView";
import ChargeView from "../views/ChargeView";
import ExpensesView from "../views/ExpensesView";
import {HomeView} from "../views/HomeView";
import MovementsView from "../views/MovementsView";
import NotFoundView from "../views/NotFoundView";
import SendView from "../views/SendView";

export const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<HomeView />} path="/home" />
        <Route element={<BalanceView />} path="/balance" />
        <Route element={<ChargeView />} path="/charge" />
        <Route element={<ExpensesView />} path="/expenses" />
        <Route element={<MovementsView />} path="/movements" />
        <Route element={<SendView />} path="/send" />
        <Route element={<NotFoundView />} path="/*" />
        <Route element={<Navigate to="/home" />} path="/" />
      </Routes>
    </Layout>
  );
};
