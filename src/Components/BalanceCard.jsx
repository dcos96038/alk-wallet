import {Link} from "react-router-dom";

import Button from "../Components/Button";

const BalanceCard = ({type, currency, amount}) => {
  function getColor(type) {
    switch (type) {
      case "balance":
        amount > 0 ? "text-4xl text-green" : "text-4xl text-red";
      case "ingresos":
        return "text-4xl text-green";
      case "egresos":
        return "text-4xl text-red";
      default:
        break;
    }
  }

  function renderLinks(type) {
    switch (type) {
      case "balance":
        return (
          <Button className="mt-3 mx-auto justify-self-center">
            <Link className="text-white no-underline" to="/movements">
              Ver movimientos
            </Link>
          </Button>
        );
      case "ingresos":
        return (
          <Button className="mt-3 mx-auto justify-self-center">
            <Link className="text-white no-underline" to="/charge">
              Cargar dinero
            </Link>
          </Button>
        );
      case "egresos":
        return (
          <Button className="mt-3 mx-auto justify-self-center">
            <Link className="text-white no-underline" to="/expenses">
              Ver gastos
            </Link>
          </Button>
        );
    }
  }

  return (
    <div className="flex flex-col items-start max-w-screen-lg mt-6 md:mt-0">
      <h2 className="text-primary capitalize text-3xl">{type === "balance" ? "saldo" : type}:</h2>
      <div className="border-2 mt-3 px-14 py-7  border-secondary max-w-sm rounded overflow-hidden">
        <h3
          className={getColor(type) + " uppercase font-bold text-2xl lg:text-4xl"}
        >{`${currency} ${amount}`}</h3>
      </div>
      {renderLinks(type)}
    </div>
  );
};

export default BalanceCard;
