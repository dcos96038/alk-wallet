import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCard from "../Components/AccountCard";
import MovementsCard from "../Components/MovementsCard";
import { getAccount } from "../redux/accountSlice";

export const HomeView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <div className="p-0 sm:px-32 md:px-48 lg:px-64 xl:px-80 2xl:px-96">
      <AccountCard />
      <MovementsCard />
    </div>
  );
};
