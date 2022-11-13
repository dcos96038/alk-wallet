import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { walletApi } from "../api";
import BalanceCard from "../Components/BalanceCard";
import { selectUser } from "../redux/userSlice";

const BalanceView = () => {
  const { accessToken } = useSelector(selectUser);
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const [balance, setBalance] = useState();
  const [error, setError] = useState();
  // const [nextPage, setNextPage] = useState();

  const getBalance = async () => {
    try {
      let nextPage = "/transactions";
      let topups = 0;
      let payments = 0;
      do {
        const res = await walletApi.get(nextPage, {
          headers: { Authorization: "Bearer " + accessToken },
        });

        topups += res.data.data.reduce((acc, item) => {
          if (item.type === "topup" && typeof item.amount === "string") {
            return acc + parseInt(item.amount);
          }
          return acc;
        }, 0);
        payments += res.data.data.reduce((acc, item) => {
          if (item.type === "payment" && typeof item.amount === "string") {
            return acc + parseInt(item.amount);
          }
          return acc;
        }, 0);
        nextPage = res.data.nextPage;
      } while (nextPage);
      setIncome(topups);
      setExpenses(payments);
      setBalance(topups - payments);
    } catch (e) {
      setError(e.response?.data?.error || e.message);

      return;
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="flex flex-col flex-grow items-center lg:mt-20 mb-3 lg:mb-0">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-5xl">Balance</h1>
        <div className="md:flex gap-6 border-2 border-primary mt-3 px-20 py-20 rounded">
          <BalanceCard amount={balance} currency="ars" type="balance" />
          <BalanceCard amount={income} currency="ars" type="ingresos" />
          <BalanceCard amount={expenses} currency="ars" type="egresos" />
        </div>
      </div>
    </div>
  );
};

export default BalanceView;
