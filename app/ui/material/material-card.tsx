import { Material } from "@/app/models/Material";
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
    <div className="bg-white rounded-2xl shadow p-4 w-80">
      <h2 className="text-xl font-bold text-onyx">{material.titulo}</h2>
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
      <div className="flex justify-end mt-4"></div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
          Visualizar
        </button>
    </div>
  );
}