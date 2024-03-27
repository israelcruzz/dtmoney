import { useContext } from "react";
import { TransactionsContext } from "../context/transactionsContext";

export function useSumary() {
  const { transactions } = useContext(TransactionsContext);

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entry") {
        acc.entry += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    { entry: 0, outcome: 0, total: 0 }
  );

  return sumary
}
