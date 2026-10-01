import casamentoImage from 'portifolioPam/src/imagem/Casamento.png';
import type { Project } from '../projects';

const casamentoProject: Project = {
  id: 'casamento-app',
  title: 'Casamento',
  image: casamentoImage,
  tags: {
    pt: ['Mobile First', 'Fluxo de Presentes', 'Gestão de Convidados', 'UI Simples', 'IA'],
    en: ['Mobile First', 'Gift Registry', 'Guest Management', 'Simple UI', 'AI'],
    es: ['Mobile First', 'Lista de Regalos', 'Gestión de Invitados', 'UI Simple', 'IA'],
  },
  skillsUsed: {
    pt: ['Interfaces', 'Responsive Design', 'Acessibilidade', 'Organização', 'Gestão de tempo', 'Criatividade', 'Resolução de problemas'],
    en: ['Interfaces', 'Responsive Design', 'Accessibility', 'Organization', 'Time Management', 'Creativity', 'Problem Solving'],
    es: ['Interfaces', 'Diseño Responsivo', 'Accesibilidad', 'Organización', 'Gestión del Tiempo', 'Creatividad', 'Resolución de Problemas'],
  },
  description: {
    pt: 'Interface focada em confirmação de presença e lista de presentes digital para convidados de diferentes perfis com extrema facilidade de uso.',
    en: 'Mobile-first application built for RSVP confirmation and gift selection, crafted for effortless use across diverse user tech-skills.',
    es: 'Plataforma para confirmación de asistencia y lista de regalos pensada para facilitar la experiencia a usuarios de todas las edades.',
  },
  metadata: {
    clientOrContext: {
      pt: 'Projeto Pessoal / Eventos',
      en: 'Personal Project / Events',
      es: 'Proyecto Personal / Eventos',
    },
    role: {
      pt: ['UX/UI Designer', 'Frontend Developer'],
      en: ['UX/UI Designer', 'Frontend Developer'],
      es: ['Diseñador UX/UI', 'Desarrollador Frontend'],
    },
    duration: {
      pt: '1 semana',
      en: '1 week',
      es: '1 semana',
    },
    tools: ['Figma', 'Figjam', 'Figma Make'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'Aplicação web para gerenciar a lista de convidados, confirmações de presença (RSVP) e seleção de presentes para um evento de casamento.',
        en: 'Web app designed to manage guest RSVPs, gift choices, and event communications for a wedding celebration.',
        es: 'Solución digital diseñada para facilitar el proceso de RSVP y la selección de regalos en eventos de boda.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: 'Criar uma experiência extremamente simples para que convidados sem familiaridade técnica confirmassem presença e escolhessem presentes sem ajuda.',
        en: 'Build an ultra-simple user experience allowing non-technical guests to confirm attendance and choose gifts without assistance.',
        es: 'Garantizar que invitados con poco manejo tecnológico puedan confirmar presencia y elegir regalos sin fricción.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Interface mobile-first com fluxo guiado em etapas, botões destacados e confirmação visual instantânea de ações.',
        en: 'Mobile-first interface featuring guided step-by-step flows, prominent action buttons, and instant visual feedback.',
        es: 'Creación de un flujo intuitivo paso a paso con confirmaciones inmediatas e integración de pagos simples.',
      },
    },
  ],
};

export default casamentoProject;
