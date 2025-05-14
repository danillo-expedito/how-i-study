import Image from "next/image";
import lupa from "@/public/lupa.svg";

export default function Home() {
  return (
      <div className="bg-ghostwhite flex h-screen flex-col items-center justify-center">
        <div className="w-2/5 h-8 flex items-center justify-center gap-2 mb-4">
          <Image
            src={ lupa }
            alt="Lupa"
            width={20}
            height={20}
            className="relative w-4 h-4 "
          />
          <label htmlFor="search" className="relative w-full h-full">
            <input type="text" id="search" placeholder="Pesquisar..."
            className="w-full h-full bg-white px-4 py-2 text-black rounded-3xl hover:cursor-text"  />
          </label>
          <button className="w-64 h-full bg-blue-500 text-white px-2 rounded-md font-bold text-sm hover:cursor-pointer">
            Adicionar Material +
          </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      </div>
  );
}