import React from "react";
import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";

const ChargeView = () => {
  return (
    <div className="flex flex-col flex-grow box-border">
      <div className="flex flex-col box-border mx-auto my-12 h-fit px-12 py-6 rounded-xl bg-gradient-to-r from-secondary to-primary">
        <h1 className="font-semibold">Charge your Account</h1>
        <form action="" className="max-w-lg">
          <label
            htmlFor="amount"
            className="text-base font-medium text-zinc-200"
          >
            Amount
            <div className="flex bg-zinc-800 rounded-lg">
              <Dropdown
                values={["ARS", "USD", "EUR"]}
                className={""}
                returnValue={console.log}
              />
              <input type="text" name="amount" className="input-area h-10" />
            </div>
          </label>
          <label
            htmlFor="concept"
            className="text-base font-medium text-zinc-200"
          >
            Concept
            <input type="text" name="concept" className="input-area h-10" />
          </label>
          <Button variant="secondary">Go ahead!</Button>
        </form>
      </div>
    </div>
  );
};

export default ChargeView;
