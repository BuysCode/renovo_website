import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-around h-20 top-0 sticky border-b border-gray-700">
      <Image
        src={"/logo.png"}
        alt={"Logo da Renovo"}
        width={100}
        height={100}
      />
      <nav>
        <ul className="flex flex-row space-x-4">
          <li><Link className="text-gray-400 hover:text-white" href="#about">Servidores</Link></li>
          <li><Link className="text-gray-400 hover:text-white" href="#services">Minecraft</Link></li>
          <li><Link className="text-gray-400 hover:text-white" href="#contact">Websites</Link></li>
        </ul>
      </nav>
      <div className="flex flex-row space-x-4">
        <Button className="text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4" variant="secondary">Painel do Cliente</Button>
        <Button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xs sm:text-sm px-2 text-black sm:px-4 font-bold" variant="default">Flash Deals</Button>
      </div>
    </header>
  );
}
