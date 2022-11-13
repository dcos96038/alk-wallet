import React, {useState} from "react";
import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";
import { useDispatch } from "react-redux";
import { setToast } from '../redux/TooltipsSlice'
import { chargeMoney } from "../redux/accountSlice";

const ChargeView = () => {
  const dispatch = useDispatch();
  const [form, setForm ] = useState({
    concept: "",
    amount: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const data = form;
    setForm({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.amount && form.concept) {
      if (isnum(form.amount)) {
        const res = await dispatch(chargeMoney(form));
        console.log(res);
        if (res.payload.status === 200) {
          dispatch(setToast("success","That was a success"))
        } else{
          dispatch(setToast("error", "Ups, an error has occurred" ))
        }
      } else {
        dispatch(setToast("warning", "Amount must be a number"))
      }
    } else {
      dispatch(setToast("warning", "You have to complete all the fields"))
    }
  };

  let isnum = (val) => /^\d+$/.test(val);

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
              <input type="text" name="amount" className="input-area h-10"
              onChange={handleChange}
              />
            </div>
          </label>
          <label
            htmlFor="concept"
            className="text-base font-medium text-zinc-200"
          >
            Concept
            <input type="text"
            name="concept"
            className="input-area h-10"
            onChange={handleChange}
            />
          </label>
          <Button variant="secondary" action={handleSubmit}
          >Go ahead!</Button>
        </form>
      </div>
    </div>
  );
};

export default ChargeView;
