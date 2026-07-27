import React, { useState, useEffect } from 'react';
import { Coffee, Headphones, Laptop, Music2, Copy } from 'lucide-react';

const DEFAULT_AVATAR = 'assets/avatar-default.webp';
const RANDOM_AVATARS = [
  'assets/avatar-random-1.webp',
  'assets/avatar-random-2.webp',
  'assets/avatar-random-3.webp'
];

const FLOATING_ICONS = [
  { color: '#FF6B4A', Icon: Coffee },
  { color: '#2563EB', Icon: Laptop },
  { color: '#16A34A', Icon: Music2 },
  { color: '#7C3AED', Icon: Headphones }
];

export default function Hero({ t, onCopyCmd }) {
  const [avatarSrc, setAvatarSrc] = useState(DEFAULT_AVATAR);
  const [floatingIconIndex, setFloatingIconIndex] = useState(0);

  // Preload random avatars for instant flicker-free hover
  useEffect(() => {
    RANDOM_AVATARS.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFloatingIconIndex(index => (index + 1) % FLOATING_ICONS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_AVATARS.length);
    setAvatarSrc(RANDOM_AVATARS[randomIndex]);
  };

  const handleMouseLeave = () => {
    setAvatarSrc(DEFAULT_AVATAR);
  };

  const FloatingIcon = FLOATING_ICONS[floatingIconIndex].Icon;
  const commandText = 'brew tap LanrenwenStudio/apps';

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
            <span className="term-title">zsh — kevin</span>
            {onCopyCmd && (
              <button 
                type="button"
                className="btn-term-copy"
                onClick={() => onCopyCmd(commandText)}
                title={t('common.copyCmd')}
              >
                <Copy size={13} />
                <span>{t('common.copyCmd')}</span>
              </button>
            )}
          </div>
          <div 
            className="terminal-body"
            onClick={() => onCopyCmd && onCopyCmd(commandText)}
            style={{ cursor: 'pointer' }}
            title={t('common.copyCmd')}
          >
            <span className="prompt">➜  ~</span>
            <span>{commandText}</span>
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
        <div 
          className="hero-avatar-frame"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        >
          <img src={avatarSrc} alt="Kevin Main Avatar" className="avatar-image-main is-loaded" width="320" height="320" />

          {/* Animated Doodles */}
          <div className="floating-doodle doodle-speech">&lt;/&gt;</div>
          <div className="floating-doodle doodle-terminal">
            <span className="terminal-text">$ kevin</span>
            <span className="terminal-cursor"></span>
          </div>
          <div className="floating-doodle doodle-todo">
            <div>⚡ DEV LOOP</div>
            <ul>
              <li>☑ Code</li>
              <li>☑ Test</li>
              <li>☑ Debug</li>
            </ul>
          </div>
          <div className="floating-doodle doodle-binary">9527</div>
          <div
            className="floating-doodle doodle-coffee"
            style={{ backgroundColor: FLOATING_ICONS[floatingIconIndex].color }}
            aria-label="Rotating icon"
          >
            <FloatingIcon size={20} strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
