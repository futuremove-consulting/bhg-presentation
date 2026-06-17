'use client';

import { presentationData } from '@/data/presentation';
import { Heading, Card, MatrizPosicionamento } from '@futuremove/ui';

export function ContextoMercadoTab() {
  const data = presentationData.contexto;

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="section-label justify-center">Panorama Geral</div>
        <Heading as="h1" size="2xl" className="mb-6 text-white text-pretty max-w-4xl mx-auto">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      <div className="section-divider" />

      {/* Market Size Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Indicadores</div>
          <Heading as="h2" size="xl" className="text-white">{data.marketSize.title}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {data.marketSize.items.map((item, idx) => (
            <Card key={idx} variant="bordered" className="p-8">
              <div className="space-y-3">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
                <Heading as="h3" size="2xl" className="text-white">{item.value}</Heading>
                <p className="text-xs text-gray-400 italic">{item.context}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Growth Dynamics Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Crescimento</div>
          <Heading as="h2" size="xl" className="text-white">{data.growthDynamics.title}</Heading>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 text-xs uppercase text-gray-500">
                  <th className="py-4 px-4">Segmento</th>
                  <th className="py-4 px-4">Crescimento</th>
                  <th className="py-4 px-4">Observação</th>
                </tr>
              </thead>
              <tbody>
                {data.growthDynamics.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-900/50">
                    <td className="py-4 px-4 text-white font-medium">{item.segment}</td>
                    <td className="py-4 px-4 text-white font-bold">{item.growth}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{item.observation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Competitive Map Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Competição</div>
          <Heading as="h2" size="xl" className="text-white">{data.competitiveMap.title}</Heading>
          <p className="text-gray-400">{data.competitiveMap.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          <MatrizPosicionamento players={[
            { name: 'Precato', x: 72, y: 72, color: 'bg-sky-500 text-sky-500' },
            { name: 'Prêambulo Bank', x: 28, y: 25, color: 'bg-emerald-500 text-emerald-500' },
            { name: 'XP Litigation', x: 55, y: 58, color: 'bg-yellow-500 text-yellow-500' },
            { name: 'Bancos Trad.', x: 80, y: 78, color: 'bg-zinc-500 text-zinc-500' },
            { name: 'BHG Atual', x: 18, y: 78, color: 'bg-red-400 text-red-400' },
            { name: 'BHG Alvo', x: 85, y: 12, color: 'bg-[#6856f5] text-[#6856f5]' },
          ]}
          xLabel="Escala Operacional →"
          yLabel="Integração Vertical →" />

          <div className="space-y-8">
            <div className="space-y-4">
              <Heading as="h3" size="2xl" className="text-white">Insights de Posicionamento</Heading>
              <p className="text-gray-300 leading-relaxed">
                {data.competitiveMap.insight}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {data.competitiveMap.players.map((player, idx) => (
                <Card key={idx} variant="bordered" className="p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">{player.name}</span>
                    <span className="text-[10px] bg-gray-800 px-2 py-0.5 rounded text-gray-400 uppercase tracking-wider">{player.core}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                    <div className="text-gray-500">Força: <span className="text-gray-300">{player.strength}</span></div>
                    <div className="text-gray-500">Gap: <span className="text-gray-300">{player.gap}</span></div>
                    <div className="col-span-2 text-red-400/70">Risco: {player.risk}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Triggers Section */}
      <section className="py-12 space-y-12 pb-24">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Janela de Oportunidade</div>
          <Heading as="h2" size="xl" className="text-white">{data.triggers.title}</Heading>
          <p className="text-gray-400">{data.triggers.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.triggers.items.map((trigger, idx) => (
            <Card key={idx} variant="bordered" className="p-8 space-y-6">
              <div className="space-y-2">
                <Heading as="h3" size="xl" className="text-white">{trigger.title}</Heading>
                <p className="text-xs text-gray-400 italic">{trigger.implication}</p>
              </div>
              <div className="space-y-3">
                {trigger.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-gray-500">&bull;</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <Heading as="h4" size="lg" className="text-white mb-3">Janela de Oportunidade</Heading>
            <p className="text-lg text-white font-medium">{data.triggers.window}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
