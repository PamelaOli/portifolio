import p4buildImage from '../../imagem/P4Build.png';
import type { Project } from '../projects';

const p4buildProject: Project = {
  id: 'p4build',
  title: 'P4Build',
  image: p4buildImage,
  tags: {
    pt: ['UX/UI Designer', 'Plataforma Colaborativa', 'Pesquisa Quantitativa', 'MVP', 'Design System Inicial', 'Protótipo Mobile Ágil', 'Arquitetura de Informação'],
    en: ['Product Design', 'Collaborative Platform', 'Quantitative Research', 'MVP', 'Initial Design System', 'Rapid Mobile Prototyping', 'Information Architecture'],
    es: ['Product Design', 'Plataforma Colaborativa', 'Investigación Cuantitativa', 'MVP', 'Design System Inicial', 'Prototipado Móvil Ágil', 'Arquitectura de Información'],
  },
  description: {
    pt: 'Projeto colaborativo do MVP da plataforma central da comunidade BuildLab. Desenvolvido em um fluxo ágil para atender demandas imediatas de engenharia, combinou pesquisa quantitativa com membros, estruturação do design system e prototipagem mobile-first.',
    en: 'Collaborative MVP project for the central platform of the BuildLab community. Developed in an agile design flow to respond to engineering needs quickly, it combined quantitative research with community input, design system structuring, and mobile-first prototyping.',
    es: 'Proyecto colaborativo del MVP de la plataforma central de la comunidad BuildLab. Desarrollado con un flujo ágil para responder rápidamente a necesidades de ingeniería, combinó investigación cuantitativa con la comunidad, estructuración del design system y prototipado mobile-first.',
  },
  sections: [
    {
      key: 'projectChallenge',
      body: {
        pt: 'Projeto colaborativo para criar a plataforma central da comunidade P4Build, com objetivo de centralizar iniciativas, organizar squads multidisciplinares e gerar portfólio real para os membros. A demanda era unificar a entrada de novos membros e organizar projetos em um ambiente centralizado, ao mesmo tempo em que o time de desenvolvimento precisava de entregáveis rápidos para iniciar o build.',
        en: 'Collaborative project to build the central platform for the P4Build community, with the goal of centralizing initiatives, organizing multidisciplinary squads, and creating real portfolio opportunities for members. The challenge was to unify onboarding for new members and organize projects in one centralized environment while the development team needed fast deliverables to begin implementation.',
        es: 'Proyecto colaborativo para crear la plataforma central de la comunidad P4Build, con el objetivo de centralizar iniciativas, organizar squads multidisciplinares y generar portafolio real para los miembros. El desafío era unificar la entrada de nuevos miembros y organizar proyectos en un entorno centralizado mientras el equipo de desarrollo necesitaba entregables rápidos para comenzar el build.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'Elaboramos e aplicamos uma pesquisa quantitativa direcionada à comunidade da Alura para entender dores reais sobre colaboração e construção de portfólio. A pesquisa buscou identificar as principais dificuldades de quem está estudando e quer colocar a mão na massa, com foco em práticas, automações e criação de valor real.',
        en: 'We developed and applied a quantitative survey aimed at the Alura community to understand real pain points around collaboration and portfolio creation. The research focused on the main difficulties faced by students and early-stage professionals who want to learn through practice and solve real challenges.',
        es: 'Desarrollamos y aplicamos una encuesta cuantitativa para la comunidad de Alura con el objetivo de entender dolores reales relacionados con colaboración y construcción de portafolio. La investigación buscó identificar las principales dificultades de quienes están estudiando y quieren poner la mano en la masa, con foco en práctica, automatización y creación de valor real.',
      },
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Para garantir velocidade na montagem das telas e manter consistência visual, definimos os fundamentos do design system com paleta de cores, tipografia, tokens de espaçamento e componentes reutilizáveis. Em paralelo, mapeei a jornada de onboarding e consolidei regras de negócio essenciais: navegação da página inicial até confirmação de ingresso, lógica de login/cadastro via GitHub, elementos obrigatórios por tela e redirecionamento pós-aprovação para o Discord.',
        en: 'To ensure speed in screen assembly and maintain visual consistency, we defined the foundations of the design system through color palette, typography, spacing tokens, and reusable components. In parallel, I mapped the onboarding journey and consolidated essential business rules: navigation from the home page to entry confirmation, login/sign-up logic via GitHub, required elements per screen, and post-approval redirection to Discord for immediate onboarding.',
        es: 'Para garantizar velocidad en la construcción de pantallas y mantener consistencia visual, definimos los fundamentos del design system con paleta de colores, tipografía, tokens de spacing y componentes reutilizables. En paralelo, tracé la jornada de onboarding y consolidé reglas de negocio esenciales: navegación desde la home hasta la confirmación de ingreso, lógica de login/signup vía GitHub, elementos obligatorios por pantalla y redirección posterior a la aprobación hacia Discord para onboarding inmediato.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Adaptamos estrategicamente a ordem das etapas tradicionais com um pivot de processo, pulando temporariamente a documentação formal da IA para destravar o handoff da primeira tela e permitir desenvolvimento paralelo. O protótipo da primeira interface foi pensado para experiência mobile-first, acelerando as tarefas do time de front-end.',
        en: 'We strategically adapted the traditional workflow through a process pivot, temporarily skipping formal IA documentation to unlock the first screen handoff and unblock parallel development. The first interface prototype was designed with a mobile-first experience to accelerate front-end tasks for the team.',
        es: 'Adaptamos estratégicamente el orden de las etapas tradicionales mediante un pivot de proceso, saltándonos temporalmente la documentación formal de IA para desbloquear el handoff de la primera pantalla y acelerar el desarrollo paralelo. El prototipo de la primera interfaz se diseñó con experiencia mobile-first para agilizar las tareas del equipo de front-end.',
      },
    },
    {
      key: 'projectResults',
      body: {
        pt: 'A adaptação do fluxo de design demonstrou que flexibilidade metodológica é indispensável em ambientes de engenharia com alta velocidade. Priorizando ativos essenciais de UI e acelerando a prototipagem mobile, o projeto conseguiu destravar o desenvolvimento sem comprometer a padronização do ecossistema, reforçando o valor de alinhar UX com viabilidade e velocidade de entrega.',
        en: 'The adapted design flow proved that methodological flexibility is essential in fast-paced engineering environments. By prioritizing core UI assets and accelerating mobile prototyping, the project was able to unblock development without sacrificing design consistency, reinforcing the value of aligning UX with delivery speed and technical feasibility.',
        es: 'La adaptación del flujo de diseño demostró que la flexibilidad metodológica es indispensable en entornos de ingeniería de alta velocidad. Priorizando activos esenciales de UI y acelerando el prototipado mobile, el proyecto pudo desbloquear el desarrollo sin comprometer la estandarización del ecosistema, reforzando el valor de alinear UX con viabilidad y velocidad de entrega.',
      },
    },
  ],
};

export default p4buildProject;
