'use client';

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { autenticarUsuario } from "@/app/lib/auth";

type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const inputStyle = "text-onyx border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const usuario = autenticarUsuario(email, senha);

    if (usuario) {
      login(usuario);
      onClose();
    } else {
      setErro("E-mail ou senha inválidos.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-onyx text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={inputStyle}
            required
          />
          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors hover:cursor-pointer"
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-600 hover:underline text-center mt-2 hover:cursor-pointer"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}