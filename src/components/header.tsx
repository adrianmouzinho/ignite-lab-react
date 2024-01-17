import { List } from "@phosphor-icons/react";

import logoIgniteLabImg from "../assets/logo-ignite-lab.svg";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between md:justify-center px-6 py-4 md:py-5 bg-gray-700 border-b border-gray-600">
      <img
        src={logoIgniteLabImg}
        alt="Logo do Ignite Lab React"
        className="w-[167px] md:w-[237px]"
      />

      <span className="flex items-center gap-2 text-sm md:hidden">
        Aulas
        <List size={32} className="text-blue-500" />
      </span>
    </header>
  );
}
