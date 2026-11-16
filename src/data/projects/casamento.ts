import type { Project } from '../projects';

const casamentoProject: Project = {
  id: 'casamento-app',
  title: 'Casamento',
  behanceUrl: 'https://www.behance.net/gallery/258155205/Redesign-Casamento',
  skillsUsed: {
    pt: ['Mobile First', 'UI Simples', 'IA', 'Interfaces', 'Responsive Design', 'Acessibilidade', 'Organização', 'Gestão de tempo', 'Criatividade', 'Resolução de problemas'],
    en: ['Mobile First', 'Simple UI', 'AI', 'Interfaces', 'Responsive Design', 'Accessibility', 'Organization', 'Time Management', 'Creativity', 'Problem Solving'],
    es: ['Mobile First', 'UI Simple', 'IA', 'Interfaces', 'Diseño Responsivo', 'Accesibilidad', 'Organización', 'Gestión del Tiempo', 'Creatividad', 'Resolución de Problemas'],
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
      pt: ['UX/UI Designer', 'UX Researcher'],
      en: ['UX/UI Designer', 'UX Researcher'],
      es: ['Diseñador UX/UI', 'Investigador UX'],
    },
    duration: {
      pt: '1 semana',
      en: '1 week',
      es: '1 semana',
    },
    tools: ['Figma', 'Figjam'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'Este projeto pessoal de estudo nasceu da dificuldade de navegar pelo site de casamento de um casal de amigos, especialmente para confirmar presença. A partir da análise da interface original, redesenhei a página inicial para desktop e mobile. Também defini um sistema visual com cores, tipografia e ícones, buscando melhorar a legibilidade, organizar as informações e tornar as principais ações mais fáceis de encontrar.',
        en: 'This personal study project was born from the difficulty of navigating a wedding website for a couple of friends, especially to RSVP. From analyzing the original interface, I redesigned the homepage for both desktop and mobile, simplified the menu, and restructured the RSVP section. I also defined a visual system with colors, typography, and icons to enhance readability, organize information, and make key actions easier to find.',
        es: 'Este proyecto personal de estudio nació a partir de la dificultad de navegar por el sitio web de una boda de amigos, especialmente para confirmar la asistencia. A partir del análisis de la interfaz original, rediseñé la página principal para escritorio y móvil, simplifiqué el menú y reestructuré la sección de confirmación de asistencia. También definí un sistema visual con colores, tipografía e íconos para mejorar la legibilidad, organizar la información y hacer que las acciones clave sean más fáciles de encontrar.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: '- Simplificar a navegação \n- Destacar a confirmação de presença \n- Criar uma hierarquia visual clara \n- Padronizar os elementos da interface \n- Melhorar a legibilidade \n- Preservar a identidade do casal',
        en: '- Simplify navigation \n- Highlight RSVP \n- Create a clear visual hierarchy \n- Standardize interface elements \n- Improve readability \n- Preserve the couple\'s identity',
        es: '- Simplificar la navegación \n- Destacar la confirmación de asistencia \n- Crear una jerarquía visual clara \n- Padronizar los elementos de la interfaz \n- Mejorar la legibilidad \n- Preservar la identidad de la pareja',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Parti da análise do site original para identificar o que dificultava a navegação e o acesso às informações essenciais. Priorizei três frentes: simplificar o menu, dar destaque à confirmação de presença e criar uma hierarquia visual clara. A proposta foi preservar a identidade desejada pelo casal, com mais consistência e legibilidade.\n\n Reorganizei a navegação em um menu mais enxuto, com acesso direto às principais seções. Na confirmação de presença, explorei diferentes versões para tornar a ação e as instruções mais claras. Também padronizei cores, tipografia, ícones e botões, diferenciando elementos clicáveis de conteúdos informativos e verificando o contraste das combinações de cores. \n\n - Redesign da página inicial para desktop e mobile. \n- Nova seção de confirmação de presença. \n- Menu de navegação simplificado e adaptado aos dois formatos. \n- Sistema visual com paleta de cores, tipografia, ícones e padrões de botões.',
        en: 'Starting from the analysis of the original site, I identified what hindered navigation and access to essential information. I prioritized three fronts: simplifying the menu, highlighting RSVP, and creating a clear visual hierarchy. The proposal was to preserve the identity desired by the couple, with more consistency and readability.\n\n I reorganized navigation into a leaner menu, with direct access to the main sections. In the RSVP section, I explored different versions to make the action and instructions clearer. I also standardized colors, typography, icons, and buttons, differentiating clickable elements from informational content and checking color contrast combinations. \n\n - Redesigned homepage for desktop and mobile. \n- New RSVP section. \n- Simplified navigation menu adapted to both formats. \n- Visual system with color palette, typography, icons, and button patterns.',
        es: 'Partiendo del análisis del sitio original, identifiqué lo que dificultaba la navegación y el acceso a la información esencial. Priorizé tres frentes: simplificar el menú, resaltar la confirmación de asistencia y crear una jerarquía visual clara. La propuesta fue preservar la identidad deseada por la pareja, con más consistencia y legibilidad.\n\n Reorganicé la navegación en un menú más reducido, con acceso directo a las secciones principales. En la sección de confirmación de asistencia, exploré diferentes versiones para que la acción y las instrucciones fueran más claras. También estandaricé colores, tipografía, íconos y botones, diferenciando elementos clicables de contenidos informativos y verificando el contraste de las combinaciones de colores. \n\n - Rediseño de la página principal para escritorio y móvil. \n- Nueva sección de confirmación de asistencia. \n- Menú de navegación simplificado y adaptado a ambos formatos. \n- Sistema visual con paleta de colores, tipografía, íconos y patrones de botones.',
      },
    },
  ],
};

export default casamentoProject;
