import p4buildImage from '../../imagem/P4Build.png';
import type { Project } from '../projects';

const p4buildProject: Project = {
  id: 'p4build',
  title: 'P4Build',
  image: p4buildImage,
  tags: {
    pt: ['PRD', 'Design System em React', 'Squads Multidisciplinares', 'Arquitetura'],
    en: ['PRD', 'React Design System', 'Cross-functional Squads', 'Architecture'],
    es: ['PRD', 'Design System en React', 'Squads Multidisciplinarios', 'Arquitectura'],
  },
  skillsUsed: {
    pt: ['Comunicação', 'Colaboração', 'Organização', 'Gestão de tempo', 'Resolução de problemas', 'IA', 'Aprendizado'],
    en: ['Communication', 'Collaboration', 'Organization', 'Time Management', 'Problem Solving', 'AI', 'Learning'],
    es: ['Comunicación', 'Colaboración', 'Organización', 'Gestión del Tiempo', 'Resolución de Problemas', 'IA', 'Aprendizaje'],
  },
  description: {
    pt: 'Mapeamento de papéis, criação de componentes em React e alinhamento do PRD entre UX, Product Management e Engenharia para comunidade tech.',
    en: 'Role mapping, React Design System components, and PRD alignment connecting UX, Product Management, and Engineering.',
    es: 'Mapeo de roles, desarrollo de componentes en React y alineación de PRD entre diseño e ingeniería.',
  },
  metadata: {
    clientOrContext: {
      pt: 'Comunidade Tech',
      en: 'Tech Community',
      es: 'Comunidad Tech',
    },
    role: {
      pt: ['Product Designer', 'Frontend Developer', 'UX Strategy'],
      en: ['Product Designer', 'Frontend Developer', 'UX Strategy'],
      es: ['Diseñador de Producto', 'Desarrollador Frontend', 'Estrategia UX'],
    },
    duration: {
      pt: 'Em andamento',
      en: 'Ongoing',
      es: 'En curso',
    },
    tools: ['Figma', 'FigJam', 'Miro', 'Jira', 'React', 'Java'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'Plataforma para gestão de squads multidisciplinares, conectando Product Managers, Tech Leads, Designers e Desenvolvedores.',
        en: 'Platform for cross-functional squad management, connecting Product Managers, Tech Leads, Designers, and Engineers.',
        es: 'Plataforma para la gestión de squads multidisciplinarios conectando diseño, producto e ingeniería.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: 'Organizar as entregas de um time de 14 pessoas (8 backend, 2 frontend, 1 UX) alinhando a arquitetura de dados à criação da biblioteca de componentes.',
        en: 'Manage deliverables for a 14-member squad (8 backend, 2 frontend, 1 UX) aligning data model architecture with UI component design.',
        es: 'Equilibrar la distribución del equipo de 14 personas organizando dependencias de entregas y componentes de interfaz.',
      },
    },
    {
      key: 'projectDefinition',
      body: {
        pt: 'Mapeamento de papéis e entregáveis no PRD do produto, organizando as frentes de trabalho para viabilizar o MVP sem gargalos.',
        en: 'Mapped roles and deliverables within the product PRD, structuring workstreams to ensure a bottleneck-free MVP release.',
        es: 'Mapeo de responsabilidades por rol en la documentación del PRD para asegurar la viabilidad técnica del MVP.',
      },
      subsections: [
        {
          subtitle: {
            pt: 'Matriz de Dependências & Squads',
            en: 'Dependency Matrix & Squads',
            es: 'Matriz de Dependencias y Squads',
          },
          content: {
            pt: 'Divisão estratégica do backlog do MVP (Must-have) e alocação de desenvolvedores backend em tarefas de apoio.',
            en: 'Strategic breakdown of MVP backlog tasks, reallocating backend developers to support QA and data infrastructure.',
            es: 'Distribución estratégica del backlog MVP para evitar cuellos de botella en la interfaz.',
          },
        },
      ],
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Estruturação de componentes reutilizáveis em React sincronizados com o Design System do Figma para padronização técnica e visual.',
        en: 'Developed reusable React components synchronized with the Figma Design System for technical and visual consistency.',
        es: 'Creación de componentes reutilizables en React integrados al Design System para garantizar escalabilidad.',
      },
    },
  ],
};

export default p4buildProject;