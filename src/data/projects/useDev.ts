import type { Project } from '../projects';

const useDevProject: Project = {
  id: 'use-dev',
  title: 'UseDev',
  behanceUrl: 'https://www.behance.net/gallery/258588027/UseDev-Da-duvida-a-decisao',
  skillsUsed: {
    pt: ['Avaliação Heurística', 'Matriz de priorização', 'IA', 'User Research', 'Acessibilidade',
      'Resolução de problemas', 'Empatia', 'Colaboração', 'Organização'
    ],
    en: ['Heuristic Evaluation', 'Prioritization Matrix', 'AI', 'User Research', 'Accessibility', 
      'Problem Solving', 'Empathy', 'Collaboration', 'Organization'
    ],
    es: ['Evaluación Heurística', 'Matriz de Priorización', 'IA', 'User Research', 'Accesibilidad',
      'Resolución de Problemas', 'Empatía', 'Colaboración', 'Organización'
    ]
  },
  description: {
    pt: 'Otimização de checkout e jornada de compra em e-commerce, reduzindo a carga cognitiva e atritos no frete e devoluções.',
    en: 'Optimizing checkout and buyer journey in e-commerce, reducing cognitive load and friction in shipping and returns.',
    es: 'Optimización del proceso de pago y la experiencia de compra en e-commerce, reduciendo la carga cognitiva y fricciones en envíos y devoluciones.',
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
      pt: '2 dias',
      en: '2 days',
      es: '2 días',
    },
    tools: ['Figma', 'FigJam', 'Miro'],
  },
  sections: [
    {
      key: 'projectOverview',
      body: {
        pt: 'Como transformar interesse em confiança para comprar? O estudo da UseDev conecta personas, jornadas e análise heurística para revelar onde a experiência gera dúvidas e quais melhorias merecem vir primeiro.',
        en: 'How to transform interest into trust for purchasing? The UseDev study connects personas, journeys, and heuristic analysis to reveal where the experience generates doubts and which improvements deserve priority.',
        es: '¿Cómo transformar el interés en confianza para comprar? El estudio de UseDev conecta personas, trayectorias y análisis heurístico para revelar dónde la experiencia genera dudas y cuáles mejoras merecen prioridad.',
      },
    },
    {
      key: 'projectChallenge',
      body: {
        pt: 'Gostar de um produto não basta para concluir a compra. Informações de tamanho, desconto e entrega pouco claras levantam uma questão central: o que precisa mudar para que a pessoa avance com mais segurança?',
        en: 'Liking a product is not enough to complete the purchase. Unclear information about size, discount, and delivery raises a central question: what needs to change for the person to proceed with more confidence?',
        es: 'Gustar de un producto no es suficiente para completar la compra. La información poco clara sobre tamaño, descuento y entrega plantea una pregunta central: ¿qué necesita cambiar para que la persona avance con más seguridad?',
      },
    },
    {
      key: 'projectResearch',
      body: {
        pt: 'A avaliação de três telas identificou 15 problemas, quatro deles críticos. Entre medidas ausentes e campos confusos no carrinho, o diagnóstico apontou uma direção: antes de ampliar o fluxo, resolver o que dificulta escolher e comprar.',
        en: 'The evaluation of three screens identified 15 problems, four of them critical. Among missing measures and confusing fields in the cart, the diagnosis pointed in one direction: before expanding the flow, solve what hinders choosing and buying.',
        es: 'La evaluación de tres pantallas identificó 15 problemas, cuatro de ellos críticos. Entre medidas ausentes y campos confusos en el carrito, el diagnóstico apuntó en una dirección: antes de ampliar el flujo, resolver lo que dificulta elegir y comprar.',
      },
      subsections: [
        {
          subtitle: {
            pt: 'Avaliação Heurística de Nielsen',
            en: 'Nielsens Heuristic Evaluation',
            es: 'Evaluación Heurística de Nielsen',
          },
          content: {
            pt: 'As personas Vitória e Jonas e suas jornadas modeladas ajudaram a explorar dúvidas sobre escolha, preço e entrega. A análise heurística complementou essa leitura com problemas de clareza, controle e prevenção de erros. São hipóteses orientadas pelo estudo, ainda sem validação com usuários reais.',
            en: 'The personas Vitória and Jonas and their modeled journeys helped explore doubts about choice, price, and delivery. The heuristic analysis complemented this reading with problems of clarity, control, and error prevention. These are hypotheses guided by the study, still without validation with real users.',
            es: 'Las personas Vitória y Jonas y sus trayectorias modeladas ayudaron a explorar dudas sobre elección, precio y entrega. El análisis heurístico complementó esta lectura con problemas de claridad, control y prevención de errores. Son hipótesis orientadas por el estudio, aún sin validación con usuarios reales.',
          },
        },
      ],
    },
    {
      key: 'projectSolution',
      body: {
        pt: 'Priorizar pelo risco, não pela aparência. A proposta cruza a gravidade dos achados com as dúvidas das jornadas para corrigir bloqueios primeiro, esclarecer a decisão depois e refinar a apresentação na sequência. \n\n Separar CEP de cupom, unificar o controle de quantidade, oferecer um guia de medidas e permitir voltar à navegação são o ponto de partida. Preços, economia e informações do produto mais claros completam a proposta com benefícios a testar, não resultados presumidos. \n\n O estudo reúne duas personas, jornadas de compra, 15 achados heurísticos e planos de ação por tela. A síntese organiza essas evidências em um backlog priorizado e um plano de testes: da descoberta dos problemas à próxima decisão de design.',
        en: 'Prioritize by risk, not appearance. The proposal crosses the severity of the findings with the doubts of the journeys to correct blockages first, clarify the decision later, and refine the presentation next. \n\n Separating ZIP code from coupon, unifying quantity control, offering a size guide, and allowing navigation back are the starting point. Clearer prices, savings, and product information complete the proposal with benefits to test, not presumed results. \n\n The study brings together two personas, purchase journeys, 15 heuristic findings, and action plans per screen. The synthesis organizes this evidence into a prioritized backlog and a testing plan: from discovering problems to the next design decision.',
        es: 'Priorizar por riesgo, no por apariencia. La propuesta cruza la gravedad de los hallazgos con las dudas de los recorridos para corregir bloqueos primero, aclarar la decisión después y refinar la presentación a continuación. \n\n Separar el código postal del cupón, unificar el control de cantidad, ofrecer una guía de tallas y permitir volver a la navegación son el punto de partida. Precios, ahorros e información del producto más claros completan la propuesta con beneficios a probar, no resultados presumidos. \n\n El estudio reúne dos personas, recorridos de compra, 15 hallazgos heurísticos y planes de acción por pantalla. La síntesis organiza estas evidencias en un backlog priorizado y un plan de pruebas: desde el descubrimiento de problemas hasta la próxima decisión de diseño.',
      },
    },
  ],
};

export default useDevProject;