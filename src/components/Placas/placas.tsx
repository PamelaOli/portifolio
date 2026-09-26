import { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import './placas.css';

const signColors = ['#ff59b8', '#a168cd', '#ff59b8', '#a168cd'];
const mobileDirections: ('left' | 'right')[] = ['right', 'left', 'right', 'left'];

export default function NavSigns() {
  const { lang } = useLang();
  const tr = t[lang];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const signs = [
    { id: 'projects', label: tr.nav.projects, distance: '2 km' },
    { id: 'about', label: tr.nav.about, distance: '5 km' },
    { id: 'skills', label: tr.nav.skills, distance: '8 km' },
    { id: 'contact', label: tr.nav.contact, distance: '12 km' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isMobile) {
    return <MobileNavSigns signs={signs} scrollTo={scrollTo} />;
  }

  return <DesktopNavSigns signs={signs} scrollTo={scrollTo} />;
}

function DesktopNavSigns({ signs, scrollTo }: {
  signs: { id: string; label: string; distance: string }[];
  scrollTo: (id: string) => void;
}) {
  return (
    <nav className="nav-signs">
      <div className="nav-signs-desktop">
        <div className="nav-signs-road" />
        <div className="nav-signs-road-mark" />

        <div className="nav-signs-row">
          {signs.map((sign, i) => {
            const color = signColors[i];
            return <SignButton key={sign.id} sign={sign} color={color} direction="right" scrollTo={scrollTo} desktop />;
          })}
        </div>
      </div>
    </nav>
  );
}

function MobileNavSigns({ signs, scrollTo }: {
  signs: { id: string; label: string; distance: string }[];
  scrollTo: (id: string) => void;
}) {
  return (
    <nav className="nav-signs">
      <div className="nav-signs-mobile">
        <div className="nav-signs-vertical-pole" />
        <div className="nav-signs-pole-cap-top" />

        {signs.map((sign, i) => {
          const color = signColors[i];
          const dir = mobileDirections[i];
          return (
            <div key={sign.id} className="nav-signs-slot">
              <div className={`nav-signs-slot-connector nav-signs-slot-connector--${dir}`} />
              <div className={`nav-signs-slot-content nav-signs-slot-content--${dir}`}>
                <SignButton sign={sign} color={color} direction={dir} scrollTo={scrollTo} desktop={false} />
              </div>
            </div>
          );
        })}

        <div className="nav-signs-pole-cap-bottom" />
      </div>
    </nav>
  );
}

function SignButton({ sign, color, direction, scrollTo, desktop }: {
  sign: { id: string; label: string; distance: string };
  color: string;
  direction: 'left' | 'right';
  scrollTo: (id: string) => void;
  desktop: boolean;
}) {
  const arrowClass = direction === 'right' ? 'nav-signs-arrow nav-signs-arrow--right' : 'nav-signs-arrow nav-signs-arrow--left';
  const cardClass = desktop ? 'nav-signs-card nav-signs-card-desktop' : 'nav-signs-card nav-signs-card-mobile';

  return (
    <button
      onClick={() => scrollTo(sign.id)}
      className="nav-signs-button"
      style={{ ['--sign-color' as string]: color }}
    >
      {direction === 'left' && <div className={arrowClass} />}
      <div className={cardClass}>
        <span className="nav-signs-label" style={{ fontSize: desktop ? 'clamp(13px,1.5vw,19px)' : '15px' }}>
          {sign.label}
        </span>
        <span className="nav-signs-distance" style={{ fontSize: desktop ? 'clamp(8px,0.85vw,10px)' : '9px', paddingLeft: desktop ? 'clamp(6px,0.8vw,12px)' : '8px' }}>
          {sign.distance}
        </span>
      </div>
      {direction === 'right' && <div className={arrowClass} />}
    </button>
  );
}
