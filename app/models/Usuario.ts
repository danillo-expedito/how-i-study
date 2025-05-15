export abstract class Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    protected senhaHash: string,
  ) {}

  autenticar(senhaDigitada: string): boolean {
    return this.senhaHash === senhaDigitada;
  }
}