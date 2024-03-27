import { useEffect, useState } from "react";
import {
  IResponse,
  ITransactions,
  ITransactionsProvider,
} from "../@types/global";
import { TransactionsContext } from "./transactionsContext";
import { api } from "../services/api";
import { toast } from "sonner";

export function TransactionsProvider({ children }: ITransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  const fetchDatesTransactions = async (query?: string) => {
    try {
      const response = (await api.get("http://localhost:3333/transactions", {
        params: {
          description: query,
        },
      })) as IResponse;

      setTransactions(response.data);
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  const createTransaction = async (data: ITransactions) => {
    try {
      const response = await api.post("/transactions", {
        description: data.description,
        type: data.type,
        category: data.category,
        price: data.price,
        createdAt: new Date(),
      });

      setTransactions((prev) => [...prev, response.data]);
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    fetchDatesTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions,
        setTransactions,
        fetchDatesTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
