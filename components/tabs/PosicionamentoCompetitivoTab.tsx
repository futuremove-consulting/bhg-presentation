'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { Card } from '@futuremove/ui';

export function PosicionamentoCompetitivoTab() {
  const data = presentationData.posicionamento;

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="section-label justify-center">Análise Setorial</div>
        <Heading as="h1" size="2xl" className="mb-6 text-balance text-white max-w-4xl mx-auto">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      <div className="section-divider" />

      {/* SWOT Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Forças Estruturais</div>
          <Heading as="h2" size="xl" className="text-white">{data.swot.title || 'Dinâmica Setorial'}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="xl" className="text-emerald-500">Forças do Mercado</Heading>
            <ul className="space-y-2">
              {data.swot.strengths.map((s, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-emerald-500">&#10003;</span> {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="xl" className="text-red-500">Fraquezas Estruturais</Heading>
            <ul className="space-y-2">
              {data.swot.weaknesses.map((w, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-red-500">&#10007;</span> {w}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="xl" className="text-blue-500">Oportunidades</Heading>
            <ul className="space-y-2">
              {data.swot.opportunities.map((o, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-blue-500">&rarr;</span> {o}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="xl" className="text-orange-500">Ameaças</Heading>
            <ul className="space-y-2">
              {data.swot.threats.map((t, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-orange-500">!</span> {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <div className="section-divider" />

      {/* Gaps Section */}
      <section className="py-12 space-y-12 pb-24">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Lacunas</div>
          <Heading as="h2" size="xl" className="text-white">{data.gaps.title}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.gaps.items.map((gap, idx) => (
            <Card key={idx} variant="elevated" className="p-8 space-y-4">
              <Heading as="h3" size="xl" className="text-white">{gap.title}</Heading>
              <p className="text-sm text-gray-400 leading-relaxed">{gap.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
