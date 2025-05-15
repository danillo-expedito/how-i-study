import { Usuario } from "@/app/models/Usuario";
import { Disciplina } from "@/app/types/Disciplina";

interface Props {
  material: {
    titulo: string;
    descricao: string;
    autor: Usuario;
    data: string;
    disciplina: Disciplina;
    arquivo: File | null;
  };
};


export default function MaterialCard({ material }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col w-full">
      <h2 className="text-xl font-bold text-onyx">{material.titulo}</h2>
      <div className="flex flex-col justify-between h-full">
        <p className="text-sm text-gray-600 mb-2">{material.descricao}</p>
        <div className="text-xs text-gray-500">
          <p><strong>Disciplina:</strong> {material.disciplina}</p>
          <p><strong>Autor:</strong> {material.autor.nome}</p>
        </div>
        <p className="text-xs text-gray-500 mb-2">
          <strong>Data:</strong> {new Date(material.data).toLocaleDateString()}
        </p>
        {material.arquivo && (
          <a
            href={URL.createObjectURL(material.arquivo)}
            download={material.arquivo.name}
            className="text-blue-500 hover:underline"
          >
            Baixar Arquivo
          </a>
        )}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer justify-self-end mt-4">
        Visualizar
      </button>
    </div>
  );
}