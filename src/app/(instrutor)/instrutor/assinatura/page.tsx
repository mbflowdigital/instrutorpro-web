import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const planos = [
  {
    nome: 'Mensal',
    preco: 'R$ 49',
    periodo: '/mês',
    descricao: 'Ideal para começar',
    recursos: [
      'Perfil visível nas buscas',
      'Agendamentos ilimitados',
      'Dashboard de desempenho',
      'Suporte por email',
    ],
  },
  {
    nome: 'Semestral',
    preco: 'R$ 39',
    periodo: '/mês',
    descricao: 'Economize 20%',
    destaque: true,
    recursos: [
      'Tudo do plano Mensal',
      'Destaque nas buscas',
      'Badge de instrutor verificado',
      'Suporte prioritário',
    ],
  },
  {
    nome: 'Anual',
    preco: 'R$ 29',
    periodo: '/mês',
    descricao: 'Melhor custo-benefício',
    recursos: [
      'Tudo do plano Semestral',
      'Posição no topo das buscas',
      'Relatórios avançados',
      'Suporte por WhatsApp',
    ],
  },
];

export default function InstrutorAssinaturaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assinatura</h1>
        <p className="text-gray-500 mt-1">
          Escolha o plano que melhor se adapta ao seu perfil
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planos.map((plano) => (
          <Card
            key={plano.nome}
            className={plano.destaque ? 'border-blue-500 ring-2 ring-blue-500' : ''}
          >
            {plano.destaque && (
              <div className="flex justify-center mb-3">
                <Badge variant="primary">Mais popular</Badge>
              </div>
            )}
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">{plano.nome}</h2>
              <p className="text-sm text-gray-500">{plano.descricao}</p>
              <div className="mt-3">
                <span className="text-4xl font-black text-gray-900">{plano.preco}</span>
                <span className="text-gray-500 text-sm">{plano.periodo}</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {plano.recursos.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <Button
              variant={plano.destaque ? 'primary' : 'outline'}
              className="w-full"
            >
              Assinar {plano.nome}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
