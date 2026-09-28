import useDevImage from '../../imagem/UseDev.png';
import type { Project } from '../projects';

const useDevProject: Project = {
  id: 'use-dev',
  title: 'UseDev',
  image: useDevImage,
  tags: {
    pt: ['UX/UI Design', 'Auditoria de Usabilidade', 'Redesign de Jornada', 'Personas', 'Heurísticas', 'Priorização'],
    en: ['UX/UI Design', 'Usability Audit', 'Journey Redesign', 'Personas', 'Heuristics', 'Prioritization'],
    es: ['UX/UI Design', 'Auditoría de Usabilidad', 'Rediseño de Jornada', 'Personas', 'Heurísticas', 'Priorización'],
  },
  description: {
    pt: 'Auditoria técnica de usabilidade e redesign estratégico da jornada de compra de um e-commerce de tecnologia. O projeto focou na eliminação de gargalos no funil, na aplicação das heurísticas de Nielsen e na criação de um roadmap executável para reduzir a evasão no carrinho.',
    en: 'Technical usability audit and strategic redesign of the purchase journey for a technology-focused e-commerce platform. The project focused on removing funnel bottlenecks, applying Nielsen’s heuristics, and creating an actionable roadmap to reduce cart abandonment.',
    es: 'Auditoría técnica de usabilidad y rediseño estratégico del recorrido de compra para un e-commerce enfocado en tecnología. El proyecto se centró en eliminar cuellos de botella del embudo, aplicar las heurísticas de Nielsen y crear un roadmap ejecutable para reducir la pérdida de carritos.',
  },
  sections: [
    {
      key: 'projectChallenge',
      body: {
        pt: 'Análise aprofundada da experiência de compra em uma plataforma de e-commerce voltada para tecnologia e desenvolvimento de software, mapeando a jornada de ponta a ponta para identificar gargalos operacionais e de usabilidade. Identifiquei, com precisão, os pontos de fricção que estavam gerando abandono no funil de compras e propus soluções estruturais priorizadas por severidade e viabilidade técnica.',
        en: 'In-depth analysis of the purchasing experience on a technology-focused e-commerce platform, mapping the full journey to uncover operational and usability bottlenecks. I identified the friction points driving abandonment in the purchase funnel and proposed structural improvements prioritized by severity and technical feasibility.',
        es: 'Análisis profundo de la experiencia de compra en una plataforma de e-commerce centrada en tecnología y desarrollo de software, trazando el recorrido completo para detectar cuellos de botella operativos y de usabilidad. Identifiqué los puntos de fricción que generaban abandono en el embudo de compra y propuse soluciones estructurales priorizadas por severidad y viabilidad técnica.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'Para humanizar os dados e entender o impacto real das dores no comportamento de compra, estruturei um ecossistema metodológico dividindo os perfis em personas: Jonas (22), desenvolvedor júnior focado em agilidade e checkout rápido; e Vitória (32), desenvolvedora sênior com necessidades específicas de segurança, clareza em políticas de devolução e rastreio de ponta a ponta. Com esses perfis, mapeei a jornada do usuário conectando ações, sentimentos, pontos críticos e oportunidades de melhoria. Também conduzi uma auditoria baseada nas 10 heurísticas de Nielsen, catalogando inconsistências entre telas, ausência de validações lógicas em formulários e baixa visibilidade do status do sistema em fluxos assíncronos.',
        en: 'To humanize the data and understand the real impact of user pain points on purchase behavior, I built a methodological framework around key personas: Jonas (22), a junior developer focused on speed and quick checkout; and Vitória (32), a senior developer with specific needs around security, return-policy clarity, and end-to-end tracking. Based on these profiles, I mapped the user journey to connect actions, emotions, friction points, and improvement opportunities. I also ran a rigorous audit guided by Nielsen’s 10 heuristics, identifying inconsistencies across screens, missing logical validations in forms, and limited system-status visibility in asynchronous flows.',
        es: 'Para humanizar los datos y entender el impacto real de los puntos de dolor en el comportamiento de compra, organicé un marco metodológico alrededor de personas clave: Jonas (22), desarrollador junior centrado en rapidez y checkout ágil; y Vitória (32), desarrolladora senior con necesidades específicas de seguridad, claridad en políticas de devolución y seguimiento de extremo a extremo. Con estos perfiles, tracé la jornada del usuario conectando acciones, emociones, puntos críticos y oportunidades de mejora. También realicé una auditoría rigurosa basada en las 10 heurísticas de Nielsen, detectando inconsistencias entre pantallas, falta de validaciones lógicas en formularios y baja visibilidad del estado del sistema en flujos asíncronos.',
      },
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Para reestruturar o funil e garantir clareza em todo o fluxo de conversão, reformulei a arquitetura da informação, apresentando regras de frete e políticas de devolução diretamente na etapa do carrinho. Também reduzi a carga cognitiva dos formulários de cadastro e checkout por meio da simplificação de passos e da padronização visual dos componentes de entrada.',
        en: 'To restructure the funnel and improve clarity across the full conversion flow, I redesigned the information architecture by surfacing shipping rules and return policies directly in the cart step. I also reduced cognitive load in registration and checkout forms by simplifying steps and standardizing the visual components used for input fields.',
        es: 'Para reestructurar el embudo y garantizar claridad en todo el flujo de conversión, reformulé la arquitectura de la información mostrando reglas de envío y políticas de devolución directamente en la etapa del carrito. Además, reduje la carga cognitiva de los formularios de registro y checkout simplificando pasos y estandarizando visualmente los componentes de entrada.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Transformei os diagnósticos em um plano de ação executável com uma matriz de priorização que conectou impacto na experiência do usuário com a complexidade técnica de implementação. As soluções entregues focaram na redução da carga cognitiva em formulários, no feedback visual dinâmico para requisições e respostas do sistema e na transparência das regras de frete e devolução no momento da decisão de compra.',
        en: 'I translated the diagnostics into an actionable roadmap through a prioritization matrix that linked user-experience impact with implementation complexity. The solutions focused on reducing cognitive load in forms, adding dynamic visual feedback for requests and system responses, and clarifying shipping and return rules at the exact point of purchase decision.',
        es: 'Convertí los diagnósticos en un plan de acción ejecutable mediante una matriz de priorización que conectó el impacto en la experiencia de usuario con la complejidad técnica de implementación. Las soluciones se centraron en reducir la carga cognitiva de los formularios, incorporar feedback visual dinámico para solicitudes y respuestas del sistema, y dejar más transparentes las reglas de envío y devolución en el momento de decisión de compra.',
      },
    },
    {
      key: 'projectResults',
      body: {
        pt: 'Este projeto consolidou a importância de uma abordagem rigorosa de pesquisa para o sucesso de um produto digital. Aprendi que a estrutura mental do usuário não é linear e que o design precisa ser resiliente para suportar caminhos alternativos. Também percebi que a ausência de indicadores de carregamento assíncrono afeta diretamente a confiança no sistema e que regras de negócio ambíguas são grandes detratores de conversão em e-commerce. Por fim, validei que auditar interfaces com heurísticas consolidadas economiza tempo de desenvolvimento e orienta recursos para soluções que geram valor real para o negócio.',
        en: 'This project reinforced the importance of a rigorous research approach for digital product success. I learned that users do not think linearly, and design must be resilient enough to support alternative paths. I also observed that missing asynchronous loading indicators directly impact trust in the system, and that ambiguous business rules are major conversion killers in e-commerce. Finally, I validated that auditing interfaces with established heuristics saves development time and directs resources toward solutions that generate real business value.',
        es: 'Este proyecto reforzó la importancia de un enfoque riguroso de investigación para el éxito de un producto digital. Aprendí que la estructura mental del usuario no es lineal y que el diseño debe ser resiliente para soportar caminos alternativos. También comprobé que la falta de indicadores de carga asíncrona afecta directamente la confianza en el sistema y que las reglas de negocio ambiguas son grandes detractores de conversión en e-commerce. Por último, validé que auditar interfaces con heurísticas consolidadas ahorra tiempo de desarrollo y orienta recursos hacia soluciones que generan valor real para el negocio.',
      },
    },
  ],
};

export default useDevProject;
