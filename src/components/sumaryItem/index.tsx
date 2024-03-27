import { ISumaryItem } from "../../@types/global";

export function SumaryItem({
  title,
  color,
  price,
  active = false,
  icon: Icon,
}: ISumaryItem) {
  return (
    <div
      className={`p-6 w-[352px] h-[137px] flex flex-col justify-center ${
        active ? "bg-[#015F43]" : "bg-[#323238]"
      } rounded-lg`}
    >
      <header
        className={`flex items-center justify-between 
        `}
      >
        <h1 className="mb-4 text-[#C4C4CC]">{title}</h1>
        <Icon
          size={32}
          color={
            color === "green"
              ? "#00b37e"
              : color === "red"
              ? "#F75A68"
              : "#FFFFFF"
          }
        />
      </header>

      <strong className="font-bold text-white text-3xl">
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </strong>
    </div>
  );
}
