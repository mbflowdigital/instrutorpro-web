'use client';

import { MapPin } from 'lucide-react';
import { Instrutor } from '@/types/instrutor';

interface MapaInstrutoresProps {
  instrutores: Instrutor[];
}

export function MapaInstrutores({ instrutores }: MapaInstrutoresProps) {
  return (
    <div className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-center h-64 flex-col gap-3 text-gray-500">
        <MapPin className="h-10 w-10 text-blue-400" />
        <div className="text-center">
          <p className="font-medium text-gray-700">Mapa de Instrutores</p>
          <p className="text-sm">
            {instrutores.length} instrutor
            {instrutores.length !== 1 ? 'es' : ''} na área selecionada
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Integração com mapa em breve
          </p>
        </div>
      </div>
    </div>
  );
}
