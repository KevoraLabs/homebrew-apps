import React, { useEffect } from 'react';

export default function MiniProgramModal({ isOpen, title, qrUrl, onClose, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="qr-modal-backdrop is-active" 
      onClick={(e) => {
        if (e.target.classList.contains('qr-modal-backdrop')) onClose();
      }}
      aria-hidden={!isOpen}
    >
      <div className="qr-modal-card">
        <button 
          type="button" 
          className="qr-modal-close" 
          onClick={onClose} 
          aria-label="Close"
        >
          &times;
        </button>
        <div className="qr-modal-header">
          <span className="qr-modal-badge">💬 {t('common.openMiniProgram')}</span>
          <h4 className="qr-modal-title">{title}</h4>
        </div>
        <div className="qr-modal-body">
          <div className="qr-code-frame">
            <img src={qrUrl} alt={`${title} 微信小程序码`} />
          </div>
          <p className="qr-modal-tip">{t('common.scanMiniProgram')}</p>
        </div>
      </div>
    </div>
  );
}
