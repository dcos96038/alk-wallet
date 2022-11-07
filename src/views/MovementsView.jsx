import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {walletApi} from "../api";
import {selectUser} from "../redux/userSlice";
import Button from "../Components/Button";
import Loader from "../Components/Loader";

const MovementsView = () => {
  const {accessToken} = useSelector(selectUser);
  const [transactions, setTransactions] = useState();
  const [error, setError] = useState();
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  const loadPage = useCallback(
    async (pageUrl) => {
      setPrevPage();
      setNextPage();
      setTransactions();
      try {
        const {
          data: {previousPage, nextPage, data},
        } = await walletApi.get(pageUrl, {
          headers: {Authorization: "Bearer " + accessToken},
        });

        setPrevPage(previousPage);
        setNextPage(nextPage);
        setTransactions(data);
      } catch (e) {
        setError(e.response?.data?.error || e.message);

        return;
      }
    },
    [accessToken],
  );

  useEffect(() => {
    loadPage("/transactions");
  }, [loadPage]);

  return (
    <div className="p-5">
      <h1 className="text-primary">Movements</h1>
      {error ? (
        <div className="mx-4 my-10 text-xl font-bold">Error: {error}</div>
      ) : transactions ? (
        <div className="my-10">
          <table className="w-full">
            <thead>
              <tr>
                <th>Type</th>
                <th>Concept</th>
                <th>Amount</th>
                <th>To account</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="odd:bg-black/[0.05] odd:dark:bg-white/[0.05]">
                  <td className="text-center">{tx.type}</td>
                  <td className="text-center">{tx.concept}</td>
                  <td className="text-center">{tx.amount}</td>
                  <td className="text-center"> {tx.to_account_id}</td>
                  <td className="text-center">{new Date(tx.date).toLocaleString()} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-10 flex justify-center gap-2">
            {prevPage && <Button action={() => loadPage(prevPage)}>{"<"}</Button>}
            {nextPage && <Button action={() => loadPage(nextPage)}>{">"}</Button>}
          </div>
        </div>
      ) : (
        <div className="mx-4 my-10 grid place-content-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default MovementsView;
