'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove-consulting/ui';
import { Card } from '@futuremove-consulting/ui';
import { Grid } from '@futuremove-consulting/ui';
import { Stack } from '@futuremove-consulting/ui';
import { Flex } from '@futuremove-consulting/ui';

export function SituacaoAtualTab() {
  const data = presentationData.situacao;

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

      {/* Asymmetry Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.asymmetry.title}</Heading>
          <p className="text-gray-400">{data.asymmetry.description}</p>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="bordered" className="space-y-6">
            <Heading as="h3" size="md" className="text-orange-500">{data.asymmetry.left.label}</Heading>
            <div className="space-y-4">
              {data.asymmetry.left.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="bordered" className="space-y-6">
            <Heading as="h3" size="md" className="text-red-500">{data.asymmetry.right.label}</Heading>
            <div className="space-y-4">
              {data.asymmetry.right.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </Grid>

        <div className="text-center max-w-2xl mx-auto">
          <div className="p-6 rounded-xl bg-orange-600/10 border border-orange-600/20">
            <p className="text-orange-500 font-medium text-lg italic">
              "{data.asymmetry.result}"
            </p>
          </div>
        </div>
      </section>

      {/* Market Gap Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.marketGap.title}</Heading>
          <p className="text-gray-400">{data.marketGap.description}</p>
        </div>

        <div className="relative max-w-3xl mx-auto aspect-video bg-gray-900/30 rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden">
           {/* Visual Representation of the Gap */}
           <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-8 opacity-20">
              {data.marketGap.dimensions.map((dim, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <span className="text-4xl mb-2">{dim.icon}</span>
                  <span className="text-xs font-medium uppercase text-gray-400">{dim.label}</span>
                </div>
              ))}
           </div>
           <div className="relative z-10 text-center px-6">
              <div className="w-24 h-24 rounded-full bg-orange-600/20 blur-3xl absolute -top-12 -left-12" />
              <div className="w-24 h-24 rounded-full bg-orange-600/20 blur-3xl absolute -bottom-12 -right-12" />
              <Heading as="h3" size="md" className="text-orange-500 mb-2">VAZIO ESTRATÉGICO</Heading>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{data.marketGap.emptyCenter}</p>
           </div>
        </div>
      </section>

      {/* Acceleration Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.acceleration.title}</Heading>
          <p className="text-gray-400">{data.acceleration.description}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col md:flex-row justify-between gap-8">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-800" />
            
            {data.acceleration.milestones.map((ms, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center space-y-4 z-10">
                <div className="w-6 h-6 rounded-full bg-orange-600 border-4 border-black" />
                <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl w-full">
                  <span className="text-xs text-orange-500 font-bold uppercase">{ms.date}</span>
                  <Heading as="h4" size="sm" className="mt-1 text-white">{ms.label}</Heading>
                  <p className="text-xs text-gray-400 mt-1">{ms.event}</p>
                  <p className="text-[10px] text-gray-500 mt-2 italic">{ms.implication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-blue-600/10 border border-blue-600/20">
            <p className="text-blue-400 font-medium">
              {data.acceleration.window}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
