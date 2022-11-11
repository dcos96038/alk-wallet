import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";
import { sendMoney } from "../redux/accountSlice";

const SendView = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    recipientID: "",
    concept: "",
    amount: "",
  });
  const handleChange = (ev) => {
    ev.preventDefault();
    const data = form;
    setForm({ ...data, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (form.amount && form.recipientID && form.concept) {
      if (isnum(form.amount)) {
        const res = await dispatch(sendMoney(form));
        console.log(res);
        if (res.payload.message === "OK") {
          toast.success("That was a success", {
            position: "bottom-right",
            draggable: false,
            theme: "dark",
          });
        } else {
          toast.error("Ups, an error has occurred", {
            position: "bottom-right",
            draggable: false,
            theme: "dark",
          });
        }
      } else {
        toast.info("Amount must be a number", { theme: "dark" });
      }
    } else {
      toast.info("You have to complete all the fields", { theme: "dark" });
    }
  };

  let isnum = (val) => /^\d+$/.test(val);

  return (
    <div className="flex flex-col flex-grow box-border">
      <div className="flex flex-col box-border mx-auto my-12 h-fit px-12 py-6 rounded-xl bg-gradient-to-r from-secondary to-primary">
        <h1 className="font-semibold">Money Transfer</h1>
        <form action="" className="max-w-lg">
          <div className="flex flex-wrap sm:flex-nowrap">
            <label
              htmlFor="recipient"
              className="text-base font-medium text-zinc-200"
            >
              Send money to{" "}
              <span className="font-normal text-gray-300">(id)</span>
              <input
                type="text"
                name="recipientID"
                className="input-area h-10"
                onChange={handleChange}
              />
            </label>
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
                <input
                  type="text"
                  name="amount"
                  className="input-area h-10"
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <label
            htmlFor="concept"
            className="text-base font-medium text-zinc-200"
          >
            Concept
            <input
              type="text"
              name="concept"
              className="input-area h-10"
              onChange={handleChange}
            />
          </label>
          <Button variant="secondary" action={handleSubmit}>
            Go ahead!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SendView;
