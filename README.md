# InstrutorPro Web 🚗

Frontend web da plataforma **InstrutorPro** — conecta alunos a instrutores de CNH autônomos credenciados pelo governo.

## Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 14+ (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| @tanstack/react-query | 5 |
| axios | 1 |
| zustand | 5 |
| next-auth | 4 |
| lucide-react | latest |

## Pré-requisitos

- Node.js 20+
- npm 10+

## Rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/mbflowdigital/instrutorpro-web.git
cd instrutorpro-web

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | URL base da API backend | `http://localhost:5000` |
| `NEXTAUTH_SECRET` | Secret para NextAuth (JWT) | string aleatória segura |
| `NEXTAUTH_URL` | URL da aplicação web | `http://localhost:3000` |
| `GOOGLE_CLIENT_ID` | ID do cliente OAuth Google | opcional |
| `GOOGLE_CLIENT_SECRET` | Secret do cliente OAuth Google | opcional |

## Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm start        # Servidor de produção
npm run lint     # Linting com ESLint
```

## Estrutura do projeto

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/           # Rotas públicas (sem autenticação)
│   │   ├── page.tsx        # Landing page
│   │   ├── buscar/         # Busca de instrutores
│   │   ├── instrutor/[id]/ # Perfil público do instrutor
│   │   ├── login/          # Login
│   │   └── cadastro/       # Cadastro (aluno ou instrutor)
│   ├── (aluno)/            # Área do aluno (autenticado)
│   │   ├── dashboard/
│   │   ├── agendamentos/
│   │   └── historico/
│   ├── (instrutor)/        # Área do instrutor (autenticado)
│   │   ├── dashboard/
│   │   ├── perfil/
│   │   ├── agendamentos/
│   │   ├── assinatura/
│   │   └── avaliacoes/
│   ├── layout.tsx          # Root layout
│   └── globals.css
│
├── components/
│   ├── ui/                 # Componentes base
│   ├── layout/             # Header, Footer, Sidebar
│   ├── instrutor/          # Componentes de instrutor
│   └── busca/              # Componentes de busca
│
├── lib/
│   ├── api.ts              # Axios com base URL configurada
│   ├── auth.ts             # Configuração NextAuth
│   └── utils.ts            # Utilitários (formatCurrency, formatDate, etc.)
│
├── hooks/                  # React Query hooks
├── types/                  # TypeScript interfaces
└── store/                  # Zustand stores
```

## Repositórios relacionados

- [instrutorpro-api](https://github.com/mbflowdigital/instrutorpro-api) — Backend ASP.NET Core
- [instrutorpro-mobile](https://github.com/mbflowdigital/instrutorpro-mobile) — App React Native + Expo

## Licença

Proprietário — © 2026 MBFlow Digital
