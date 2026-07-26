import React from 'react';

export default function HomebrewGuide({ t, onCopyCmd }) {
  return (
    <section id="guide" className="guide-section">
      <div className="section-header center">
        <span className="section-tag">{t('sections.guideTag')}</span>
        <h2 className="section-title">{t('sections.guideTitle')}</h2>
        <p className="section-subtitle">{t('sections.guideSubtitle')}</p>
      </div>

      <div className="guide-grid">
        <div className="guide-card">
          <h3 className="guide-title">🍺 {t('guide.caskTitle')}</h3>
          <p className="guide-desc">{t('guide.caskDesc')}</p>
          <div className="code-block">
            <span className="cmd">brew install --cask LanrenwenStudio/apps/key-launch</span>
            <button 
              type="button"
              className="btn btn-sm btn-copy-cmd" 
              onClick={() => onCopyCmd('brew install --cask LanrenwenStudio/apps/key-launch')}
            >
              <span>{t('common.copyEmail')}</span>
            </button>
          </div>
        </div>

        <div className="guide-card">
          <h3 className="guide-title">📦 {t('guide.sourceTitle')}</h3>
          <p className="guide-desc">{t('guide.sourceDesc')}</p>
          <div className="code-block">
            <span className="cmd">brew install --cask LanrenwenStudio/apps/pause-loop</span>
            <button 
              type="button"
              className="btn btn-sm btn-copy-cmd" 
              onClick={() => onCopyCmd('brew install --cask LanrenwenStudio/apps/pause-loop')}
            >
              <span>{t('common.copyEmail')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
