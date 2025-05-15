import { usuarios } from "@/app/data/usuarios";
import { Usuario } from "@/app/models/Usuario";

export function autenticarUsuario(email: string, senha: string): Usuario | null {
  const usuario = usuarios.find((user) => user.email === email);
  return usuario && usuario.autenticar(senha) ? usuario : null;
}