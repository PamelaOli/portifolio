import saborRotaImage from '../../imagem/SaborRota.png';
import type { Project } from '../projects';

const saborRotaProject: Project = {
  id: 'saber-rota',
  title: 'Sabor & Rota',
  image: saborRotaImage,
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
  sections: [
    {
      key: 'projectChallenge',
      body: {
        pt: 'Projeto prático realizado em colaboração com IA (Gemini), simulando um cenário real de consultoria para a startup gastronômica Sabor & Rota. A plataforma apresentava churn de 85% no primeiro acesso por causa de um desalinhamento de stakeholders: o proprietário defendia que um fluxo burocrático e visualmente denso transmitia exclusividade e valor premium, enquanto os dados de comportamento apontavam para o oposto. O objetivo era convencer o stakeholder a simplificar o produto digital sem diluir a força da marca, aplicando conceitos de quiet luxury e minimalismo funcional.',
        en: 'A practical project conducted in collaboration with AI, simulating a real consulting scenario for the food startup Sabor & Rota. The platform had a first-session churn rate of 85% due to stakeholder misalignment: the founder believed that a bureaucratic, visually dense flow conveyed exclusivity and premium value, while behavioral data suggested the opposite. The goal was to persuade the stakeholder to simplify the digital product without diluting the brand value, applying quiet luxury and functional minimalism principles.',
        es: 'Proyecto práctico realizado en colaboración con IA, simulando un escenario real de consultoría para la startup gastronómica Sabor & Rota. La plataforma tenía una tasa de churn del 85% en la primera sesión debido a un desalineamiento entre stakeholders: el fundador creía que un flujo burocrático y visualmente denso transmitía exclusividad y valor premium, mientras que los datos de comportamiento sugerían lo contrario. El objetivo era convencer al stakeholder de simplificar el producto digital sin diluir el valor de la marca, aplicando principios de quiet luxury y minimalismo funcional.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'A pesquisa identificou três fatores críticos para a alta rejeição: exigência de dados sensíveis (CPF/RG) no primeiro contato, gerando desconfiança e atrito cognitivo; ativos visuais não otimizados e splash screens longas que violavam os tempos de resposta; e uma inconsistência de público que afastava a geração Z por lentidão e o público 50+ por falta de clareza e acessibilidade. Através de benchmarking com marcas premium, descobri que o luxo digital legítimo reduz o atrito e prioriza a fase de desejo antes de impor barreiras cadastrais. Isso fundamentou a implementação de acesso anônimo até a etapa de checkout.',
        en: 'The research identified three critical factors behind the high rejection rate: the requirement of sensitive data (CPF/RG) at first contact, which created distrust and cognitive friction; unoptimized visual assets and long splash screens that violated response time expectations; and audience inconsistency, which pushed away Gen Z due to slowness and older audiences due to lack of clarity and accessibility. Through benchmarking with premium brands, I found that legitimate digital luxury reduces friction and prioritizes desire before imposing registration barriers. This informed the implementation of anonymous guest access until checkout.',
        es: 'La investigación identificó tres factores críticos detrás de la alta tasa de rechazo: la exigencia de datos sensibles (CPF/RG) en el primer contacto, lo que generaba desconfianza y fricción cognitiva; activos visuales no optimizados y splash screens largos que rompían los tiempos de respuesta; y una inconsistencia de público que alejó a la Generación Z por lentitud y a perfiles mayores por falta de claridad y accesibilidad. A través de benchmarking con marcas premium, descubrí que el lujo digital legítimo reduce la fricción y prioriza la fase de deseo antes de imponer barreras de registro, lo que fundamentó la implementación de acceso anónimo hasta la etapa de checkout.',
      },
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Reorganizei a taxonomia e a hierarquia da interface com progressive disclosure: fotos gastronômicas otimizadas, preços transparentes, nome do chef e selos regionais ganharam foco primário, enquanto a narrativa institucional foi movida para cards expansíveis. No user flow, substituí o formulário de 15 campos por login social e eliminei a coleta de documentos no primeiro acesso. Para as diretrizes visuais, combinei tipografia híbrida, uso estratégico de white space e uma paleta neutra com alto contraste, mantendo foco em CTAs e na sensação premium.',
        en: 'I reorganized the interface taxonomy and hierarchy using progressive disclosure: optimized food photography, transparent pricing, chef names, and regional seals gained primary focus, while institutional storytelling moved to expandable cards. In the user flow, I replaced a 15-field form with social login and removed document collection at first access. For visual guidance, I combined hybrid typography, strategic whitespace, and a neutral high-contrast palette with a clear focus on CTAs and a premium feel.',
        es: 'Reorganicé la taxonomía y la jerarquía de la interfaz con progressive disclosure: fotografías gastronómicas optimizadas, precios transparentes, nombres del chef y sellos regionales ganaron protagonismo, mientras la narrativa institucional se movió a cards expandibles. En el user flow, reemplazé un formulario de 15 campos por login social y eliminé la recogida de documentos en el primer acceso. Para las directrices visuales, combiné tipografía híbrida, whitespace estratégico y una paleta neutra de alto contraste, manteniendo el foco en CTAs y en la sensación premium.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Estruturei a entrega com foco em soluções de alto impacto para o negócio e na defesa técnica do processo. As mudanças visaram reduzir o churn de 85% para 20% com a eliminação do cadastro obrigatório, melhora de performance no redesign da splash screen e compressão de ativos, além de aumentar a acessibilidade para públicos jovens e maduros. O projeto foi conduzido com IA como parceira de cocriação, e a minha atuação estava centrada em defender boas práticas de usabilidade e experiência diante de resistências tradicionais de negócio.',
        en: 'I structured the delivery around high-impact solutions and strong process advocacy. The changes aimed to reduce churn from 85% to 20% by removing mandatory registration, improving performance through splash-screen redesign and asset compression, and increasing accessibility for both younger and mature audiences. The project was developed with AI as a co-creation partner, while my role focused on defending usability best practices and user experience against traditional business resistance.',
        es: 'Estructuré la entrega alrededor de soluciones de alto impacto y una defensa técnica clara del proceso. Los cambios buscaban reducir el churn del 85% al 20% con la eliminación del registro obligatorio, mejorar el rendimiento mediante rediseño de la splash screen y compresión de assets, y aumentar la accesibilidad para públicos jóvenes y maduros. El proyecto se desarrolló con IA como socia de cocreación, y mi rol estuvo centrado en defender buenas prácticas de usabilidad y experiencia frente a resistencias de negocio tradicionales.',
      },
    },
    {
      key: 'projectResults',
      body: {
        pt: 'Este projeto consolidou a importância de fundamentar decisões de design em conceitos como affordance, target size e cognitive load para alinhar objetivos de negócio com as necessidades do usuário. Comprovei que exclusividade digital não se constrói com barreiras burocráticas, mas com fluidez, respeito ao tempo do usuário e transparência. A melhor interface para o negócio é aquela que reduz atrito e respeita a estrutura mental de quem a utiliza.',
        en: 'The project reinforced the importance of grounding design decisions in concepts such as affordance, target size, and cognitive load to align business goals with user needs. It showed that digital exclusivity is not built through bureaucratic barriers, but through fluidity, respect for the user’s time, and transparency. The best interface for business is one that reduces friction and respects the mental model of the people using it.',
        es: 'Este proyecto reforzó la importancia de fundamentar decisiones de diseño en conceptos como affordance, target size y cognitive load para alinear objetivos de negocio con las necesidades del usuario. Demostró que la exclusividad digital no se construye con barreras burocráticas, sino con fluidez, respeto al tiempo del usuario y transparencia. La mejor interfaz para el negocio es la que reduce fricción y respeta el modelo mental de quien la usa.',
      },
    },
  ],
};

export default saborRotaProject;
