export interface Project {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  tags: { pt: string[]; en: string[]; es: string[] };
  description: { pt: string; en: string; es: string };
  challenge: { pt: string; en: string; es: string };
  solution: { pt: string; en: string; es: string };
  research: { pt: string; en: string; es: string };
  results: { pt: string; en: string; es: string };
  design: { pt: string; en: string; es: string };
}

export const projects: Project[] = [
  {
    id: 'use-dev',
    title: 'UseDev',
    image: './src/imagem/UseDev.png',
    gallery: [
      './src/imagem/useimagem1.png',
      './src/imagem/useimagem2.png',
      './src/imagem/useimagem3.png',
    ],
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
    challenge: {
      pt: 'Análise aprofundada da experiência de compra em uma plataforma de e-commerce voltada para tecnologia e desenvolvimento de software, mapeando a jornada de ponta a ponta para identificar gargalos operacionais e de usabilidade. Identifiquei, com precisão, os pontos de fricção que estavam gerando abandono no funil de compras e propus soluções estruturais priorizadas por severidade e viabilidade técnica.',
      en: 'In-depth analysis of the purchasing experience on a technology-focused e-commerce platform, mapping the full journey to uncover operational and usability bottlenecks. I identified the friction points driving abandonment in the purchase funnel and proposed structural improvements prioritized by severity and technical feasibility.',
      es: 'Análisis profundo de la experiencia de compra en una plataforma de e-commerce centrada en tecnología y desarrollo de software, trazando el recorrido completo para detectar cuellos de botella operativos y de usabilidad. Identifiqué los puntos de fricción que generaban abandono en el embudo de compra y propuse soluciones estructurales priorizadas por severidad y viabilidad técnica.',
    },
    research: {
      pt: 'Para humanizar os dados e entender o impacto real das dores no comportamento de compra, estruturei um ecossistema metodológico dividindo os perfis em personas: Jonas (22), desenvolvedor júnior focado em agilidade e checkout rápido; e Vitória (32), desenvolvedora sênior com necessidades específicas de segurança, clareza em políticas de devolução e rastreio de ponta a ponta. Com esses perfis, mapeei a jornada do usuário conectando ações, sentimentos, pontos críticos e oportunidades de melhoria. Também conduzi uma auditoria baseada nas 10 heurísticas de Nielsen, catalogando inconsistências entre telas, ausência de validações lógicas em formulários e baixa visibilidade do status do sistema em fluxos assíncronos.',
      en: 'To humanize the data and understand the real impact of user pain points on purchase behavior, I built a methodological framework around key personas: Jonas (22), a junior developer focused on speed and quick checkout; and Vitória (32), a senior developer with specific needs around security, return-policy clarity, and end-to-end tracking. Based on these profiles, I mapped the user journey to connect actions, emotions, friction points, and improvement opportunities. I also ran a rigorous audit guided by Nielsen’s 10 heuristics, identifying inconsistencies across screens, missing logical validations in forms, and limited system-status visibility in asynchronous flows.',
      es: 'Para humanizar los datos y entender el impacto real de los puntos de dolor en el comportamiento de compra, organicé un marco metodológico alrededor de personas clave: Jonas (22), desarrollador junior centrado en rapidez y checkout ágil; y Vitória (32), desarrolladora senior con necesidades específicas de seguridad, claridad en políticas de devolución y seguimiento de extremo a extremo. Con estos perfiles, mapeé la jornada del usuario conectando acciones, emociones, puntos críticos y oportunidades de mejora. También realicé una auditoría rigurosa basada en las 10 heurísticas de Nielsen, detectando inconsistencias entre pantallas, falta de validaciones lógicas en formularios y baja visibilidad del estado del sistema en flujos asíncronos.',
    },
    design: {
      pt: 'Para reestruturar o funil e garantir clareza em todo o fluxo de conversão, reformulei a arquitetura da informação, apresentando regras de frete e políticas de devolução diretamente na etapa do carrinho. Também reduzi a carga cognitiva dos formulários de cadastro e checkout por meio da simplificação de passos e da padronização visual dos componentes de entrada.',
      en: 'To restructure the funnel and improve clarity across the full conversion flow, I redesigned the information architecture by surfacing shipping rules and return policies directly in the cart step. I also reduced cognitive load in registration and checkout forms by simplifying steps and standardizing the visual components used for input fields.',
      es: 'Para reestructurar el embudo y garantizar claridad en todo el flujo de conversión, reformulé la arquitectura de la información mostrando reglas de envío y políticas de devolución directamente en la etapa del carrito. Además, reduje la carga cognitiva de los formularios de registro y checkout simplificando pasos y estandarizando visualmente los componentes de entrada.',
    },
    solution: {
      pt: 'Transformei os diagnósticos em um plano de ação executável com uma matriz de priorização que conectou impacto na experiência do usuário com a complexidade técnica de implementação. As soluções entregues focaram na redução da carga cognitiva em formulários, no feedback visual dinâmico para requisições e respostas do sistema e na transparência das regras de frete e devolução no momento da decisão de compra.',
      en: 'I translated the diagnostics into an actionable roadmap through a prioritization matrix that linked user-experience impact with implementation complexity. The solutions focused on reducing cognitive load in forms, adding dynamic visual feedback for requests and system responses, and clarifying shipping and return rules at the exact point of purchase decision.',
      es: 'Convertí los diagnósticos en un plan de acción ejecutable mediante una matriz de priorización que conectó el impacto en la experiencia de usuario con la complejidad técnica de implementación. Las soluciones se centraron en reducir la carga cognitiva de los formularios, incorporar feedback visual dinámico para solicitudes y respuestas del sistema, y dejar más transparentes las reglas de envío y devolución en el momento de decisión de compra.',
    },
    results: {
      pt: 'Este projeto consolidou a importância de uma abordagem rigorosa de pesquisa para o sucesso de um produto digital. Aprendi que a estrutura mental do usuário não é linear e que o design precisa ser resiliente para suportar caminhos alternativos. Também percebi que a ausência de indicadores de carregamento assíncrono afeta diretamente a confiança no sistema e que regras de negócio ambíguas são grandes detratores de conversão em e-commerce. Por fim, validei que auditar interfaces com heurísticas consolidadas economiza tempo de desenvolvimento e orienta recursos para soluções que geram valor real para o negócio.',
      en: 'This project reinforced the importance of a rigorous research approach for digital product success. I learned that users do not think linearly, and design must be resilient enough to support alternative paths. I also observed that missing asynchronous loading indicators directly impact trust in the system, and that ambiguous business rules are major conversion killers in e-commerce. Finally, I validated that auditing interfaces with established heuristics saves development time and directs resources toward solutions that generate real business value.',
      es: 'Este proyecto reforzó la importancia de un enfoque riguroso de investigación para el éxito de un producto digital. Aprendí que la estructura mental del usuario no es lineal y que el diseño debe ser resiliente para soportar caminos alternativos. También comprobé que la falta de indicadores de carga asíncrona afecta directamente la confianza en el sistema y que las reglas de negocio ambiguas son grandes detractores de conversión en e-commerce. Por último, validé que auditar interfaces con heurísticas consolidadas ahorra tiempo de desarrollo y orienta recursos hacia soluciones que generan valor real para el negocio.',
    },
  },

  {
    id: 'saber-rota',
    title: 'Sabor & Rota',
    image: './src/imagem/SaborRota.png',
    gallery: [],
    tags: {
      pt: ['UX/UI Designer', 'Consultora de Usabilidade', 'Consultoria de Redesign', 'Estudo de Caso com IA', 'Benchmarking Estratégico', 'User Flow', 'Diretrizes de UI', 'Arquitetura de Informação', 'Métricas de ROI'],
      en: ['UX Research', 'Service Design', 'Mobile App', 'Route Experience', 'Product Strategy', 'Design System'],
      es: ['UX Research', 'Service Design', 'App Móvil', 'Experiencia de Ruta', 'Estrategia de Producto', 'Design System'],
    },
    description: {
      pt: 'Estudo de caso de consultoria focado na redução de churn de uma startup gastronômica, de 85% para 20%. A proposta aplicou conceitos de quiet luxury, minimalismo funcional, navegação anônima e reestruturação de fluxos com suporte de IA.',
      en: 'Consulting case study focused on reducing churn for a food startup from 85% to 20%. The project applied quiet luxury principles, functional minimalism, anonymous guest navigation, and a redesigned flow supported by AI.',
      es: 'Estudio de caso de consultoría centrado en reducir el churn de una startup gastronómica, del 85% al 20%. La propuesta aplicó principios de quiet luxury, minimalismo funcional, navegación anónima y una reestructuración de flujos con apoyo de IA.',
    },
    challenge: {
      pt: 'Projeto prático realizado em colaboração com IA (Gemini), simulando um cenário real de consultoria para a startup gastronômica Sabor & Rota. A plataforma apresentava churn de 85% no primeiro acesso por causa de um desalinhamento de stakeholders: o proprietário defendia que um fluxo burocrático e visualmente denso transmitia exclusividade e valor premium, enquanto os dados de comportamento apontavam para o oposto. O objetivo era convencer o stakeholder a simplificar o produto digital sem diluir a força da marca, aplicando conceitos de quiet luxury e minimalismo funcional.',
      en: 'A practical project conducted in collaboration with AI, simulating a real consulting scenario for the food startup Sabor & Rota. The platform had a first-session churn rate of 85% due to stakeholder misalignment: the founder believed that a bureaucratic, visually dense flow conveyed exclusivity and premium value, while behavioral data suggested the opposite. The goal was to persuade the stakeholder to simplify the digital product without diluting the brand value, applying quiet luxury and functional minimalism principles.',
      es: 'Proyecto práctico realizado en colaboración con IA, simulando un escenario real de consultoría para la startup gastronómica Sabor & Rota. La plataforma tenía una tasa de churn del 85% en la primera sesión debido a un desalineamiento entre stakeholders: el fundador creía que un flujo burocrático y visualmente denso transmitía exclusividad y valor premium, mientras que los datos de comportamiento sugerían lo contrario. El objetivo era convencer al stakeholder de simplificar el producto digital sin diluir el valor de la marca, aplicando principios de quiet luxury y minimalismo funcional.',
    },
    research: {
      pt: 'A pesquisa identificou três fatores críticos para a alta rejeição: exigência de dados sensíveis (CPF/RG) no primeiro contato, gerando desconfiança e atrito cognitivo; ativos visuais não otimizados e splash screens longas que violavam os tempos de resposta; e uma inconsistência de público que afastava a geração Z por lentidão e o público 50+ por falta de clareza e acessibilidade. Através de benchmarking com marcas premium, descobri que o luxo digital legítimo reduz o atrito e prioriza a fase de desejo antes de impor barreiras cadastrais. Isso fundamentou a implementação de acesso anônimo até a etapa de checkout.',
      en: 'The research identified three critical factors behind the high rejection rate: the requirement of sensitive data (CPF/RG) at first contact, which created distrust and cognitive friction; unoptimized visual assets and long splash screens that violated response time expectations; and audience inconsistency, which pushed away Gen Z due to slowness and older audiences due to lack of clarity and accessibility. Through benchmarking with premium brands, I found that legitimate digital luxury reduces friction and prioritizes desire before imposing registration barriers. This informed the implementation of anonymous guest access until checkout.',
      es: 'La investigación identificó tres factores críticos detrás de la alta tasa de rechazo: la exigencia de datos sensibles (CPF/RG) en el primer contacto, lo que generaba desconfianza y fricción cognitiva; activos visuales no optimizados y splash screens largos que rompían los tiempos de respuesta; y una inconsistencia de público que alejó a la Generación Z por lentitud y a perfiles mayores por falta de claridad y accesibilidad. A través de benchmarking con marcas premium, descubrí que el lujo digital legítimo reduce la fricción y prioriza la fase de deseo antes de imponer barreras de registro, lo que fundamentó la implementación de acceso anónimo hasta la etapa de checkout.',
    },
    design: {
      pt: 'Reorganizei a taxonomia e a hierarquia da interface com progressive disclosure: fotos gastronômicas otimizadas, preços transparentes, nome do chef e selos regionais ganharam foco primário, enquanto a narrativa institucional foi movida para cards expansíveis. No user flow, substituí o formulário de 15 campos por login social e eliminei a coleta de documentos no primeiro acesso. Para as diretrizes visuais, combinei tipografia híbrida, uso estratégico de white space e uma paleta neutra com alto contraste, mantendo foco em CTAs e na sensação premium.',
      en: 'I reorganized the interface taxonomy and hierarchy using progressive disclosure: optimized food photography, transparent pricing, chef names, and regional seals gained primary focus, while institutional storytelling moved to expandable cards. In the user flow, I replaced a 15-field form with social login and removed document collection at first access. For visual guidance, I combined hybrid typography, strategic whitespace, and a neutral high-contrast palette with a clear focus on CTAs and a premium feel.',
      es: 'Reorganicé la taxonomía y la jerarquía de la interfaz con progressive disclosure: fotografías gastronómicas optimizadas, precios transparentes, nombres del chef y sellos regionales ganaron protagonismo, mientras la narrativa institucional se movió a cards expandibles. En el user flow, reemplazé un formulario de 15 campos por login social y eliminé la recogida de documentos en el primer acceso. Para las directrices visuales, combiné tipografía híbrida, whitespace estratégico y una paleta neutra de alto contraste, manteniendo el foco en CTAs y en la sensación premium.',
    },
    solution: {
      pt: 'Estruturei a entrega com foco em soluções de alto impacto para o negócio e na defesa técnica do processo. As mudanças visaram reduzir o churn de 85% para 20% com a eliminação do cadastro obrigatório, melhora de performance no redesign da splash screen e compressão de ativos, além de aumentar a acessibilidade para públicos jovens e maduros. O projeto foi conduzido com IA como parceira de cocriação, e a minha atuação estava centrada em defender boas práticas de usabilidade e experiência diante de resistências tradicionais de negócio.',
      en: 'I structured the delivery around high-impact solutions and strong process advocacy. The changes aimed to reduce churn from 85% to 20% by removing mandatory registration, improving performance through splash-screen redesign and asset compression, and increasing accessibility for both younger and mature audiences. The project was developed with AI as a co-creation partner, while my role focused on defending usability best practices and user experience against traditional business resistance.',
      es: 'Estructuré la entrega alrededor de soluciones de alto impacto y una defensa técnica clara del proceso. Los cambios buscaban reducir el churn del 85% al 20% con la eliminación del registro obligatorio, mejorar el rendimiento mediante rediseño de la splash screen y compresión de assets, y aumentar la accesibilidad para públicos jóvenes y maduros. El proyecto se desarrolló con IA como socia de cocreación, y mi rol estuvo centrado en defender buenas prácticas de usabilidad y experiencia frente a resistencias de negocio tradicionales.',
    },
    results: {
      pt: 'Este projeto consolidou a importância de fundamentar decisões de design em conceitos como affordance, target size e cognitive load para alinhar objetivos de negócio com as necessidades do usuário. Comprovei que exclusividade digital não se constrói com barreiras burocráticas, mas com fluidez, respeito ao tempo do usuário e transparência. A melhor interface para o negócio é aquela que reduz atrito e respeita a estrutura mental de quem a utiliza.',
      en: 'The project reinforced the importance of grounding design decisions in concepts such as affordance, target size, and cognitive load to align business goals with user needs. It showed that digital exclusivity is not built through bureaucratic barriers, but through fluidity, respect for the user’s time, and transparency. The best interface for business is one that reduces friction and respects the mental model of the people using it.',
      es: 'Este proyecto reforzó la importancia de fundamentar decisiones de diseño en conceptos como affordance, target size y cognitive load para alinear objetivos de negocio con las necesidades del usuario. Demostró que la exclusividad digital no se construye con barreras burocráticas, sino con fluidez, respeto al tiempo del usuario y transparencia. La mejor interfaz para el negocio es la que reduce fricción y respeta el modelo mental de quien la usa.',
    },
  },

  {
    id: 'casamento',
    title: 'Casamento',
    image: './src/imagem/Casamento.png',
    gallery: [
      './src/imagem/casaimagem1.png',
      './src/imagem/casaimagem2.png',
      './src/imagem/casaimagem3.png',
      './src/imagem/PaginaPrincipalIphone.png',
      './src/imagem/PaginaPrincipalIphoneMenu.png',
      './src/imagem/PaginaPrincipalNotebook.png'
    ],
    tags: {
      pt: ['UX/UI Designer', 'Especialista em Acessibilidade', 'Redesign Estratégico', 'Landing Page de Alta Conversão', 'Layout Mobile-First', 'Avaliação Heurística', 'Reestruturação de Arquitetura', 'Validação por IA'],
      en: ['Wedding UX', 'Accessibility', 'Strategic Redesign', 'High-conversion Landing Page', 'Mobile-first Layout', 'Heuristic Evaluation', 'Information Architecture', 'AI Validation'],
      es: ['Wedding UX', 'Accesibilidad', 'Rediseño Estratégico', 'Landing Page de Alta Conversión', 'Layout Mobile-First', 'Evaluación Heurística', 'Arquitectura de Información', 'Validación con IA'],
    },
    description: {
      pt: 'Redesign focado em alta conversão (RSVP) e acessibilidade inclusiva para uma plataforma de casamento. A solução reestruturou a arquitetura da informação separando conteúdos afetivos e práticos, aplicou mobile-first e aprimorou o UX Writing.',
      en: 'High-conversion redesign focused on inclusive accessibility for a wedding platform. The solution reorganized the information architecture by separating emotional and practical content, applied mobile-first design principles, and improved UX writing.',
      es: 'Rediseño orientado a alta conversión (RSVP) y accesibilidad inclusiva para una plataforma de boda. La solución reestructuró la arquitectura de la información separando contenido emocional y práctico, aplicó mobile-first y mejoró el UX Writing.',
    },
    challenge: {
      pt: 'O objetivo foi transformar uma plataforma real de casamento, repleta de barreiras de usabilidade e acessibilidade, em uma jornada fluida, intuitiva e focada em conversão. A meta era eliminar atritos para convidados com perfis distintos, reduzindo sobrecarga cognitiva e aumentando a taxa de confirmação de presença.',
      en: 'The goal was to transform a real wedding platform full of usability and accessibility barriers into a fluid, intuitive, and conversion-focused journey. The main objective was to remove friction for guests with different profiles, reducing cognitive overload and improving RSVP conversion.',
      es: 'El objetivo era transformar una plataforma real de boda, llena de barreras de usabilidad y accesibilidad, en un recorrido fluido, intuitivo y centrado en la conversión. La meta era eliminar fricciones para invitados con perfiles distintos, reducir la sobrecarga cognitiva y mejorar la tasa de confirmación de asistencia.',
    },
    research: {
      pt: 'Para identificar os gargalos do fluxo original, apliquei avaliação heurística e análise de fricção de jornada. Os principais problemas eram: a ação principal do site (confirmar presença) estava diluída em excesso de estímulos visuais; a navegação misturava conteúdo emocional e utilitário; e a falta de contraste e hierarquia tipográfica comprometia a leitura rápida e a acessibilidade.',
      en: 'To identify the bottlenecks in the original flow, I applied heuristic evaluation and journey-friction analysis. The main problems were: the primary action on the site (confirming attendance) was buried under too much visual stimulus; navigation mixed emotional and practical content; and poor contrast and inconsistent typography affected scanning speed and accessibility.',
      es: 'Para identificar los cuellos de botella del flujo original, apliqué evaluación heurística y análisis de fricción del recorrido. Los problemas principales eran: la acción principal del sitio (confirmar asistencia) estaba diluida entre demasiados estímulos visuales; la navegación mezclaba contenido emocional y utilitario; y la baja contraposición y la jerarquía tipográfica inconsistente afectaban la lectura rápida y la accesibilidad.',
    },
    design: {
      pt: 'Reestruturei a informação em dois pilares mentais claros: o pilar afetivo e o pilar prático. Também apliquei um padrão de dropdown para agrupar conteúdo emocional, limpei o header principal e adotei uma paleta de alto contraste em azul marinho e coral alinhada às diretrizes WCAG, mantendo a sofisticação estética.',
      en: 'I reorganized the content into two clear mental pillars: the emotional pillar and the practical pillar. I also used a dropdown pattern to group emotional content, cleaned up the main header, and adopted a high-contrast palette in navy blue and coral aligned with WCAG guidelines while preserving a refined aesthetic.',
      es: 'Reorganicé la información en dos pilares mentales claros: el emocional y el práctico. También apliqué un patrón de dropdown para agrupar contenido emocional, limpié el header principal y adopté una paleta de alto contraste en azul marino y coral alineada con directrices WCAG, manteniendo una estética refinada.',
    },
    solution: {
      pt: 'A página inicial foi reestruturada como uma landing page de alta conversão, com foco no formulário de confirmação de presença. Adotei uma abordagem rigorosamente mobile-first, respeitando a thumb zone e touch targets para reduzir cliques acidentais. O processo foi validado com IA para refinar taxonomia, UX Writing e testes lógicos de interface.',
      en: 'The home page was restructured as a high-conversion landing page with the RSVP form as the primary focus. I adopted a strictly mobile-first approach, respecting thumb-zone spacing and touch targets to reduce accidental taps. The process was validated with AI to refine taxonomy, UX writing, and interface logic tests.',
      es: 'La página principal se reestructuró como una landing page de alta conversión con el formulario de confirmación de asistencia como foco principal. Adopté un enfoque estrictamente mobile-first, respetando la thumb zone y touch targets para reducir toques accidentales. El proceso fue validado con IA para refinar la taxonomía, el UX Writing y pruebas lógicas de interfaz.',
    },
    results: {
      pt: 'Este projeto comprovou que segmentar conteúdo por intenção do usuário reduz significativamente a carga cognitiva em momentos decisivos. A reestruturação focada em acessibilidade e ergonomia mobile mostrou que decisões baseadas em WCAG e thumb zone não apenas resolvem limitações funcionais, mas também potencializam diretamente a conversão e a inclusão de todos os perfis de convidados.',
      en: 'This project proved that segmenting content by user intent significantly reduces cognitive load at critical moments. The redesign focused on accessibility and mobile ergonomics showed that UI decisions grounded in WCAG and thumb-zone principles not only solve functional constraints but also improve conversion and inclusion across all guest profiles.',
      es: 'Este proyecto demostró que segmentar contenido por intención del usuario reduce significativamente la carga cognitiva en momentos críticos. El rediseño enfocado en accesibilidad y ergonomía mobile mostró que decisiones de UI basadas en WCAG y thumb-zone no solo resuelven limitaciones funcionales, sino que también potencian la conversión y la inclusión de todos los perfiles de invitados.',
    },
  },

  {
    id: 'p4build',
    title: 'P4Build',
    image: './src/imagem/P4Build.png',
    gallery: [
      './src/imagem/p4imagem1.png',
      './src/imagem/p4imagem2.png',
      './src/imagem/p4imagem3.png',
    ],
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
    challenge: {
      pt: 'Projeto colaborativo para criar a plataforma central da comunidade P4Build, com objetivo de centralizar iniciativas, organizar squads multidisciplinares e gerar portfólio real para os membros. A demanda era unificar a entrada de novos membros e organizar projetos em um ambiente centralizado, ao mesmo tempo em que o time de desenvolvimento precisava de entregáveis rápidos para iniciar o build.',
      en: 'Collaborative project to build the central platform for the P4Build community, with the goal of centralizing initiatives, organizing multidisciplinary squads, and creating real portfolio opportunities for members. The challenge was to unify onboarding for new members and organize projects in one centralized environment while the development team needed fast deliverables to begin implementation.',
      es: 'Proyecto colaborativo para crear la plataforma central de la comunidad P4Build, con el objetivo de centralizar iniciativas, organizar squads multidisciplinares y generar portafolio real para los miembros. El desafío era unificar la entrada de nuevos miembros y organizar proyectos en un entorno centralizado mientras el equipo de desarrollo necesitaba entregables rápidos para comenzar el build.',
    },
    research: {
      pt: 'Elaboramos e aplicamos uma pesquisa quantitativa direcionada à comunidade da Alura para entender dores reais sobre colaboração e construção de portfólio. A pesquisa buscou identificar as principais dificuldades de quem está estudando e quer colocar a mão na massa, com foco em práticas, automações e criação de valor real.',
      en: 'We developed and applied a quantitative survey aimed at the Alura community to understand real pain points around collaboration and portfolio creation. The research focused on the main difficulties faced by students and early-stage professionals who want to learn through practice and solve real challenges.',
      es: 'Desarrollamos y aplicamos una encuesta cuantitativa para la comunidad de Alura con el objetivo de entender dolores reales relacionados con colaboración y construcción de portafolio. La investigación buscó identificar las principales dificultades de quienes están estudiando y quieren poner la mano en la masa, con foco en práctica, automatización y creación de valor real.',
    },
    design: {
      pt: 'Para garantir velocidade na montagem das telas e manter consistência visual, definimos os fundamentos do design system com paleta de cores, tipografia, tokens de espaçamento e componentes reutilizáveis. Em paralelo, mapeei a jornada de onboarding e consolidei regras de negócio essenciais: navegação da página inicial até confirmação de ingresso, lógica de login/cadastro via GitHub, elementos obrigatórios por tela e redirecionamento pós-aprovação para o Discord.',
      en: 'To ensure speed in screen assembly and maintain visual consistency, we defined the foundations of the design system through color palette, typography, spacing tokens, and reusable components. In parallel, I mapped the onboarding journey and consolidated essential business rules: navigation from the home page to entry confirmation, login/sign-up logic via GitHub, required elements per screen, and post-approval redirection to Discord for immediate onboarding.',
      es: 'Para garantizar velocidad en la construcción de pantallas y mantener consistencia visual, definimos los fundamentos del design system con paleta de colores, tipografía, tokens de spacing y componentes reutilizables. En paralelo, mapeé la jornada de onboarding y consolidé reglas de negocio esenciales: navegación desde la home hasta la confirmación de ingreso, lógica de login/signup vía GitHub, elementos obligatorios por pantalla y redirección posterior a la aprobación hacia Discord para onboarding inmediato.',
    },
    solution: {
      pt: 'Adaptamos estrategicamente a ordem das etapas tradicionais com um pivot de processo, pulando temporariamente a documentação formal da IA para destravar o handoff da primeira tela e permitir desenvolvimento paralelo. O protótipo da primeira interface foi pensado para experiência mobile-first, acelerando as tarefas do time de front-end.',
      en: 'We strategically adapted the traditional workflow through a process pivot, temporarily skipping formal IA documentation to unlock the first screen handoff and unblock parallel development. The first interface prototype was designed with a mobile-first experience to accelerate front-end tasks for the team.',
      es: 'Adaptamos estratégicamente el orden de las etapas tradicionales mediante un pivot de proceso, saltándonos temporalmente la documentación formal de IA para desbloquear el handoff de la primera pantalla y acelerar el desarrollo paralelo. El prototipo de la primera interfaz se diseñó con experiencia mobile-first para agilizar las tareas del equipo de front-end.',
    },
    results: {
      pt: 'A adaptação do fluxo de design demonstrou que flexibilidade metodológica é indispensável em ambientes de engenharia com alta velocidade. Priorizando ativos essenciais de UI e acelerando a prototipagem mobile, o projeto conseguiu destravar o desenvolvimento sem comprometer a padronização do ecossistema, reforçando o valor de alinhar UX com viabilidade e velocidade de entrega.',
      en: 'The adapted design flow proved that methodological flexibility is essential in fast-paced engineering environments. By prioritizing core UI assets and accelerating mobile prototyping, the project was able to unblock development without sacrificing design consistency, reinforcing the value of aligning UX with delivery speed and technical feasibility.',
      es: 'La adaptación del flujo de diseño demostró que la flexibilidad metodológica es indispensable en entornos de ingeniería de alta velocidad. Priorizando activos esenciales de UI y acelerando el prototipado mobile, el proyecto pudo desbloquear el desarrollo sin comprometer la estandarización del ecosistema, reforzando el valor de alinear UX con viabilidad y velocidad de entrega.',
    },
  },
];
