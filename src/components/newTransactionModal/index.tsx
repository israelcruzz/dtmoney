import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionsContext } from "../../context/transactionsContext";

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);

  const createNewTransactionSchema = z.object({
    description: z.string(),
    price: z.string(),
    category: z.string(),
  });

  type CreateNewTransactionInputs = z.infer<typeof createNewTransactionSchema>;

  const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<CreateNewTransactionInputs>({
    resolver: zodResolver(createNewTransactionSchema),
    defaultValues: {
      category: '',
      description: '',
      price: ''
    }
  });

  const [method, setMethod] = useState<"entry" | "outcome">("entry");

  const handleSubmitCreateNewTransaction = (
    data: CreateNewTransactionInputs
  ) => {
    const { category, description, price } = data;

    createTransaction({
      category,
      description,
      price: Number(price),
      type: method
    });

    reset()
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed h-[100vh] w-full inset-0 bg-black/80" />

      <Dialog.Content className="min-w-[32rem] w-[535px] rounded-md px-[2.5rem] py-[3rem] fixed left-1/2 transform top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#202024]">
        <div className="w-full flex justify-between">
          <Dialog.Title className="font-bold text-2xl text-white">
            Nova Transação
          </Dialog.Title>
          <Dialog.Close>
            <X size={24} color="#ffffff" />
          </Dialog.Close>
        </div>

        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={handleSubmit(handleSubmitCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder="Descrição"
            required
            className="bg-[#121214] p-4 rounded-md text-white"
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Preço"
            className="bg-[#121214] p-4 rounded-md text-white"
            {...register("price")}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            className="bg-[#121214] p-4 rounded-md text-white"
            {...register("category")}
          />

          <div className="flex gap-2">
            <label
              htmlFor="option__one"
              className={`px-6 py-4 flex items-center justify-center cursor-pointer gap-2 text-white text-lg font-medium flex-1 rounded-md ${
                method === "entry" ? "bg-[#00875F]" : "bg-[#29292E]"
              }`}
            >
              <ArrowCircleUp size={24} color="#00B37E" /> Entrada
              <input
                type="radio"
                id="option__one"
                className="hidden"
                checked={method === "entry"}
                onChange={() => setMethod("entry")}
              />
            </label>

            <label
              htmlFor="option__two"
              className={`px-6 py-4 flex items-center justify-center cursor-pointer gap-2 text-white text-lg font-medium flex-1 rounded-md ${
                method === "outcome" ? "bg-[#67171e]" : "bg-[#29292E]"
              }`}
            >
              <ArrowCircleDown size={24} color="#F75A68" /> Saídas
              <input
                type="radio"
                id="option__two"
                className="hidden"
                checked={method === "outcome"}
                onChange={() => setMethod("outcome")}
              />
            </label>
          </div>

          <button disabled={isSubmitting} className="bg-[#00875F] px-8 py-4 rounded-md text-white font-bold">
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
