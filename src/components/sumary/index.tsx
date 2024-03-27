import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from "phosphor-react";
import { SumaryItem } from "../sumaryItem";
import { useSumary } from "../../hooks/useSumary";

export function Sumary() {

  const sumary = useSumary()

  return (
    <main className="max-w-[1120px] mx-auto flex justify-between -mt-16">
      <SumaryItem
        title="Entradas"
        icon={ArrowCircleUp}
        color="green"
        price={sumary.entry}
      />

      <SumaryItem
        title="Saídas"
        icon={ArrowCircleDown}
        color="red"
        price={sumary.outcome}
      />

      <SumaryItem
        title="Total"
        icon={CurrencyCircleDollar}
        color="white"
        price={sumary.total}
      />
    </main>
  );
}
