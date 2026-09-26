import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t, type Translation } from '../../data/translations';
import perfilImage from '../../imagem/perfil.jpg';
import './sobreSessao.css';

function PassportBook({ tr }: { tr: Translation }) {
  return (
    <div className="passport-shell">
      <div className="passport-book">
        <div className="passport-header">
          <div className="passport-kicker">REPÚBLICA FEDERATIVA DO BRASIL</div>
          <div className="passport-title">PASSAPORTE</div>
          <div className="passport-avatar">✦</div>
        </div>

        <div className="passport-photo">
          <img src={perfilImage} alt="Pâmela Oliveira" />
        </div>

        <div className="passport-fields">
          {[
            { label: 'NOME / NAME', value: 'OLIVEIRA, PÂMELA' },
            { label: 'PROFISSÃO / PROFESSION', value: 'UX/UI DESIGNER' },
            { label: 'LOCAL / LOCATION', value: 'SÃO VICENTE/SP - BR' },
            { label: 'STATUS', value: 'DISPONÍVEL / AVAILABLE' },
          ].map(({ label, value }) => (
            <div key={label} className="passport-row">
              <div className="passport-row-label">{label}</div>
              <div className="passport-row-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="passport-spine" />
    </div>
  );
}

export default function AboutSection() {
  const { lang } = useLang();
  const tr = t[lang];
  const c = useThemeColors();

  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-header">
          <h2 className="about-title" style={{ color: c.heading }}>
            {tr.aboutTitle}
          </h2>
        </div>

        <div className="about-layout">
          <p className="about-copy" style={{ color: c.textSub }}>
            {tr.aboutText}
          </p>

          <div className="about-divider" />

          <PassportBook tr={tr} />
        </div>
      </div>
    </section>
  );
}
