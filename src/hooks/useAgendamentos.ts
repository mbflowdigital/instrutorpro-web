'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { Agendamento, AgendamentoCriacao } from '@/types/agendamento';

export function useAgendamentos() {
  return useQuery<Agendamento[]>({
    queryKey: ['agendamentos'],
    queryFn: async () => {
      const response = await api.get('/agendamentos');
      return response.data;
    },
  });
}

export function useAgendamento(id: string) {
  return useQuery<Agendamento>({
    queryKey: ['agendamento', id],
    queryFn: async () => {
      const response = await api.get(`/agendamentos/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
}

export function useCriarAgendamento() {
  const queryClient = useQueryClient();

  return useMutation<Agendamento, Error, AgendamentoCriacao>({
    mutationFn: async (dados) => {
      const response = await api.post('/agendamentos', dados);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agendamentos'] });
    },
  });
}

export function useCancelarAgendamento() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.patch(`/agendamentos/${id}/cancelar`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agendamentos'] });
    },
  });
}
