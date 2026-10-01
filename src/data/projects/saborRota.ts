import type { Project } from '../projects';

const saborRotaProject: Project = {
  id: 'sabor-e-rota',
  title: 'Sabor e Rota',
  image: '../../imagem/SaborRota.png',
  tags: {
    pt: ['Benchmarking', 'Card Sorting', 'Taxonomia', 'Acessibilidade WCAG'],
    en: ['Benchmarking', 'Card Sorting', 'Taxonomy', 'WCAG Accessibility'],
    es: ['Benchmarking', 'Card Sorting', 'Taxonomía', 'Accesibilidad WCAG'],
  },
  skillsUsed: {
    pt: ['User Research', 'Acessibilidade', 'Arquitetura da informação',
      'Empatia', 'Criatividade', 'Aprendizado', 'IA', 'Organização'
    ],
    en: ['User Research', 'Accessibility', 'Information Architecture',
      'Empathy', 'Creativity', 'Learning', 'AI', 'Organization'
    ],
    es: ['Investigación de Usuarios', 'Accesibilidad', 'Arquitectura de Información',
      'Empatía', 'Creatividad', 'Aprendizaje', 'IA', 'Organización'
    ]
  },
  description: {
    pt: 'Estratégia de produto, arquitetura de informação e acessibilidade para uma jornada de descoberta e reserva de restaurantes de alto padrão.',
    en: 'Product strategy, information architecture, and accessibility for a high-end restaurant discovery and booking journey.',
    es: 'Estrategia de producto, arquitectura de información y accesibilidad para el descubrimiento y reserva gastronómica.',
  },
  metadata: {
    clientOrContext: {
      pt: 'Estudo de Caso / Projeto Autoral',
      en: 'Case Study / Self-initiated',
      es: 'Estudio de Caso / Proyecto Propio',
    },
    role: {
      pt: ['UX Researcher', 'Product Designer', 'UI Designer'],
      en: ['UX Researcher', 'Product Designer', 'UI Designer'],
      es: ['Investigador UX', 'Diseñador de Producto', 'Diseñador UI'],
    },
    duration: {
      pt: '1 semana',
      en: '1 week',
      es: '1 semana',
    },
    tools: ['Figma', 'FigJam', 'Miro', 'Canva', 'Figma Make'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'O Sabor & Rota é uma solução projetada para conectar entusiastas da gastronomia a restaurantes exclusivos, focando na navegação clara para diferentes faixas etárias.',
        en: 'Sabor & Rota is a digital solution connecting gastronomy enthusiasts with exclusive restaurants, prioritizing clear multi-generational navigation.',
        es: 'Sabor & Rota conecta entusiastas de la gastronomía con experiencias exclusivas, priorizando la usabilidad multigeneracional.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: 'Diminuir a taxa de desistência inicial na busca por locais, reestruturando a arquitetura de informação com progressive disclosure para não poluir a interface.',
        en: 'Reduce initial drop-offs during search by structuring information architecture with progressive disclosure to avoid screen clutter.',
        es: 'Reducir el abandono mediante una arquitectura de información clara con divulgación progresiva de contenido.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'Condução de benchmarking multissetorial focado em serviços de luxo e sessões de Card Sorting para organizar os fluxos de busca.',
        en: 'Conducted multisector competitive benchmarking on high-end platforms alongside Card Sorting to structure search flows.',
        es: 'Benchmarking competitivo y sesiones de Card Sorting para reorganizar las categorías de búsqueda.',
      },
      customText: {
        pt: 'A reorganização da taxonomia reduziu o ruído informacional e acelerou a decisão do usuário em poucos toques.',
        en: 'Reorganizing the taxonomy reduced informational noise and accelerated decision-making in just a few taps.',
        es: 'La reorganización de la taxonomía redujo el ruido informativo y aceleró la decisión del usuario en pocos pasos.',
      },
      className: 'project-detail-callout',
      subsections: [
        {
          subtitle: {
            pt: 'Card Sorting & Taxonomia',
            en: 'Card Sorting & Taxonomy',
            es: 'Card Sorting y Taxonomía',
          },
          content: {
            pt: 'Reorganização das categorias de busca para permitir que públicos diversos (Geração Z e 50+) encontrem filtros e informações vitais rapidamente.',
            en: 'Restructured search categories ensuring users across generations (Gen Z and 50+) reach essential filters effortlessly.',
            es: 'Reestructuración del flujo para que usuarios de distintas edades accedan rápidamente a los filtros principales.',
          },
          customText: {
            pt: 'A priorização de categorias de descoberta foi mais eficiente do que mexer apenas na estética da interface.',
            en: 'Prioritizing discovery categories proved more effective than changing the interface aesthetic alone.',
            es: 'Priorizar categorías de descubrimiento fue más eficaz que modificar solo la estética de la interfaz.',
          },
          className: 'project-detail-callout',
        },
      ],
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Criação de wireframes e especificação de componentes de acordo com diretrizes WCAG (contraste acessível, hierarquia e alvos de toque ampliados).',
        en: 'Designed structural wireframes enforcing WCAG guidelines (accessible contrast, hierarchy, and enlarged touch targets).',
        es: 'Desarrollo de wireframes cumpliendo pautas WCAG (contraste, jerarquía y botones adaptados).',
      },
    },
    {
      key: 'projectLearnings',
      body: {
        pt: 'Demonstrou-se que a reorganização estratégica do conteúdo tem maior impacto na retenção do usuário do que reformulações puramente estéticas.',
        en: 'Proved that strategic content reorganization impacts retention more significantly than cosmetic visual redesigns.',
        es: 'La claridad en la arquitectura de información genera mayor impacto en la retención que los cambios puramente estéticos.',
      },
    },
  ],
};

export default saborRotaProject;