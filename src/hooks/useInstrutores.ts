'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Instrutor, InstrutorFiltros } from '@/types/instrutor';

export function useInstrutores(filtros?: InstrutorFiltros) {
  return useQuery<Instrutor[]>({
    queryKey: ['instrutores', filtros],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filtros?.cidade) params.set('cidade', filtros.cidade);
      if (filtros?.estado) params.set('estado', filtros.estado);
      if (filtros?.categoria) params.set('categoria', filtros.categoria);
      if (filtros?.valorMinimo !== undefined)
        params.set('valorMinimo', String(filtros.valorMinimo));
      if (filtros?.valorMaximo !== undefined)
        params.set('valorMaximo', String(filtros.valorMaximo));
      if (filtros?.notaMinima !== undefined)
        params.set('notaMinima', String(filtros.notaMinima));

      const response = await api.get(`/instrutores?${params.toString()}`);
      return response.data;
    },
  });
}

export function useInstrutor(id: string) {
  return useQuery<Instrutor>({
    queryKey: ['instrutor', id],
    queryFn: async () => {
      const response = await api.get(`/instrutores/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
}
