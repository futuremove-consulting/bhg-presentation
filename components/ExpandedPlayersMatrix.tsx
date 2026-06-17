'use client';

import { MatrizPosicionamento, PlayerPosition } from './MatrizPosicionamento';
import { Heading } from '@futuremove/ui';

const extendedPlayers: PlayerPosition[] = [
  { name: 'BHG Alvo', x: 85, y: 88, color: 'bg-[#6856f5] text-[#6856f5]' },
  { name: 'Precato', x: 72, y: 65, color: 'bg-sky-500 text-sky-500' },
  { name: 'Prêambulo Bank', x: 68, y: 72, color: 'bg-emerald-500 text-emerald-500' },
  { name: 'GCB / PeerBR', x: 82, y: 55, color: 'bg-cyan-500 text-cyan-500' },
  { name: 'PrecPago', x: 58, y: 58, color: 'bg-indigo-500 text-indigo-500' },
  { name: 'BHG Atual', x: 18, y: 75, color: 'bg-purple-400 text-purple-400' },
  { name: 'Pactum Consultoria', x: 12, y: 82, color: 'bg-violet-500 text-violet-500' },
  { name: 'KPMG / Big Four', x: 35, y: 68, color: 'bg-zinc-500 text-zinc-500' },
  { name: 'JUSCREDI', x: 22, y: 55, color: 'bg-stone-500 text-stone-500' },
  { name: 'XP Litigation', x: 78, y: 28, color: 'bg-yellow-500 text-yellow-500' },
  { name: 'Nubank', x: 92, y: 12, color: 'bg-red-500 text-red-500' },
  { name: 'Inter', x: 85, y: 18, color: 'bg-rose-500 text-rose-500' },
  { name: 'Bancos Trad.', x: 88, y: 35, color: 'bg-gray-500 text-gray-500' },
  { name: 'Mercado Pago', x: 82, y: 22, color: 'bg-teal-500 text-teal-500' },
  { name: 'Litipay', x: 25, y: 22, color: 'bg-teal-400 text-teal-400' },
  { name: 'Preks', x: 18, y: 15, color: 'bg-amber-500 text-amber-500' },
  { name: 'Acura Capital', x: 28, y: 42, color: 'bg-violet-400 text-violet-400' },
  { name: 'ComPre', x: 12, y: 10, color: 'bg-stone-400 text-stone-400' },
  { name: 'Ativos Prec.', x: 32, y: 35, color: 'bg-blue-500 text-blue-500' },
  { name: 'Judit', x: 48, y: 20, color: 'bg-blue-400 text-blue-400' },
];

export function ExpandedPlayersMatrix() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Heading as="h3" size="lg" className="text-white">Matriz de Posicionamento Estendida</Heading>
        <p className="text-xs text-gray-500">20 players mapeados por integração vertical e escala operacional</p>
      </div>
      <MatrizPosicionamento
        players={extendedPlayers}
        xLabel="Escala Operacional →"
        yLabel="Integração Vertical →"
      />
    </div>
  );
}
