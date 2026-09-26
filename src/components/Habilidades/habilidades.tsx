import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t } from '../../data/translations';
import './habilidades.css';

const skillsRow1 = [
  'React', 'HTML', 'CSS', 'JavaScript', 'Figma', 'Java', 'Jira', 'Miro', 'Canva', 'FigJam', 'Figma Make'
];

const skillsRow2 = [
  'User Research', 'Acessibilidade', 'Interfaces', 'Responsive Design', 'Organização', 'Arquitetura da informação', 'Aprendizado', 'IA', 'Comunicação', 'Colaboração', 'Criatividade', 'Empatia', 'Gestão de tempo', 'Resolução de problemas'
];

function SkillTag({ label }: { label: string }) {
  return <div className="skill-tag">{label}</div>;
}

export default function SkillsHighway() {
  const { lang } = useLang();
  const tr = t[lang];
  const c = useThemeColors();

  const row1Doubled = [...skillsRow1, ...skillsRow1];
  const row2Doubled = [...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title" style={{ color: c.heading }}>
          {tr.skillsTitle}
        </h2>
      </div>

      <div className="skills-highway">
        <div className="skills-midline" />
        <div className="skills-lane-line skills-lane-line--top" />
        <div className="skills-lane-line skills-lane-line--bottom" />

        <div className="skills-row">
          <div className="marquee-left">
            {row1Doubled.map((skill, i) => (
              <SkillTag key={`r1-${i}`} label={skill} />
            ))}
          </div>
        </div>

        <div className="skills-row skills-row--bottom">
          <div className="marquee-right">
            {row2Doubled.map((skill, i) => (
              <SkillTag key={`r2-${i}`} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
