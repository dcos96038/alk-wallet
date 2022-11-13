import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../redux/accountSlice";

export const HomeView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  const money = useSelector((state) => state.account.money);

  return <div>Money: {money}</div>;
};
