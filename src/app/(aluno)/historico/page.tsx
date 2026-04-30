import { Card } from '@/components/ui/Card';
import { History } from 'lucide-react';

export default function AlunoHistoricoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Histórico de Aulas</h1>
        <p className="text-gray-500 mt-1">Veja todas as suas aulas concluídas</p>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <History className="h-12 w-12 mb-3" />
          <p className="font-medium text-gray-600">Nenhuma aula concluída</p>
          <p className="text-sm mt-1">Seu histórico aparecerá aqui após concluir aulas</p>
        </div>
      </Card>
    </div>
  );
}
