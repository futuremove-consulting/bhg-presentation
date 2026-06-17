'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { Card } from '@futuremove/ui';
import { ModelsComparison } from '@/components/ModelsComparison';
import { ValuationComparison } from '@/components/ValuationComparison';

export function CenariosModeloTab() {
  const data = presentationData.modelos;

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="section-label justify-center">Cenários</div>
        <Heading as="h1" size="2xl" className="mb-6 text-balance text-white max-w-4xl mx-auto">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      <div className="section-divider" />

      {/* Models Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Arquétipos</div>
          <Heading as="h2" size="xl" className="text-white">Três Arquétipos Estratégicos</Heading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {data.models.map((model) => (
            <Card key={model.id} variant="elevated" className="flex flex-col h-full p-10">
              <div className="space-y-4 mb-8">
                <Heading as="h3" size="2xl" className="text-white">
                  {model.name}
                </Heading>
                <p className="text-sm text-gray-400 min-h-[3rem] leading-relaxed">
                  {model.subtitle}
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Foco</span>
                    <span className="text-white font-medium">{model.focus}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Ticket</span>
                    <span className="text-white font-medium">{model.ticket}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Volume</span>
                    <span className="text-white font-medium">{model.volume}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Receita</span>
                    <span className="text-white font-medium">{model.revenue}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Margem</span>
                    <span className="text-white font-medium">{model.margin}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">CAC</span>
                    <span className="text-white font-medium">{model.cac}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Valuation</span>
                    <span className="text-white font-bold">{model.valuation}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider">Risco</span>
                    <span className="text-red-400">{model.risk}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <Heading as="h4" size="md" className="text-white mb-2">Quando escolher:</Heading>
                <div className="space-y-2">
                  {model.whenToChoose.map((item, idx) => (
                    <p key={idx} className={`text-xs leading-relaxed ${item.type === 'cons' ? 'text-red-400' : 'text-gray-400'}`}>
                      {item.type === 'pros' ? '&#10003; ' : '&#10007; '} {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Models Comparison Table */}
      <section className="py-12 space-y-12">
        <div className="max-w-6xl mx-auto">
          <ModelsComparison models={data.models} />
        </div>
      </section>

      <div className="section-divider" />

      {/* Valuation Comparison */}
      <section className="py-12 space-y-12">
        <div className="max-w-5xl mx-auto">
          <ValuationComparison models={data.models} />
        </div>
      </section>

      <div className="section-divider" />

      {/* Conclusion Section */}
      <section className="max-w-3xl mx-auto text-center pb-24">
        <div className="p-10 rounded-2xl bg-gray-900/50 border border-gray-800">
          <Heading as="h3" size="2xl" className="mb-4 text-white">
            {data.conclusion}
          </Heading>
          <p className="text-gray-400 text-sm">
            Cada caminho traz trade-offs de risco, retorno e escala. A escolha deve alinhar sua visão de longo prazo com a capacidade de execução atual.
          </p>
        </div>
      </section>
    </div>
  );
}
