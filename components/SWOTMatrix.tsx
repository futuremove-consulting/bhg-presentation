'use client';

import { Heading } from '@futuremove/ui';

interface SWOTData {
  title?: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

interface SWOTMatrixProps {
  data: SWOTData;
}

export function SWOTMatrix({ data }: SWOTMatrixProps) {
  const quadrants = [
    {
      key: 'strengths',
      label: 'Forças',
      items: data.strengths,
      border: 'border-emerald-900/40',
      bg: 'bg-emerald-950/20',
      icon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      key: 'weaknesses',
      label: 'Fraquezas',
      items: data.weaknesses,
      border: 'border-red-900/40',
      bg: 'bg-red-950/20',
      icon: (
        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
    },
    {
      key: 'opportunities',
      label: 'Oportunidades',
      items: data.opportunities,
      border: 'border-blue-900/40',
      bg: 'bg-blue-950/20',
      icon: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      key: 'threats',
      label: 'Ameaças',
      items: data.threats,
      border: 'border-gray-700/40',
      bg: 'bg-gray-900/30',
      icon: (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {data.title && (
        <Heading as="h3" size="lg" className="text-white text-center">{data.title}</Heading>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-800">
        {quadrants.map((q) => (
          <div key={q.key} className={`${q.bg} ${q.border} p-6 space-y-3`}>
            <div className="flex items-center gap-2 mb-3">
              {q.icon}
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">{q.label}</span>
            </div>
            <ul className="space-y-2">
              {q.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                  <span className="text-gray-600 mt-0.5 shrink-0">&ndash;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
