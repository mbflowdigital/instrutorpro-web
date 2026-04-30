import { Card, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eye, Calendar, Star, DollarSign } from 'lucide-react';

export default function InstrutorDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meu Dashboard</h1>
          <p className="text-gray-500 mt-1">Acompanhe seu desempenho</p>
        </div>
        <Badge variant="success">Ativo</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Eye, label: 'Visualizações', value: '0', bg: 'bg-blue-100', fg: 'text-blue-600' },
          { icon: Calendar, label: 'Agendamentos', value: '0', bg: 'bg-green-100', fg: 'text-green-600' },
          { icon: Star, label: 'Nota média', value: '-', bg: 'bg-yellow-100', fg: 'text-yellow-600' },
          { icon: DollarSign, label: 'Receita (mês)', value: 'R$ 0', bg: 'bg-purple-100', fg: 'text-purple-600' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} padding="md">
              <div className="flex items-center gap-3">
                <div className={`${stat.bg} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${stat.fg}`} />
                </div>
                <div>
                  <CardTitle>{stat.value}</CardTitle>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card>
        <h2 className="font-semibold text-gray-900 mb-4">Próximos Agendamentos</h2>
        <p className="text-gray-500 text-center py-4">
          Nenhum agendamento pendente.
        </p>
      </Card>
    </div>
  );
}
