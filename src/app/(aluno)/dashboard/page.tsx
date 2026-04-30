import { Card, CardTitle } from '@/components/ui/Card';
import { Calendar, Clock, Star } from 'lucide-react';

export default function AlunoDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Meu Dashboard</h1>
        <p className="text-gray-500 mt-1">Bem-vindo ao InstrutorPro!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle>0</CardTitle>
              <p className="text-sm text-gray-500">Agendamentos</p>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <CardTitle>0h</CardTitle>
              <p className="text-sm text-gray-500">Horas de aula</p>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <CardTitle>-</CardTitle>
              <p className="text-sm text-gray-500">Instrutores favoritos</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <p className="text-gray-500 text-center py-6">
          Você ainda não tem agendamentos.{' '}
          <a href="/buscar" className="text-blue-600 hover:underline font-medium">
            Busque um instrutor
          </a>{' '}
          para começar!
        </p>
      </Card>
    </div>
  );
}
