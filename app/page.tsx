'use client';

import { useState, useEffect } from 'react';
import { ContextoMercadoTab } from '@/components/tabs/ContextoMercadoTab';
import { PosicionamentoCompetitivoTab } from '@/components/tabs/PosicionamentoCompetitivoTab';
import { DiagnosticoBHGTab } from '@/components/tabs/DiagnosticoBHGTab';
import { TeseEstrategicaTab } from '@/components/tabs/TeseEstrategicaTab';
import { CenariosModeloTab } from '@/components/tabs/CenariosModeloTab';
import { VantagensSustentaveisTab } from '@/components/tabs/VantagensSustentaveisTab';
import { RealizacaoValorTab } from '@/components/tabs/RealizacaoValorTab';

const tabComponents: Record<string, React.ComponentType> = {
  contexto: ContextoMercadoTab,
  posicionamento: PosicionamentoCompetitivoTab,
  diagnostico: DiagnosticoBHGTab,
  tese: TeseEstrategicaTab,
  modelos: CenariosModeloTab,
  vantagens: VantagensSustentaveisTab,
  valor: RealizacaoValorTab,
};

const validIds = ['contexto', 'posicionamento', 'diagnostico', 'tese', 'modelos', 'vantagens', 'valor'];

function getTabFromHash(): string {
  if (typeof window === 'undefined') return 'contexto';
  const hash = window.location.hash.replace('#', '');
  return validIds.includes(hash) ? hash : 'contexto';
}

export default function Home() {
  const [currentTab, setCurrentTab] = useState('contexto');

  useEffect(() => {
    setCurrentTab(getTabFromHash());
    const onHashChange = () => setCurrentTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const TabComponent = tabComponents[currentTab];

  return <TabComponent />;
}
