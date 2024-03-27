import { useContext } from "react";
import { Header } from "../components/header/index";
import { Sumary } from "../components/sumary/index";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SearchForm } from "./components/searchForm";
import { TransactionsContext } from "../context/transactionsContext";

export function Transactions() {

  const { transactions } = useContext(TransactionsContext)
  console.log(transactions);
  

  return (
    <>
      <Header />
      <Sumary />

      <main className="max-w-[1120px] mx-auto mt-6">
        <SearchForm />
        <table
          className="w-full"
          style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
        >
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr className="bg-[#29292E]">
                  <td
                    width="50%"
                    className="px-5 py-8 text-[#C4C4CC]"
                    style={{
                      borderBottomLeftRadius: "8px",
                      borderTopLeftRadius: "8px",
                    }}
                  >
                    {transaction.description}
                  </td>
                  <td
                    className={`${
                      transaction.type === "entry"
                        ? "text-[#00B37E]"
                        : "text-[#F75A68]"
                    }`}
                  >
                    {transaction.type === "outcome" && "- "}
                    {transaction.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td className="text-[#C4C4CC]">{transaction.category}</td>
                  <td
                    className="text-[#C4C4CC]"
                    style={{
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    {transaction.createdAt && format(transaction.createdAt, "dd/MM/yyyy", {
                      locale: ptBR,
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
