import { Card } from '@/components/ui/Card';
import { Calendar } from 'lucide-react';

export default function AlunoAgendamentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Meus Agendamentos</h1>
        <p className="text-gray-500 mt-1">Gerencie suas aulas agendadas</p>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Calendar className="h-12 w-12 mb-3" />
          <p className="font-medium text-gray-600">Nenhum agendamento ainda</p>
          <p className="text-sm mt-1">
            <a href="/buscar" className="text-blue-600 hover:underline">
              Encontre um instrutor
            </a>{' '}
            para agendar sua primeira aula
          </p>
        </div>
      </Card>
    </div>
  );
}
