'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove-consulting/ui';
import { Card } from '@futuremove-consulting/ui';
import { Grid } from '@futuremove-consulting/ui';

export function RealizacaoValorTab() {
  const data = presentationData.valor;

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <Heading as="h1" size="2xl" className="mb-4 text-balance text-white">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      {/* TAM Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.tam.label}</Heading>
          <p className="text-gray-400">{data.tam.description}</p>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black border border-gray-800 rounded-2xl px-12 py-16 text-center space-y-4">
              <Heading as="h3" size="2xl" className="text-orange-500">
                {data.tam.value}
              </Heading>
              <p className="text-gray-500 text-sm uppercase tracking-widest">
                Estoque de Ativos Judiciais no Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiples Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">Dinâmica de Múltiplos de Valuation</Heading>
          <p className="text-gray-400">A transição de modelo de negócio afeta drasticamente o múltiplo de receita.</p>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.multiples.map((m, idx) => (
            <Card key={idx} variant="bordered" className="p-6 text-center space-y-4">
              <Heading as="h4" size="sm" className="text-gray-400">{m.category}</Heading>
              <div className="text-2xl font-bold text-white">{m.multiplier}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{m.example}</p>
            </Card>
          ))}
        </Grid>
      </section>

      {/* Conclusion Section */}
      <section className="max-w-3xl mx-auto text-center pb-24">
        <div className="p-12 rounded-3xl bg-white text-black">
          <Heading as="h3" size="lg" className="mb-8 text-black">
            {data.conclusion.title}
          </Heading>
          <div className="space-y-4 mb-12">
            {data.conclusion.body.map((line, idx) => (
              <p key={idx} className="text-lg font-medium leading-relaxed text-black">
                {line}
              </p>
            ))}
          </div>
          <div className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold text-lg cursor-pointer hover:bg-gray-800 transition-colors">
            {data.conclusion.cta}
          </div>
        </div>
      </section>
    </div>
  );
}
