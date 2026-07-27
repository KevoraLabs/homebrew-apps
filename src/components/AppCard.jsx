import React from 'react';

export default function AppCard({ app, t, onOpenQr, onCopyCmd }) {
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const getStoreHref = () => {
    if (!app.storeUrl) return null;
    if (isIOS && app.categories.includes('ios')) {
      const idMatch = app.storeUrl.match(/id(\d+)/);
      if (idMatch) return `itms-apps://apps.apple.com/app/id${idMatch[1]}`;
    }
    return app.storeUrl;
  };

  const storeHref = getStoreHref();
  const hasAction = Boolean(
    app.website || app.chromeStoreUrl || storeHref || app.brewCmd || app.miniQr || app.harmonyQr
  );

  return (
    <article className="app-card" data-category={app.categories.join(' ')}>
      <div className="app-card-header">
        <img 
          src={app.icon} 
          alt={app.nameKey} 
          className="app-icon" 
          width="64" 
          height="64" 
          loading="lazy" 
          decoding="async" 
        />
        <div className="app-meta">
          <h3 className="app-title">{t(app.nameKey)}</h3>
          <div className="app-badge-row">
            {app.badges.map((badge, idx) => (
              <span key={idx} className={`badge badge-${badge.type}`}>{badge.text}</span>
            ))}
          </div>
          <p className="app-tagline">{app.tagline}</p>
        </div>
      </div>

      <p className="app-description">{t(app.descKey)}</p>

      <ul className="app-features">
        {app.features.map((featKey, idx) => (
          <li key={idx}>{t(featKey)}</li>
        ))}
      </ul>

      <div className="app-actions">
        {app.categories.includes('harmony') && !hasAction && (
          <span className="focus-chip">HarmonyOS App</span>
        )}

        {app.website && (
          <a 
            href={app.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-sm btn-primary"
          >
            <span>{t('common.visitSite')}</span>
          </a>
        )}

        {app.chromeStoreUrl && (
          <a 
            href={app.chromeStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-sm btn-secondary"
          >
            <span>{t('common.chromeStore')}</span>
          </a>
        )}

        {storeHref && (
          <a 
            href={storeHref} 
            target={storeHref.startsWith('macappstore://') || storeHref.startsWith('itms-apps://') ? '_self' : '_blank'} 
            rel="noopener noreferrer" 
            className={`btn btn-sm ${app.website ? 'btn-secondary' : 'btn-primary'}`}
            data-app-store-link
          >
            <span>{t('common.appStore')}</span>
          </a>
        )}

        {app.brewCmd && (
          <button 
            type="button"
            className="btn btn-sm btn-copy-cmd" 
            onClick={() => onCopyCmd(app.brewCmd)}
          >
            <span>🍺 Homebrew</span>
          </button>
        )}

        {app.miniQr && (
          <button 
            type="button" 
            className={`btn btn-sm ${app.website || storeHref ? 'btn-secondary' : 'btn-primary'} btn-mini-qr`}
            onClick={() => onOpenQr(t(app.nameKey), app.miniQr)}
          >
            <span>{t('common.miniProgram')}</span>
          </button>
        )}

        {app.harmonyQr && (
          <button 
            type="button" 
            className={`btn btn-sm ${app.website || storeHref ? 'btn-secondary' : 'btn-primary'} btn-mini-qr`}
            onClick={() => onOpenQr(t(app.nameKey), app.harmonyQr)}
          >
            <span>{t('common.harmonyApp')}</span>
          </button>
        )}
      </div>
    </article>
  );
}
