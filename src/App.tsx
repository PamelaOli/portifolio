import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Principal/Home';
import ProjectDetail from './pages/ProjetoDetalhado/ProjectDetail';

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
    </ThemeProvider>
  );
}
