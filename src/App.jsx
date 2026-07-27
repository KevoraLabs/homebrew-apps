import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppCard from './components/AppCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MiniProgramModal from './components/MiniProgramModal';
import { ArrowUp } from 'lucide-react';

import { APPS } from './data/apps';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('kevoralabs_theme');
    if (saved === 'dark' || saved === 'paper') return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'paper';
  });

  // Language state
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('kevoralabs_lang');
    if (saved === 'en' || saved === 'zh-Hans') return saved;
    const navLang = navigator.language || '';
    return navLang.startsWith('en') ? 'en' : 'zh-Hans';
  });

  // Active Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Mini Program Modal state
  const [qrModal, setQrModal] = useState({
    isOpen: false,
    title: '',
    qrUrl: ''
  });

  // Toast State
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 480);
    updateBackToTop();
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    return () => window.removeEventListener('scroll', updateBackToTop);
  }, []);

  // Sync Theme to HTML class
  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.remove('theme-paper');
      html.classList.add('theme-dark', 'dark');
    } else {
      html.classList.remove('theme-dark', 'dark');
      html.classList.add('theme-paper');
    }
    localStorage.setItem('kevoralabs_theme', theme);
  }, [theme]);

  // Sync Language to localStorage
  useEffect(() => {
    localStorage.setItem('kevoralabs_lang', lang);
  }, [lang]);

  // Translation helper
  const t = (key) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['zh-Hans'];
    return dict[key] || key;
  };

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'paper' ? 'dark' : 'paper');
  };

  const handleChangeLang = (newLang) => {
    setLang(newLang);
  };

  const handleCopyCmd = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMsg('Copied to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2400);
    }).catch(() => {
      setToastMsg('Failed to copy');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2400);
    });
  };

  const handleOpenQr = (title, qrUrl) => {
    setQrModal({
      isOpen: true,
      title,
      qrUrl
    });
  };

  const handleCloseQr = () => {
    setQrModal(prev => ({ ...prev, isOpen: false }));
  };

  const filteredApps = APPS.filter(app => {
    if (activeFilter === 'all') return true;
    return app.categories.includes(activeFilter);
  });

  const filterTabs = [
    { id: 'all', labelKey: 'filter.all' },
    { id: 'macos', labelKey: 'filter.macos' },
    { id: 'ios', labelKey: 'filter.ios' },
    { id: 'extension', labelKey: 'filter.extension' },
    { id: 'mini', labelKey: 'filter.mini' },
    { id: 'harmony', labelKey: 'filter.harmony' },
    { id: 'electron', labelKey: 'filter.electron' },
  ];

  return (
    <div className="app-container">
      <Header 
        currentTheme={theme} 
        currentLang={lang} 
        onToggleTheme={handleToggleTheme} 
        onChangeLang={handleChangeLang}
        onCopyCmd={handleCopyCmd}
        t={t}
      />

      <main className="content-wrapper">
        <Hero t={t} />

        <section id="apps" className="apps-section">
          <div className="section-header center">
            <span className="section-tag">{t('sections.appsTag')}</span>
            <h2 className="section-title">{t('sections.appsTitle')}</h2>
            <p className="section-subtitle">{t('sections.appsSubtitle')}</p>
          </div>

          <div className="filter-bar">
            <div className="filter-tabs">
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {t(tab.labelKey)}
                </button>
              ))}
            </div>
          </div>

          <div className="apps-grid">
            {filteredApps.map(app => (
              <AppCard 
                key={app.id} 
                app={app} 
                t={t} 
                onOpenQr={handleOpenQr}
                onCopyCmd={handleCopyCmd}
              />
            ))}
          </div>
        </section>

        <Contact t={t} onCopyCmd={handleCopyCmd} />
      </main>

      <Footer />

      <MiniProgramModal 
        isOpen={qrModal.isOpen}
        title={qrModal.title}
        qrUrl={qrModal.qrUrl}
        onClose={handleCloseQr}
        t={t}
      />

      <div className={`toast ${showToast ? 'show' : ''}`}>
        <span>{toastMsg}</span>
      </div>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
