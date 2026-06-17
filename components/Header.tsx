'use client';

import { useState, useEffect, useCallback } from 'react';

const tabs = [
  { id: 'contexto', label: 'CONTEXTO DE MERCADO' },
  { id: 'posicionamento', label: 'POSICIONAMENTO' },
  { id: 'diagnostico', label: 'DIAGNÓSTICO BHG' },
  { id: 'tese', label: 'TESE ESTRATÉGICA' },
  { id: 'modelos', label: 'CENÁRIOS DE MODELO' },
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

export function Header() {
  const [activeTab, setActiveTab] = useState('contexto');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveTab(getTabFromHash());
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback((id: string) => {
    setActiveTab(id);
    setHash(id);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-gray-900 ${scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16 gap-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
              <rect x="2" y="18" width="14" height="14" rx="2" fill="white" opacity="0.55" />
              <rect x="12" y="6" width="28" height="28" rx="3.5" fill="#6856f5" />
              <rect x="2" y="18" width="14" height="14" rx="2" fill="white" />
            </svg>
            <span className="font-['DM_Serif_Display'] text-base md:text-lg tracking-tight select-none whitespace-nowrap">
              <span className="text-white font-normal">Future</span>
              <span className="text-[#6856f5] italic font-extrabold">Move</span>
            </span>
          </div>

          <nav className="flex items-center gap-0.5 overflow-x-auto scrollbar-none mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`whitespace-nowrap px-2 md:px-2.5 py-1 text-[9px] md:text-[10px] font-bold transition-all duration-200 rounded-md ${
                  activeTab === tab.id
                    ? 'text-white bg-white/10 border border-white/20'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 text-[10px] text-gray-500 flex-shrink-0">
            <span className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded-full">Executive Intelligence Brief</span>
            <span className="text-white/85 font-medium">BHG Group</span>
          </div>
        </div>
      </div>
    </header>
  );
}
