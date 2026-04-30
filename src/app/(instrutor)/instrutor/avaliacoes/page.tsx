import { Card } from '@/components/ui/Card';
import { Star } from 'lucide-react';

export default function InstrutorAvaliacoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Minhas Avaliações</h1>
        <p className="text-gray-500 mt-1">Veja o que seus alunos dizem sobre você</p>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Star className="h-12 w-12 mb-3" />
          <p className="font-medium text-gray-600">Nenhuma avaliação ainda</p>
          <p className="text-sm mt-1">
            As avaliações aparecerão aqui após concluir aulas com seus alunos
          </p>
        </div>
      </Card>
    </div>
  );
}
