export const data = {
  contexto: {
    headline: 'R$ 115B em Ativos Judiciais: A Nova Fronteira de Capital no Brasil',
    subheadline: 'Três convergências estruturais — reforma tributária, regulação CVM 175 e consolidação do mercado — criam uma janela de oportunidade de 12 a 18 meses para quem integrar banking, tributação e advocacia em um único ecossistema.',
    marketSize: {
      title: 'Dimensão do Mercado e Implicações Estratégicas',
      items: [
        { label: 'Estoque total de precatórios', value: 'R$ 115B', context: '1,2% do PIB — capital massivo subalocado por fragmentação' },
        { label: 'Passivo federal na LOA 2026', value: 'R$ 69B', context: 'Maior volume orçamentário da história para precatórios federais' },
        { label: 'Credores federais', value: '270K+', context: 'Base atomizada — sem canal integrado de acesso a capital' },
        { label: 'Volume transacionado (2023)', value: 'R$ 491B', context: 'CNJ — liquidez crescente, mas ineficiente sem integração' },
      ],
    },
    growthDynamics: {
      title: 'Aceleração do Segmento',
      items: [
        { segment: 'Fintechs de precatórios', growth: '50% a.a.', observation: 'Acelerado; consolidando' },
        { segment: 'FIDCs de precatórios', growth: '87.8%', observation: 'Explosão regulatória (CVM 175)' },
        { segment: 'Precato (benchmark)', growth: '~R$ 250M/ano', observation: 'R$ 1,5B intermediado em 6 anos' },
        { segment: 'Prêambulo Bank', growth: 'R$ 1,2B/ano', observation: 'Crescimento 30-40%' },
        { segment: 'GCB / PeerBR', growth: 'R$ 3B crédito', observation: '200K+ clientes' },
        { segment: 'Tokenização / RWA', growth: 'R$ 1B+', observation: 'Acura Capital (Hathor)' },
      ],
    },
    triggers: {
      title: 'Convergências Estruturais e Janela de Oportunidade',
      description: 'Vetores estruturais convergindo. A janela para posicionamento estratégico é estimada em 18 meses.',
      items: [
        {
          title: 'Reforma Tributária (2026-2033)',
          implication: 'Demanda impulsionada por reestruturação fiscal obrigatória.',
          details: ['R$ 50B+ em projetos de conformidade previstos para os próximos 7 anos', 'Necessidade de compensação estruturada em larga escala'],
        },
        {
          title: 'Regulação CVM 175',
          implication: 'Redução de barreiras de entrada e maior fluidez de capital para FIDCs.',
          details: ['Padronização de direitos creditórios acelera a securitização', 'Acesso a funding institucional com maior eficiência de originação'],
        },
        {
          title: 'Consolidação do Mercado (12-18 meses)',
          implication: 'First-movers tendem a capturar market share dominante.',
          details: ['Players em fase de escala acelerada — tendência de concentração', 'Janela para posicionamento como plataforma integrada em fase de fechamento'],
        },
      ],
      window: 'A janela de oportunidade estratégica é estimada em 18 meses. A ausência de um posicionamento como plataforma integrada aumenta a vulnerabilidade à consolidação por terceiros.',
    },
  },
  segmentos: {
    headline: 'Quem é o Cliente: Segmentação e Psicografia do Mercado',
    subheadline: 'O mercado de ativos judiciais não é homogêneo. O valor da plataforma BHG reside em resolver dores específicas para perfis individuais e corporativos, criando um ecossistema de dependência mútua.',
    individualProfiles: [
      {
        id: 'credor',
        role: 'O Credor',
        archetype: 'Buscador de Liquidez',
        pains: [
          'Incerteza total sobre prazos de pagamento',
          'Desconfiança de intermediários e "promessas" vazias',
          'Dificuldade em converter ativo jurídico em capital de giro'
        ],
        gains: [
          'Liquidez imediata via antecipação estruturada',
          'Transparência total via dashboard de acompanhamento',
          'Segurança jurídica com respaldo de 30 anos de expertise'
        ],
        valueProp: 'Transformar a espera passiva do Judiciário em capital ativo para crescimento ou estabilidade.',
        color: 'var(--blue)'
      },
      {
        id: 'gestor',
        role: 'O Gestor Financeiro / CFO',
        archetype: 'Otimizador de Passivos',
        pains: [
          'Débitos tributários acumulados e pressão fiscal',
          'Risco de inscrição em Dívida Ativa e bloqueio de contas',
          'Dificuldade em integrar ativos judiciais na gestão financeira'
        ],
        gains: [
          'Eliminação de débitos via compensação estruturada',
          'Economia real sobre o valor do débito original',
          'Regularidade fiscal para operar e crescer'
        ],
        valueProp: 'Eliminar passivos tributários utilizando ativos judiciais, transformando dívida em eficiência fiscal.',
        color: 'var(--purple)'
      },
      {
        id: 'socio',
        role: 'O Empresário / Sócio',
        archetype: 'Visionário de Expansão',
        pains: [
          'Capital parado em precatórios enquanto oportunidades passam',
          'Relutância em vender ativos com deságio excessivo',
          'Necessidade de crédito sem diluição de equity'
        ],
        gains: [
          'Alavancagem de ativos para novos investimentos',
          'Manutenção da propriedade do ativo enquanto usa a liquidez',
          'Crescimento acelerado via crédito com garantia'
        ],
        valueProp: 'Usar o ativo judicial como alavanca financeira para expansão, sem abrir mão do valor final.',
        color: 'var(--amber)'
      },
      {
        id: 'investidor',
        role: 'O Investidor Qualificado',
        archetype: 'Alocador de Alpha',
        pains: [
          'Saturação de ativos de renda fixa tradicionais',
          'Opacidade na originação e precificação de precatórios',
          'Risco de concentração em poucos ativos'
        ],
        gains: [
          'Acesso a ativos reais com colateral público robusto',
          'Sourcing de alta qualidade via orquestração de advocacia e tributação',
          'Escalabilidade via FIDCs regulados (CVM 175)'
        ],
        valueProp: 'Acessar a maior ineficiência de precificação do mercado com a menor fricção operacional.',
        color: 'var(--emerald)'
      },
      {
        id: 'parceiro',
        role: 'O Parceiro (Advogado/Contador)',
        archetype: 'Multiplicador de Valor',
        pains: [
          'Processos manuais e lentos de liquidação de ativos',
          'Perda de receita por falta de produtos financeiros integrados',
          'Risco reputacional ao indicar parceiros não especializados'
        ],
        gains: [
          'Monetização de novas linhas de serviço',
          'Redução drástica do ciclo de fechamento de operações',
          'Posicionamento como consultor de estratégia patrimonial'
        ],
        valueProp: 'Evoluir de um prestador de serviços para um orquestrador de valor financeiro para seus clientes.',
        color: 'var(--gray-dark)'
      }
    ],
    corporateProfiles: [
      {
        id: 'escritorio',
        role: 'Escritório de Advocacia Médio',
        focus: 'Liquidez Operacional',
        pains: [
          'Necessidade de capital para custas e honorários',
          'Inexistência de departamento financeiro especializado',
          'Dependência de fluxos imprevisíveis de honorários'
        ],
        gains: [
          'Crédito rápido com garantia de precatórios de clientes',
          'Antecipação de honorários para fluxo de caixa saudável',
          'Foco total na atividade jurídica, delegando o financeiro'
        ],
        valueProp: 'Transformar a carteira de precatórios em capital de giro para a operação do escritório.',
        color: 'var(--purple)'
      },
      {
        id: 'construcao',
        role: 'Construtora / Indústria',
        focus: 'Eficiência Fiscal e Expansão',
        pains: [
          'Altos débitos de ICMS, ISS e INSS',
          'Capital imobilizado em indenizações judiciais',
          'Burocracia excessiva em bancos tradicionais'
        ],
        gains: [
          'Compensação de débitos tributários com precatórios',
          'Crédito para novas obras com garantia de ativos judiciais',
          'Redução drástica do passivo fiscal'
        ],
        valueProp: 'Sincronizar a recuperação de ativos judiciais com a eliminação de dívidas tributárias.',
        color: 'var(--blue)'
      },
      {
        id: 'saude',
        role: 'Clínicas e Hospitais',
        focus: 'Sustentabilidade e Crescimento',
        pains: [
          'Carga tributária elevada em medicamentos e serviços',
          'Necessidade de capital para modernização e expansão',
          'Complexidade na gestão de créditos tributários'
        ],
        gains: [
          'Compensação de ICMS/ISS/COFINS via precatórios',
          'Linhas de crédito para expansão de unidades',
          'Otimização do fluxo de caixa operacional'
        ],
        valueProp: 'Liberar capital através da eficiência fiscal para investir na qualidade do atendimento.',
        color: 'var(--emerald)'
      },
      {
        id: 'logistica',
        role: 'Transportadoras e Logística',
        focus: 'Recuperação e Frota',
        pains: [
          'Débitos complexos de ICMS-ST e INSS',
          'Necessidade constante de renovação de frota',
          'Ineficiência na gestão de créditos tributários'
        ],
        gains: [
          'Recuperação de impostos via compensação estruturada',
          'Crédito para aquisição de veículos com garantia de ativos',
          'Redução de custos operacionais fiscais'
        ],
        valueProp: 'Transformar a complexidade tributária do transporte em capital para modernização da frota.',
        color: 'var(--amber)'
      },
      {
        id: 'familyoffice',
        role: 'Family Offices / Gestoras',
        focus: 'Diversificação e Alpha',
        pains: [
          'Saturação de ativos tradicionais (renda fixa/ações)',
          'Falta de acesso a originação qualificada de precatórios',
          'Necessidade de ativos com baixa correlação com o mercado'
        ],
        gains: [
          'Alocação em FIDCs de alta qualidade',
          'Retornos consistentes acima do CDI',
          'Due diligence jurídica rigorosa e especializada'
        ],
        valueProp: 'Acessar a maior ineficiência de precificação do país com segurança jurídica institucional.',
        color: 'var(--blue-dark)'
      }
    ],
    sectorPriority: [
      { vertical: 'Advocacia', priority: 'P1', product: 'Crédito + Antecipação' },
      { vertical: 'Construção Civil', priority: 'P1', product: 'Compensação + Crédito' },
      { vertical: 'Saúde', priority: 'P1', product: 'Compensação + Planejamento' },
      { vertical: 'Logística/Transporte', priority: 'P2', product: 'Compensação + Crédito' },
      { vertical: 'Indústria', priority: 'P2', product: 'Compensação + FIDC' },
      { vertical: 'Varejo', priority: 'P3', product: 'Conta PJ + Crédito' },
      { vertical: 'Tecnologia', priority: 'P3', product: 'Conta PJ + Planejamento' },
      { vertical: 'Agronegócio', priority: 'P3', product: 'Compensação + Crédito' },
    ],
    matrix: [
      { segment: 'Varejo (Precatórios < R$ 100k)', focus: 'Volume e Automação', pain: 'Falta de acesso a crédito', solution: 'Banking Digital + Antecipação Automática' },
      { segment: 'Mid-Market (R$ 100k - R$ 2M)', focus: 'Eficiência e Estrutura', pain: 'Carga tributária no resgate', solution: 'Tributária Integrada + Planejamento Fiscal' },
      { segment: 'UHNW / Corporate (> R$ 2M)', focus: 'Estratégia e Gestão', pain: 'Risco de concentração/sucessão', solution: 'Gestão Patrimonial + M&A de Ativos' },
    ]
  },
  posicionamento: {
    headline: 'Onde Está o Vazio: Lacunas na Matriz Competitiva',
    subheadline: 'O mercado de ativos judiciais cresce 50%+ a.a., mas ninguém integra banking, tributação e advocacia no mesmo fluxo. O vazio estratégico é a oportunidade.',
    expandedPlayers: [
      { name: 'BHG Alvo', x: 85, y: 88, color: '#6856f5' },
      { name: 'Precato', x: 72, y: 65, color: '#0ea5e9' },
      { name: 'Prêambulo Bank', x: 68, y: 72, color: '#10b981' },
      { name: 'GCB / PeerBR', x: 82, y: 55, color: '#06b6d4' },
      { name: 'PrecPago', x: 58, y: 58, color: '#6366f1' },
      { name: 'BHG Atual', x: 18, y: 75, color: '#a78bfa' },
      { name: 'Pactum Consultoria', x: 12, y: 82, color: '#8b5cf6' },
      { name: 'KPMG / Big Four', x: 35, y: 68, color: '#71717a' },
      { name: 'JUSCREDI', x: 22, y: 55, color: '#78716c' },
      { name: 'XP Litigation', x: 78, y: 28, color: '#eab308' },
      { name: 'Nubank', x: 92, y: 12, color: '#ef4444' },
      { name: 'Inter', x: 85, y: 18, color: '#f43f5e' },
      { name: 'Bancos Trad.', x: 88, y: 35, color: '#737373' },
      { name: 'Mercado Pago', x: 82, y: 22, color: '#14b8a6' },
      { name: 'Litipay', x: 25, y: 22, color: '#2dd4bf' },
      { name: 'Preks', x: 18, y: 15, color: '#f59e0b' },
      { name: 'Acura Capital', x: 28, y: 42, color: '#a78bfa' },
      { name: 'ComPre', x: 12, y: 10, color: '#78716c' },
      { name: 'Ativos Prec.', x: 32, y: 35, color: '#3b82f6' },
      { name: 'Judit', x: 48, y: 20, color: '#60a5fa' },
    ],
    swot: {
      title: 'Forças e Fragilidades Estruturais do Setor',
      strengths: [
        { text: 'R$ 115B TAM com crescimento 50%+ a.a.', priority: 'critica', leverage: 'Base para captura de valor em escala' },
        { text: 'Regulação favorável (CVM 175 + Reforma Tributária)', priority: 'importante', leverage: 'Vento a favor para estruturação de FIDCs' },
        { text: 'Demanda sistêmica não cíclica', priority: 'importante', leverage: 'Resiliência independente de cenário macro' },
        { text: 'Baixa penetração de plataformas digitais', priority: 'media', leverage: 'Oportunidade de disrupção via tecnologia' },
      ],
      weaknesses: [
        { text: 'Fragmentação da originação — 270K+ credores sem conexão', priority: 'critica', leverage: 'Integração digital como barreira de entrada' },
        { text: 'Ausência de padrão de precificação no mercado secundário', priority: 'importante', leverage: 'Spread de informação = margem para quem padronizar' },
        { text: 'Silos de serviços (jurídico ≠ financeiro ≠ tributário)', priority: 'critica', leverage: 'Integração vertical = vantagem competitiva duradoura' },
        { text: 'Regulação ainda em movimento — risco de mudança de regras', priority: 'media', leverage: 'Exige compliance ágil como competência central' },
      ],
      opportunities: [
        { text: 'Integração Banking + Tributária + Advocacia (modelo inédito)', priority: 'critica', leverage: 'Oceano azul — sem concorrente direto no curto prazo' },
        { text: 'Distribuição B2B2C via ecossistemas de ERP (Conta Azul, Omie)', priority: 'importante', leverage: 'Escala sem custo de aquisição direta' },
        { text: 'Compensação estruturada pós-reforma tributária', priority: 'importante', leverage: 'Demanda obrigatória por reestruturação fiscal' },
        { text: 'FIDC de varejo com cotas acessíveis (R$ 5K+)', priority: 'media', leverage: 'Novo pool de capital de investidores qualificados' },
      ],
      threats: [
        { text: 'Entrada de bancos tradicionais com capital ilimitado', priority: 'critica', leverage: 'Exige velocidade de execução e barreiras de relacionamento' },
        { text: 'Consolidação acelerada — líderes escalando 50%+ a.a.', priority: 'importante', leverage: 'Janela de catch-up se fechando rapidamente' },
        { text: 'Mudanças regulatórias imprevisíveis', priority: 'media', leverage: 'Diversificação de linhas como hedge natural' },
        { text: 'Novos entrantes com capital de venture', priority: 'media', leverage: 'Vantagem de conhecimento setorial vs. velocidade digital' },
      ],
    },
    gaps: {
      title: 'Espaços Vazios na Matriz Competitiva',
      items: [
        { title: 'Integração Vertical', description: 'Ninguém executa Banking + Tributação + Advocacia no mesmo fluxo. O cliente precisa de 3 a 4 fornecedores diferentes para resolver um problema integrado.' },
        { title: 'Distribuição B2B2C', description: 'Nenhum player desenvolveu presença em ecossistemas de ERP (Conta Azul, Omie, SAP). A distribuição ainda é reativa e baseada em relacionamento.' },
        { title: 'Transparência de Precificação', description: 'Mercado opera via propostas comerciais subjetivas. Ausência de tabela pública gera desconfiança e ineficiência de alocação.' },
        { title: 'FIDC de Varejo', description: 'Ausência de cotas acessíveis (R$ 5K+) para investidores qualificados. Mercado de capitais ainda restrito a grandes players institucionais.' },
      ],
    },
  },
  diagnostico: {
    headline: 'O Paradoxo BHG: Expertise Consolidada vs. Presença Fragmentada',
    subheadline: 'BHG possui a capacidade técnica e a estrutura para dominar o mercado, mas sua expressão digital opera em silos, diluindo a percepção de valor. Três gaps críticos explicam esse paradoxo.',
    matrix: {
      title: 'Posição de BHG na Matriz de Integração',
      description: 'O gap entre a capacidade instalada e a expressão de mercado.',
      dimensions: [
        { label: 'Especialização Jurídica', value: 'Muito Alta (CEO 30y)', status: 'exists' },
        { label: 'Integração Banking', value: 'Em expansão — base existente', status: 'exists' },
        { label: 'Integração Tributária', value: '10 anos de operação consolidada', status: 'exists' },
        { label: 'Plataforma Digital', value: 'Inexistente — operação em silos', status: 'critical', gap: 'GAP CRÍTICO #1' },
        { label: 'Marca e Posicionamento', value: 'Fragmentada — sem narrativa unificada', status: 'critical', gap: 'GAP CRÍTICO #2' },
        { label: 'Distribuição e Canais', value: 'Nenhum — 100% reativa', status: 'critical', gap: 'GAP CRÍTICO #3' },
      ],
    },
    swot: {
      title: 'Análise de Capacidade Interna BHG',
      strengths: [
        { text: 'CEO com 30 anos de contencioso de massa', priority: 'critica', leverage: 'Profundidade técnica como alicerce da tese' },
        { text: 'BHG Consultoria — 10 anos de operação tributária', priority: 'importante', leverage: 'Base para integração tributo-financeira' },
        { text: 'Escritório próprio desde 2012', priority: 'media', leverage: 'Estrutura consolidada para suportar crescimento' },
        { text: 'Acesso a ativos e relacionamentos no setor', priority: 'importante', leverage: 'Vantagem de originação vs. entrantes digitais' },
      ],
      weaknesses: [
        { text: 'Sites e marcas fragmentadas — zero unidade de comunicação', priority: 'critica', leverage: 'Unificação digital como alavanca de curto prazo' },
        { text: 'Falta de narrativa de marca e posicionamento de mercado', priority: 'critica', leverage: 'Reposicionamento como plataforma integrada' },
        { text: 'Operação manual — sem processos digitalizados', priority: 'importante', leverage: 'Automação como multiplicador de capacidade' },
        { text: 'Equipe jurídica reduzida para escala', priority: 'media', leverage: 'Tecnologia como alavanca de produtividade' },
      ],
      opportunities: [
        { text: 'Integração tributo-financeira como diferencial competitivo', priority: 'critica', leverage: 'Posicionamento único vs. Precato e Prêambulo' },
        { text: 'Reforma tributária como demanda puxada por serviços integrados', priority: 'importante', leverage: 'Vento a favor para estruturação de compensações' },
        { text: 'Distribuição B2B2C via ERPs e canais parceiros', priority: 'importante', leverage: 'Escala sem investimento em aquisição direta' },
        { text: 'Consolidação de mercado abre espaço para plataformas integradas', priority: 'media', leverage: 'Janela para capturar market share de players fragmentados' },
      ],
      threats: [
        { text: 'Expansão de competidores estabelecidos (Precato, Prêambulo)', priority: 'critica', leverage: 'Velocidade de execução como único diferencial temporal' },
        { text: 'Mudanças regulatórias que alterem o modelo de negócio', priority: 'importante', leverage: 'Flexibilidade de modelo como hedge regulatório' },
        { text: 'Consolidação acelerada pode fechar janela de oportunidade', priority: 'importante', leverage: 'Decisão de posicionamento nos próximos 12 meses' },
      ],
    },
  },
  tese: {
    headline: 'Por Que Integração Gera 3-5x Mais Valor',
    subheadline: 'Empresas integradas (banking + tributação + advocacia) multiplicam valuation por 3-5x versus prestadores de serviços isolados. A tese BHG é capturar esse prêmio via orquestração de jornada.',
    synergy: {
      title: 'Interseção de Serviços: Onde o Capital é Otimizado',
      description: 'Banking + Tributária + Patrimônio não são linhas de negócio separadas — são engrenagens de uma mesma máquina de criação de valor.',
      elements: [
        { label: 'Banking', color: 'blue' },
        { label: 'Tributária', color: 'purple' },
        { label: 'Patrimônio', color: 'emerald' },
      ],
      intersection: {
        label: 'Interseção Estratégica',
        description: 'O cliente que transita por todos os três serviços tem LTV 5x maior, CAC 60% menor e taxa de retenção superior a 90%.',
      },
      example: {
        title: 'Exemplo de Orquestração',
        steps: [
          'Ativo: Precatório R$ 1M + Débito Tributário R$ 1M',
          'Crédito (70% LTV) + Compensação Estruturada → +R$ 200K de ganho líquido',
          'Excedente financeiro → Gestão Patrimonial → Taxa de performance recorrente',
          'Resultado: 3 fluxos de receita de um mesmo cliente, sem custo adicional de aquisição',
        ],
      },
    },
    repositioning: {
      title: 'Mudança de Modelo: De Prestador a Plataforma',
      description: 'Múltiplos de valuation refletem o modelo de negócio: prestadores transacionais são avaliados em 2-3x EBITDA; plataformas integradas alcançam 8-12x EBITDA.',
      from: 'Prestador de Serviços (Transacional — 2-3x EBITDA)',
      to: 'Plataforma de Inteligência (Lock-in — 8-12x EBITDA)',
      valueProp: 'A transição de vender serviços fragmentados para orquestrar a jornada completa do cliente multiplica o valor da empresa.',
    },
    valueChain: {
      title: 'Jornada do Cliente: Loop de Criação de Valor',
      description: 'Do diagnóstico ao patrimônio — cada etapa adiciona uma camada de receita e aprofunda o lock-in do cliente.',
      stages: [
        { label: 'Mapeamento', input: 'Diagnóstico de Ativos', revenue1: 'Setup Fee', revenue2: 'Análise de Risco', revenue3: 'Zero' },
        { label: 'Liquidez', input: 'Antecipação/Crédito', revenue1: 'Spread de Antecipação', revenue2: 'Taxa de Estruturação', revenue3: 'Zero' },
        { label: 'Otimização', input: 'Eficiência Fiscal', revenue1: 'Fee de Êxito (Compensação)', revenue2: 'Consultoria Tributária', revenue3: 'Zero' },
        { label: 'Patrimônio', input: 'Gestão de Excedente', revenue1: 'Management Fee', revenue2: 'Performance Fee', revenue3: 'AUM Residual' },
      ],
    },
    roadmap: {
      title: 'Roadmap de Evolução: Rumo à Plataforma',
      description: 'A transição de modelo deve ser executada de forma faseada para mitigar riscos operacionais e maximizar a captura de valor.',
      phases: [
        {
          phase: 'Fase 1: Fundação (0-6 meses)',
          focus: 'Identidade & Infraestrutura',
          milestones: ['Unificação de Marcas e Narrativa Estratégica', 'Lançamento do MVP Digital (Diagnóstico)', 'Estruturação do primeiro veículo de liquidez'],
          goal: 'Estabelecer presença de mercado e validar a tração do modelo integrado.'
        },
        {
          phase: 'Fase 2: Expansão (6-12 meses)',
          focus: 'Distribuição & Escala',
          milestones: ['Integração com Ecossistemas B2B (ERPs)', 'Lançamento de FIDCs de Varejo', 'Automação do fluxo Tributário $\rightarrow$ Financeiro'],
          goal: 'Escalar a originação via canais parceiros e otimizar o custo de aquisição (CAC).'
        },
        {
          phase: 'Fase 3: Ecossistema (12-24 meses)',
          focus: 'Liderança & Lock-in',
          milestones: ['Lançamento da Gestão Patrimonial Integrada', 'Expansão para novos ativos judiciais', 'Consolidação do triângulo Banking-Tributo-Jurídico'],
          goal: 'Alcançar o valuation de Plataforma (8-12x EBITDA) via retenção estratégica do cliente.'
        }
      ]
    },
    architecture: {
      title: 'Arquitetura da Solução BHG',
      subtitle: 'Cinco pilares de negócio suportados por uma base tecnológica unificada',
      pillars: [
        { label: 'Crédito & Antecipação', icon: 'credit', color: 'blue', desc: 'Liquidez imediata via FIDC próprio e crédito com garantia de precatório' },
        { label: 'Compensação Tributária', icon: 'tax', color: 'purple', desc: 'Estruturação de compensações de débitos com precatórios (ICMS, ISS, INSS, IRPJ, CSLL)' },
        { label: 'Banking & Conta PJ', icon: 'bank', color: 'emerald', desc: 'Conta digital, pagamentos, gestão de recebíveis e infraestrutura bancária licenciada' },
        { label: 'Advocacia & Originação', icon: 'gavel', color: 'amber', desc: 'Estruturação jurídica, cessão de créditos, habilitação e due diligence processual' },
        { label: 'Patrimônio & Investimento', icon: 'asset', color: 'indigo', desc: 'FIDCs, gestão de carteira, tokenização e alocação para investidores qualificados' }
      ],
      foundation: {
        label: 'Tecnologia, IA & Dados',
        description: 'Plataforma unificada de dados jurídicos + IA especializada em precatórios + infraestrutura blockchain para rastreabilidade e contratos digitais',
        capabilities: [
          'IA para precificação dinâmica e due diligence automatizada',
          'Blockchain (Hathor/Ethereum) para registro imutável de cessões',
          'API de integração com tribunais, ERPs e parceiros bancários',
          'CRM especializado (white-label Judit Miner) para gestão de pipeline',
          'Dashboard unificado do cliente: precatórios, débitos, investimentos'
        ]
      }
    }
  },
  modelos: {
    headline: 'Três Caminhos, Três Futuros: Escolha Seu Modelo',
    subheadline: 'Cada arquétipo estratégico representa uma aposta diferente em margem, escala e valuation. A escolha errada pode custar 10x o valor potencial da empresa.',
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
          { type: 'pros', text: 'Sua prioridade é margem, não escala?' },
          { type: 'pros', text: 'Seu diferencial é profundidade técnica, não alcance?' },
          { type: 'cons', text: 'Você aceita ser avaliado em 2-3x EBITDA?' },
        ],
        description: 'Foco em operações de alta complexidade e profundidade de relacionamento. Lucro elevado, escala limitada.',
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
          { type: 'pros', text: 'Você quer crescer 10x em 5 anos?' },
          { type: 'pros', text: 'Seu ativo é tecnologia e processos, não relacionamento?' },
          { type: 'cons', text: 'Você aceita depender de canais parceiros para distribuição?' },
        ],
        description: 'Atua como infraestrutura de distribuição para parceiros de ecossistema. Equilíbrio entre escala e margem.',
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
          { type: 'pros', text: 'Você quer construir o sistema operacional do mercado?' },
          { type: 'pros', text: 'Seu objetivo é valuation máximo (8-12x EBITDA)?' },
          { type: 'cons', text: 'Você está preparado para a complexidade operacional de integrar tudo?' },
        ],
        description: 'O sistema operacional que retém o cliente em todas as dimensões financeiras. Valuation máximo, execução complexa.',
      },
    ],
    conclusion: 'Não existe modelo certo ou errado — existe o modelo certo para sua visão, seu capital e sua tolerância ao risco. O erro fatal é não escolher.',
  },
  conclusao: {
    headline: 'Conclusão',
    subheadline: 'O caminho para a liderança no mercado de ativos judiciais',
    marketInflection: {
      title: 'O Mercado em Inflexão',
      description: 'O mercado de precatórios está em inflexão tecnológica e institucional. As startups que estão vencendo combinam quatro pilares fundamentais:',
      pillars: [
        { title: 'Tecnologia', items: ['IA para análise de processos', 'Blockchain para rastreabilidade', 'SaaS para gestão de carteiras'] },
        { title: 'Capital', items: ['Acesso a FIDCs estruturados', 'Parcerias com Bancos', 'Gestoras de Ativos'] },
        { title: 'Canais', items: ['Rede de Advogados', 'Parceiros Tributários', 'Marketplaces de Ativos'] },
        { title: 'Dados', items: ['Due diligence automatizada', 'Precificação dinâmica', 'Monitoramento em tempo real'] }
      ]
    },
    recommendation: {
      title: 'Recomendação Estratégica para o Grupo BHG',
      warning: 'Não entrar como "mais uma fintech de antecipação" — o mercado já tem Precato, PrecPago, Ativos. A concorrência é intensa e os players estão se consolidando.',
      strategy: 'Posicionar-se como o Orquestrador do Ecossistema de Ativos',
      details: 'Enquanto os concorrentes focam na transação (compra e venda), o Grupo BHG deve focar na Jornada do Ativo. A oportunidade reside na integração vertical total.',
      points: [
        { label: 'Do Ativo ao Capital', text: 'Integrar a originação jurídica com a liquidez bancária imediata.' },
        { label: 'Do Débito ao Crédito', text: 'Transformar passivos tributários em eficiência fiscal via compensação estruturada.' },
        { label: 'Da Transação à Gestão', text: 'Evoluir de um "broker" para um gestor de patrimônio judicial.' }
      ],
      conclusion: 'A vitória não virá da escala de capital, mas da superioridade da orquestração: ser a plataforma onde o cliente resolve toda a sua complexidade judicial em um único fluxo.'
    }
  }
};

