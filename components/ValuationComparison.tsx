'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Heading } from '@futuremove/ui';

interface ModelData {
  id: string;
  name: string;
  valuation: string;
  margin: string;
  risk: string;
}

interface ValuationComparisonProps {
  models: ModelData[];
}

function parseValuationRange(raw: string): { min: number; max: number } {
  const cleaned = raw.replace(/[R$\s]/g, '');
  const parts = cleaned.split('-');
  const parseVal = (s: string) => {
    const num = parseFloat(s.replace(/[^0-9.]/g, ''));
    if (s.includes('B')) return num * 1000;
    return num;
  };
  if (parts.length >= 2) {
    return { min: parseVal(parts[0]), max: parseVal(parts[1]) };
  }
  const val = parseVal(parts[0]);
  return { min: val * 0.8, max: val };
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl">
      <p className="text-white text-xs font-bold mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: R$ {entry.value.toFixed(0)}M
        </p>
      ))}
    </div>
  );
};

export function ValuationComparison({ models }: ValuationComparisonProps) {
  const data = models.map((m) => {
    const { min, max } = parseValuationRange(m.valuation);
    return {
      name: m.name.split(' ').slice(0, 2).join(' '),
      fullName: m.name,
      min,
      max,
      midpoint: (min + max) / 2,
      margin: m.margin,
      risk: m.risk,
    };
  });

  const colors = ['#6856f5', '#3b82f6', '#10b981'];

  return (
    <div className="space-y-6">
      <Heading as="h3" size="lg" className="text-white text-center">Comparativo de Valuation (5 anos)</Heading>
      <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#374151' }}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: '#374151' }}
              tickFormatter={(v) => `R$${v}M`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1f2937' }} />
            <Bar dataKey="min" fill={colors[0]} radius={[0, 0, 0, 0]} name="Min" />
            <Bar dataKey="max" fill={colors[1]} radius={[4, 4, 0, 0]} name="Max" />
            <Bar dataKey="midpoint" fill={colors[2]} radius={[4, 4, 0, 0]} name="Midpoint" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4 text-[10px] text-gray-500">
          {data.map((d) => (
            <span key={d.name}>{d.fullName}: {d.margin} margem</span>
          ))}
        </div>
      </div>
    </div>
  );
}
