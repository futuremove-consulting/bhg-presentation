'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove-consulting/ui';
import { Card } from '@futuremove-consulting/ui';
import { Grid } from '@futuremove-consulting/ui';

export function VantagensSustentaveisTab() {
  const data = presentationData.vantagens;

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

      {/* Moats Grid Section */}
      <section className="space-y-12">
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.moats.map((moat) => (
            <Card key={moat.id} variant="bordered" className="flex flex-col h-full p-8 group hover:border-orange-600/50 transition-colors">
              <div className="mb-6">
                <Heading as="h3" size="md" className="text-orange-500 mb-2">
                  {moat.title}
                </Heading>
                <p className="text-sm text-white font-medium">
                  {moat.what}
                </p>
              </div>

              <div className="space-y-6 flex-grow text-sm text-gray-400">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Por que é um Moat</span>
                  <p className="leading-relaxed">{moat.whyMoat}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Defesa</span>
                  <p className="leading-relaxed text-gray-300">{moat.defense}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-xs italic text-gray-500">
                  {moat.description}
                </p>
              </div>
            </Card>
          ))}
        </Grid>
      </section>

      {/* Synergy Section */}
      <section className="max-w-4xl mx-auto text-center pb-24">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-orange-600/10 to-transparent border border-orange-600/20">
          <Heading as="h2" size="lg" className="mb-6 text-white">
            Fortaleza Inexpugnável
          </Heading>
          <p className="text-xl text-gray-300 leading-relaxed">
            {data.synergy}
          </p>
        </div>
      </section>
    </div>
  );
}
