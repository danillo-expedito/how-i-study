import { Estudante } from "../models/Estudante";
import { Professor } from "../models/Professor";

export const estudante = new Estudante(
  '1',
  'Joanna Santos',
  'joanna@email.com',
  '12345',
);

export const professor = new Professor(
  '2',
  'João Almeida',
  'joao@email.com',
  '12345',
);

export const usuarios = [estudante, professor];