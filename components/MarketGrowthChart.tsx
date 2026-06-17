'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Heading } from '@futuremove/ui';

interface GrowthItem {
  segment: string;
  growth: string;
  observation: string;
}

interface MarketGrowthChartProps {
  title: string;
  items: GrowthItem[];
}

function parseGrowthValue(raw: string): number {
  const cleaned = raw.replace(/[^0-9.,]/g, '').replace(',', '.');
  const num = parseFloat(cleaned);
  if (isNaN(num)) return 0;

  if (raw.includes('%')) return num;
  if (raw.includes('B')) return num * 1000;
  if (raw.includes('M')) return num;
  return num;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl">
      <p className="text-white text-xs font-bold mb-1">{label}</p>
      <p className="text-gray-300 text-xs">{payload[0].value.toFixed(0)}</p>
    </div>
  );
};

export function MarketGrowthChart({ title, items }: MarketGrowthChartProps) {
  const data = items.map((item) => {
    const isPercent = item.growth.includes('%');
    const isCurrency = item.growth.includes('R$');
    return {
      name: item.segment.split('(')[0].trim(),
      value: parseGrowthValue(item.growth),
      label: item.growth,
      isPercent,
      isCurrency,
      observation: item.observation,
    };
  });

  return (
    <div className="space-y-6">
      <Heading as="h3" size="lg" className="text-white text-center">{title}</Heading>
      <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#374151' }}
              angle={-20}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: '#374151' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1f2937' }} />
            <Bar dataKey="value" fill="#6856f5" radius={[4, 4, 0, 0]} maxBarSize={60} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4 text-[10px] text-gray-500">
          {data.map((d) => (
            <span key={d.name}>{d.name}: {d.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
