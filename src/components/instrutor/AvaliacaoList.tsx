import { Star } from 'lucide-react';
import { Avaliacao } from '@/types/instrutor';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';

interface AvaliacaoListProps {
  avaliacoes: Avaliacao[];
}

function StarRating({ nota }: { nota: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= nota
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function AvaliacaoList({ avaliacoes }: AvaliacaoListProps) {
  if (avaliacoes.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-6">
          Nenhuma avaliação ainda.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Avaliações ({avaliacoes.length})
      </h2>
      {avaliacoes.map((avaliacao) => (
        <Card key={avaliacao.id}>
          <div className="flex items-start gap-4">
            <Avatar
              src={avaliacao.alunoFoto}
              name={avaliacao.alunoNome}
              size="sm"
              alt={avaliacao.alunoNome}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  {avaliacao.alunoNome}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(avaliacao.criadoEm)}
                </span>
              </div>
              <StarRating nota={avaliacao.nota} />
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {avaliacao.comentario}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
