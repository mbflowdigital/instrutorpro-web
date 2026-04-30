'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function CadastroAlunoPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push('/dashboard');
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Cadastro de Aluno</h1>
            <p className="text-sm text-gray-500 mt-1">
              Crie sua conta para encontrar instrutores
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Nome completo" placeholder="Seu nome completo" required />
            <Input label="Email" type="email" placeholder="seu@email.com" required />
            <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Cidade" placeholder="Sua cidade" required />
              <Input label="Estado" placeholder="SP" maxLength={2} required />
            </div>
            <Input label="Senha" type="password" placeholder="Mínimo 8 caracteres" required />
            <Input label="Confirmar senha" type="password" placeholder="Repita a senha" required />
            <Button type="submit" className="w-full" loading={loading}>
              Criar conta
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Já tem conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Entrar
            </Link>
          </p>
        </Card>
      </main>
      <Footer />
    </>
  );
}
