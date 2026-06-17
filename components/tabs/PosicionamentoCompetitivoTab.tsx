'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { Card } from '@futuremove/ui';
import { SWOTMatrix } from '@/components/SWOTMatrix';
import { CompetitiveLandscape } from '@/components/CompetitiveLandscape';

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

        <div className="max-w-5xl mx-auto">
          <SWOTMatrix data={data.swot} />
        </div>
      </section>

      <div className="section-divider" />

      {/* Gaps Section */}
      <section className="py-12 space-y-12">
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

      <div className="section-divider" />

      {/* Competitive Landscape Section */}
      <section className="py-12 space-y-12 pb-24">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Panorama</div>
          <Heading as="h2" size="xl" className="text-white">Panorama Competitivo</Heading>
        </div>

        <div className="max-w-7xl mx-auto">
          <CompetitiveLandscape />
        </div>
      </section>
    </div>
  );
}
