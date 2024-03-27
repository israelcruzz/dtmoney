import logo from "../../assets/Ignite_icon.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../newTransactionModal";

export function Header() {
  return (
    <header className="bg-[#121214] h-[212px] py-6">
      <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
        <section className="flex gap-2 items-center justify-center">
          <img src={logo} alt="Logo image" />
          <h1 className="font-bold text-2xl text-white">DT Money</h1>
        </section>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="px-5 py-3 bg-activeItem font-bold text-base rounded-lg text-white">
              Nova transação
            </button>
          </Dialog.Trigger>

        <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  );
}
