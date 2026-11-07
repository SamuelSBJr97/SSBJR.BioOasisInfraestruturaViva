export type SupportedLanguage = 'pt-BR' | 'en-US' | 'es-ES';

export interface TranslationDictionary {
  topBanner: string;
  navbar: {
    navLinks: {
      hero: string;
      paradigm: string;
      regional: string;
      roadmap: string;
      traceability: string;
      contact: string;
    };
    cta: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleGradient: string;
    titleSuffix: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    disclaimer: string;
    stats: {
      polesCount: string;
      polesMeta: string;
      polesDesc: string;
      speciesCount: string;
      speciesMeta: string;
      speciesDesc: string;
      nurseriesCount: string;
      nurseriesMeta: string;
      nurseriesDesc: string;
    };
    mapLegend: string;
    mapPoles: {
      norte: string;
      nordeste: string;
      centroOeste: string;
      sudeste: string;
      sul: string;
    };
    poleStatusPilot: string;
    poleStatusTarget: string;
    speciesLabel: string;
    nurseriesLabel: string;
  };
  paradigm: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    traditional: {
      badge: string;
      title: string;
      desc: string;
      item1Title: string;
      item1Desc: string;
      item2Title: string;
      item2Desc: string;
      item3Title: string;
      item3Desc: string;
    };
    oasis: {
      badge: string;
      title: string;
      highlight: string;
      desc: string;
      mod1Title: string;
      mod1Desc: string;
      mod2Title: string;
      mod2Desc: string;
      mod3Title: string;
      mod3Desc: string;
    };
  };
  regional: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    pillars: {
      banco: {
        title: string;
        badge: string;
        shortDesc: string;
        fullDesc: string;
        specs: { label: string; value: string }[];
        role: string;
        sla: string;
      };
      recuperacao: {
        title: string;
        badge: string;
        shortDesc: string;
        fullDesc: string;
        specs: { label: string; value: string }[];
        role: string;
        sla: string;
      };
      estoque: {
        title: string;
        badge: string;
        shortDesc: string;
        fullDesc: string;
        specs: { label: string; value: string }[];
        role: string;
        sla: string;
      };
    };
    humanRole: {
      tag: string;
      title: string;
      desc: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
  };
  roadmap: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    phase1: {
      badge: string;
      status: string;
      title: string;
      desc: string;
      items: string[];
    };
    phase2: {
      badge: string;
      status: string;
      title: string;
      desc: string;
      items: string[];
    };
    phase3: {
      badge: string;
      status: string;
      title: string;
      desc: string;
      items: string[];
    };
    phase4: {
      badge: string;
      status: string;
      title: string;
      desc: string;
      items: string[];
    };
  };
  traceability: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    scanner: {
      prototypeBadge: string;
      chipBadge: string;
      cycleButton: string;
      fields: {
        species: string;
        batch: string;
        origin: string;
        status: string;
        targetMetric: string;
      };
    };
    saas: {
      badge: string;
      title: string;
      highlight: string;
      desc: string;
      bullet1Title: string;
      bullet1Desc: string;
      bullet2Title: string;
      bullet2Desc: string;
      bullet3Title: string;
      bullet3Desc: string;
    };
  };
  pilotCalculator: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    extensionLabel: string;
    applicationLabel: string;
    options: {
      slope: string;
      water: string;
      phytoremediation: string;
    };
    results: {
      plantsTarget: string;
      nurseriesTarget: string;
      readinessTime: string;
      readinessValue: string;
      co2Target: string;
    };
    cta: string;
  };
  footer: {
    desc: string;
    dna: string;
    platformTitle: string;
    links: {
      hero: string;
      paradigm: string;
      regional: string;
      roadmap: string;
      traceability: string;
      telemetry: string;
      soonBadge: string;
    };
    communityTitle: string;
    communityLinks: {
      nurseries: string;
      engineers: string;
      contracts: string;
      manifesto: string;
    };
    lead: {
      title: string;
      desc: string;
      options: {
        enterprise: string;
        nursery: string;
        government: string;
        researcher: string;
      };
      placeholder: string;
      button: string;
      successTitle: string;
      successDesc: string;
    };
    rights: string;
    bottomLinks: {
      governance: string;
      data: string;
      security: string;
    };
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  'pt-BR': {
    topBanner: 'PROJETO EM DESENVOLVIMENTO // FASE PILOTO & ESTRUTURAÇÃO DE PARCERIAS',
    navbar: {
      navLinks: {
        hero: 'Início',
        paradigm: 'Paradigma',
        regional: 'Oásis Regionais',
        roadmap: 'Roadmap',
        traceability: 'Rastreabilidade',
        contact: 'Seja Parceiro',
      },
      cta: 'Apoiar o Projeto',
    },
    hero: {
      badge: 'Projeto em Desenvolvimento — Fase de Estruturação e Piloto',
      titleMain: 'Rede Oásis —',
      titleGradient: 'Infraestrutura Biológica',
      titleSuffix: 'Descentralizada',
      subtitle:
        'Concepção de uma rede de infraestrutura verde viva para proteção de ativos de missão crítica. Atualmente em fase inicial de estruturação territorial e captação de viveiros parceiros.',
      ctaPrimary: 'Conhecer a Metodologia',
      ctaSecondary: 'Ver Metas Regionais',
      disclaimer: 'Status Atual: Projeto em fase de modelagem conceitual e piloto. Os polos abaixo representam as metas geográficas de implantação da rede.',
      stats: {
        polesCount: '0',
        polesMeta: 'Meta: 5 Polos',
        polesDesc: 'Em fase de planejamento territorial',
        speciesCount: '0',
        speciesMeta: 'Meta: 150+ Nativas',
        speciesDesc: 'Em fase de catalogação científica',
        nurseriesCount: '0',
        nurseriesMeta: 'Meta: Rede Nacional',
        nurseriesDesc: 'Chamada aberta para viveiristas pioneiros',
      },
      mapLegend: 'Mapa do Brasil: Metas geográficas de expansão e polo piloto em modelagem',
      mapPoles: {
        norte: 'Meta: Polo Norte',
        nordeste: 'Meta: Polo Nordeste',
        centroOeste: 'Meta: Polo Centro-Oeste',
        sudeste: 'Polo Piloto Sudeste',
        sul: 'Meta: Polo Sul',
      },
      poleStatusPilot: 'Polo Piloto em Estruturação',
      poleStatusTarget: 'Meta de Expansão Territorial',
      speciesLabel: 'Espécies (Meta)',
      nurseriesLabel: 'Viveiros (Meta)',
    },
    paradigm: {
      tag: 'Mudança de Paradigma',
      title: 'De Ornamental para',
      highlight: 'Missão Crítica',
      subtitle:
        'Nossa proposta de valor: transformar a vegetação de mero item decorativo para módulos de engenharia biológica projetada.',
      traditional: {
        badge: 'Modelo Tradicional Atual',
        title: 'Exportação Ornamental',
        desc: 'Espécies tratadas como commodities decorativas de baixo valor técnico. Cadeia desarticulada, sem garantias de desempenho mecânico ou estabilização de encostas.',
        item1Title: 'Produto Commodity Passivo',
        item1Desc:
          'Comercialização pontual sem projeto geotécnico de compatibilização com a infraestrutura civil.',
        item2Title: 'Cadeia Desconectada',
        item2Desc:
          'Ausência de rastreabilidade de procedência genética, gerando altos índices de perdas após o plantio.',
        item3Title: 'Incerteza Operacional',
        item3Desc:
          'Sem métricas de retenção ou coesão radicular, resultando em retrabalho para concessionárias.',
      },
      oasis: {
        badge: 'Modelo Rede Oásis (Em Desenvolvimento)',
        title: 'Engenharia para',
        highlight: 'Missão Crítica',
        desc: 'Módulos padronizados com cálculo de ancoragem geotécnica, filtragem e retenção para proteger estradas, ferrovias e bacias industriais.',
        mod1Title: 'Contenção de Encostas & Taludes (Meta)',
        mod1Desc:
          'Projeção de sistemas radiculares profundos de alta resistência à tração contra deslizamentos e erosão em obras lineares.',
        mod2Title: 'Depuração Hídrica & Wetlands (Meta)',
        mod2Desc:
          'Modelagem de leitos filtrantes com macrófitas aquáticas para retenção biológica de efluentes e drenagem pesada.',
        mod3Title: 'Fitorremediação de Solos (Meta)',
        mod3Desc:
          'Seleção de espécies hiperacumuladoras para despoluição de áreas industriais e sítios minerários degradados.',
      },
    },
    regional: {
      tag: 'Oásis Regionais Projetados',
      title: 'Os Três Pilares da',
      highlight: 'Rede em Construção',
      subtitle:
        'A estrutura metodológica que pretendemos implantar progressivamente nos cinco polos regionais do Brasil.',
      pillars: {
        banco: {
          title: 'Banco Estratégico (Objetivo)',
          badge: 'Preservação & Genética',
          shortDesc:
            'Meta: constituir um repositório vivo de matrizes nativas catalogadas por bioma.',
          fullDesc:
            'O objetivo do Banco Estratégico é selecionar e mapear plantas-matriz de alta resiliência climática em cada bioma brasileiro, criando uma base genética confiável antes de qualquer intervenção de engenharia.',
          specs: [
            { label: 'Status Atual', value: 'Em Mapeamento Científico' },
            { label: 'Meta de Linhagens', value: '150+ Espécies Alvo' },
            { label: 'Protocolo de Coleta', value: 'Em Elaboração' },
            { label: 'Rede Planejada', value: '5 Polos Conectados' },
          ],
          role: 'Viveiristas pioneiros serão capacitados para identificar, coletar e multiplicar sementes de matrizes nativas certificadas.',
          sla: 'Meta operacional pós-implantação: fornecimento ágil de germoplasma sob demanda técnica.',
        },
        recuperacao: {
          title: 'Recuperação Nativa (Objetivo)',
          badge: 'Restauração de Ecossistemas',
          shortDesc:
            'Meta: desenvolver metodologias aceleradas de consórcio ecológico.',
          fullDesc:
            'Planejamos protocolos que combinam espécies de rápido enraizamento com flora florestal permanente, visando recompor áreas críticas em cronogramas compatíveis com obras de engenharia.',
          specs: [
            { label: 'Status Atual', value: 'Fase de Testes Piloto' },
            { label: 'Meta de Sobrevivência', value: '> 90% em Campo' },
            { label: 'Monitoramento', value: 'IoT em Prototipagem' },
            { label: 'Abordagem', value: 'Sucessão Multi-estrato' },
          ],
          role: 'Técnicos de base farão o plantio direcionado e o acompanhamento fitossanitário periódico nos sítios de validação.',
          sla: 'Meta de atendimento emergencial em planejamento para intervenções pós-desastre.',
        },
        estoque: {
          title: 'Estoque Vivo Plug & Play (Objetivo)',
          badge: 'Prontidão Operacional',
          shortDesc:
            'Meta: manter lotes vivos pré-enraizados em viveiros para acionamento rápido.',
          fullDesc:
            'A meta principal da Rede Oásis é eliminar a espera de meses para germinação: viveiros parceiros manterão módulos vivos prontos para socorrer encostas e drenagens em prazos emergenciais.',
          specs: [
            { label: 'Status Atual', value: 'Desenho de Manta / Módulo' },
            { label: 'Meta de Prontidão', value: 'Disponibilidade em 48h' },
            { label: 'Estrutura Radicular', value: 'Mantas Modulares' },
            { label: 'Fixação em Campo', value: 'Fixação Mecânica Direta' },
          ],
          role: 'Viveiros parceiros serão remunerados para manter cotas de módulos em estado de prontidão e hidratação controlada.',
          sla: 'Meta de logística rápida desenhada para frotas regionais.',
        },
      },
      humanRole: {
        tag: 'Construção Coletiva',
        title: 'Engenheiros Biológicos de Base',
        desc: 'O projeto busca valorizar viveiristas e produtores locais como elos centrais da infraestrutura, proporcionando treinamento técnico e inclusão em contratos de longo prazo.',
        bullet1: 'Chamada aberta para viveiros que desejam se tornar polos piloto',
        bullet2: 'Capacitação em protocolos de rastreabilidade e controle de qualidade',
        bullet3: 'Remuneração justa e previsível vinculada a contratos corporativos',
      },
    },
    roadmap: {
      tag: 'Linha do Tempo do Projeto',
      title: 'Roadmap de',
      highlight: 'Desenvolvimento e Metas',
      subtitle:
        'Conheça os estágios planejados para sair do zero até a plena conexão dos cinco polos da rede nacional.',
      phase1: {
        badge: 'Fase 01',
        status: 'Fase Atual (Em Andamento)',
        title: 'Concepção & Modelagem Técnica',
        desc: 'Estruturação conceitual, modelagem botânica dos módulos e abertura do cadastro para viveiros parceiros pioneiros.',
        items: [
          'Desenho dos módulos geotécnicos e hídricos',
          'Mapeamento inicial das 150 espécies prioritárias',
          'Abertura de parcerias com viveiristas no Sudeste',
          'Validação da arquitetura digital de rastreabilidade',
        ],
      },
      phase2: {
        badge: 'Fase 02',
        status: 'Meta 2026 Q3-Q4',
        title: 'Polo Piloto Sudeste (Validação)',
        desc: 'Implantação da primeira área experimental em campo na Serra do Mar para testar retenção mecânica e telemetria.',
        items: [
          'Instalação de lote piloto em talude de encosta',
          'Homologação dos primeiros 3 viveiros fundadores',
          'Testes de campo com chips RFID/QR em mudas',
          'Coleta de dados de coesão radicular e umidade',
        ],
      },
      phase3: {
        badge: 'Fase 03',
        status: 'Meta 2027',
        title: 'Primeiros Contratos SaaS Piloto',
        desc: 'Validação comercial do modelo de contratos pré-faturados com concessionárias rodoviárias e indústrias parceiras.',
        items: [
          'Acordo piloto de garantia biológica com concessionária',
          'Auditoria digital fitossanitária via aplicativo mobile',
          'Remuneração recorrente aos viveiristas homologados',
          'Emissão de primeiros relatórios de conformidade ESG',
        ],
      },
      phase4: {
        badge: 'Fase 04',
        status: 'Meta 2027-2028',
        title: 'Expansão Nacional (5 Polos)',
        desc: 'Ativação progressiva dos Polos Norte, Nordeste, Centro-Oeste e Sul, conectando a infraestrutura viva do Brasil.',
        items: [
          'Credenciamento de 50+ viveiros em todos os biomas',
          'Ativação do banco estratégico interligado em nuvem',
          'Logística de atendimento emergencial em 48 horas',
          'Rede operando em escala nacional descentralizada',
        ],
      },
    },
    traceability: {
      tag: 'Governança & Rastreabilidade',
      title: 'Cada Planta,',
      highlight: 'Um Ativo Rastreável',
      subtitle:
        'Conceito da plataforma de governança digital em desenvolvimento para garantir a procedência e integridade de cada lote biológico.',
      scanner: {
        prototypeBadge: 'Protótipo de Validação Tecnológica (Mockup)',
        chipBadge: 'Simulação RFID / NFC',
        cycleButton: 'Alternar Amostra de Teste',
        fields: {
          species: 'Espécie em Estudo',
          batch: 'Lote de Teste',
          origin: 'Ambiente de Testes',
          status: 'Status',
          targetMetric: 'Métrica Projetada',
        },
      },
      saas: {
        badge: 'Modelo de Negócio Projetado',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'Nossa visão de modelo econômico: substituir compras avulsas por contratos recorrentes de garantia de infraestrutura viva, onde o cliente paga pela disponibilidade e estabilidade biológica.',
        bullet1Title: 'Contratos Pré-Faturados (Visão Econômica)',
        bullet1Desc:
          'Proposta de remuneração antecipada aos viveiristas parceiros para custear a manutenção dos viveiros e garantir estoque perene a concessionárias e indústrias.',
        bullet2Title: 'Rastreabilidade QR / RFID (Arquitetura Técnica)',
        bullet2Desc:
          'Planejamento de identificação individual por lote para assegurar conformidade ambiental, procedência de sementes e auditoria digital de plantio.',
        bullet3Title: 'Telemetria Integrada (Roadmap de Produto)',
        bullet3Desc:
          'Desenvolvimento futuro de sensores de umidade e tensão para geração de relatórios de conformidade e indicadores de mitigação de riscos climáticos.',
      },
    },
    pilotCalculator: {
      tag: 'Simulador de Projeto Piloto',
      title: 'Dimensionamento de',
      highlight: 'Área Experimental',
      subtitle:
        'Simule a projeção de recursos biológicos necessários para estruturar um lote piloto de validação em sua concessão ou município.',
      extensionLabel: 'Extensão Linear Alvo (Metros)',
      applicationLabel: 'Aplicação de Engenharia em Estudo',
      options: {
        slope: 'Contenção de Encosta / Talude Geotécnico',
        water: 'Depuração Hídrica / Wetlands Construídos',
        phytoremediation: 'Fitorremediação de Solos & Mineração',
      },
      results: {
        plantsTarget: 'Mudas Projetadas para o Lote Piloto',
        nurseriesTarget: 'Viveiros Locais Necessários para Suporte',
        readinessTime: 'Tempo Estimado de Enraizamento Modular',
        readinessValue: '6 a 12 semanas',
        co2Target: 'Meta de Absorção Estimada de CO2/ano',
      },
      cta: 'Solicitar Proposta para Projeto Piloto',
    },
    footer: {
      desc: 'Projeto em desenvolvimento de infraestrutura biológica descentralizada para resiliência territorial e proteção de ativos críticos no Brasil.',
      dna: 'Projeto Aberto à Parcerias e Pilotos 🇧🇷',
      platformTitle: 'Projeto',
      links: {
        hero: 'Início',
        paradigm: 'Mudança de Paradigma',
        regional: 'Metas Regionais',
        roadmap: 'Roadmap de Fases',
        traceability: 'Rastreabilidade (Protótipo)',
        telemetry: 'Telemetria',
        soonBadge: 'Em Breve',
      },
      communityTitle: 'Faça Parte',
      communityLinks: {
        nurseries: 'Cadastro de Viveiros Pioneiros',
        engineers: 'Engenheiros & Pesquisadores',
        contracts: 'Propostas de Piloto Corporativo',
        manifesto: 'Manifesto do Projeto',
      },
      lead: {
        title: 'Participe do Desenvolvimento',
        desc: 'Estamos formando a rede inicial de viveiros parceiros, pesquisadores e empresas interessadas em projetos-piloto. Cadastre-se para colaborar.',
        options: {
          enterprise: 'Empresa / Concessionária (Interesse em Piloto)',
          nursery: 'Viveirista (Quero ser Viveiro Piloto)',
          government: 'Órgão Público / Defesa Civil',
          researcher: 'Pesquisador / Especialista Botânico',
        },
        placeholder: 'seu@email.com',
        button: 'Manifestar Interesse',
        successTitle: 'Interesse Registrado!',
        successDesc: 'Obrigado por apoiar a construção da Rede Oásis. Entraremos em contato para apresentar os passos do piloto.',
      },
      rights:
        '© 2026 Rede Oásis. Projeto em fase de estruturação e desenvolvimento. Todas as métricas operacionais representam metas do plano de negócio.',
      bottomLinks: {
        governance: 'Termos de Parceria',
        data: 'Privacidade de Dados',
        security: 'Transparência',
      },
    },
  },

  'en-US': {
    topBanner: 'PROJECT IN DEVELOPMENT // PILOT & PARTNERSHIP STRUCTURING PHASE',
    navbar: {
      navLinks: {
        hero: 'Home',
        paradigm: 'Paradigm Shift',
        regional: 'Regional Targets',
        roadmap: 'Roadmap',
        traceability: 'Traceability',
        contact: 'Become a Partner',
      },
      cta: 'Support the Project',
    },
    hero: {
      badge: 'Project in Development — Pilot & Structuring Phase',
      titleMain: 'Oasis Network —',
      titleGradient: 'Biological Infrastructure',
      titleSuffix: 'Decentralized',
      subtitle:
        'Conception of a living green infrastructure network protecting mission-critical assets. Currently in early territorial planning and partner nursery onboarding phase.',
      ctaPrimary: 'Explore the Methodology',
      ctaSecondary: 'View Regional Targets',
      disclaimer: 'Current Status: Project in conceptual modeling and pilot phase. Regional hubs below represent our geographical deployment goals.',
      stats: {
        polesCount: '0',
        polesMeta: 'Target: 5 Hubs',
        polesDesc: 'Territorial planning phase',
        speciesCount: '0',
        speciesMeta: 'Target: 150+ Native',
        speciesDesc: 'Scientific cataloging phase',
        nurseriesCount: '0',
        nurseriesMeta: 'Target: National Network',
        nurseriesDesc: 'Open call for pioneer nurseries',
      },
      mapLegend: 'Brazil Map: Geographical expansion targets and pilot hub modeling',
      mapPoles: {
        norte: 'Target: North Hub',
        nordeste: 'Target: Northeast Hub',
        centroOeste: 'Target: Midwest Hub',
        sudeste: 'Southeast Pilot Hub',
        sul: 'Target: South Hub',
      },
      poleStatusPilot: 'Pilot Hub Under Structuring',
      poleStatusTarget: 'Territorial Expansion Target',
      speciesLabel: 'Species (Target)',
      nurseriesLabel: 'Nurseries (Target)',
    },
    paradigm: {
      tag: 'Paradigm Shift',
      title: 'From Ornamental to',
      highlight: 'Mission-Critical',
      subtitle:
        'Our core value proposal: transforming plant trade from decorative items into standardized biological engineering modules.',
      traditional: {
        badge: 'Current Traditional Model',
        title: 'Ornamental Export',
        desc: 'Plants traded as low-value decorative consumables. Unconnected supply chains without mechanical shear testing or slope anchoring guarantees.',
        item1Title: 'Passive Commodity Product',
        item1Desc:
          'Spot commercialization without geotechnical compatibility with civil infrastructure works.',
        item2Title: 'Disconnected Chain',
        item2Desc:
          'Lack of genetic origin tracking, causing high seedling mortality after field installation.',
        item3Title: 'Operational Uncertainty',
        item3Desc:
          'No quantitative root tensile metrics, forcing repeated rework and expenditures for concessionaires.',
      },
      oasis: {
        badge: 'Oasis Network Model (In Development)',
        title: 'Engineering for',
        highlight: 'Mission-Critical',
        desc: 'Standardized modules engineered for geotechnical slope shear resistance, water depuration, and contaminated soil remediation.',
        mod1Title: 'Slope & Embankment Containment (Target)',
        mod1Desc:
          'Deep-root tensile anchoring models protecting linear highway, railway, and mining embankments.',
        mod2Title: 'Water Depuration & Wetlands (Target)',
        mod2Desc:
          'Constructed wetlands modeling utilizing aquatic macrophytes for industrial runoff filtration.',
        mod3Title: 'Soil Phytoremediation (Target)',
        mod3Desc:
          'Calibrated hyperaccumulator plant matrices neutralizing heavy metals in mining and industrial sites.',
      },
    },
    regional: {
      tag: 'Projected Regional Oases',
      title: 'The Three Pillars of the',
      highlight: 'Network in Construction',
      subtitle:
        'The methodological architecture we plan to progressively deploy across five macro-regions of Brazil.',
      pillars: {
        banco: {
          title: 'Strategic Seed Bank (Goal)',
          badge: 'Preservation & Genetics',
          shortDesc:
            'Target: establish a living repository of certified native parent plants per biome.',
          fullDesc:
            'The Strategic Bank aims to screen and map high-resilience mother trees across each Brazilian biome, creating a dependable genetic foundation prior to field deployments.',
          specs: [
            { label: 'Current Status', value: 'Scientific Mapping Phase' },
            { label: 'Target Lineages', value: '150+ Priority Species' },
            { label: 'Collection Protocol', value: 'In Development' },
            { label: 'Planned Network', value: '5 Interconnected Hubs' },
          ],
          role: 'Pioneer nurseries will be trained to identify, harvest, and propagate certified indigenous genetics.',
          sla: 'Post-launch operational target: reliable germplasm provision on technical demand.',
        },
        recuperacao: {
          title: 'Native Restoration (Goal)',
          badge: 'Ecological Restoration',
          shortDesc:
            'Target: develop accelerated consortium ecological succession methodologies.',
          fullDesc:
            'We plan protocols combining fast-rooting pioneer species with permanent canopy trees to restore critical ground within civil engineering timelines.',
          specs: [
            { label: 'Current Status', value: 'Pilot Testing Phase' },
            { label: 'Target Survival', value: '> 90% in Field' },
            { label: 'Monitoring', value: 'IoT in Prototyping' },
            { label: 'Approach', value: 'Multi-strata Succession' },
          ],
          role: 'Field technicians will execute precision planting and phytosanitary monitoring across validation plots.',
          sla: 'Emergency intervention response targets planned for post-disaster stability.',
        },
        estoque: {
          title: 'Living Inventory Plug & Play (Goal)',
          badge: 'Operational Readiness',
          shortDesc:
            'Target: keep pre-rooted living vegetation mats in nurseries for instant dispatch.',
          fullDesc:
            'Our primary goal is eliminating the multi-month delay of growing plants from seeds: partner nurseries will hold living bio-modules ready to reinforce slopes on short notice.',
          specs: [
            { label: 'Current Status', value: 'Mat & Module Engineering' },
            { label: 'Readiness Target', value: '48h Dispatch Goal' },
            { label: 'Root Structure', value: 'Geotextile Bio-Mats' },
            { label: 'Field Anchoring', value: 'Direct Mechanical Anchoring' },
          ],
          role: 'Partner nurseries will receive recurring capacity payments to maintain conditioned modular stocks.',
          sla: 'Fast logistics protocols designed for regional transit.',
        },
      },
      humanRole: {
        tag: 'Collective Construction',
        title: 'Grassroots Biological Engineers',
        desc: 'The project elevates local nursery operators and botanists as central stakeholders, offering technical onboarding and long-term contract inclusion.',
        bullet1: 'Open call for nurseries interested in becoming pilot nodes',
        bullet2: 'Training on traceability protocols and certified quality control',
        bullet3: 'Predictable compensation linked to multi-year corporate contracts',
      },
    },
    roadmap: {
      tag: 'Project Timeline',
      title: 'Roadmap of',
      highlight: 'Development & Milestones',
      subtitle:
        'Discover the planned stages to transition from zero to the full national interconnection of the five regional hubs.',
      phase1: {
        badge: 'Phase 01',
        status: 'Current Phase (In Progress)',
        title: 'Conception & Technical Modeling',
        desc: 'Conceptual framework, botanical module modeling, and opening onboarding for pioneer nursery partners.',
        items: [
          'Design of geotechnical and water depuration bio-mats',
          'Initial mapping of 150 priority native species',
          'Opening partnership outreach with nurseries in the Southeast',
          'Validation of digital traceability data architecture',
        ],
      },
      phase2: {
        badge: 'Phase 02',
        status: 'Target 2026 Q3-Q4',
        title: 'Southeast Pilot Hub (Field Trial)',
        desc: 'Deployment of the first experimental slope in Serra do Mar to test root tensile shear and field telemetry.',
        items: [
          'Installation of pilot trial on steep geotechnical slope',
          'Certification of first 3 founding partner nurseries',
          'Field trials with RFID/QR tags on living seedlings',
          'Sensor data collection for root shear and moisture',
        ],
      },
      phase3: {
        badge: 'Phase 03',
        status: 'Target 2027',
        title: 'First Commercial Pilot Contracts',
        desc: 'Commercial validation of pre-billed contracts with highway operators, mining concessions, and industrial partners.',
        items: [
          'Pilot biological capacity agreement with highway operator',
          'Mobile app-assisted phytosanitary inspection audits',
          'Recurring capacity retainer payouts to partner nurseries',
          'Publication of auditable ESG risk-reduction reports',
        ],
      },
      phase4: {
        badge: 'Phase 04',
        status: 'Target 2027-2028',
        title: 'National Expansion (5 Regional Hubs)',
        desc: 'Progressive activation of North, Northeast, Midwest, and South Hubs, establishing Brazil’s live infrastructure grid.',
        items: [
          'Onboarding of 50+ partner nurseries across all biomes',
          'Full activation of cloud-connected strategic germplasm bank',
          'Operational 48-hour emergency module deployment logistics',
          'Fully decentralized national live infrastructure network',
        ],
      },
    },
    traceability: {
      tag: 'Governance & Traceability',
      title: 'Every Plant,',
      highlight: 'A Trackable Asset',
      subtitle:
        'Conceptual digital governance framework in development ensuring batch provenance and verification for ecological infrastructure.',
      scanner: {
        prototypeBadge: 'Technology Validation Prototype (Mockup)',
        chipBadge: 'RFID / NFC Simulation',
        cycleButton: 'Cycle Test Sample',
        fields: {
          species: 'Species Under Study',
          batch: 'Test Batch',
          origin: 'Testing Environment',
          status: 'Status',
          targetMetric: 'Target Metric',
        },
      },
      saas: {
        badge: 'Projected Business Model',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'Our economic model vision: replacing erratic spot procurement with recurring capacity contracts where clients pay for guaranteed living biological stability.',
        bullet1Title: 'Pre-Billed Contracts (Economic Blueprint)',
        bullet1Desc:
          'Advance retainers paid to nursery partners to fund nursery operations and guarantee reserve inventory for infrastructure operators.',
        bullet2Title: 'QR / RFID Traceability (Technical Architecture)',
        bullet2Desc:
          'Planned batch cryptographic identification ensuring environmental compliance, origin tracking, and digitized audit logs.',
        bullet3Title: 'Integrated Telemetry (Product Roadmap)',
        bullet3Desc:
          'Future integration of IoT soil moisture and root shear sensors generating auditable ESG compliance data.',
      },
    },
    pilotCalculator: {
      tag: 'Pilot Project Sizing Tool',
      title: 'Experimental Pilot',
      highlight: 'Resource Estimator',
      subtitle:
        'Simulate projected biological resources required to structure an experimental validation pilot in your concession or territory.',
      extensionLabel: 'Target Linear Extension (Meters)',
      applicationLabel: 'Engineering Application Under Study',
      options: {
        slope: 'Slope & Embankment Geotechnical Containment',
        water: 'Water Depuration & Constructed Wetlands',
        phytoremediation: 'Soil Phytoremediation & Mining Tailings',
      },
      results: {
        plantsTarget: 'Projected Seedlings for Pilot Trial',
        nurseriesTarget: 'Local Partner Nurseries Needed',
        readinessTime: 'Estimated Modular Rooting Period',
        readinessValue: '6 to 12 weeks',
        co2Target: 'Projected Annual CO2 Sequestration Target',
      },
      cta: 'Request Pilot Trial Proposal',
    },
    footer: {
      desc: 'Project in development establishing a decentralized biological infrastructure network for territorial resilience in Brazil.',
      dna: 'Open Project for Partnerships and Pilots 🇧🇷',
      platformTitle: 'Project',
      links: {
        hero: 'Home',
        paradigm: 'Paradigm Shift',
        regional: 'Regional Targets',
        roadmap: 'Phased Roadmap',
        traceability: 'Traceability (Prototype)',
        telemetry: 'Telemetry',
        soonBadge: 'Coming Soon',
      },
      communityTitle: 'Get Involved',
      communityLinks: {
        nurseries: 'Pioneer Nursery Sign-up',
        engineers: 'Engineers & Researchers',
        contracts: 'Corporate Pilot Inquiries',
        manifesto: 'Project Manifesto',
      },
      lead: {
        title: 'Join the Development',
        desc: 'We are assembling the founding network of nursery partners, researchers, and enterprises interested in pilot deployments. Join us.',
        options: {
          enterprise: 'Enterprise / Concession (Pilot Interest)',
          nursery: 'Nursery Grower (Become a Pilot Node)',
          government: 'Public Sector / Civil Defense',
          researcher: 'Botanical Scientist / Researcher',
        },
        placeholder: 'your@email.com',
        button: 'Register Interest',
        successTitle: 'Interest Registered!',
        successDesc: 'Thank you for supporting the Oasis Network. We will reach out with the next pilot onboarding steps.',
      },
      rights:
        '© 2026 Rede Oásis. Project in structuring and development phase. All figures represent strategic business roadmap targets.',
      bottomLinks: {
        governance: 'Partnership Terms',
        data: 'Data Privacy',
        security: 'Transparency',
      },
    },
  },

  'es-ES': {
    topBanner: 'PROYECTO EN DESARROLLO // FASE PILOTO Y ESTRUCTURACIÓN DE ALIANZAS',
    navbar: {
      navLinks: {
        hero: 'Inicio',
        paradigm: 'Paradigma',
        regional: 'Metas Regionales',
        roadmap: 'Roadmap',
        traceability: 'Trazabilidad',
        contact: 'Ser Socio',
      },
      cta: 'Apoyar el Proyecto',
    },
    hero: {
      badge: 'Proyecto en Desarrollo — Fase de Estructuración y Piloto',
      titleMain: 'Red Oasis —',
      titleGradient: 'Infraestructura Biológica',
      titleSuffix: 'Descentralizada',
      subtitle:
        'Concepción de una red de infraestructura verde viva para protección de activos de misión crítica. Actualmente en fase inicial de planificación territorial y adhesión de viveros colaboradores.',
      ctaPrimary: 'Conocer la Metodología',
      ctaSecondary: 'Ver Metas Regionales',
      disclaimer: 'Estado Actual: Proyecto en fase de modelado conceptual y piloto. Los polos mostrados representan las metas geográficas de despliegue.',
      stats: {
        polesCount: '0',
        polesMeta: 'Meta: 5 Polos',
        polesDesc: 'En fase de planificación territorial',
        speciesCount: '0',
        speciesMeta: 'Meta: 150+ Nativas',
        speciesDesc: 'En fase de catalogación científica',
        nurseriesCount: '0',
        nurseriesMeta: 'Meta: Red Nacional',
        nurseriesDesc: 'Convocatoria abierta para viveristas pioneros',
      },
      mapLegend: 'Mapa de Brasil: Metas geográficas de expansión y polo piloto en modelado',
      mapPoles: {
        norte: 'Meta: Polo Norte',
        nordeste: 'Meta: Polo Nordeste',
        centroOeste: 'Meta: Polo Centro-Oeste',
        sudeste: 'Polo Piloto Sureste',
        sul: 'Meta: Polo Sur',
      },
      poleStatusPilot: 'Polo Piloto en Estructuración',
      poleStatusTarget: 'Meta de Expansión Territorial',
      speciesLabel: 'Especies (Meta)',
      nurseriesLabel: 'Viveros (Meta)',
    },
    paradigm: {
      tag: 'Cambio de Paradigma',
      title: 'De Ornamental a',
      highlight: 'Misión Crítica',
      subtitle:
        'Nuestra propuesta de valor: transformar el comercio vegetal de adorno decorativo a módulos estandarizados de bioingeniería.',
      traditional: {
        badge: 'Modelo Tradicional Actual',
        title: 'Exportación Ornamental',
        desc: 'Especies comercializadas como consumibles decorativos de bajo valor técnico. Cadena fragmentada sin ensayos mecánicos ni garantías de estabilidad de taludes.',
        item1Title: 'Producto Commodity Pasivo',
        item1Desc:
          'Comercialización puntual sin proyecto de ingeniería ni compatibilización con obras civiles.',
        item2Title: 'Cadena Desconectada',
        item2Desc:
          'Sin trazabilidad de origen genético, provocando altas tasas de pérdida tras la plantación.',
        item3Title: 'Incertidumbre Operativa',
        item3Desc:
          'Sin métricas cuantitativas de cohesión radicular, causando sobrecostes para concesionarias.',
      },
      oasis: {
        badge: 'Modelo Red Oasis (En Desarrollo)',
        title: 'Ingeniería para',
        highlight: 'Misión Crítica',
        desc: 'Módulos estandarizados con cálculo de anclaje geotécnico, depuración y fitorremediación para proteger vías férreas, autopistas y cuencas industriales.',
        mod1Title: 'Contención de Laderas y Taludes (Meta)',
        mod1Desc:
          'Proyección de sistemas radiculares profundos con alta resistencia a la tracción frente a deslizamientos.',
        mod2Title: 'Depuración Hídrica y Humedales (Meta)',
        mod2Desc:
          'Modelado de lechos filtrantes de macrófitas acuáticas para depuración biológica de efluentes industriales.',
        mod3Title: 'Fitorremediación de Suelos (Meta)',
        mod3Desc:
          'Selección de plantas hiperacumuladoras para descontaminación biológica de suelos mineros e industriales.',
      },
    },
    regional: {
      tag: 'Oasis Regionales Proyectados',
      title: 'Los Tres Pilares de la',
      highlight: 'Red en Construcción',
      subtitle:
        'La arquitectura metodológica que pretendemos implantar progresivamente en cinco macrorregiones de Brasil.',
      pillars: {
        banco: {
          title: 'Banco Estratégico (Objetivo)',
          badge: 'Preservación y Genética',
          shortDesc:
            'Meta: constituir un repositorio vivo de matrices autóctonas catalogadas por bioma.',
          fullDesc:
            'El objetivo del Banco Estratégico es mapear y seleccionar árboles madre de alta resiliencia en cada bioma brasileño antes de acometer obras civiles.',
          specs: [
            { label: 'Estado Actual', value: 'Fase de Mapeo Científico' },
            { label: 'Meta de Linajes', value: '150+ Especies Objetivo' },
            { label: 'Protocolo de Colecta', value: 'En Elaboración' },
            { label: 'Red Planificada', value: '5 Polos Conectados' },
          ],
          role: 'Los viveristas pioneros recibirán capacitación para recolectar y multiplicar semillas con pureza genética.',
          sla: 'Meta operativa post-lanzamiento: suministro ágil de germoplasma bajo requerimiento técnico.',
        },
        recuperacao: {
          title: 'Recuperación Nativa (Objetivo)',
          badge: 'Restauración Ecológica',
          shortDesc:
            'Meta: desarrollar metodologías aceleradas de consorcio ecológico.',
          fullDesc:
            'Diseñamos protocolos que combinan especies pioneras de rápido crecimiento con dosel forestal definitivo para restaurar suelos críticos a tiempo.',
          specs: [
            { label: 'Estado Actual', value: 'Fase de Pruebas Piloto' },
            { label: 'Meta de Supervivencia', value: '> 90% en Campo' },
            { label: 'Monitoreo', value: 'IoT en Prototipado' },
            { label: 'Enfoque', value: 'Sucesión Multiestrato' },
          ],
          role: 'Los ingenieros biológicos ejecutarán la plantación y el seguimiento fitosanitario en las parcelas piloto.',
          sla: 'Metas de intervención rápida diseñadas para respuesta ante desastres geológicos.',
        },
        estoque: {
          title: 'Stock Vivo Plug & Play (Objetivo)',
          badge: 'Disponibilidad Operativa',
          shortDesc:
            'Meta: mantener lotes vivos enraizándose en viveros para entrega urgente.',
          fullDesc:
            'El objetivo principal de Red Oasis es eliminar los meses de espera en germinación: viveros asociados mantendrán módulos listos para estabilizar taludes en 48 horas.',
          specs: [
            { label: 'Estado Actual', value: 'Diseño de Manta Modular' },
            { label: 'Meta de Disponibilidad', value: 'Respuesta en 48h' },
            { label: 'Estructura Radicular', value: 'Mantas Geotextiles Vivas' },
            { label: 'Fijación en Campo', value: 'Anclaje Mecánico Directo' },
          ],
          role: 'Los viveros colaboradores recibirán ingresos recurrentes para custodiar módulos con humedad controlada.',
          sla: 'Meta logística rápida estructurada para transporte regional.',
        },
      },
      humanRole: {
        tag: 'Construcción Coletiva',
        title: 'Ingenieros Biológicos de Base',
        desc: 'El proyecto sitúa a los viveristas y productores rurales como actores clave de la infraestructura, ofreciendo formación técnica e inclusión en contratos plurianuales.',
        bullet1: 'Convocatoria abierta para viveros que deseen constituirse en nodos piloto',
        bullet2: 'Capacitación en trazabilidad digital y protocolos de calidad fitosanitaria',
        bullet3: 'Remuneración justa y previsible ligada a contratos corporativos estables',
      },
    },
    roadmap: {
      tag: 'Cronograma del Proyecto',
      title: 'Roadmap de',
      highlight: 'Desarrollo y Metas',
      subtitle:
        'Conozca las etapas planificadas para avanzar desde cero hasta la interconexión de los cinco polos regionales.',
      phase1: {
        badge: 'Fase 01',
        status: 'Fase Actual (En Curso)',
        title: 'Concepción y Modelado Técnico',
        desc: 'Definición conceptual, modelado botánico de módulos y apertura de convocatorias para viveros pioneros.',
        items: [
          'Diseño de mantas modulares geotécnicas e hídricas',
          'Mapeo inicial de 150 especies autóctonas prioritarias',
          'Alianzas iniciales con viveros en la región Sureste',
          'Validación de la arquitectura de trazabilidad digital',
        ],
      },
      phase2: {
        badge: 'Fase 02',
        status: 'Meta 2026 Q3-Q4',
        title: 'Polo Piloto Sureste (Validación)',
        desc: 'Instalación de la primera parcela experimental en campo para evaluar resistencia al deslizamiento y telemetría.',
        items: [
          'Prueba piloto en talud crítico de ladera',
          'Certificación de los primeros 3 viveros fundadores',
          'Ensayos de campo con chips RFID/QR en plántulas',
          'Monitoreo de tracción radicular y humedad de suelo',
        ],
      },
      phase3: {
        badge: 'Fase 03',
        status: 'Meta 2027',
        title: 'Primeros Contratos SaaS Piloto',
        desc: 'Validación comercial de contratos de capacidad biológica con autopistas, mineras e industrias asociadas.',
        items: [
          'Acuerdo piloto de reserva biológica con concesionaria',
          'Auditoría fitosanitaria digital mediante app móvil',
          'Remuneración fija periódica a viveros homologados',
          'Generación de informes de mitigación de riesgos ESG',
        ],
      },
      phase4: {
        badge: 'Fase 04',
        status: 'Meta 2027-2028',
        title: 'Expansión Nacional (5 Polos)',
        desc: 'Puesta en marcha paulatina de los Polos Norte, Nordeste, Centro-Oeste y Sur conectando la red viva de Brasil.',
        items: [
          'Incorporación de 50+ viveros en todos los biomas',
          'Activación del banco estratégico conectado en la nube',
          'Logística de respuesta para emergencias en 48 horas',
          'Red nacional descentralizada operando a escala',
        ],
      },
    },
    traceability: {
      tag: 'Gobernanza y Trazabilidad',
      title: 'Cada Planta,',
      highlight: 'Un Activo Trazable',
      subtitle:
        'Concepto de la plataforma digital en desarrollo para garantizar el origen e integridad de cada lote biológico.',
      scanner: {
        prototypeBadge: 'Prototipo de Validación Tecnológica (Mockup)',
        chipBadge: 'Simulación RFID / NFC',
        cycleButton: 'Alternar Muestra de Prueba',
        fields: {
          species: 'Especie en Estudio',
          batch: 'Lote de Prueba',
          origin: 'Entorno de Pruebas',
          status: 'Estado',
          targetMetric: 'Métrica Proyectada',
        },
      },
      saas: {
        badge: 'Modelo de Negocio Proyectado',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'Nuestra visión: sustituir compras aisladas por contratos continuos de capacidad biológica donde el cliente abona una cuota por estabilidad viva y mantenimiento.',
        bullet1Title: 'Contratos Facturados por Adelantado (Esquema)',
        bullet1Desc:
          'Anticipos destinados a los viveros para sostener sus costes fijos y asegurar stock vivo permanente a operadoras de infraestructuras.',
        bullet2Title: 'Trazabilidad QR / RFID (Arquitectura Técnica)',
        bullet2Desc:
          'Identificación unitaria por lote para asegurar cumplimiento ambiental, origen botánico y auditorías digitales transparentes.',
        bullet3Title: 'Telemetría Integrada (Hoja de Ruta)',
        bullet3Desc:
          'Desarrollo futuro de sensores IoT de humedad y tracción para emitir informes verificables según normas ESG internacionales.',
      },
    },
    pilotCalculator: {
      tag: 'Simulador de Proyecto Piloto',
      title: 'Dimensionamiento de',
      highlight: 'Área Experimental',
      subtitle:
        'Simule la estimación de recursos biológicos necesarios para estructurar un lote piloto de validación en su concesión o territorio.',
      extensionLabel: 'Extensión Lineal Objetivo (Metros)',
      applicationLabel: 'Aplicación de Ingeniería en Estudio',
      options: {
        slope: 'Contención de Laderas y Taludes Geotécnicos',
        water: 'Depuración Hídrica y Humedales Construidos',
        phytoremediation: 'Fitorremediación de Suelos Mineros',
      },
      results: {
        plantsTarget: 'Plántulas Estimadas para el Lote Piloto',
        nurseriesTarget: 'Viveros Locales Necesarios de Apoyo',
        readinessTime: 'Tiempo Estimado de Enraizamiento Modular',
        readinessValue: '6 a 12 semanas',
        co2Target: 'Meta Estimada de Fijación Anual de CO2',
      },
      cta: 'Solicitar Propuesta para Proyecto Piloto',
    },
    footer: {
      desc: 'Proyecto en desarrollo de infraestructura biológica descentralizada para resiliencia territorial y protección de infraestructuras críticas.',
      dna: 'Proyecto Abierto a Alianzas y Proyectos Piloto 🇧🇷',
      platformTitle: 'Proyecto',
      links: {
        hero: 'Inicio',
        paradigm: 'Cambio de Paradigma',
        regional: 'Metas Regionales',
        roadmap: 'Roadmap de Fases',
        traceability: 'Trazabilidad (Prototipo)',
        telemetry: 'Telemetría',
        soonBadge: 'En Breve',
      },
      communityTitle: 'Participar',
      communityLinks: {
        nurseries: 'Registro de Viveros Pioneros',
        engineers: 'Ingenieros e Investigadores',
        contracts: 'Consultas para Proyectos Piloto',
        manifesto: 'Manifiesto del Proyecto',
      },
      lead: {
        title: 'Únase al Desarrollo',
        desc: 'Estamos formando la red fundacional de viveros asociados, científicos y empresas interesadas en pruebas piloto. Contáctenos.',
        options: {
          enterprise: 'Empresa / Concesionaria (Interés en Piloto)',
          nursery: 'Viverista (Deseo ser Nodo Piloto)',
          government: 'Sector Público / Protección Civil',
          researcher: 'Investigador / Botánico Especialista',
        },
        placeholder: 'su@email.com',
        button: 'Manifestar Interés',
        successTitle: '¡Interés Registrado!',
        successDesc: 'Gracias por apoyar la construcción de Red Oasis. Le contactaremos para presentar los pasos del piloto.',
      },
      rights:
        '© 2026 Rede Oásis. Proyecto en fase de estructuración y desarrollo. Todas las métricas operativas representan metas del plan de negocio.',
      bottomLinks: {
        governance: 'Términos de Alianza',
        data: 'Privacidad de Datos',
        security: 'Transparencia',
      },
    },
  },
};
