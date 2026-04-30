import { Instrutor } from './instrutor';
import { Aluno } from './aluno';

export type StatusAgendamento =
  | 'Pendente'
  | 'Confirmado'
  | 'Cancelado'
  | 'Concluido';

export interface Agendamento {
  id: string;
  instrutorId: string;
  alunoId: string;
  instrutor?: Instrutor;
  aluno?: Aluno;
  dataHora: string;
  duracaoHoras: number;
  valorTotal: number;
  status: StatusAgendamento;
  observacoes?: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface AgendamentoCriacao {
  instrutorId: string;
  dataHora: string;
  duracaoHoras: number;
  observacoes?: string;
}
