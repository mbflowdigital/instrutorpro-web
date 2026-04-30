import { MapPin, Star, Clock, CheckCircle2 } from 'lucide-react';
import { Instrutor } from '@/types/instrutor';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatCurrency, formatRating } from '@/lib/utils';

interface InstrutorProfileProps {
  instrutor: Instrutor;
  onAgendar?: () => void;
}

export function InstrutorProfile({ instrutor, onAgendar }: InstrutorProfileProps) {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Avatar
            src={instrutor.foto}
            name={instrutor.nome}
            size="xl"
            alt={instrutor.nome}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {instrutor.nome}
              </h1>
              {instrutor.status === 'Ativo' && (
                <CheckCircle2 className="h-5 w-5 text-green-500" aria-label="Verificado pelo governo" />
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>
                {instrutor.cidade}, {instrutor.estado}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{formatRating(instrutor.nota)}</span>
              </div>
              <span className="text-gray-400">·</span>
              <span className="text-sm text-gray-600">
                {instrutor.totalAvaliacoes} avaliações
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {instrutor.categoriasHabilitacao.map((cat) => (
                <Badge key={cat} variant="primary">
                  Categoria {cat}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-gray-600 justify-end">
              <Clock className="h-4 w-4" />
              <span className="text-2xl font-bold text-gray-900">
                {formatCurrency(instrutor.valorHoraAula)}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">por hora</p>
            <Button className="mt-4 w-full sm:w-auto" onClick={onAgendar}>
              Agendar Aula
            </Button>
          </div>
        </div>
      </Card>

      {instrutor.bio && (
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Sobre</h2>
          <p className="text-gray-600 leading-relaxed">{instrutor.bio}</p>
        </Card>
      )}
    </div>
  );
}
