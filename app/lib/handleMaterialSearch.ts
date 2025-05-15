import { materiais } from "@/app/data/materiais";
import Swal from "sweetalert2";

export function buscarMateriais(termo: string) {
  const termoLower = termo.toLowerCase();

  if (!termoLower) {
    return materiais;
  }

  if (termoLower.length < 2) {
    Swal.fire({
      icon: "warning",
      title: "Atenção",
      text: "O termo de busca deve ter pelo menos 2 caracteres.",
      confirmButtonText: "OK",
      confirmButtonColor: "#4F46E5",
      backdrop: true,
      background: "#F3F4F6",
      color: "#111827",})
  }

  return materiais.filter((material) => 
  material.titulo.toLowerCase().includes(termoLower) ||
  material.descricao.toLowerCase().includes(termoLower) ||
  material.autor.nome.toLowerCase().includes(termoLower) ||
  material.disciplina.toLowerCase().includes(termoLower)
  );
}