import React from 'react';

export default function Header({ currentTheme, currentLang, onToggleTheme, onChangeLang, onCopyCmd, t }) {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <a href="#hero" className="nav-brand">
          <img src="assets/avatar.webp" alt="Kevin Avatar" className="brand-avatar-img is-loaded" width="42" height="42" />
          <span className="brand-name">
            Kevin <span className="brand-badge">· Lanrenwen</span>
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
            <button
              type="button"
              className="select-lang" 
              onClick={() => onChangeLang(currentLang === 'zh-Hans' ? 'en' : 'zh-Hans')}
              aria-label="Language Selector"
            >
              <span className="lang-text-full">{currentLang === 'zh-Hans' ? '简体中文' : 'English'}</span>
              <span className="lang-text-short">{currentLang === 'zh-Hans' ? '中' : 'E'}</span>
            </button>
          </div>

          <button
            id="copy-email-btn"
            type="button"
            className="btn btn-sm btn-secondary"
            onClick={() => onCopyCmd('kevinxft@gmail.com')}
            aria-label={t('common.copyEmail')}
          >
            <svg className="btn-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{t('common.copyEmail')}</span>
          </button>

          <a href="https://github.com/LanrenwenStudio" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary btn-github-nav">
            <svg className="btn-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="btn-text">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
