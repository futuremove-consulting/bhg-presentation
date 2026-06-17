'use client';

import { presentationData } from '@/data/presentation';
import { Heading, Card, MatrizPosicionamento } from '@futuremove/ui';
import { ExpandedPlayersMatrix } from '@/components/ExpandedPlayersMatrix';
import { MarketGrowthChart } from '@/components/MarketGrowthChart';

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
          <div className="section-label justify-center">Dinâmica de Crescimento</div>
          <Heading as="h2" size="xl" className="text-white">{data.growthDynamics.title}</Heading>
        </div>

        <div className="max-w-5xl mx-auto">
          <MarketGrowthChart title="" items={data.growthDynamics.items} />
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
          <ExpandedPlayersMatrix />

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
