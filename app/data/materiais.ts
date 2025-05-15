import { Material } from '@/app/models/Material';
import { professor, estudante } from './usuarios';

export const materiais: Material[] = [
    new Material('m1', 'Álgebra Básica', 'Conteúdo de álgebra', 2, professor, new Date(), 'matematica', null),
  new Material('m2', 'Gramática Avançada', 'Regras gramaticais', 1.5, professor, new Date(), 'portugues', null),
  new Material('m3', 'Equações do 1º grau', 'Exercícios resolvidos', 2, estudante, new Date(), 'matematica', null),
  new Material('m4', 'Interpretação de Texto', 'Técnicas e exemplos', 1.2, estudante, new Date(), 'portugues', null),
  new Material('m5', 'Geometria Plana', 'Teoria e prática', 1.5, professor, new Date(), 'matematica', null),
  new Material('m6', 'Ortografia Atualizada', 'Novo acordo ortográfico', 1, professor, new Date(), 'portugues', null)
]