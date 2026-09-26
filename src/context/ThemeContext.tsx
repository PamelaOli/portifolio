import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeColors() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  return {
    bg: dark ? '#080808' : '#f5f0ff',
    heading: dark ? '#ffffff' : '#1a0a2e',
    text: dark ? '#f0f0f0' : '#1a0a2e',
    textSub: dark ? '#c8c8c8' : '#3d2a5a',
    textMuted: dark ? '#888' : '#6b5080',
    ghostTitle: dark ? 'rgba(255,89,184,0.05)' : 'rgba(161,104,205,0.08)',
    surface: dark ? 'rgba(255,255,255,0.04)' : 'rgba(161,104,205,0.06)',
    borderSubtle: dark ? 'rgba(255,89,184,0.1)' : 'rgba(161,104,205,0.2)',
    footerText: dark ? '#444' : '#7a6a8a',
    linkedinText: dark ? '#fff' : '#1a0a2e',
  };
}
