export type TabId = 'contexto' | 'posicionamento' | 'diagnostico' | 'tese' | 'modelos';

export interface PresentationData {
  contexto: {
    headline: string;
    subheadline: string;
    marketSize: {
      title: string;
      items: { label: string; value: string; context: string }[];
    };
    growthDynamics: {
      title: string;
      items: { segment: string; growth: string; observation: string }[];
    };
    competitiveMap: {
      title: string;
      description: string;
      players: { name: string; core: string; strength: string; gap: string; risk: string }[];
      insight: string;
    };
    triggers: {
      title: string;
      description: string;
      items: { title: string; implication: string; details: string[] }[];
      window: string;
    };
  };
  posicionamento: {
    headline: string;
    subheadline: string;
    swot: {
      title: string;
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
    gaps: {
      title: string;
      items: { title: string; description: string }[];
    };
  };
  diagnostico: {
    headline: string;
    subheadline: string;
    matrix: {
      title: string;
      description: string;
      dimensions: { label: string; value: string; status: 'exists' | 'missing' | 'critical' }[];
    };
    swot: {
      title: string;
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
  };
  tese: {
    headline: string;
    subheadline: string;
    synergy: {
      title: string;
      description: string;
      elements: { label: string; color: string }[];
      intersection: { label: string; description: string };
      example: { title: string; steps: string[] };
    };
    repositioning: {
      title: string;
      description: string;
      from: string;
      to: string;
      valueProp: string;
    };
    valueChain: {
      title: string;
      description: string;
      stages: { label: string; input: string; revenue1: string; revenue2: string; revenue3: string }[];
    };
  };
  modelos: {
    headline: string;
    subheadline: string;
    models: {
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
      whenToChoose: { type: 'pros' | 'cons', text: string }[];
      description: string;
    }[];
    conclusion: string;
  };
}

export const presentationData: PresentationData = {
  contexto: {
    headline: 'Escala e Crescimento do Mercado de Ativos Judiciais no Brasil',
    subheadline: 'Convergência de fatores criando uma janela de oportunidade sem precedentes.',
    marketSize: {
      title: 'Volume Absoluto e Dinâmica',
      items: [
        { label: 'Estoque total de precatórios', value: 'R$ 115B', context: 'PIB 2024' },
        { label: 'Passivo federal na LOA 2026', value: 'R$ 69B', context: 'Lei Orçamentária Anual' },
        { label: 'Número de credores federais', value: '270K+', context: 'Dispersão massiva' },
        { label: 'Volume transacionado (2023)', value: 'R$ 491B', context: 'CNJ' },
      ],
    },
    growthDynamics: {
      title: 'Aceleração do Segmento',
      items: [
        { segment: 'Fintechs de precatórios', growth: '50% a.a.', observation: 'Acelerado; consolidando' },
        { segment: 'FIDCs de precatórios', growth: '87.8%', observation: 'Explosão regulatória (CVM 175)' },
        { segment: 'Precato (benchmark)', growth: '~R$ 250M/ano', observation: 'R$ 1,5B intermediado em 6 anos' },
        { segment: 'Prêambulo Bank', growth: 'R$ 1,2B/ano', observation: 'Crescimento 30-40%' },
      ],
    },
    competitiveMap: {
      title: 'Posicionamento de Players e Lacunas',
      description: 'Onde os líderes atuais operam e onde reside a oportunidade de integração.',
      players: [
        { name: 'Precato', core: 'Financeiro', strength: 'Alto (liderança)', gap: 'Sem tributária integrada', risk: 'Alto (consolidação)' },
        { name: 'Prêambulo', core: 'Advocacia', strength: 'Alto (distribuição)', gap: 'Sem financeira/tributária', risk: 'Médio-Alto' },
        { name: 'XP Litigation', core: 'Fundos', strength: 'Médio (marca)', gap: 'Sem originação/banco', risk: 'Médio' },
        { name: 'Bancos Tradicionais', core: 'Corporate', strength: 'Médio (reputação)', gap: 'Sem especialização/velocidade', risk: 'Médio' },
      ],
      insight: 'Não há player que controle simultaneamente Banking, Tributação e Advocacia.',
    },
    triggers: {
      title: 'Convergência de Fatores e Janela de Oportunidade',
      description: 'Três vetores convergindo para uma janela de escala de 12-18 meses.',
      items: [
        {
          title: 'Reforma Tributária (2026-2033)',
          implication: 'Demanda puxada por mudanças estruturais.',
          details: ['R$ 50B+ em projetos de conformidade', 'Onda de demanda contínua'],
        },
        {
          title: 'Regulação CVM 175',
          implication: 'Capital abundante disponível para FIDCs.',
          details: ['Barreira regulatória removida', 'Padronização de direitos creditórios'],
        },
        {
          title: 'Consolidação do Mercado',
          implication: 'Primeiros-movers ganham market share definitivo.',
          details: ['Players escalando 50%+ a.a.', 'Janela para consolidação fechando'],
        },
      ],
      window: 'A janela de oportunidade estratégica fecha em aproximadamente 18 meses.',
    },
  },
  posicionamento: {
    headline: 'Dinâmica Setorial e Lacunas de Mercado',
    subheadline: 'Análise das forças estruturais e espaços não ocupados.',
    swot: {
      title: 'Análise de Forças e Fraquezas',
      strengths: ['R$ 115B TAM', 'Crescimento 50%+ a.a.', 'Regulação favorável', 'Demanda sistêmica'],
      weaknesses: ['Fragmentação de originação', 'Ausência de padrão de precificação', 'Silos de serviços', 'Regulação em movimento'],
      opportunities: ['Integração Banking + Tributária', 'Distribuição B2B2C (ERPs)', 'Compensação estruturada', 'FIDC de varejo'],
      threats: ['Bancos tradicionais', 'Consolidação acelerada', 'Incertezas regulatórias', 'Novos entrantes com capital'],
    },
    gaps: {
      title: 'Espaços Vazios na Matriz Competitiva',
      items: [
        { title: 'Integração Vertical', description: 'Ninguém executa Banking + Tributação + Advocacia no mesmo fluxo.' },
        { title: 'Distribuição B2B2C', description: 'Falta presença em ecossistemas de ERP (Conta Azul, Omie).' },
        { title: 'Transparência de Precificação', description: 'Ainda operado via propostas comerciais subjetivas.' },
        { title: 'FIDC de Varejo', description: 'Ausência de cotas acessíveis (R$ 5k+) para investidores qualificados.' },
      ],
    },
  },
  diagnostico: {
    headline: 'Diagnóstico Estratégico: BHG',
    subheadline: 'Capacidade instalada vs. Expressão de mercado.',
    matrix: {
      title: 'Posição de BHG na Matriz de Integração',
      description: 'O gap entre a expertise técnica e a presença digital.',
      dimensions: [
        { label: 'Especialização Jurídica', value: 'Muito Alta (CEO 30y)', status: 'exists' },
        { label: 'Integração Banking', value: 'Em expansão', status: 'exists' },
        { label: 'Integração Tributária', value: 'Existente (10y)', status: 'exists' },
        { label: 'Integração Digital/Plataforma', value: 'Inexistente (Silos)', status: 'critical' },
        { label: 'Narrativa de Marca', value: 'Genérica (Invisível)', status: 'critical' },
        { label: 'Distribuição B2B2C', value: 'Nenhuma', status: 'critical' },
      ],
    },
    swot: {
      title: 'Análise de Capacidade Interna',
      strengths: ['CEO com 30 anos de contencioso', 'BHG Consultoria (10y)', 'Escritório próprio (2012)', 'Acesso a ativos'],
      weaknesses: ['Sites fragmentados', 'Falta de narrativa de marca', 'Operação manual', 'Equipe jurídica reduzida'],
      opportunities: ['Integração tribuno-financeira', 'Reforma tributária', 'B2B2C via ERPs', 'Consolidação de mercado'],
      threats: ['Expansão de competidores', 'Mudanças regulatórias', 'Consolidação acelerada'],
    },
  },
  tese: {
    headline: 'Lógica de Criação de Valor Através de Integração',
    subheadline: 'A interseção de serviços como motor de lucro e retenção.',
    synergy: {
      title: 'Sinergia Operacional',
      description: 'A convergência de dimensões para otimização de capital.',
      elements: [
        { label: 'Banking', color: 'blue' },
        { label: 'Tributária', color: 'orange' },
        { label: 'Patrimônio', color: 'emerald' },
      ],
      intersection: {
        label: 'Interseção Estratégica',
        description: 'Onde o capital é otimizado via crédito, compensação e gestão.',
      },
      example: {
        title: 'Exemplo de Orquestração',
        steps: [
          'Ativo: Precatório R$ 1M + Débito Tributário R$ 1M',
          'Solução Integrada: Crédito (70% LTV) + Compensação $\\rightarrow$ +R$ 200k de ganho',
        ],
      },
    },
    repositioning: {
      title: 'Mudança de Modelo de Negócio',
      description: 'De prestador de serviços a plataforma de inteligência.',
      from: 'Prestador de Serviços (Transacional)',
      to: 'Plataforma de Inteligência (Lock-in)',
      valueProp: 'Transição de multiplicidade de serviços para orquestração de jornada.',
    },
    valueChain: {
      title: 'Estrutura de Jornada e Fluxos de Receita',
      description: 'O loop de criação de valor do diagnóstico ao patrimônio.',
      stages: [
        { label: 'Mapeamento', input: 'Diagnóstico de Ativos', revenue1: 'Zero', revenue2: 'Taxa Diagnóstico', revenue3: 'Zero' },
        { label: 'Liquidez', input: 'Antecipação/Crédito', revenue1: 'Deságio/Fee', revenue2: 'Fluxo Caixa', revenue3: 'Zero' },
        { label: 'Otimização', input: 'Eficiência Fiscal', revenue1: 'Fee Compensação', revenue2: 'Redução Passivo', revenue3: 'Zero' },
        { label: 'Patrimônio', input: 'Gestão de Excedente', revenue1: 'Taxa Gestão', revenue2: 'Performance', revenue3: 'LTV Perpétuo' },
      ],
    },
  },
  modelos: {
    headline: 'Cenários de Modelo de Negócio',
    subheadline: 'Análise de arquétipos estratégicos e trade-offs.',
    models: [
      {
        id: 'especialista',
        name: 'Modelo Especialista',
        subtitle: 'High-Margin, Low-Volume',
        focus: 'UHNW + M&A Complexo',
        ticket: 'R$ 5M - R$ 50M',
        volume: '5-20 clientes/ano',
        revenue: 'Fees altos (2-5%)',
        margin: '55-65%',
        cac: 'Praticamente Zero',
        valuation: 'R$ 80-120M (5y)',
        risk: 'Concentração de Clientes',
        whenToChoose: [
          { type: 'pros', text: 'Maximizar margem e lucro' },
          { type: 'pros', text: 'Operação enxuta' },
          { type: 'cons', text: 'Escala exponencial' },
        ],
        description: 'Foco em operações de alta complexidade e profundidade de relacionamento.',
      },
      {
        id: 'plataforma',
        name: 'Modelo Plataforma',
        subtitle: 'Scale-up via B2B2C',
        focus: 'PMEs via Parceiros',
        ticket: 'R$ 100k - R$ 2M',
        volume: '100-500 clientes/ano',
        revenue: 'Revenue Share (5-10%)',
        margin: '35-45%',
        cac: 'Médio (Parceiros)',
        valuation: 'R$ 300-400M (5y)',
        risk: 'Dependência de Canais',
        whenToChoose: [
          { type: 'pros', text: 'Crescimento acelerado' },
          { type: 'pros', text: 'Escala tecnológica' },
          { type: 'cons', text: 'Controle total do cliente' },
        ],
        description: 'Atua como infraestrutura de distribuição para parceiros de ecossistema.',
      },
      {
        id: 'ecossistema',
        name: 'Modelo Ecossistema',
        subtitle: 'Max Retention & Valuation',
        focus: 'Mid-Market + Complexidade',
        ticket: 'R$ 500k - R$ 10M',
        volume: '100-300 clientes/ano',
        revenue: 'Múltiplos Fluxos',
        margin: '40-50%',
        cac: 'Médio-Alto',
        valuation: 'R$ 800M-1.2B (5y)',
        risk: 'Complexidade de Execução',
        whenToChoose: [
          { type: 'pros', text: 'Liderança de mercado' },
          { type: 'pros', text: 'Valuation máximo' },
          { type: 'cons', text: 'Simplicidade operacional' },
        ],
        description: 'O sistema operacional que retém o cliente em todas as dimensões financeiras.',
      },
    ],
    conclusion: 'A escolha deve alinhar sua tolerância ao risco com sua visão de longo prazo.',
  },
};
