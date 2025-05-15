'use client';

import { useState } from 'react';
import { submeterMaterial } from '@/app/lib/handleMaterialSubmission';
import { Usuario } from '@/app/models/Usuario';
import { Disciplina } from '@/app/types/Disciplina';
import Swal from 'sweetalert2';

interface AddMaterialModalProps {
  usuario: Usuario;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export default function AddMaterialModal({
  usuario,
  onClose,
  onSubmitSuccess,
}: AddMaterialModalProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [disciplina, setDisciplina] = useState<Disciplina>('matematica');
  const [arquivo, setArquivo] = useState<File | null>(null);

  const inputStyle = "text-onyx border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (titulo === '' || descricao === '') {
      Swal.fire("Campos obrigatórios", "Por favor, preencha todos os campos.");
      return;
    }
    if (!arquivo) {
      Swal.fire("Arquivo não selecionado", "Por favor, selecione um arquivo PDF.");
      return;
    }

    const resultado = submeterMaterial(usuario, {
      titulo,
      descricao,
      tamanho: arquivo.size,
      disciplina,
      arquivo,
    });

    Swal.fire({
      title: resultado.mensagem,
      icon: resultado.icon,
    });

    if (resultado.sucesso) {
      onSubmitSuccess();
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-ghostwhite shadow-2xl shadow-black rounded-lg p-6 w-96 flex flex-col gap-4"
      >
        <h2 className="text-onyx text-lg font-bold">Adicionar Novo Material</h2>

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          className={inputStyle}
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          className={inputStyle}
        />

        <select
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value as Disciplina)}
          className={inputStyle}
        >
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="fisica">Física</option>
          <option value="quimica">Química</option>
        </select>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
          <label
            htmlFor="file"
            className="flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0l4 4m-4-4L3 8m14 4v8m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <span className="text-sm">
              Clique ou arraste o PDF aqui
            </span>
            <input
              id="file"
              type="file"
              accept="application/pdf"
              onChange={(e) => setArquivo(e.target.files?.[0] || null)}
              className="hidden"
              required
            />
          </label>
          {arquivo && (
            <p className="mt-2 text-sm text-green-700 font-medium">
              {arquivo.name}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 hover:cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 hover:cursor-pointer"
            onClick={ handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}