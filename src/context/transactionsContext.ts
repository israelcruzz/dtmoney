import { createContext } from "react";
import { ITransactionsContext } from "../@types/global";

export const TransactionsContext = createContext({} as ITransactionsContext);