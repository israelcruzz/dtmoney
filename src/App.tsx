import { TransactionsProvider } from "./context/transactionsProvider";
import { Transactions } from "./pages/index";

export const App = () => {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  );
};
