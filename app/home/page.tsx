'use client';

import { useState } from "react";
import Image from "next/image";
import lupa from "@/public/lupa.svg";
import MaterialCard from "@/app/ui/material/material-card";
import LoginModal from "@/app/components/LoginModal";
import { buscarMateriais } from "@/app/lib/handleMaterialSearch";
import { materiais } from "@/app/data/materiais";
import { useAuth } from "@/app/context/AuthContext";
import AddMaterialModal from '@/app/components/AddMaterialModal';


export default function Home() {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState(materiais);
  const [showModal, setShowModal] = useState(false);
  const [showAddMaterialModal, setShowAddMaterialModal] = useState(false);
  const { usuario } = useAuth();

  function handleSearch() {
    if (!usuario) {
      setShowModal(true);
      return;
    }
    setResultados(buscarMateriais(termo));
  }

  function handleAddMaterial() {
    if (!usuario) {
      setShowModal(true);
      return;
    }

    setShowAddMaterialModal(true);
  }

  return (
    <div className="bg-ghostwhite flex h-screen flex-col items-center justify-start">
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}

      <div className="w-full h-30 bg-antiflash flex flex-row items-center justify-center gap-2 px-4">
        <Image src={lupa} alt="Lupa" width={20} height={20} className="w-4 h-4" />
        <label htmlFor="search" className="w-1/3">
          <input
            type="text"
            id="search"
            placeholder="Pesquisar..."
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            className="w-full h-8 bg-white px-4 py-2 text-black rounded-3xl active:border-none focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <button
          onClick={handleSearch}
          className="w-24 h-8 bg-blue-500 text-white px-3 rounded-md font-bold text-sm hover:bg-blue-600 transition-colors hover:cursor-pointer"
        >
          Pesquisar
        </button>
        <button
          onClick={handleAddMaterial}
          className="w-32 h-12 bg-green-600 text-white px-3 rounded-md font-bold text-sm hover:bg-green-700 transition-colors hover:cursor-pointer"
        >
          Adicionar Material +
        </button>
      </div>
      {showAddMaterialModal && (
        <AddMaterialModal
          usuario={usuario as any}
          onClose={() => setShowAddMaterialModal(false)}
          onSubmitSuccess={() => {
            setResultados(buscarMateriais(termo));
            setShowAddMaterialModal(false);
          }}
        />
      )}
      <div className="w-full h-fit flex flex-col items-center px-4 overflow-y-auto overflow-x-clip">
        <h1 className="text-2xl font-bold text-center mb-2 mt-8 text-onyx">
          {usuario ? `Olá, ${usuario.nome}` : "Olá, visitante"}
        </h1>
        <p className="text-center text-gray-500 mb-4">Aqui estão os materiais disponíveis:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-5/6 overflow-y-auto overflow-x-clip">
          {resultados.map((mat) => (
            <MaterialCard
              key={mat.id}
              material={{
                titulo: mat.titulo,
                descricao: mat.descricao,
                autor: mat.autor,
                data: new Date().toLocaleDateString(),
                disciplina: mat.disciplina,
                arquivo: mat.arquivo,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}