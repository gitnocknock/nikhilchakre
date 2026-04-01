import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Projects from './projects/Projects';
import About from './About';
import Resume from './Resume';
import Goals from './Goals';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <main className="flex justify-center items-center min-h-screen p-8 text-center bg-background text-text transition-colors duration-300 relative">
      <Routes>
        <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/about" element={<About isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/resume" element={<Resume isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/goals" element={<Goals isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/projects" element={<Projects isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </main>
  );
}

export default App;
