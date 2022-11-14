import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const AccountCard = () => {
  const money = useSelector((state) => state.account.money);
  const accountID = useSelector((state) => state.account.id);
  const isBlocked = useSelector((state) => state.account.isBlocked);

  const [toggle, setToggle] = useState(true);
  const [details, setDetails] = useState(false);

  return (
    <div className="flex flex-col box-border mx-auto my-12 h-fit px-12 py-6 rounded-xl bg-gradient-to-r from-secondary to-primary">
      <div className="h-10"></div>
      <div className="flex flex-col xl:flex-row xl:space-x-10">
        <div className="flex w-1/3 justify-between">
          <div>
            <h3 className="py-1">Account balance</h3>
            <h1 className="mt-0 text-6xl  font-normal">
              <span className="font-5xl font-thin">$</span>
              {!toggle && money}
              {toggle && "******"}
            </h1>
          </div>
          <button
            className="border-0 p-2 h-fit w-fit self-center text-2xl"
            onClick={() => setToggle(!toggle)}
          >
            <AiOutlineEye />
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className="flex border-0 text-base"
            onClick={() => setDetails(!details)}
          >
            Show account details{" "}
            <svg
              className="ml-2 w-4 h-4 my-auto"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className={`px-5 ${details ? "" : "hidden"}`}>
            <h3>
              Account ID:{" "}
              <span className="font-semibold text-lg">{accountID}</span>
            </h3>
            <h3>
              Status:{" "}
              <span className="font-semibold text-lg">
                {isBlocked ? "Blocked" : "Online"}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="h-5"></div>
      <div className="w-full xl:w-1/2 flex justify-between">
        <Link
          className="py-2 px-5 text-white rounded-lg no-underline bg-primary bg-opacity-80"
          to="/charge"
        >
          Charge money
        </Link>
        <Link
          className="py-2 px-5 text-white rounded-lg no-underline bg-primary bg-opacity-100"
          to="/send"
        >
          Send money
        </Link>
      </div>
    </div>
  );
};

export default AccountCard;
