'use client';

import { useState, useEffect, useCallback } from 'react';

const tabs = [
  { id: 'contexto', label: 'CONTEXTO DE MERCADO' },
  { id: 'posicionamento', label: 'POSICIONAMENTO' },
  { id: 'diagnostico', label: 'DIAGNÓSTICO BHG' },
  { id: 'tese', label: 'TESE ESTRATÉGICA' },
  { id: 'modelos', label: 'CENÁRIOS DE MODELO' },
  { id: 'vantagens', label: 'VANTAGENS SUSTENTÁVEIS' },
  { id: 'valor', label: 'REALIZAÇÃO DE VALOR' },
];

function getTabFromHash(): string {
  if (typeof window === 'undefined') return 'contexto';
  const hash = window.location.hash.replace('#', '');
  const validIds = tabs.map(t => t.id);
  return validIds.includes(hash) ? hash : 'contexto';
}

function setHash(id: string) {
  if (typeof window !== 'undefined') {
    window.location.hash = id;
  }
}

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState('contexto');

  useEffect(() => {
    setActiveTab(getTabFromHash());
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleClick = useCallback((id: string) => {
    setActiveTab(id);
    setHash(id);
  }, []);

  return (
    <nav className="sticky top-16 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto">
        <div className="flex gap-1 min-w-max py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs md:text-sm font-bold transition-all duration-200 rounded-lg ${
                activeTab === tab.id
                  ? 'text-white bg-purple-600/20 border border-purple-600/30'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
