'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FiltrosBusca } from '@/components/busca/FiltrosBusca';
import { MapaInstrutores } from '@/components/busca/MapaInstrutores';
import { InstrutorCard } from '@/components/instrutor/InstrutorCard';
import { useInstrutores } from '@/hooks/useInstrutores';
import { InstrutorFiltros } from '@/types/instrutor';

export default function BuscarPage() {
  const [filtros, setFiltros] = useState<InstrutorFiltros>({});
  const { data: instrutores = [], isLoading } = useInstrutores(filtros);

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Encontre Instrutores
            </h1>
            <p className="text-gray-500 mt-1">
              Encontre instrutores credenciados na sua cidade
            </p>
          </div>

          <FiltrosBusca onFiltrar={setFiltros} loading={isLoading} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200" />
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4" />
                          <div className="h-3 bg-gray-200 rounded w-1/2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : instrutores.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">
                    Nenhum instrutor encontrado com os filtros selecionados.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {instrutores.map((instrutor) => (
                    <InstrutorCard key={instrutor.id} instrutor={instrutor} />
                  ))}
                </div>
              )}
            </div>
            <div>
              <MapaInstrutores instrutores={instrutores} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
