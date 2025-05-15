import { Disciplina } from "../types/Disciplina";
import { Usuario } from "./Usuario";

export class Material {
  constructor(
    public id: string,
    public titulo: string,
    public descricao: string,
    public tamanho: number,
    public autor: Usuario,
    public dataEnvio: Date,
    public disciplina: Disciplina,
    public arquivo: File | null,
  ) {}

  validarTamanhoMaxima(): boolean {
    return this.tamanho <= 10;
  }
}