import BalanceCard from "../Components/BalanceCard";

const BalanceView = () => {
  return (
    <div className="flex flex-col flex-grow items-center lg:mt-20 mb-3 lg:mb-0">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-5xl">Balance</h1>
        <div className="md:flex gap-6 border-2 border-primary mt-3 px-20 py-20 rounded">
          <BalanceCard amount="1000" currency="ars" type="balance" />
          <BalanceCard amount="2000" currency="ars" type="ingresos" />
          <BalanceCard amount="1000" currency="ars" type="egresos" />
        </div>
      </div>
    </div>
  );
};

export default BalanceView;
