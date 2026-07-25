/**
 * Kevin / KevoraLabs — Portfolio & App Showcase JavaScript (homebrew-apps)
 * Supports i18n localization, category tabs & copy toast.
 */

let currentLang = 'zh-Hans';

document.addEventListener('DOMContentLoaded', () => {
  initLanguagePicker();
  initFilterTabs();
  initCopyButtons();
  initScrollSpy();
  updateCopyrightYear();
});

// Language Picker Initialization & Handling
function initLanguagePicker() {
  const langSelect = document.getElementById('languageSelect');
  if (!langSelect) return;

  const savedLang = localStorage.getItem('kevoralabs_lang');
  if (savedLang && window.siteTranslations[savedLang]) {
    currentLang = savedLang;
  } else {
    const navLang = navigator.language || navigator.userLanguage || '';
    if (navLang.startsWith('en')) currentLang = 'en';
    else if (navLang.startsWith('zh-TW') || navLang.startsWith('zh-HK')) currentLang = 'zh-Hant';
    else currentLang = 'zh-Hans';
  }

  langSelect.value = currentLang;
  applyTranslations(currentLang);

  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('kevoralabs_lang', currentLang);
    applyTranslations(currentLang);
  });
}

function applyTranslations(lang) {
  const translations = window.siteTranslations[lang] || window.siteTranslations['zh-Hans'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}

// Category Filter Tabs Logic
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.app-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.category;

      cards.forEach(card => {
        const cardCategories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (category === 'all' || cardCategories.includes(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Copy Buttons Handler
function initCopyButtons() {
  document.querySelectorAll('#copy-email-btn, #copy-email-bottom').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.dataset.email || 'kevinxft@gmail.com';
      copyToClipboard(email, currentLang === 'en' ? `Copied: ${email}` : `已复制邮箱: ${email}`);
    });
  });

  document.querySelectorAll('.btn-copy-cmd').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cmd = btn.dataset.cmd;
      if (cmd) {
        copyToClipboard(cmd, currentLang === 'en' ? `Copied: "${cmd}"` : `已复制命令: "${cmd}"`);
      }
    });
  });
}

function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Copied to clipboard!');
  }).catch(() => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMessage || 'Copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Scrollspy for nav active highlight
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function updateCopyrightYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
