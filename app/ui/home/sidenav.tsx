import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavLinks from "./nav-links";
import clsx from "clsx";
import configIcon from "@/public/config.svg";
import userIcon from "@/public/user.svg";

export default function SideNav() {

  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-antiflash gap-4 p-4">
      <Image
        src={ logo }
        alt="Logo"
        width={140}
        height={140}
      />
      <div className="w-full">
        <NavLinks />
      </div>
      <div className="flex flex-col w-full justify-center h-64 gap-2">
        <Link
            href="/home/configuracoes"
            className=
              'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-black text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
            >
            <Image
              src={configIcon}
              alt='Icon'
              width={24}
              height={24}
              />
            <p className="hidden md:block">Configurações</p>
          </Link>
          <Link
            href="/home/perfil"
            className=
              'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-black text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
            >
            <Image
              src={userIcon}
              alt='Icon'
              width={24}
              height={24}
              />
            <p className="hidden md:block">Perfil</p>
          </Link>
      </div>
    </div>
  );
}