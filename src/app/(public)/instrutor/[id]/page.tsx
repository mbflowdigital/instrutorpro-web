'use client';

import { use } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InstrutorProfile } from '@/components/instrutor/InstrutorProfile';
import { AvaliacaoList } from '@/components/instrutor/AvaliacaoList';
import { useInstrutor } from '@/hooks/useInstrutores';
import { Avaliacao } from '@/types/instrutor';

const mockAvaliacoes: Avaliacao[] = [];

export default function InstrutorPerfilPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: instrutor, isLoading, isError } = useInstrutor(id);

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse space-y-6">
              <div className="bg-white rounded-xl p-6 h-40" />
              <div className="bg-white rounded-xl p-6 h-24" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (isError || !instrutor) {
    return (
      <>
        <Header />
        <main className="flex-1 bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500">Instrutor não encontrado.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <InstrutorProfile instrutor={instrutor} />
          <AvaliacaoList avaliacoes={mockAvaliacoes} />
        </div>
      </main>
      <Footer />
    </>
  );
}
