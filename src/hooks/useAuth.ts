'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';

export function useAuth() {
  const { user, token, isAuthenticated, setAuth, clearAuth } = useAuthStore();
  const router = useRouter();

  async function login(email: string, senha: string) {
    const result = await signIn('credentials', {
      email,
      senha,
      redirect: false,
    });

    if (result?.error) {
      throw new Error('Credenciais inválidas');
    }

    return result;
  }

  async function logout() {
    clearAuth();
    await signOut({ redirect: false });
    router.push('/login');
  }

  function isInstrutor() {
    return user?.role === 'instrutor';
  }

  function isAluno() {
    return user?.role === 'aluno';
  }

  function isAdmin() {
    return user?.role === 'admin';
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    setAuth,
    isInstrutor,
    isAluno,
    isAdmin,
  };
}
