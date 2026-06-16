'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { id: 'contexto', label: 'CONTEXTO DE MERCADO', href: '/contexto' },
  { id: 'posicionamento', label: 'POSICIONAMENTO', href: '/posicionamento' },
  { id: 'diagnostico', label: 'DIAGNÓSTICO BHG', href: '/diagnostico' },
  { id: 'tese', label: 'TESE ESTRATÉGICA', href: '/tese-de-valor' },
  { id: 'modelos', label: 'CENÁRIOS DE MODELO', href: '/modelos-de-operacao' },
  { id: 'vantagens', label: 'VANTAGENS SUSTENTÁVEIS', href: '/vantagens-competitivas' },
  { id: 'valor', label: 'REALIZAÇÃO DE VALOR', href: '/perspectiva-de-valor' },
];

export function TabNavigation() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('contexto');

  useEffect(() => {
    const currentTab = tabs.find(t => pathname === t.href || pathname.startsWith(t.href + '/'))?.id || 'contexto';
    setActiveTab(currentTab);
  }, [pathname]);

  return (
    <nav className="sticky top-16 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto">
        <div className="flex gap-1 min-w-max py-3">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`whitespace-nowrap px-4 py-2 text-xs md:text-sm font-bold transition-all duration-200 rounded-lg ${
                activeTab === tab.id
                  ? 'text-white bg-orange-600/20 border border-orange-600/30'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
