'use client';

import { ContextoMercadoTab } from '@/components/tabs/ContextoMercadoTab';
import { PosicionamentoCompetitivoTab } from '@/components/tabs/PosicionamentoCompetitivoTab';
import { DiagnosticoBHGTab } from '@/components/tabs/DiagnosticoBHGTab';
import { TeseEstrategicaTab } from '@/components/tabs/TeseEstrategicaTab';
import { CenariosModeloTab } from '@/components/tabs/CenariosModeloTab';
import { VantagensSustentaveisTab } from '@/components/tabs/VantagensSustentaveisTab';
import { RealizacaoValorTab } from '@/components/tabs/RealizacaoValorTab';
import { usePathname } from 'next/navigation';

const tabComponents: Record<string, React.ComponentType> = {
  contexto: ContextoMercadoTab,
  posicionamento: PosicionamentoCompetitivoTab,
  diagnostico: DiagnosticoBHGTab,
  tese: TeseEstrategicaTab,
  modelos: CenariosModeloTab,
  vantagens: VantagensSustentaveisTab,
  valor: RealizacaoValorTab,
};

export default function Home() {
  const pathname = usePathname();
  
  const currentTab = 
    pathname === '/' ? 'contexto' :
    pathname === '/posicionamento' ? 'posicionamento' :
    pathname === '/diagnostico' ? 'diagnostico' :
    pathname === '/tese-de-valor' ? 'tese' :
    pathname === '/modelos-de-operacao' ? 'modelos' :
    pathname === '/vantagens-competitivas' ? 'vantagens' :
    pathname === '/perspectiva-de-valor' ? 'valor' : 'contexto';

  const TabComponent = tabComponents[currentTab];

  return <TabComponent />;
}
