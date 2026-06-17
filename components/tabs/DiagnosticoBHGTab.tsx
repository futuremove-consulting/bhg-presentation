'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { SWOTMatrix } from '@/components/SWOTMatrix';

export function DiagnosticoBHGTab() {
  const data = presentationData.diagnostico;

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="section-label justify-center">Diagnóstico</div>
        <Heading as="h1" size="2xl" className="mb-6 text-balance text-white max-w-4xl mx-auto">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      <div className="section-divider" />

      {/* Matrix Section */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Posição Atual</div>
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
                        <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">NECESSÁRIO</span>
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

      <div className="section-divider" />

      {/* SWOT Section */}
      <section className="py-12 space-y-12 pb-24">
        <div className="text-center space-y-4">
          <div className="section-label justify-center">Capacidade Interna</div>
          <Heading as="h2" size="xl" className="text-white">{data.swot.title || 'Análise de Capacidade Interna'}</Heading>
        </div>

        <div className="max-w-5xl mx-auto">
          <SWOTMatrix data={data.swot} />
        </div>
      </section>
    </div>
  );
}
