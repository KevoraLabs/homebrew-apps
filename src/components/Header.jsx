import React from 'react';

export default function Header({ currentTheme, currentLang, onToggleTheme, onChangeLang, t }) {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <a href="#hero" className="nav-brand">
          <img src="assets/avatar2.webp" alt="Kevin Avatar" className="brand-avatar-img is-loaded" />
          <span className="brand-name">
            Kevin <span className="brand-badge">/ Lanrenwen Studio</span>
          </span>
        </a>

        <ul className="nav-menu">
          <li><a href="#apps" className="nav-link active">{t('nav.all')}</a></li>
          <li><a href="#guide" className="nav-link">{t('nav.guide')}</a></li>
          <li><a href="#contact" className="nav-link">{t('nav.contact')}</a></li>
        </ul>

        <div className="nav-actions">
          <button 
            type="button"
            className="btn-theme-toggle" 
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
          >
            <span>{currentTheme === 'dark' ? '🌙' : '☀️'}</span>
            <span id="themeToggleText">
              {currentTheme === 'dark' ? t('theme.toggleDark') : t('theme.togglePaper')}
            </span>
          </button>

          <div className="lang-selector-wrapper">
            <span className="lang-badge-icon">{currentLang === 'zh-Hans' ? '中' : 'EN'}</span>
            <select 
              className="select-lang" 
              value={currentLang} 
              onChange={(e) => onChangeLang(e.target.value)}
              aria-label="Language Selector"
            >
              <option value="zh-Hans">简体中文</option>
              <option value="en">English</option>
            </select>
            <svg className="lang-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
