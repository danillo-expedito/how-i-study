import { Material } from '@/app/models/Material';
import { Usuario } from '@/app/models/Usuario';
import { materiais } from '@/app/data/materiais';
import { Disciplina } from '@/app/types/Disciplina';
import { Professor } from '@/app/models/Professor';
import { Estudante } from '@/app/models/Estudante';
import { SweetAlertIcon } from 'sweetalert2';

export function submeterMaterial(
  usuario: Usuario,
  dados: {
    titulo: string;
    descricao: string;
    tamanho: number;
    disciplina: Disciplina;
    arquivo: File | null;
  }
): { sucesso: boolean; mensagem: string, icon: SweetAlertIcon } {
  if (usuario instanceof Professor) {
    const novoMaterial = new Material(
      crypto.randomUUID(),
      dados.titulo,
      dados.descricao,
      dados.tamanho,
      usuario,
      new Date(),
      dados.disciplina,
      dados.arquivo
    );
    materiais.push(novoMaterial);
    return { sucesso: true, mensagem: 'Material enviado com sucesso!', icon: 'success' };
  } else if (usuario instanceof Estudante) {
    return { sucesso: true, mensagem: 'Material enviado para Revisão!', icon: 'info' };
  } else {
    return { sucesso: false, mensagem: 'Usuário inválido!', icon: 'error' };
  }
}