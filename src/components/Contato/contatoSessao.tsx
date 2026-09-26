import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t } from '../../data/translations';
import './contatoSessao.css';

function StaticSuitcase() {
  return (
    <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Handle */}
      <path d="M74 52 C74 30 146 30 146 52" stroke="#a168cd" strokeWidth="7" strokeLinecap="round" fill="none"/>

      {/* Suitcase body */}
      <rect x="24" y="54" width="172" height="114" rx="14" fill="#1a0a2e" stroke="#ff59b8" strokeWidth="2.5"/>

      {/* Horizontal strap */}
      <rect x="24" y="102" width="172" height="10" fill="#ff59b8" opacity="0.35"/>

      {/* Vertical center seam */}
      <line x1="110" y1="54" x2="110" y2="168" stroke="#a168cd" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35"/>

      {/* Clasp */}
      <rect x="90" y="92" width="40" height="26" rx="5" fill="#ff59b8" stroke="#a168cd" strokeWidth="1.5"/>
      <rect x="99" y="100" width="22" height="10" rx="3" fill="#1a0a2e"/>

      {/* Sticker — UX */}
      <rect x="34" y="64" width="42" height="24" rx="4" fill="#ff59b8" opacity="0.18" stroke="#ff59b8" strokeWidth="1.5"/>
      <text x="55" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ff59b8" fontFamily="Outfit, sans-serif" letterSpacing="1">UX</text>

      {/* Sticker — UI */}
      <rect x="34" y="118" width="42" height="24" rx="4" fill="#a168cd" opacity="0.18" stroke="#a168cd" strokeWidth="1.5"/>
      <text x="55" y="134" textAnchor="middle" fontSize="13" fontWeight="700" fill="#a168cd" fontFamily="Outfit, sans-serif" letterSpacing="1">UI</text>

      {/* Sticker — DEV */}
      <rect x="144" y="64" width="46" height="24" rx="4" fill="#ff59b8" opacity="0.18" stroke="#ff59b8" strokeWidth="1.5"/>
      <text x="167" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ff59b8" fontFamily="Outfit, sans-serif" letterSpacing="1">DEV</text>

      {/* Wheels */}
      <circle cx="50" cy="172" r="12" fill="#1c1c1c" stroke="#ff59b8" strokeWidth="2"/>
      <circle cx="50" cy="172" r="5" fill="#ff59b8" opacity="0.5"/>

      <circle cx="170" cy="172" r="12" fill="#1c1c1c" stroke="#ff59b8" strokeWidth="2"/>
      <circle cx="170" cy="172" r="5" fill="#ff59b8" opacity="0.5"/>
    </svg>
  );
}

export default function ContactSection() {
  const { lang } = useLang();
  const tr = t[lang];
  const c = useThemeColors();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-header">
          <h2 className="contact-title" style={{ color: c.heading }}>
            {tr.contactTitle}
          </h2>
          <p className="contact-description" style={{ color: c.textMuted }}>
            {tr.contactDesc}
          </p>
        </div>

        <div className="contact-illustration">
          <StaticSuitcase />
        </div>

        <div className="contact-actions">
          <a href="mailto:pamyoli02@gmail.com" className="contact-button contact-button--primary">
            <span>✉</span>
            <span>E-MAIL: pamyoli02@gmail.com</span>
          </a>

          <a
            href={`https://www.linkedin.com/in/pamela-oliveira-tec/}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button contact-button--secondary"
            style={{ ['--contact-linkedin-text' as string]: c.linkedinText }}
          >
            <svg className="contact-linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>{tr.contactLinkedin}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
