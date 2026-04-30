'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { InstrutorFiltros, CategoriaHabilitacao } from '@/types/instrutor';

const CATEGORIAS: CategoriaHabilitacao[] = ['A', 'B', 'AB', 'C', 'D', 'E'];

interface FiltrosBuscaProps {
  onFiltrar: (filtros: InstrutorFiltros) => void;
  loading?: boolean;
}

export function FiltrosBusca({ onFiltrar, loading }: FiltrosBuscaProps) {
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState<CategoriaHabilitacao | ''>('');
  const [valorMax, setValorMax] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onFiltrar({
      cidade: cidade || undefined,
      estado: estado || undefined,
      categoria: (categoria as CategoriaHabilitacao) || undefined,
      valorMaximo: valorMax ? Number(valorMax) : undefined,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          label="Cidade"
          placeholder="Ex: São Paulo"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <Input
          label="Estado"
          placeholder="Ex: SP"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoria
          </label>
          <select
            value={categoria}
            onChange={(e) =>
              setCategoria(e.target.value as CategoriaHabilitacao | '')
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Todas</option>
            {CATEGORIAS.map((cat) => (
              <option key={cat} value={cat}>
                Categoria {cat}
              </option>
            ))}
          </select>
        </div>
        <Input
          label="Valor máx. (R$/hora)"
          type="number"
          placeholder="Ex: 150"
          value={valorMax}
          onChange={(e) => setValorMax(e.target.value)}
          min="0"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" loading={loading}>
          <Search className="h-4 w-4 mr-2" />
          Buscar
        </Button>
      </div>
    </form>
  );
}
