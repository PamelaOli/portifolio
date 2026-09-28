import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t } from '../../data/translations';
import { projects } from '../../data/projects';
import LanguageToggle from '../../components/Idioma/idioma';
import ThemeToggle from '../../components/Tema/trocaDeTema';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();
  const tr = t[lang];
  const c = useThemeColors();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

  const project = projects.find(p => p.id === id);
  const projectTags = project?.tags?.[lang] ?? [];

  if (!project) {
    return (
      <div className="project-detail-empty">
        <div className="project-detail-empty-content">
          <div className="project-detail-empty-icon">✈</div>
          <div className="project-detail-empty-title" style={{ color: c.heading }}>
            {tr.projectNotFound}
          </div>
          <button className="project-detail-empty-button" onClick={() => navigate('/')}>
            {tr.backHome}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-hero">
        <img src={project.image} alt={project.title} className="project-detail-hero-image" />
        <div className="project-detail-hero-overlay" />

        <div className="project-detail-topbar">
          <button className="project-detail-back-button" onClick={() => navigate('/')}>
            {tr.backHome}
          </button>
          <div className="project-detail-controls">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="project-detail-header">
          <div className="project-detail-kicker">{tr.portfolioAirlines}</div>
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="project-detail-content">
        <div className="project-detail-tags">
          {projectTags.map(tag => (
            <span key={tag} className="project-detail-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="project-detail-description" style={{ color: c.textSub }}>
          {project.description[lang]}
        </p>

        {project.sections.map(section => (
          <div key={section.key} className="project-detail-block">
            <h2 className="project-detail-block-title" style={{ color: c.heading }}>
              <span className="project-detail-block-title-mark">✦</span>
              {tr[section.key]}
            </h2>
            <p className="project-detail-challenge" style={{ color: c.textSub }}>
              {section.body[lang]}
            </p>
          </div>
        ))}
      </div>

      <footer className="project-detail-footer" style={{ borderTop: `1px solid ${c.borderSubtle}`, color: c.footerText }}>
        PÂMELA OLIVEIRA · PORTFOLIO AIRLINES · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
