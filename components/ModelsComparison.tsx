'use client';

import { Heading } from '@futuremove/ui';

interface WhenToChoose {
  type: 'pros' | 'cons';
  text: string;
}

interface ModelSpec {
  id: string;
  name: string;
  subtitle: string;
  focus: string;
  ticket: string;
  volume: string;
  revenue: string;
  margin: string;
  cac: string;
  valuation: string;
  risk: string;
  whenToChoose: WhenToChoose[];
  description: string;
}

interface ModelsComparisonProps {
  models: ModelSpec[];
}

const rows = [
  { key: 'focus', label: 'Foco' },
  { key: 'ticket', label: 'Ticket' },
  { key: 'volume', label: 'Volume' },
  { key: 'revenue', label: 'Receita' },
  { key: 'margin', label: 'Margem' },
  { key: 'cac', label: 'CAC' },
  { key: 'valuation', label: 'Valuation (5y)' },
  { key: 'risk', label: 'Risco' },
] as const;

export function ModelsComparison({ models }: ModelsComparisonProps) {
  return (
    <div className="space-y-6">
      <Heading as="h3" size="lg" className="text-white text-center">Comparativo Direto dos Modelos</Heading>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="py-4 px-4 text-xs uppercase text-gray-500 font-medium tracking-wider w-32" />
              {models.map((m) => (
                <th key={m.id} className="py-4 px-4">
                  <div className="space-y-1">
                    <Heading as="h4" size="lg" className="text-white">{m.name}</Heading>
                    <p className="text-[10px] text-gray-500 italic font-normal">{m.subtitle}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-gray-900/50 hover:bg-gray-900/20 transition-colors">
                <td className="py-4 px-4 text-xs text-gray-500 uppercase tracking-wider font-medium">{row.label}</td>
                {models.map((m) => {
                  const value = (m as any)[row.key];
                  const isValuation = row.key === 'valuation';
                  return (
                    <td key={m.id} className={`py-4 px-4 text-sm ${isValuation ? 'text-white font-bold' : 'text-gray-300'}`}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="border-b border-gray-900/50">
              <td className="py-4 px-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Descrição</td>
              {models.map((m) => (
                <td key={m.id} className="py-4 px-4 text-xs text-gray-400 leading-relaxed">{m.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
