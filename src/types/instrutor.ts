export type CategoriaHabilitacao = 'A' | 'B' | 'AB' | 'C' | 'D' | 'E';

export interface Instrutor {
  id: string;
  nome: string;
  foto?: string;
  bio?: string;
  cidade: string;
  estado: string;
  categoriasHabilitacao: CategoriaHabilitacao[];
  valorHoraAula: number;
  nota: number;
  totalAvaliacoes: number;
  status: 'Ativo' | 'Pendente' | 'Inativo';
}

export interface Avaliacao {
  id: string;
  instrutorId: string;
  alunoId: string;
  alunoNome: string;
  alunoFoto?: string;
  nota: number;
  comentario: string;
  criadoEm: string;
}

export interface InstrutorFiltros {
  cidade?: string;
  estado?: string;
  categoria?: CategoriaHabilitacao;
  valorMinimo?: number;
  valorMaximo?: number;
  notaMinima?: number;
}
