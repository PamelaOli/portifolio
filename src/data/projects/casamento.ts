import casamentoImage from '../../imagem/Casamento.png';
import type { Project } from '../projects';

const casamentoProject: Project = {
  id: 'casamento',
  title: 'Casamento',
  image: casamentoImage,
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
  sections: [
    {
      key: 'projectChallenge',
      body: {
        pt: 'O objetivo foi transformar uma plataforma real de casamento, repleta de barreiras de usabilidade e acessibilidade, em uma jornada fluida, intuitiva e focada em conversão. A meta era eliminar atritos para convidados com perfis distintos, reduzindo sobrecarga cognitiva e aumentando a taxa de confirmação de presença.',
        en: 'The goal was to transform a real wedding platform full of usability and accessibility barriers into a fluid, intuitive, and conversion-focused journey. The main objective was to remove friction for guests with different profiles, reducing cognitive overload and improving RSVP conversion.',
        es: 'El objetivo era transformar una plataforma real de boda, llena de barreras de usabilidad y accesibilidad, en un recorrido fluido, intuitivo y centrado en la conversión. La meta era eliminar fricciones para invitados con perfiles distintos, reducir la sobrecarga cognitiva y mejorar la tasa de confirmación de asistencia.',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'Para identificar os gargalos do fluxo original, apliquei avaliação heurística e análise de fricção de jornada. Os principais problemas eram: a ação principal do site (confirmar presença) estava diluída em excesso de estímulos visuais; a navegação misturava conteúdo emocional e utilitário; e a falta de contraste e hierarquia tipográfica comprometia a leitura rápida e a acessibilidade.',
        en: 'To identify the bottlenecks in the original flow, I applied heuristic evaluation and journey-friction analysis. The main problems were: the primary action on the site (confirming attendance) was buried under too much visual stimulus; navigation mixed emotional and practical content; and poor contrast and inconsistent typography affected scanning speed and accessibility.',
        es: 'Para identificar los cuellos de botella del flujo original, apliqué evaluación heurística y análisis de fricción del recorrido. Los problemas principales eran: la acción principal del sitio (confirmar asistencia) estaba diluida entre demasiados estímulos visuales; la navegación mezclaba contenido emocional y utilitario; y la baja contraposición y la jerarquía tipográfica inconsistente afectaban la lectura rápida y la accesibilidad.',
      },
    },
    {
      key: 'projectDesign',
      body: {
        pt: 'Reestruturei a informação em dois pilares mentais claros: o pilar afetivo e o pilar prático. Também apliquei um padrão de dropdown para agrupar conteúdo emocional, limpei o header principal e adotei uma paleta de alto contraste em azul marinho e coral alinhada às diretrizes WCAG, mantendo a sofisticação estética.',
        en: 'I reorganized the content into two clear mental pillars: the emotional pillar and the practical pillar. I also used a dropdown pattern to group emotional content, cleaned up the main header, and adopted a high-contrast palette in navy blue and coral aligned with WCAG guidelines while preserving a refined aesthetic.',
        es: 'Reorganicé la información en dos pilares mentales claros: el emocional y el práctico. También apliqué un patrón de dropdown para agrupar contenido emocional, limpié el header principal y adopté una paleta de alto contraste en azul marino y coral alineada con directrices WCAG, manteniendo una estética refinada.',
      },
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'A página inicial foi reestruturada como uma landing page de alta conversão, com foco no formulário de confirmação de presença. Adotei uma abordagem rigorosamente mobile-first, respeitando a thumb zone e touch targets para reduzir cliques acidentais. O processo foi validado com IA para refinar taxonomia, UX Writing e testes lógicos de interface.',
        en: 'The home page was restructured as a high-conversion landing page with the RSVP form as the primary focus. I adopted a strictly mobile-first approach, respecting thumb-zone spacing and touch targets to reduce accidental taps. The process was validated with AI to refine taxonomy, UX writing, and interface logic tests.',
        es: 'La página principal se reestructuró como una landing page de alta conversión con el formulario de confirmación de asistencia como foco principal. Adopté un enfoque estrictamente mobile-first, respetando la thumb zone y touch targets para reducir toques accidentales. El proceso fue validado con IA para refinar la taxonomía, el UX Writing y pruebas lógicas de interfaz.',
      },
    },
    {
      key: 'projectResults',
      body: {
        pt: 'Este projeto comprovou que segmentar conteúdo por intenção do usuário reduz significativamente a carga cognitiva em momentos decisivos. A reestruturação focada em acessibilidade e ergonomia mobile mostrou que decisões baseadas em WCAG e thumb zone não apenas resolvem limitações funcionais, mas também potencializam diretamente a conversão e a inclusão de todos os perfis de convidados.',
        en: 'This project proved that segmenting content by user intent significantly reduces cognitive load at critical moments. The redesign focused on accessibility and mobile ergonomics showed that UI decisions grounded in WCAG and thumb-zone principles not only solve functional constraints but also improve conversion and inclusion across all guest profiles.',
        es: 'Este proyecto demostró que segmentar contenido por intención del usuario reduce significativamente la carga cognitiva en momentos críticos. El rediseño enfocado en accesibilidad y ergonomía mobile mostró que decisiones de UI basadas en WCAG y thumb-zone no solo resuelven limitaciones funcionales, sino que también potencian la conversión y la inclusión de todos los perfiles de invitados.',
      },
    },
  ],
};

export default casamentoProject;
