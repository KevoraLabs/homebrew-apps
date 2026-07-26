import React, { useState, useEffect } from 'react';
import { Coffee, Headphones, Laptop, Music2 } from 'lucide-react';

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

export default function Hero({ t }) {
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
        <div 
          className="hero-avatar-frame"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        >
          <img src={avatarSrc} alt="Kevin Main Avatar" className="avatar-image-main is-loaded" width="320" height="320" />

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
