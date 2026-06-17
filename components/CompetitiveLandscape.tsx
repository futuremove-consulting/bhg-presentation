'use client';

import { Heading } from '@futuremove/ui';

interface QuadrantPlayer {
  name: string;
  focus: string;
  strength: string;
  gap: string;
}

interface QuadrantData {
  id: string;
  label: string;
  x: string;
  y: string;
  color: string;
  players: QuadrantPlayer[];
  description: string;
}

export function CompetitiveLandscape() {
  const quadrants: QuadrantData[] = [
    {
      id: 'q1',
      label: 'Líderes de Nicho',
      x: 'Alta Integração',
      y: 'Baixa Escala',
      color: 'border-purple-900/40',
      description: 'Players com profunda especialização vertical, mas sem escala operacional.',
      players: [
        { name: 'BHG Atual', focus: 'Jurídico + Tributário', strength: 'Especialização 30y', gap: 'Sem plataforma digital' },
        { name: 'Pactum Consultoria', focus: 'Tributário', strength: 'Expertise reforma', gap: 'Sem financeiro' },
        { name: 'KPMG / Big Four', focus: 'Consultoria', strength: 'Marca e alcance', gap: 'Sem operação financeira' },
        { name: 'JUSCREDI', focus: 'Securitização', strength: '13+ anos', gap: 'Sem tecnologia' },
      ],
    },
    {
      id: 'q2',
      label: 'Players Emergentes',
      x: 'Alta Integração',
      y: 'Alta Escala',
      color: 'border-emerald-900/40',
      description: 'Players que combinam profundidade de serviço com capacidade de escala.',
      players: [
        { name: 'Precato', focus: 'Fintech + FIDCs', strength: 'R$ 1,5B intermediado', gap: 'Sem tributária integrada' },
        { name: 'Prêambulo Bank', focus: 'Banco + Software', strength: '1M+ advogados', gap: 'Sem financeira/tributária' },
        { name: 'GCB / PeerBR', focus: 'Holding Fintech', strength: 'R$ 3B crédito', gap: 'Sem jurídico próprio' },
        { name: 'PrecPago', focus: 'Antecipação + Banco', strength: 'R$ 500M + Mercantil', gap: 'Sem tributária' },
      ],
    },
    {
      id: 'q3',
      label: 'Inovadores Disruptivos',
      x: 'Baixa Integração',
      y: 'Baixa Escala',
      color: 'border-amber-900/40',
      description: 'Novos entrantes com modelos inovadores, ainda em escala inicial.',
      players: [
        { name: 'Litipay', focus: 'Microcrédito judicial', strength: 'Ticket R$ 2K+', gap: 'Capital limitado' },
        { name: 'Preks', focus: 'Marketplace blockchain', strength: 'Inovação tecnológica', gap: 'Sem escala' },
        { name: 'Acura Capital', focus: 'Tokenização R$ 1B', strength: 'Maior tokenização AL', gap: 'Sem originação' },
        { name: 'ComPre', focus: 'Marketplace puro', strength: 'Modelo leve', gap: 'Sem posição de risco' },
      ],
    },
    {
      id: 'q4',
      label: 'Gigantes de Escala',
      x: 'Baixa Integração',
      y: 'Alta Escala',
      color: 'border-blue-900/40',
      description: 'Players com enorme base de clientes, mas sem penetração vertical no setor.',
      players: [
        { name: 'Nubank / Inter', focus: 'Neobanks', strength: '100M+ clientes', gap: 'Sem especialização' },
        { name: 'XP Investimentos', focus: 'Fundos de litígio', strength: 'Distribuição massiva', gap: 'Sem originação própria' },
        { name: 'Bancos Tradicionais', focus: 'Corporate banking', strength: 'Capital ilimitado', gap: 'Sem velocidade' },
        { name: 'Mercado Pago', focus: 'Fintech embedded', strength: '30M clientes', gap: 'Sem jurídico' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Heading as="h3" size="lg" className="text-white text-center">Panorama Competitivo por Quadrante</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quadrants.map((q) => (
          <div key={q.id} className={`border ${q.color} rounded-xl bg-gray-900/20 p-5 space-y-3`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">{q.label}</span>
              <span className="text-[9px] text-gray-600 uppercase tracking-wider">{q.x} · {q.y}</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed">{q.description}</p>
            <div className="space-y-2">
              {q.players.map((p) => (
                <div key={p.name} className="flex items-center justify-between text-[11px] border-b border-gray-800/50 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
                    <span className="text-gray-300 font-medium">{p.name}</span>
                  </div>
                  <div className="flex gap-3 text-[10px] text-gray-500">
                    <span>{p.strength}</span>
                    <span className="text-gray-600">|</span>
                    <span className="text-gray-500">{p.gap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
