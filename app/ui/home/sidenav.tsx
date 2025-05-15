'use client';

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavLinks from "./nav-links";
import configIcon from "@/public/config.svg";
import userIcon from "@/public/user.svg";
import { useAuth } from "@/app/context/AuthContext";

export default function SideNav() {
  const { usuario } = useAuth();

  const nomeUsuario = usuario
    ? usuario.nome
        .split(" ")
        .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
        .join(" ")
    : null;

  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-glaucous gap-4 p-4">
      <Image
        src={logo}
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
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-black text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3"
        >
          <Image
            src={configIcon}
            alt="Icon"
            width={24}
            height={24}
          />
          <p className="hidden md:block">Configurações</p>
        </Link>

        <Link
          href="/home/perfil"
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-black text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3"
        >
          <Image
            src={userIcon}
            alt="Icon"
            width={24}
            height={24}
          />
          <p className="hidden md:block">
            {usuario ? nomeUsuario : "Perfil"}
          </p>
        </Link>
      </div>
    </div>
  );
}