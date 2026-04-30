export interface Aluno {
  id: string;
  nome: string;
  email: string;
  foto?: string;
  telefone?: string;
  cidade: string;
  estado: string;
  criadoEm: string;
}

export interface AlunoCadastro {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  cidade: string;
  estado: string;
}
