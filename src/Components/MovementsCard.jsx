import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { walletApi } from "../api";
import { selectUser } from "../redux/userSlice";
import Loader from "./Loader";

const MovementsCard = () => {
  const { accessToken } = useSelector(selectUser);
  const [transactions, setTransactions] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const getMovements = async () => {
    try {
      const res = await walletApi.get("/transactions", {
        headers: { Authorization: "Bearer " + accessToken },
      });

      setTransactions(res.data.data);
    } catch (e) {
      setError(e.response?.data?.error || e.message);

      return;
    }
  };

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <div className="flex flex-col box-border mx-auto my-12 h-fit px-12 py-6 rounded-xl bg-gradient-to-r from-secondary to-primary">
      <div className="h-10"></div>
      <h1 className="font-normal">Last movements:</h1>
      {!transactions &&
        (error ? (
          <h1>An error has ocurred! {error}</h1>
        ) : (
          <div className="mx-4 my-10 grid place-content-center">
            <Loader />
          </div>
        ))}
      <ul>
        {transactions &&
          transactions.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex rounded- justify-between bg-opacity-70 py-2 px-5 bg-zinc-800`}
              >
                <p>{item.concept}</p>
                <span className="flex">
                  <p>{item.amount}</p>
                  <span
                    className={`ml-2 my-auto ${
                      item.type === "topup" ? "text-green" : "text-[#ed254e]"
                    }`}
                  >
                    {item.type === "topup" ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
      <button
        className="border-0 my-2 bg-primary hover:bg-accent transition-all duration-150"
        onClick={() => navigate("/movements")}
      >
        See all Movements
      </button>
    </div>
  );
};

export default MovementsCard;
