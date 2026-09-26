import LanguageToggle from '../../components/Idioma/idioma';
import ThemeToggle from '../../components/Tema/trocaDeTema';
import BoardingPass from '../../components/CartaoEmbarque/cartaoEmbarque';
import NavSigns from '../../components/Placas/placas';
import ProjectsSection from '../../components/Projetos/projetoSessao';
import AboutSection from '../../components/Sobre/sobreSessao';
import SkillsHighway from '../../components/Habilidades/habilidades';
import ContactSection from '../../components/Contato/contatoSessao';
import { useThemeColors } from '../../context/ThemeContext';
import './Home.css';

export default function Home() {
  const c = useThemeColors();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-orb hero-orb--pink" />
        <div className="hero-orb hero-orb--purple" />

        <div className="hero-topbar">
          <div className="hero-flight-label">PORTFOLIO AIRLINES · FLIGHT A113</div>
          <div className="hero-controls">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="hero-boarding-pass">
          <BoardingPass />
        </div>
      </section>

      <NavSigns />
      <ProjectsSection />
      <AboutSection />
      <SkillsHighway />
      <ContactSection />

      <footer className="page-footer" style={{ borderTop: `1px solid ${c.borderSubtle}`, color: c.footerText }}>
        PÂMELA OLIVEIRA · PORTFOLIO AIRLINES · {new Date().getFullYear()} ✦ BUILT WITH CREATIVITY AND LOVE
      </footer>
    </div>
  );
}
