import { useLang } from '../../context/LanguageContext';
import type { Lang } from '../../data/translations';
import './idioma.css';

const langs: { code: Lang; label: string;}[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES'},
];

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="language-toggle">
      {langs.map(({ code, label}) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`language-button ${lang === code ? 'language-button--active' : 'language-button--inactive'}`}
        >
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
