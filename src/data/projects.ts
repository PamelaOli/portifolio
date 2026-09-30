import useDevProject from './projects/useDev';
import saborRotaProject from './projects/saborRota';
import casamentoProject from './projects/casamento';
import p4buildProject from './projects/p4build';

export type Lang = 'pt' | 'en' | 'es';

export type ProjectSectionKey =
  | 'projectOverview'          // Visão Geral
  | 'projectChallenge'         // Desafio / Problema Principal
  | 'projectResearch'          // Descoberta & Pesquisa (Discovery)
  | 'projectImagesResearch'    // Evidências de Pesquisa
  | 'projectDefinition'        // Definição & Estratégia
  | 'projectImagesDefinition'  // Diagramas / Fluxogramas
  | 'projectDesign'            // Ideação & Prototipação
  | 'projectImagesDesign'      // Protótipos & UI
  | 'projectSolution'          // Solução & Entrega Final
  | 'projectImagesSolution'    // Telas Finais / Handoff
  | 'projectResults'           // Resultados & Impacto
  | 'projectImagesResults'     // Métricas / Feedbacks
  | 'projectLearnings';        // Aprendizados

export interface ProjectSubsection {
  subtitle?: Record<Lang, string>;
  content: Record<Lang, string>;
  customText?: Record<Lang, string>;
  className?: string;
  images?: string[];
  listItems?: Record<Lang, string[]>;
}

export interface ProjectSection {
  key: ProjectSectionKey;
  title?: Record<Lang, string>;
  body: Record<Lang, string>;
  customText?: Record<Lang, string>;
  className?: string;
  images?: string[];
  subsections?: ProjectSubsection[];
}

export interface ProjectMetadata {
  clientOrContext: Record<Lang, string>;
  role: Record<Lang, string[]>;
  duration: Record<Lang, string>;
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: Record<Lang, string[]>;
  skillsUsed: Record<Lang, string[]>;
  description: Record<Lang, string>;
  metadata?: ProjectMetadata;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  useDevProject,
  saborRotaProject,
  casamentoProject,
  p4buildProject,
];

export { useDevProject, saborRotaProject, casamentoProject, p4buildProject };