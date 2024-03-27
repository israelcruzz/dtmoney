import { IconProps } from "phosphor-react";
import { ReactNode } from "react";

export type ITransactions = {
  id?: number;
  description: string;
  type: "entry" | "outcome";
  category: string;
  price: number;
  createdAt?: Date | string;
};

export interface ISumaryItem {
  color: "green" | "red" | "white";
  price: number;
  title: string;
  active?: boolean;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export interface ITransactionsContext {
  transactions: ITransactions[];
  setTransactions: React.Dispatch<React.SetStateAction<ITransactions[]>>
  fetchDatesTransactions: (query: string) => Promise<void>
  createTransaction: (data: ITransactions) => Promise<void>
}

export interface ITransactionsProvider {
  children: ReactNode;
}

type IResponse = {
    data: ITransactions[]
}
