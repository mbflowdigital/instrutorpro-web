import { Card } from '@/components/ui/Card';
import { Calendar } from 'lucide-react';

export default function InstrutorAgendamentosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Agendamentos</h1>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Calendar className="h-12 w-12 mb-3" />
          <p className="font-medium text-gray-600">Nenhum agendamento ainda</p>
          <p className="text-sm mt-1">
            Complete seu perfil para aparecer nas buscas e receber alunos
          </p>
        </div>
      </Card>
    </div>
  );
}
