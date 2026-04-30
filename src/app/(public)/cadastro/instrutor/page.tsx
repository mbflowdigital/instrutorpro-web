'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CategoriaHabilitacao } from '@/types/instrutor';

const CATEGORIAS: CategoriaHabilitacao[] = ['A', 'B', 'AB', 'C', 'D', 'E'];

export default function CadastroInstrutorPage() {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<CategoriaHabilitacao[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function toggleCategoria(cat: CategoriaHabilitacao) {
    setCategoriasSelecionadas((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push('/instrutor/dashboard');
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Cadastro de Instrutor</h1>
            <p className="text-sm text-gray-500 mt-1">
              Preencha seus dados para começar a receber alunos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Nome completo" placeholder="Seu nome completo" required />
            <Input label="Email" type="email" placeholder="seu@email.com" required />
            <Input label="CPF" placeholder="000.000.000-00" required />
            <Input
              label="Número do credenciamento Detran"
              placeholder="Ex: SP-123456"
              hint="Será verificado automaticamente via API do governo"
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Cidade" placeholder="Sua cidade" required />
              <Input label="Estado" placeholder="SP" maxLength={2} required />
            </div>
            <Input
              label="Valor por hora (R$)"
              type="number"
              placeholder="Ex: 80"
              min="0"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categorias que leciona
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIAS.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategoria(cat)}
                    className="focus:outline-none"
                  >
                    <Badge
                      variant={categoriasSelecionadas.includes(cat) ? 'primary' : 'outline'}
                      className="cursor-pointer text-sm px-3 py-1"
                    >
                      Categoria {cat}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <Input label="Senha" type="password" placeholder="Mínimo 8 caracteres" required />
            <Input label="Confirmar senha" type="password" placeholder="Repita a senha" required />
            <Button type="submit" className="w-full" loading={loading}>
              Cadastrar e verificar credenciamento
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
