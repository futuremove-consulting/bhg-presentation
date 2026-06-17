'use client';

export interface PlayerPosition {
  name: string;
  x: number;
  y: number;
  color: string;
}

export interface MatrizPosicionamentoProps {
  players: PlayerPosition[];
  xLabel?: string;
  yLabel?: string;
  className?: string;
}

export function MatrizPosicionamento({ players, xLabel = 'Escala Operacional →', yLabel = 'Integração Vertical →', className = '' }: MatrizPosicionamentoProps) {
  return (
    <div className={`relative w-full aspect-square bg-gray-900/30 rounded-3xl border border-gray-800 p-6 md:p-8 overflow-hidden ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="border-r border-b border-dashed border-gray-700/40" />
          <div className="border-b border-dashed border-gray-700/40" />
          <div className="border-r border-dashed border-gray-700/40" />
          <div />
        </div>

        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-gray-700/20" />
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-dashed border-gray-700/20" />

        <div className="absolute -left-1 md:-left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap origin-center font-medium select-none">
          {yLabel}
        </div>

        <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap font-medium select-none">
          {xLabel}
        </div>

        <div className="absolute top-2 left-2 text-[7px] md:text-[8px] text-gray-600 leading-tight select-none pointer-events-none">
          <div>Alta Integração</div>
          <div>Baixa Escala</div>
        </div>
        <div className="absolute top-2 right-2 text-[7px] md:text-[8px] text-gray-600 leading-tight text-right select-none pointer-events-none">
          <div>Alta Integração</div>
          <div>Alta Escala</div>
        </div>
        <div className="absolute bottom-2 left-2 text-[7px] md:text-[8px] text-gray-600 leading-tight select-none pointer-events-none">
          <div>Baixa Integração</div>
          <div>Baixa Escala</div>
        </div>
        <div className="absolute bottom-2 right-2 text-[7px] md:text-[8px] text-gray-600 leading-tight text-right select-none pointer-events-none">
          <div>Baixa Integração</div>
          <div>Alta Escala</div>
        </div>

        {players.map((player) => {
          const labelRight = player.x < 50;
          return (
            <div
              key={player.name}
              className="absolute group cursor-pointer"
              style={{ left: `${player.x}%`, top: `${player.y}%` }}
            >
              <div className={`w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 ring-1 ring-white/10 group-hover:ring-white/30 transition-all ${player.color}`}>
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 group-hover:opacity-30" style={{ backgroundColor: 'currentColor' }} />
              </div>
              <div className={`absolute top-full mt-2 ${labelRight ? 'left-0' : 'right-0'} opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-1 group-hover:translate-y-0`}>
                <span className="text-[9px] text-gray-300 whitespace-nowrap bg-gray-900/95 px-2 py-1 rounded-md border border-gray-800 shadow-lg font-medium">
                  {player.name}
                </span>
              </div>
              {player.name.startsWith('BHG') && (
                <div className={`absolute top-full mt-1 ${labelRight ? 'left-0' : 'right-0'}`}>
                  <span className="text-[8px] text-gray-500 whitespace-nowrap font-medium">{player.name}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
