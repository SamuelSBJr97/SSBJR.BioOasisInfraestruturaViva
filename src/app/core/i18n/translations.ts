export type SupportedLanguage = 'pt-BR' | 'en-US' | 'es-ES';

export interface TranslationDictionary {
  navbar: {
    navLinks: {
      hero: string;
      paradigm: string;
      regional: string;
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
    stats: {
      poles: string;
      species: string;
      nurseries: string;
    };
    mapPoles: {
      norte: string;
      nordeste: string;
      centroOeste: string;
      sudeste: string;
      sul: string;
    };
    poleStatus: string;
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
  traceability: {
    tag: string;
    title: string;
    highlight: string;
    subtitle: string;
    scanner: {
      liveBadge: string;
      chipBadge: string;
      cycleButton: string;
      fields: {
        species: string;
        batch: string;
        origin: string;
        vitality: string;
        rootStrength: string;
        soilMoisture: string;
        co2Offset: string;
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
  footer: {
    desc: string;
    dna: string;
    platformTitle: string;
    links: {
      hero: string;
      paradigm: string;
      regional: string;
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
    navbar: {
      navLinks: {
        hero: 'Início',
        paradigm: 'Paradigma',
        regional: 'Oásis Regionais',
        traceability: 'Rastreabilidade',
        contact: 'Contato',
      },
      cta: 'Entrar na Rede',
    },
    hero: {
      badge: 'Infraestrutura Biológica Descentralizada',
      titleMain: 'Rede Oásis —',
      titleGradient: 'Infraestrutura Biológica',
      titleSuffix: 'Descentralizada',
      subtitle:
        'Investimento verde vivo em rede regional para infraestruturas de missão crítica.',
      ctaPrimary: 'Conhecer a Rede',
      ctaSecondary: 'Ver Polos Regionais',
      stats: {
        poles: 'Polos Regionais',
        species: 'Espécies Nativas',
        nurseries: 'Viveiros Parceiros',
      },
      mapPoles: {
        norte: 'Polo Norte',
        nordeste: 'Polo Nordeste',
        centroOeste: 'Polo Centro-Oeste',
        sudeste: 'Polo Sudeste',
        sul: 'Polo Sul',
      },
      poleStatus: 'operacional',
      speciesLabel: 'Espécies',
      nurseriesLabel: 'Viveiros',
    },
    paradigm: {
      tag: 'Mudança de Paradigma',
      title: 'De Ornamental para',
      highlight: 'Missão Crítica',
      subtitle:
        'A infraestrutura biológica não é paisagismo decorativo — é engenharia viva para proteção de ativos essenciais.',
      traditional: {
        badge: 'Modelo Tradicional',
        title: 'Exportação Ornamental',
        desc: 'Espécies comercializadas como produtos decorativos de baixo valor agregado. Cadeia fragmentada, sem comprovação técnica e sem métricas de estabilidade ou impacto ecológico.',
        item1Title: 'Produto Commodity Passivo',
        item1Desc:
          'Venda isolada de mudas sem projeto técnico ou compatibilização com obras civis.',
        item2Title: 'Cadeia Fragmentada e Sem Rastreio',
        item2Desc:
          'Origem biológica desconhecida, vulnerável a pragas e perdas drásticas pós-plantio.',
        item3Title: 'Risco Geotécnico Elevado',
        item3Desc:
          'Ausência de garantias de estabilidade, resultando em retrabalho e despesas corretivas.',
      },
      oasis: {
        badge: 'Rede Oásis — Padrão Ativo',
        title: 'Exportação de',
        highlight: 'Missão Crítica',
        desc: 'Módulos padronizados de bioengenharia projetados com especificações geotécnicas para assegurar continuidade operacional e compliance rigoroso.',
        mod1Title: 'Contenção de Encostas & Taludes',
        mod1Desc:
          'Sistemas radiculares tridimensionais de alta coesão e ancoragem física contra erosão laminar e escorregamentos em rodovias, ferrovias e mineradoras.',
        mod2Title: 'Depuração Hídrica & Wetlands Construídos',
        mod2Desc:
          'Filtros biológicos microbiológicos para bacias de contenção, canais industriais e drenagem pluvial urbana, retendo 85%+ de contaminantes solúveis.',
        mod3Title: 'Fitorremediação de Solos & Substratos',
        mod3Desc:
          'Hiperacumuladoras calibradas para neutralização e imobilização de metais pesados, hidrocarbonetos e resíduos industriais em sítios degradados.',
      },
    },
    regional: {
      tag: 'Oásis Regionais',
      title: 'Os Três Pilares da',
      highlight: 'Rede Descentralizada',
      subtitle:
        'Cada nó opera de forma autônoma e interconectada, multiplicando a resiliência biológica em cinco macrorregiões do Brasil.',
      pillars: {
        banco: {
          title: 'Banco Estratégico',
          badge: 'Preservação & Genética',
          shortDesc:
            'Repositório vivo de matrizes botânicas georreferenciadas para cada bioma.',
          fullDesc:
            'O Banco Estratégico mantém matrizes botânicas nativas com alta resiliência climática, mapeadas com precisão e catalogadas segundo seus biomas de origem. Funciona como um cofre genético ativo contra crises ambientais e erosão de biodiversidade.',
          specs: [
            { label: 'Variabilidade Genética', value: '150+ Linhagens Mapeadas' },
            { label: 'Rastreabilidade de Sementes', value: 'Georreferenciamento 100%' },
            { label: 'Capacidade de Germinação', value: '> 92% em Viveiros' },
            { label: 'Conexão em Rede', value: '5 Polos Sincronizados' },
          ],
          role: 'Viveiristas realizam a coleta orientada, triagem fenotípica de sementes e manutenção das plantas-mãe nos polos regionais sob rígidos protocolos de pureza genética.',
          sla: 'Disponibilidade de germoplasma certificado em até 72 horas para qualquer polo da rede.',
        },
        recuperacao: {
          title: 'Recuperação Nativa',
          badge: 'Restauração de Ecossistemas',
          shortDesc:
            'Metodologias de implantação rápida para recomposição de matas ciliares e encostas.',
          fullDesc:
            'Metodologias consorciadas de sucessão ecológica acelerada que restauram ecossistemas degradados em frações do tempo convencional. Os módulos combinam espécies pioneiras de crescimento ultra-rápido com clímax florestal permanente.',
          specs: [
            { label: 'Taxa de Sobrevivência', value: '96.8% em 12 meses' },
            { label: 'Retenção Hídrica do Solo', value: '+42% no 1º Ano' },
            { label: 'Monitoramento IoT', value: 'Telemetria Diária' },
            { label: 'Sucessão Ecológica', value: 'Evolução Multi-estrato' },
          ],
          role: 'Os engenheiros biológicos atuam no plantio de precisão, inoculação de fungos micorrízicos benéficos e acompanhamento periódico da taxa de fixação em campo.',
          sla: 'Equipe de intervenção no local e início de plantio corretivo em até 5 dias após autorização.',
        },
        estoque: {
          title: 'Estoque Vivo (Plug & Play)',
          badge: 'Disponibilidade Imediata',
          shortDesc:
            'Módulos vegetais pré-enraizados prontos para instalação em obras críticas.',
          fullDesc:
            'Módulos de infraestrutura viva mantidos em estado de prontidão nos viveiros regionais. Em caso de desastres geológicos, rompimentos ou necessidade imediata de contenção, os módulos são transportados e instalados sem tempo de espera de germinação.',
          specs: [
            { label: 'Tempo de Resposta', value: 'Pronto para Envio em 48h' },
            { label: 'Sistema Radicular', value: 'Pré-estruturado em Mantas' },
            { label: 'Modularidade', value: 'Encaixe Plug and Play' },
            { label: 'Fixação Geotécnica', value: 'Imediata após ancoragem' },
          ],
          role: 'Gerenciam o acondicionamento dos módulos em esteiras móveis, calibram a hidratação e preparam a logística de entrega rápida em veículos climatizados ou protegidos.',
          sla: 'Expedição imediata de até 5.000m² de cobertura viva com logística expressa em 48 horas.',
        },
      },
      humanRole: {
        tag: 'Papel Estratégico Humano',
        title: 'Engenheiros Biológicos de Base',
        desc: 'A espinha dorsal da Rede Oásis não é apenas silício, mas sim o conhecimento acumulado de viveiristas e técnicos de campo, formalmente capacitados e certificados como operadores biológicos.',
        bullet1: 'Remuneração justa e previsível via contratos SaaS',
        bullet2: 'Auditorias fitossanitárias assistidas por aplicativo',
        bullet3: 'Certificação de procedência e conservação genética',
      },
    },
    traceability: {
      tag: 'Rastreabilidade & Governança',
      title: 'Cada Planta,',
      highlight: 'Um Ativo Rastreável',
      subtitle:
        'Garantia de procedência com telemetria biométrica, certificação de origem e governança corporativa no modelo SaaS.',
      scanner: {
        liveBadge: 'Leitor Bio-Rastreio Ativo',
        chipBadge: 'Chip RFID / NFC',
        cycleButton: 'Escanear Próximo Lote',
        fields: {
          species: 'Espécie',
          batch: 'Lote Certificado',
          origin: 'Origem',
          vitality: 'Índice Vitalidade',
          rootStrength: 'Força Radicular',
          soilMoisture: 'Umidade do Solo',
          co2Offset: 'Absorção CO2/ano',
        },
      },
      saas: {
        badge: 'Modelo Econômico',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'Superamos o modelo arcaico de aquisição pontual de plantas. Na Rede Oásis, a infraestrutura verde é contratada como um serviço contínuo de engenharia, com faturamento recorrente, auditorias digitais e SLA garantido.',
        bullet1Title: 'Contratos Pré-Faturados com Previsibilidade',
        bullet1Desc:
          'Concessionárias, mineradoras e municípios contratam capacidade biológica reservada mensalmente. O viveirista recebe remuneração antecipada estável e o cliente tem garantia ininterrupta de estoque e manutenção.',
        bullet2Title: 'Certificação Digital & Rastreabilidade de Origem',
        bullet2Desc:
          'Cada módulo vegetal possui identidade criptográfica única vinculada a tags RFID/QR, registrando matriz parental, viveiro de origem, histórico fitossanitário e coordenadas de plantio em livro-razão imutável.',
        bullet3Title: 'Telemetria de Campo e Relatórios ESG para Auditoria',
        bullet3Desc:
          'Painel com métricas automatizadas de fixação de carbono, estabilização de encostas e retenção hídrica, pronto para auditorias de conformidade com padrões GRI, SASB e taxonomias verdes internacionais.',
      },
    },
    footer: {
      desc: 'Infraestrutura biológica descentralizada para resiliência territorial e proteção de ativos de missão crítica em escala nacional.',
      dna: 'Tecnologia com DNA Brasileiro 🇧🇷',
      platformTitle: 'Plataforma',
      links: {
        hero: 'Início',
        paradigm: 'Mudança de Paradigma',
        regional: 'Oásis Regionais',
        traceability: 'Rastreabilidade',
        telemetry: 'Telemetria Live',
        soonBadge: 'Breve',
      },
      communityTitle: 'Comunidade',
      communityLinks: {
        nurseries: 'Viveiristas Parceiros',
        engineers: 'Engenheiros Ambientais',
        contracts: 'Contratos Corporativos',
        manifesto: 'Manifesto Aberto',
      },
      lead: {
        title: 'Conecte-se à Rede',
        desc: 'Cadastre-se para receber relatórios técnicos, integrar seu viveiro ou solicitar estudo preliminar de risco geotécnico.',
        options: {
          enterprise: 'Empresa / Infraestrutura Crítica',
          nursery: 'Viveirista / Produtor de Base',
          government: 'Setor Público / Defesa Civil',
          researcher: 'Pesquisador / Especialista',
        },
        placeholder: 'seu@corporativo.com',
        button: 'Ingressar no Ecossistema',
        successTitle: 'Cadastro Realizado com Sucesso!',
        successDesc: 'Nossa equipe de engenharia biológica entrará em contato.',
      },
      rights:
        '© 2026 Rede Oásis. Infraestrutura Biológica Descentralizada. Todos os direitos reservados.',
      bottomLinks: {
        governance: 'Termos de Governança',
        data: 'Política de Dados & Telemetria',
        security: 'Segurança',
      },
    },
  },

  'en-US': {
    navbar: {
      navLinks: {
        hero: 'Home',
        paradigm: 'Paradigm Shift',
        regional: 'Regional Oases',
        traceability: 'Traceability',
        contact: 'Contact',
      },
      cta: 'Join the Network',
    },
    hero: {
      badge: 'Decentralized Biological Infrastructure',
      titleMain: 'Oasis Network —',
      titleGradient: 'Biological Infrastructure',
      titleSuffix: 'Decentralized',
      subtitle:
        'Living green investment across a regional network for mission-critical infrastructure.',
      ctaPrimary: 'Explore the Network',
      ctaSecondary: 'View Regional Hubs',
      stats: {
        poles: 'Regional Hubs',
        species: 'Native Species',
        nurseries: 'Partner Nurseries',
      },
      mapPoles: {
        norte: 'North Hub',
        nordeste: 'Northeast Hub',
        centroOeste: 'Midwest Hub',
        sudeste: 'Southeast Hub',
        sul: 'South Hub',
      },
      poleStatus: 'operational',
      speciesLabel: 'Species',
      nurseriesLabel: 'Nurseries',
    },
    paradigm: {
      tag: 'Paradigm Shift',
      title: 'From Ornamental to',
      highlight: 'Mission-Critical',
      subtitle:
        'Biological infrastructure is not ornamental landscaping — it is living engineering safeguarding critical assets.',
      traditional: {
        badge: 'Traditional Model',
        title: 'Ornamental Export',
        desc: 'Species traded as decorative low-value commodities. Fragmented supply chain, without technical engineering compliance or measurable ecological stability metrics.',
        item1Title: 'Passive Commodity Product',
        item1Desc:
          'Isolated seedling sales without engineering project design or civil works compatibility.',
        item2Title: 'Fragmented & Untracked Chain',
        item2Desc:
          'Unknown biological provenance, vulnerable to pests and catastrophic post-planting mortality.',
        item3Title: 'High Geotechnical Risk',
        item3Desc:
          'Absence of slope stability guarantees, causing chronic rework and emergency expenditures.',
      },
      oasis: {
        badge: 'Oasis Network — Active Standard',
        title: 'Export for',
        highlight: 'Mission-Critical',
        desc: 'Standardized bioengineering modules built to strict geotechnical specs, ensuring continuous civil operations and regulatory compliance.',
        mod1Title: 'Slope & Embankment Stabilization',
        mod1Desc:
          '3D deep-root systems providing mechanical tensile reinforcement against erosion and mudslides on highways, railways, and mining sites.',
        mod2Title: 'Water Depuration & Constructed Wetlands',
        mod2Desc:
          'Microbiological bio-filtration wetlands for retention basins and industrial runoff, eliminating 85%+ of soluble contaminants.',
        mod3Title: 'Soil & Substrate Phytoremediation',
        mod3Desc:
          'Calibrated hyperaccumulators for bio-extraction and immobilization of heavy metals and industrial toxins on degraded land.',
      },
    },
    regional: {
      tag: 'Regional Oases',
      title: 'The Three Pillars of the',
      highlight: 'Decentralized Network',
      subtitle:
        'Each regional node operates autonomously and interconnected, multiplying biological resilience across five macro-regions.',
      pillars: {
        banco: {
          title: 'Strategic Germplasm Bank',
          badge: 'Preservation & Genetics',
          shortDesc:
            'Living repository of georeferenced botanical parent plants for each biome.',
          fullDesc:
            'The Strategic Bank curates native climate-resilient mother plants, precisely mapped and cataloged according to their indigenous biomes. It functions as an active genetic vault shielding against environmental crises and biodiversity loss.',
          specs: [
            { label: 'Genetic Diversity', value: '150+ Cataloged Lineages' },
            { label: 'Seed Traceability', value: '100% Georeferenced' },
            { label: 'Germination Viability', value: '> 92% in Nurseries' },
            { label: 'Network Interconnect', value: '5 Synchronized Hubs' },
          ],
          role: 'Nurseries carry out guided collection, seed phenotypic screening, and mother-tree stewardship under strict genetic purity standards.',
          sla: 'Certified germplasm dispatch within 72 hours to any node in the national network.',
        },
        recuperacao: {
          title: 'Native Ecosystem Recovery',
          badge: 'Ecological Restoration',
          shortDesc:
            'Rapid deployment methodologies for riparian forest and hillside restoration.',
          fullDesc:
            'Consortium-based accelerated ecological succession methods that restore degraded ecosystems in a fraction of traditional timelines. Modules merge fast-growing pioneer flora with permanent forest climax species.',
          specs: [
            { label: 'Survival Rate', value: '96.8% at 12 Months' },
            { label: 'Soil Water Retention', value: '+42% in Year 1' },
            { label: 'IoT Monitoring', value: 'Daily Field Telemetry' },
            { label: 'Ecological Succession', value: 'Multi-strata Canopy' },
          ],
          role: 'Biological engineers perform precision planting, mycorrhizal fungal inoculation, and ongoing establishment rate monitoring.',
          sla: 'Rapid response on-site intervention and planting kickoff within 5 days of authorization.',
        },
        estoque: {
          title: 'Living Inventory (Plug & Play)',
          badge: 'Immediate Availability',
          shortDesc:
            'Pre-rooted vegetal modules ready for instant civil infrastructure deployment.',
          fullDesc:
            'Live bio-infrastructure modules maintained in permanent readiness across regional nurseries. In the event of geological disasters, dam failures, or slope breaches, modules are deployed and anchored without seed germination lag.',
          specs: [
            { label: 'Deployment Time', value: 'Dispatch-Ready in 48h' },
            { label: 'Root Architecture', value: 'Pre-woven Geotextile Mats' },
            { label: 'Modularity', value: 'Interlocking Plug & Play' },
            { label: 'Geotechnical Shear', value: 'Immediate post-anchorage' },
          ],
          role: 'Manage module conditioning on automated racks, calibrate root moisture levels, and coordinate climate-controlled rapid dispatch logistics.',
          sla: 'Immediate expedition of up to 5,000m² of live bio-cover with express 48h field logistics.',
        },
      },
      humanRole: {
        tag: 'Strategic Human Role',
        title: 'Grassroots Biological Engineers',
        desc: 'The backbone of Oasis Network is not just software and silicon, but the generational knowledge of nursery growers and field botanists, professionally certified as biological infrastructure operators.',
        bullet1: 'Predictable and dignified compensation through recurring SaaS contracts',
        bullet2: 'Mobile app-assisted phytosanitary audits and live field telemetry',
        bullet3: 'Cryptographic provenance verification and biodiversity conservation',
      },
    },
    traceability: {
      tag: 'Traceability & Governance',
      title: 'Every Plant,',
      highlight: 'A Trackable Asset',
      subtitle:
        'Provenance assurance with biometric telemetry, certified origin, and corporate governance in a SaaS model.',
      scanner: {
        liveBadge: 'Active Bio-Tracking Reader',
        chipBadge: 'RFID / NFC Chip',
        cycleButton: 'Scan Next Batch',
        fields: {
          species: 'Species',
          batch: 'Certified Batch',
          origin: 'Origin',
          vitality: 'Health Index',
          rootStrength: 'Root Tensile Shear',
          soilMoisture: 'Soil Moisture',
          co2Offset: 'CO2 Sequestration/yr',
        },
      },
      saas: {
        badge: 'Economic Model',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'We discard the outdated transactional model of buying plants as expendable consumables. At Oasis Network, living green infrastructure is contracted as an engineering service with recurring billing, digital audits, and contractual uptime SLAs.',
        bullet1Title: 'Pre-Billed Contracts with Predictability',
        bullet1Desc:
          'Highway concessions, miners, and public utilities reserve biological capacity monthly. Nurseries receive reliable advance payouts, and clients enjoy guaranteed replacement inventory.',
        bullet2Title: 'Digital Certification & Origin Provenance',
        bullet2Desc:
          'Every living module holds a unique cryptographic identity bound to RFID/QR chips, cataloging parental genetics, origin nursery, phytosanitary logs, and GPS coordinates.',
        bullet3Title: 'Field Telemetry & Auditable ESG Compliance',
        bullet3Desc:
          'Automated dashboards reporting carbon sequestration, slope shear resistance, and water retention, pre-configured for GRI, SASB, and international green taxonomy audits.',
      },
    },
    footer: {
      desc: 'Decentralized biological infrastructure for territorial resilience and mission-critical asset protection at national scale.',
      dna: 'Technology Powered by Brazilian Biodiversity 🇧🇷',
      platformTitle: 'Platform',
      links: {
        hero: 'Home',
        paradigm: 'Paradigm Shift',
        regional: 'Regional Oases',
        traceability: 'Traceability',
        telemetry: 'Live Telemetry',
        soonBadge: 'Soon',
      },
      communityTitle: 'Community',
      communityLinks: {
        nurseries: 'Partner Nurseries',
        engineers: 'Environmental Engineers',
        contracts: 'Corporate Contracts',
        manifesto: 'Open Manifesto',
      },
      lead: {
        title: 'Connect to the Network',
        desc: 'Register to access engineering whitepapers, onboard your nursery, or request a preliminary geotechnical risk assessment.',
        options: {
          enterprise: 'Enterprise / Critical Infrastructure',
          nursery: 'Nursery Grower / Base Producer',
          government: 'Public Sector / Civil Defense',
          researcher: 'Scientist / Academic Specialist',
        },
        placeholder: 'your@corporate.com',
        button: 'Enter the Ecosystem',
        successTitle: 'Registration Completed Successfully!',
        successDesc: 'Our biological engineering team will contact you shortly.',
      },
      rights:
        '© 2026 Rede Oásis. Decentralized Biological Infrastructure. All rights reserved.',
      bottomLinks: {
        governance: 'Governance Terms',
        data: 'Data & Telemetry Policy',
        security: 'Security',
      },
    },
  },

  'es-ES': {
    navbar: {
      navLinks: {
        hero: 'Inicio',
        paradigm: 'Paradigma',
        regional: 'Oasis Regionales',
        traceability: 'Trazabilidad',
        contact: 'Contacto',
      },
      cta: 'Unirse a la Red',
    },
    hero: {
      badge: 'Infraestructura Biológica Descentralizada',
      titleMain: 'Red Oasis —',
      titleGradient: 'Infraestructura Biológica',
      titleSuffix: 'Descentralizada',
      subtitle:
        'Inversión verde viva en red regional para infraestructuras de misión crítica.',
      ctaPrimary: 'Conocer la Red',
      ctaSecondary: 'Ver Polos Regionales',
      stats: {
        poles: 'Polos Regionales',
        species: 'Especies Nativas',
        nurseries: 'Viveros Asociados',
      },
      mapPoles: {
        norte: 'Polo Norte',
        nordeste: 'Polo Nordeste',
        centroOeste: 'Polo Centro-Oeste',
        sudeste: 'Polo Sureste',
        sul: 'Polo Sur',
      },
      poleStatus: 'operacional',
      speciesLabel: 'Especies',
      nurseriesLabel: 'Viveros',
    },
    paradigm: {
      tag: 'Cambio de Paradigma',
      title: 'De Ornamental a',
      highlight: 'Misión Crítica',
      subtitle:
        'La infraestructura biológica no es paisajismo decorativo — es ingeniería viva para la protección de activos esenciales.',
      traditional: {
        badge: 'Modelo Tradicional',
        title: 'Exportación Ornamental',
        desc: 'Especies comercializadas como productos decorativos de bajo valor añadido. Cadena fragmentada, sin respaldo técnico ni métricas de estabilidad o impacto ecológico.',
        item1Title: 'Producto Commodity Pasivo',
        item1Desc:
          'Venta aislada de plantas sin proyecto de ingeniería ni compatibilización con obras civiles.',
        item2Title: 'Cadena Fragmentada y Sin Rastreo',
        item2Desc:
          'Origen biológico desconocido, vulnerable a plagas y mortandades drásticas post-plantación.',
        item3Title: 'Alto Riesgo Geotécnico',
        item3Desc:
          'Ausencia de garantías de estabilidad de taludes, ocasionando retrabajos y gastos de emergencia.',
      },
      oasis: {
        badge: 'Red Oasis — Estándar Activo',
        title: 'Exportación de',
        highlight: 'Misión Crítica',
        desc: 'Módulos estandarizados de bioingeniería diseñados bajo especificaciones geotécnicas para asegurar la continuidad operativa y el cumplimiento normativo.',
        mod1Title: 'Contención de Laderas y Taludes',
        mod1Desc:
          'Sistemas radiculares tridimensionales de alta cohesión y anclaje mecánico contra erosión y deslizamientos en autopistas, vías férreas y minería.',
        mod2Title: 'Depuración Hídrica y Humedales Construidos',
        mod2Desc:
          'Filtros biológicos microbiológicos para balsas de decantación y drenaje pluvial industrial, reteniendo más del 85% de contaminantes solubles.',
        mod3Title: 'Fitorremediación de Suelos y Sustratos',
        mod3Desc:
          'Hiperacumuladoras calibradas para neutralización e inmovilización de metales pesados, hidrocarburos y residuos industriales en áreas degradadas.',
      },
    },
    regional: {
      tag: 'Oasis Regionales',
      title: 'Los Tres Pilares de la',
      highlight: 'Red Descentralizada',
      subtitle:
        'Cada nodo opera de forma autónoma e interconectada, multiplicando la resiliencia biológica en cinco macrorregiones.',
      pillars: {
        banco: {
          title: 'Banco Estratégico',
          badge: 'Preservación y Genética',
          shortDesc:
            'Repositorio vivo de matrices botánicas georreferenciadas para cada bioma.',
          fullDesc:
            'El Banco Estratégico preserva matrices botánicas autóctonas de alta resiliencia climática, mapeadas con precisión según su bioma de origen. Funciona como una reserva genética activa contra crisis ecológicas y pérdida de biodiversidad.',
          specs: [
            { label: 'Variabilidad Genética', value: '150+ Linajes Catalogados' },
            { label: 'Trazabilidad de Semillas', value: 'Georreferenciación 100%' },
            { label: 'Capacidad Germinativa', value: '> 92% en Viveros' },
            { label: 'Conexión en Red', value: '5 Polos Sincronizados' },
          ],
          role: 'Los viveristas realizan recolección orientada, selección fenotípica de semillas y custodia de plantas madre bajo rigurosos protocolos genéticos.',
          sla: 'Disponibilidad de germoplasma certificado en menos de 72 horas para cualquier nodo de la red.',
        },
        recuperacao: {
          title: 'Recuperación Nativa',
          badge: 'Restauración Ecológica',
          shortDesc:
            'Metodologías de rápida implantación para restauración de riberas y laderas.',
          fullDesc:
            'Metodologías consorciadas de sucesión ecológica acelerada que restauran ecosistemas degradados en una fracción del tiempo habitual. Combina especies pioneras de crecimiento ultrarrápido con especies de dosel forestal permanente.',
          specs: [
            { label: 'Tasa de Supervivencia', value: '96.8% a los 12 Meses' },
            { label: 'Retención Hídrica del Suelo', value: '+42% en el 1º Año' },
            { label: 'Monitoreo IoT', value: 'Telemetría Diaria de Campo' },
            { label: 'Sucesión Ecológica', value: 'Estructura Multiestrato' },
          ],
          role: 'Los ingenieros biológicos ejecutan plantación de precisión, inoculación micorrícica y seguimiento continuo del enraizamiento.',
          sla: 'Intervención de equipo técnico y arranque de plantación correctiva en un plazo máximo de 5 días.',
        },
        estoque: {
          title: 'Stock Vivo (Plug & Play)',
          badge: 'Disponibilidad Inmediata',
          shortDesc:
            'Módulos vegetales preenraizados listos para instalación en infraestructuras críticas.',
          fullDesc:
            'Módulos de bioinfraestructura viva en constante preparación en viveros regionales. Ante emergencias geológicas, roturas o contención urgente, los módulos se transportan e instalan sin demoras de germinación.',
          specs: [
            { label: 'Tiempo de Respuesta', value: 'Listo para Envío en 48h' },
            { label: 'Sistema Radicular', value: 'Mantas Preestructuradas' },
            { label: 'Modularidad', value: 'Acoplamiento Plug and Play' },
            { label: 'Fijación Geotécnica', value: 'Inmediata tras anclaje' },
          ],
          role: 'Gestionan el acondicionamiento en bandejas móviles, controlan la humedad de las raíces y coordinan la logística express climatizada.',
          sla: 'Expedición inmediata de hasta 5.000m² de bio-cobertura viva con logística express en 48 horas.',
        },
      },
      humanRole: {
        tag: 'Rol Estratégico Humano',
        title: 'Ingenieros Biológicos de Base',
        desc: 'La columna vertebral de Red Oasis no es sólo software, sino el conocimiento ancestral de viveristas y técnicos rurales, certificados como operadores biológicos.',
        bullet1: 'Remuneración predecible y justa mediante contratos SaaS recurrentes',
        bullet2: 'Auditorías fitosanitarias asistidas por aplicación móvil y telemetría',
        bullet3: 'Certificación de procedencia y conservación de la biodiversidad local',
      },
    },
    traceability: {
      tag: 'Trazabilidad y Gobernanza',
      title: 'Cada Planta,',
      highlight: 'Un Activo Trazable',
      subtitle:
        'Garantía de procedencia con telemetría biométrica, certificación de origen y gobernanza corporativa en modelo SaaS.',
      scanner: {
        liveBadge: 'Lector Bio-Rastreo Activo',
        chipBadge: 'Chip RFID / NFC',
        cycleButton: 'Escanear Siguiente Lote',
        fields: {
          species: 'Especie',
          batch: 'Lote Certificado',
          origin: 'Origen',
          vitality: 'Índice de Vitalidad',
          rootStrength: 'Fuerza Radicular',
          soilMoisture: 'Humedad del Suelo',
          co2Offset: 'Absorción CO2/año',
        },
      },
      saas: {
        badge: 'Modelo Económico',
        title: 'SaaS —',
        highlight: 'Sustainability as a Service',
        desc: 'Superamos el modelo tradicional de compra puntual de plantas. En Red Oasis, la infraestructura verde se contrata como servicio continuo de ingeniería con facturación recurrente, auditorías digitales y SLA garantizado.',
        bullet1Title: 'Contratos Facturados por Adelantado con Previsibilidad',
        bullet1Desc:
          'Concesionarias, mineras y administraciones públicas reservan capacidad biológica mensual. El viverista recibe ingresos estables por adelantado y el cliente cuenta con inventario garantizado.',
        bullet2Title: 'Certificación Digital y Trazabilidad de Origen',
        bullet2Desc:
          'Cada módulo cuenta con una identidad criptográfica única vinculada a chips RFID/QR, registrando árbol madre, vivero productor, historial fitosanitario y coordenadas GPS.',
        bullet3Title: 'Telemetría de Campo e Informes ESG para Auditoría',
        bullet3Desc:
          'Panel con métricas automatizadas de fijación de carbono, resistencia al deslizamiento y retención hídrica, preparado para auditorías de normas GRI, SASB y taxonomías verdes.',
      },
    },
    footer: {
      desc: 'Infraestructura biológica descentralizada para resiliencia territorial y protección de activos de misión crítica a escala nacional.',
      dna: 'Tecnología con ADN Brasileño 🇧🇷',
      platformTitle: 'Plataforma',
      links: {
        hero: 'Inicio',
        paradigm: 'Cambio de Paradigma',
        regional: 'Oasis Regionales',
        traceability: 'Trazabilidad',
        telemetry: 'Telemetría Live',
        soonBadge: 'Pronto',
      },
      communityTitle: 'Comunidad',
      communityLinks: {
        nurseries: 'Viveros Asociados',
        engineers: 'Ingenieros Ambientales',
        contracts: 'Contratos Corporativos',
        manifesto: 'Manifiesto Abierto',
      },
      lead: {
        title: 'Conéctese a la Red',
        desc: 'Regístrese para recibir informes técnicos, incorporar su vivero o solicitar un estudio preliminar de riesgo geotécnico.',
        options: {
          enterprise: 'Empresa / Infraestructura Crítica',
          nursery: 'Viverista / Productor de Base',
          government: 'Sector Público / Protección Civil',
          researcher: 'Investigador / Especialista',
        },
        placeholder: 'su@corporativo.com',
        button: 'Ingresar al Ecosistema',
        successTitle: '¡Registro Realizado con Éxito!',
        successDesc: 'Nuestro equipo de ingeniería biológica se pondrá en contacto en breve.',
      },
      rights:
        '© 2026 Rede Oásis. Infraestructura Biológica Descentralizada. Todos los derechos reservados.',
      bottomLinks: {
        governance: 'Términos de Gobernanza',
        data: 'Política de Datos y Telemetría',
        security: 'Seguridad',
      },
    },
  },
};
