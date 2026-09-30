import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t } from '../../data/translations';
import { projects, type ProjectSection } from '../../data/projects';
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

  const getSectionTitle = (section: ProjectSection) => {
    const translationKey = section.key as keyof typeof tr;
    const translationValue = tr[translationKey];
    const fallbackTitle = typeof translationValue === 'string'
      ? translationValue
      : section.key.replace(/([A-Z])/g, ' $1').replace(/^./, (value: string) => value.toUpperCase());

    return section.title?.[lang] ?? fallbackTitle;
  };

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

        {project.metadata || project.skillsUsed[lang]?.length ? (
          <div className="project-detail-meta">
            {project.metadata && (
              <div className="project-detail-meta-grid">
                {project.metadata.clientOrContext?.[lang] && (
                  <div className="project-detail-meta-card">
                    <span className="project-detail-meta-label">Contexto</span>
                    <strong className="project-detail-meta-value">{project.metadata.clientOrContext[lang]}</strong>
                  </div>
                )}

                {project.metadata.role?.[lang]?.length ? (
                  <div className="project-detail-meta-card">
                    <span className="project-detail-meta-label">Função</span>
                    <strong className="project-detail-meta-value">{project.metadata.role[lang].join(' · ')}</strong>
                  </div>
                ) : null}

                {project.metadata.duration?.[lang] && (
                  <div className="project-detail-meta-card">
                    <span className="project-detail-meta-label">Duração</span>
                    <strong className="project-detail-meta-value">{project.metadata.duration[lang]}</strong>
                  </div>
                )}

                {project.metadata.tools?.length ? (
                  <div className="project-detail-meta-card">
                    <span className="project-detail-meta-label">Ferramentas</span>
                    <strong className="project-detail-meta-value">{project.metadata.tools.join(' · ')}</strong>
                  </div>
                ) : null}
              </div>
            )}

            {project.skillsUsed[lang]?.length ? (
              <div className="project-detail-tech-block">
                <div className="project-detail-meta-label">Tecnologias</div>
                <div className="project-detail-tech-list">
                  {project.skillsUsed[lang].map(skill => (
                    <span key={skill} className="project-detail-tech-item">{skill}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {project.sections.map(section => {
          const title = getSectionTitle(section);

          return (
            <div key={section.key} className="project-detail-block">
              <h2 className="project-detail-block-title" style={{ color: c.heading }}>
                <span className="project-detail-block-title-mark">✦</span>
                {title}
              </h2>

              {section.body[lang] && (
                <p className="project-detail-challenge" style={{ color: c.textSub }}>
                  {section.body[lang]}
                </p>
              )}

              {section.customText?.[lang] && (
                <div className={`project-detail-custom-section ${section.className ?? ''}`}>
                  <p className="project-detail-custom-text" style={{ color: c.textSub }}>
                    {section.customText[lang]}
                  </p>
                </div>
              )}

              {section.images?.length ? (
                <div className="project-detail-gallery">
                  {section.images.map((image, index) => (
                    <div key={`${section.key}-image-${index}`} className="project-detail-gallery-item">
                      <img src={image} alt={`${title} ${index + 1}`} className="project-detail-gallery-image" />
                    </div>
                  ))}
                </div>
              ) : null}

              {section.subsections?.length ? (
                <div className="project-detail-step-list">
                  {section.subsections.map((subsection, index) => (
                    <div key={`${section.key}-subsection-${index}`} className="project-detail-step">
                      <div className="project-detail-step-number">{String(index + 1).padStart(2, '0')}</div>
                      <div>
                        {subsection.subtitle?.[lang] && (
                          <h3 className="project-detail-subsection-title" style={{ color: c.heading }}>
                            {subsection.subtitle[lang]}
                          </h3>
                        )}

                        {subsection.content[lang] && (
                          <p className="project-detail-step-text" style={{ color: c.textSub }}>
                            {subsection.content[lang]}
                          </p>
                        )}

                        {subsection.customText?.[lang] && (
                          <div className={`project-detail-custom-subsection ${subsection.className ?? ''}`}>
                            <p className="project-detail-custom-text" style={{ color: c.textSub }}>
                              {subsection.customText[lang]}
                            </p>
                          </div>
                        )}

                        {subsection.listItems?.[lang]?.length ? (
                          <ul className="project-detail-list">
                            {subsection.listItems[lang].map((item, itemIndex) => (
                              <li key={`${section.key}-item-${itemIndex}`} className="project-detail-list-item" style={{ color: c.textSub }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <footer className="project-detail-footer" style={{ borderTop: `1px solid ${c.borderSubtle}`, color: c.footerText }}>
        PÂMELA OLIVEIRA · PORTFOLIO AIRLINES · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
