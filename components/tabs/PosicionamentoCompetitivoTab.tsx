'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove-consulting/ui';
import { Card } from '@futuremove-consulting/ui';
import { Grid } from '@futuremove-consulting/ui';

export function PosicionamentoCompetitivoTab() {
  const data = presentationData.posicionamento;

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

      {/* SWOT Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.swot.title || 'Dinâmica Setorial'}</Heading>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-emerald-500">Forças do Mercado</Heading>
            <ul className="space-y-2">
              {data.swot.strengths.map((s, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-emerald-500">✓</span> {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-red-500">Fraquezas Estruturais</Heading>
            <ul className="space-y-2">
              {data.swot.weaknesses.map((w, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-red-500">✗</span> {w}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-blue-500">Oportunidades</Heading>
            <ul className="space-y-2">
              {data.swot.opportunities.map((o, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-blue-500">→</span> {o}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-orange-500">Ameaças</Heading>
            <ul className="space-y-2">
              {data.swot.threats.map((t, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-orange-500">!</span> {t}
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </section>

      {/* Gaps Section */}
      <section className="space-y-12 pb-24">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.gaps.title}</Heading>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.gaps.items.map((gap, idx) => (
            <Card key={idx} variant="elevated" className="p-8 space-y-4 border-l-4 border-orange-600">
              <Heading as="h3" size="md" className="text-white">{gap.title}</Heading>
              <p className="text-sm text-gray-400 leading-relaxed">{gap.description}</p>
            </Card>
          ))}
        </Grid>
      </section>
    </div>
  );
}
