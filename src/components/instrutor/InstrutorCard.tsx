import Link from 'next/link';
import { MapPin, Star, Clock } from 'lucide-react';
import { Instrutor } from '@/types/instrutor';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatCurrency, formatRating } from '@/lib/utils';

interface InstrutorCardProps {
  instrutor: Instrutor;
}

export function InstrutorCard({ instrutor }: InstrutorCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar
          src={instrutor.foto}
          name={instrutor.nome}
          size="lg"
          alt={instrutor.nome}
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {instrutor.nome}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">
              {instrutor.cidade}, {instrutor.estado}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-gray-900">
              {formatRating(instrutor.nota)}
            </span>
            <span className="text-xs text-gray-500">
              ({instrutor.totalAvaliacoes} avaliações)
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {instrutor.categoriasHabilitacao.map((cat) => (
          <Badge key={cat} variant="primary">
            Categoria {cat}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>
            <span className="font-semibold text-gray-900">
              {formatCurrency(instrutor.valorHoraAula)}
            </span>
            /hora
          </span>
        </div>
        <Link href={`/instrutor/${instrutor.id}`}>
          <Button size="sm">Ver perfil</Button>
        </Link>
      </div>
    </Card>
  );
}
