'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, senha);
      router.push('/dashboard');
    } catch {
      setError('Email ou senha inválidos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Entrar</h1>
            <p className="text-sm text-gray-500 mt-1">
              Acesse sua conta no InstrutorPro
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" loading={loading}>
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Não tem conta?{' '}
            <Link href="/cadastro" className="text-blue-600 hover:underline font-medium">
              Cadastre-se
            </Link>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
