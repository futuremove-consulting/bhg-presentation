'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { Card } from '@futuremove/ui';
import { Grid } from '@futuremove/ui';

export function DiagnosticoBHGTab() {
  const data = presentationData.diagnostico;

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

      {/* Matrix Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.matrix.title}</Heading>
          <p className="text-gray-400">{data.matrix.description}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 text-xs uppercase text-gray-500">
                  <th className="py-4 px-4">Dimensão</th>
                  <th className="py-4 px-4">BHG Atual</th>
                  <th className="py-4 px-4">BHG Potencial</th>
                  <th className="py-4 px-4">Gap a Fechar</th>
                </tr>
              </thead>
              <tbody>
                {data.matrix.dimensions.map((dim, idx) => (
                  <tr key={idx} className="border-b border-gray-900/50">
                    <td className="py-4 px-4 text-white font-medium">{dim.label}</td>
                    <td className="py-4 px-4 text-sm text-gray-300">{dim.value}</td>
                    <td className="py-4 px-4 text-sm text-gray-300">{dim.status === 'exists' ? 'Mantido' : 'Expandido'}</td>
                    <td className="py-4 px-4">
                      {dim.status === 'critical' ? (
                        <span className="text-red-500 font-bold text-[10px] uppercase tracking-widest">CRÍTICO</span>
                      ) : dim.status === 'missing' ? (
                        <span className="text-orange-500 font-bold text-[10px] uppercase tracking-widest">NECESSÁRIO</span>
                      ) : (
                        <span className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">OK</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SWOT Section */}
      <section className="space-y-12 pb-24">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.swot.title || 'Análise de Capacidade Interna'}</Heading>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-emerald-500">Forças Únicas</Heading>
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
            <Heading as="h3" size="md" className="text-blue-500">Oportunidades de Mercado</Heading>
            <ul className="space-y-2">
              {data.swot.opportunities.map((o, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-blue-500">→</span> {o}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered" className="p-8 space-y-4">
            <Heading as="h3" size="md" className="text-orange-500">Ameaças Externas</Heading>
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
    </div>
  );
}
