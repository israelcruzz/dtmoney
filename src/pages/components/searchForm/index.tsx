import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../context/transactionsContext";

export function SearchForm() {
  const { fetchDatesTransactions } = useContext(TransactionsContext)

  const searchFormSchema = z.object({
    query: z.string(),
  });

  type SearchFormInputs = z.infer<typeof searchFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearch = (data: SearchFormInputs) => {
    fetchDatesTransactions(data.query)
    reset()
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Busque por transações"
        className="flex-1 bg-[#121214] p-4 rounded-md text-white"
        required
        {...register("query")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-[#00B37E] rounded-md px-8 py-[14px] flex items-center justify-center gap-2 text-[#00B37E] hover:bg-[#00B37E] hover:text-white disabled:cursor-not-allowed"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  );
}
