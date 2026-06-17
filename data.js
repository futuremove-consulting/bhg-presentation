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

