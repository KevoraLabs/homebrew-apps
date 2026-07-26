import React from 'react';

export default function Hero({ t }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-pulse"></span>
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>

        <p className="hero-bio">{t('hero.bio')}</p>

        <div className="hero-terminal">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <i></i><i></i><i></i>
            </div>
            <span className="term-title">zsh — lanrenwen-studio</span>
          </div>
          <div className="terminal-body">
            <span className="prompt">➜  ~</span>
            <span>brew install --cask key-launch pause-loop</span>
          </div>
        </div>

        <div className="tech-pills-row">
          <span className="tech-pill"><i className="pill-dot swift"></i> Swift</span>
          <span className="tech-pill"><i className="pill-dot swiftui"></i> SwiftUI</span>
          <span className="tech-pill"><i className="pill-dot ts"></i> TypeScript</span>
          <span className="tech-pill"><i className="pill-dot react"></i> React Native</span>
          <span className="tech-pill"><i className="pill-dot node"></i> Node.js</span>
          <span className="tech-pill"><i className="pill-dot electron"></i> Electron</span>
          <span className="tech-pill"><i className="pill-dot git"></i> Git</span>
        </div>

        <div className="hero-cta">
          <a href="#apps" className="btn btn-primary">{t('hero.ctaApps')}</a>
          <a href="https://github.com/LanrenwenStudio" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t('hero.ctaGitHub')}</a>
        </div>
      </div>

      <div className="hero-avatar-wrapper">
        <div className="hero-avatar-frame">
          <img src="assets/avatar-default.webp" alt="Kevin Main Avatar" className="avatar-image-main is-loaded" />

          {/* Animated Doodles */}
          <div className="floating-doodle doodle-speech">Handcrafted Software ✨</div>
          <div className="floating-doodle doodle-terminal">
            <span>$ agy dev</span>
          </div>
          <div className="floating-doodle doodle-todo">
            <div>⚡ TODOS</div>
            <ul>
              <li>☑ Apple HIG</li>
              <li>☑ Fast &amp; Clean</li>
            </ul>
          </div>
          <div className="floating-doodle doodle-binary">01001011</div>
        </div>
      </div>
    </section>
  );
}
