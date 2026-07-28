import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          © <span id="year">{currentYear}</span> Kevin / Lanrenwen Studio • Handcrafted &amp; local-first software. 
          <span className="footer-version">v1.2.5</span>
        </p>
        <p className="footer-sub">Late-night code, coffee &amp; Apple HIG Aesthetics.</p>
      </div>
    </footer>
  );
}
