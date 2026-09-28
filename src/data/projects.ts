import useDevProject from './projects/useDev';
import saborRotaProject from './projects/saborRota';
import casamentoProject from './projects/casamento';
import p4buildProject from './projects/p4build';

export type Lang = 'pt' | 'en' | 'es';

export type ProjectSectionKey =
  | 'projectChallenge'
  | 'projectResearch'
  | 'projectDesign'
  | 'projectSolution'
  | 'projectResults';

export interface ProjectSection {
  key: ProjectSectionKey;
  body: Record<Lang, string>;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: Record<Lang, string[]>;
  description: Record<Lang, string>;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  useDevProject,
  saborRotaProject,
  casamentoProject,
  p4buildProject,
];
