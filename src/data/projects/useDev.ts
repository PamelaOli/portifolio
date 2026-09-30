import useDevImage from '../../imagem/UseDev.png';
import type { Project } from '../projects';

const useDevProject: Project = {
  id: 'use-dev',
  title: 'UseDev — E-commerce',
  image: useDevImage,
  tags: {
    pt: ['Avaliação Heurística', 'Checkout UX', 'Matriz de priorização', 'IA'],
    en: ['Heuristic Evaluation', 'Checkout UX', 'Prioritization Matrix', 'AI'],
    es: ['Evaluación Heurística', 'Checkout UX', 'Matriz de Priorización', 'IA'],
  },
  skillsUsed: {
    pt: ['User Research', 'Acessibilidade', 'Interfaces', 'Design Responsivo',
      'Resolução de problemas', 'Empatia', 'Comunicação', 'Colaboração', 'Organização'
    ],
    en: ['User Research', 'Accessibility', 'Interfaces', 'Responsive Design',
      'Problem Solving', 'Empathy', 'Communication', 'Collaboration', 'Organization'
    ],
    es: ['User Research', 'Accesibilidad', 'Interfaces', 'Diseño Responsivo',
      'Resolución de Problemas', 'Empatía', 'Comunicación', 'Colaboración', 'Organización'
    ]
  },
  description: {
    pt: 'Otimização de checkout e jornada de compra em e-commerce focado no público dev, reduzindo a carga cognitiva e atritos no frete e devoluções.',
    en: 'Checkout and purchasing journey optimization for a developer e-commerce, reducing cognitive load and friction in shipping/returns.',
    es: 'Optimización de la experiencia de compra en e-commerce especializado para desarrolladores, reduciendo la carga cognitiva.',
  },
  metadata: {
    clientOrContext: {
      pt: 'Estudo de Caso / Plataforma Alura',
      en: 'Case Study / Alura Platform',
      es: 'Estudio de Caso / Plataforma Alura',
    },
    role: {
      pt: ['UX Researcher'],
      en: ['UX Researcher'],
      es: ['Investigador UX'],
    },
    duration: {
      pt: '2 dia',
      en: '2 day',
      es: '2 día',
    },
    tools: ['Figma', 'FigJam', 'Miro'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'O UseDev é um e-commerce especializado em produtos para desenvolvedores. O objetivo do projeto foi auditar a navegação e redesenhar o checkout para minimizar a desistência de compra.',
        en: 'UseDev is a niche e-commerce platform for developers. The objective was to audit navigation and redesign the checkout to minimize drop-offs.',
        es: 'UseDev es un e-commerce especializado para desarrolladores. El objetivo fue auditar la navegación y rediseñar el proceso de pago.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: 'A jornada apresentava formulários densos e falta de transparência nas regras de frete e devoluções, gerando alta carga cognitiva e abandono de carrinho.',
        en: 'The buyer journey presented dense forms and ambiguous shipping rules, leading to high cognitive load and cart abandonment.',
        es: 'El proceso presentaba formularios extensos y poca claridad en el envío, generando alta carga cognitiva.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'Realização de auditoria de interface detalhada com base nas Heurísticas de Nielsen e análise das dores de desenvolvedores juniores e seniores.',
        en: 'Conducted a detailed interface audit based on Nielsens Heuristics and mapped friction points for junior and senior developers.',
        es: 'Auditoría de interfaz basada en las Heurísticas de Nielsen y análisis de fricciones en desarrolladores.',
      },
      subsections: [
        {
          subtitle: {
            pt: 'Avaliação Heurística de Nielsen',
            en: 'Nielsens Heuristic Evaluation',
            es: 'Evaluación Heurística de Nielsen',
          },
          content: {
            pt: 'Mapeamento de inconsistências no status do sistema e falta de prevenção de erros na validação de cupons e endereços.',
            en: 'Cataloged inconsistencies regarding system status visibility and lack of error prevention in checkout forms.',
            es: 'Catalogación de errores de visibilidad del estado del sistema y prevención de fallos en el checkout.',
          },
        },
      ],
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Proposta de redesign substituindo formulários longos por login social, feedback assíncrono e biblioteca de componentes reutilizáveis.',
        en: 'Redesign proposal replacing long forms with social login, asynchronous feedback, and a reusable component library.',
        es: 'Propuesta de rediseño reemplazando formularios largos con login social y componentes reutilizables.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Criação de documentação detalhada de arquitetura e lógica de interação para orientar a equipe de engenharia (Handoff de Design-to-Dev).',
        en: 'Elaborated detailed interaction and architecture documentation for the engineering team (Design-to-Dev handoff).',
        es: 'Elaboración de documentación detallada de arquitectura e interacción para el equipo de desarrollo.',
      },
    },
  ],
};

export default useDevProject;