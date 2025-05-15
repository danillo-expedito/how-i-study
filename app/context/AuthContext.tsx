'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { professor, estudante } from '../data/usuarios';
import { Usuario } from '@/app/models/Usuario';

type AuthContextType = {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  function login(usuario: Usuario) {
    setUsuario(usuario);
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}