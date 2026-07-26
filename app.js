/**
 * Kevin / Lanrenwen Studio — Portfolio & App Showcase JavaScript (homebrew-apps)
 * Handcrafted design theme, i18n localization, category tabs, theme toggle & copy toast.
 */

let currentLang = 'zh-Hans';
let currentTheme = 'paper';

document.addEventListener('DOMContentLoaded', () => {
  initAvatarLoading();
  initThemeToggle();
  initLanguagePicker();
  initFilterTabs();
  initCopyButtons();
  initScrollSpy();
  initAvatarInteractivity();
  initEmojiCycler();
  initMobileAppLinks();
  updateCopyrightYear();
});

// Smooth Fade-In Avatar Reveal
function initAvatarLoading() {
  const avatarImgs = document.querySelectorAll('.avatar-image-main, .brand-avatar-img');
  avatarImgs.forEach(img => {
    const markLoaded = () => img.classList.add('is-loaded');
    if (img.complete && img.naturalWidth !== 0) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markLoaded);
    }
  });
}

// Theme Switcher (Warm Paper vs Dark Coffee with System Auto Detection)
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;

  const savedTheme = localStorage.getItem('kevoralabs_theme');
  if (savedTheme === 'dark' || savedTheme === 'paper') {
    currentTheme = savedTheme;
  } else {
    // 自动跟随浏览器的系统深色 / 浅色模式
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'paper';
  }

  applyTheme(currentTheme);

  // 监听浏览器系统主题变化（仅在用户未手动指定偏好时联动）
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('kevoralabs_theme')) {
        currentTheme = e.matches ? 'dark' : 'paper';
        applyTheme(currentTheme);
      }
    });
  }

  themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'paper' ? 'dark' : 'paper';
    localStorage.setItem('kevoralabs_theme', currentTheme);
    applyTheme(currentTheme);
  });
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeText = document.getElementById('themeToggleText');
  const themeIcon = document.getElementById('themeToggleIcon');

  if (theme === 'dark') {
    html.classList.remove('theme-paper');
    html.classList.add('theme-dark', 'dark');
    if (themeText) themeText.textContent = window.siteTranslations[currentLang]?.["theme.toggleDark"] || "深夜咖啡";
    if (themeIcon) themeIcon.textContent = "🌙";
  } else {
    html.classList.remove('theme-dark', 'dark');
    html.classList.add('theme-paper');
    if (themeText) themeText.textContent = window.siteTranslations[currentLang]?.["theme.togglePaper"] || "浅色模式";
    if (themeIcon) themeIcon.textContent = "☀️";
  }
}

// Language Picker Initialization & Handling
function initLanguagePicker() {
  const langSelect = document.getElementById('languageSelect');
  if (!langSelect) return;

  const savedLang = localStorage.getItem('kevoralabs_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh-Hans')) {
    currentLang = savedLang;
  } else {
    const navLang = navigator.language || navigator.userLanguage || '';
    if (navLang.startsWith('en')) currentLang = 'en';
    else currentLang = 'zh-Hans';
  }

  langSelect.value = currentLang;
  applyTranslations(currentLang);

  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('kevoralabs_lang', currentLang);
    applyTranslations(currentLang);
    applyTheme(currentTheme); // Update theme button text for new locale
  });
}

function applyTranslations(lang) {
  const translations = window.siteTranslations[lang] || window.siteTranslations['zh-Hans'];

  const langIcon = document.getElementById('langIcon');
  if (langIcon) {
    const isEn = lang && String(lang).toLowerCase().startsWith('en');
    langIcon.textContent = isEn ? 'E' : '中';
  }

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
        const selectedCategories = category.split(' ');
        const cardCategories = card.dataset.category ? card.dataset.category.split(' ') : [];
        const isMatch = category === 'all' || selectedCategories.some(cat => cardCategories.includes(cat));
        if (isMatch) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
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

// Scrollspy for nav active highlight using high-performance IntersectionObserver
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Interactive 3D tilt & Universal Avatar Swap (Double Buffer Cross-Fade)
function initAvatarInteractivity() {
  const container = document.querySelector('.hero-avatar-frame');
  const layerA = document.getElementById('avatarLayerA');
  const layerB = document.getElementById('avatarLayerB');
  if (!container || !layerA || !layerB) return;

  const defaultSrc = 'assets/avatar-default.webp';
  const randomPool = [
    'assets/avatar-random-1.webp',
    'assets/avatar-random-2.webp',
    'assets/avatar-random-3.webp'
  ];

  // 预加载所有 WebP 图片，保证全过程 0 延迟
  [defaultSrc, ...randomPool].forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // 双缓冲区状态句柄 (0: layerA 1: layerB)
  const layers = [layerA, layerB];
  let activeIndex = 0;
  let currentSrc = defaultSrc;
  let fadeTimeout = null;
  let revertTimer = null;
  let lastRandomIndex = -1;

  // 初始图层配置
  layerA.src = defaultSrc;
  layerB.src = defaultSrc;
  layerA.style.opacity = '1';
  layerA.style.zIndex = '2';
  layerB.style.opacity = '0';
  layerB.style.zIndex = '1';

  // 双缓冲交叉淡入。关键点：再次 hover 时必须先关掉 transition 再把 opacity 置 0，
  // 否则浏览器会把「置 0 → 置 1」合并成一次无动画的样式更新（首次有效、后续失效）。
  const FADE_MS = 500;
  const fadeToAvatarSrc = (nextSrc) => {
    if (nextSrc === currentSrc) return;
    currentSrc = nextSrc;

    if (fadeTimeout) clearTimeout(fadeTimeout);

    const currentLayer = layers[activeIndex];
    const nextIndex = 1 - activeIndex;
    const nextLayer = layers[nextIndex];

    // 1. 关闭 transition，瞬间落到 opacity:0（可重复触发）
    nextLayer.style.transition = 'none';
    nextLayer.src = nextSrc;
    nextLayer.style.opacity = '0';
    nextLayer.style.zIndex = '3';
    currentLayer.style.zIndex = '2';

    // 2. 强制提交「透明」中间态
    void nextLayer.offsetWidth;

    // 3. 恢复 CSS transition，双 rAF 后再淡入，避免同帧合并样式
    nextLayer.style.transition = '';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nextLayer.style.opacity = '1';
      });
    });

    // 4. 切换活跃句柄
    activeIndex = nextIndex;

    // 5. 淡入结束后把旧层藏到下面（无动画即可，已被新层盖住）
    fadeTimeout = setTimeout(() => {
      currentLayer.style.transition = 'none';
      currentLayer.style.opacity = '0';
      currentLayer.style.zIndex = '1';
      void currentLayer.offsetWidth;
      currentLayer.style.transition = '';
    }, FADE_MS + 30);
  };

  const getNextRandomSrc = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * randomPool.length);
    } while (randomPool.length > 1 && randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    return randomPool[randomIndex];
  };

  const isMobile = () => window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches;

  // 1. 桌面端 Hover 悬浮切换
  container.addEventListener('mouseenter', () => {
    if (isMobile()) return;
    fadeToAvatarSrc(getNextRandomSrc());
  });

  container.addEventListener('mouseleave', () => {
    if (isMobile()) {
      container.style.transform = 'none';
      return;
    }
    container.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    fadeToAvatarSrc(defaultSrc);
  });

  // 桌面端 3D 视差倾斜手感
  container.addEventListener('mousemove', (e) => {
    if (isMobile()) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -6;
    const tiltY = (x / (rect.width / 2)) * 6;

    container.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  // 2. 移动端 点击切换，2.8 秒后自动换回默认图
  container.addEventListener('click', () => {
    if (!isMobile()) return;

    if (revertTimer) clearTimeout(revertTimer);
    fadeToAvatarSrc(getNextRandomSrc());

    revertTimer = setTimeout(() => {
      fadeToAvatarSrc(defaultSrc);
    }, 2800);
  });
}

function updateCopyrightYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Smart Mobile iOS App Store Direct Launcher (Strictly scoped to mobile iOS apps)
function initMobileAppLinks() {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isIOS) {
    // Only target iOS Mobile App cards, ignore macOS Desktop apps (KeyLaunch & PauseLoop)
    const mobileLinks = document.querySelectorAll('.app-card[data-category*="ios"] a[href*="apps.apple.com"], .app-card[data-category*="ios"] a[data-app-store-link]');
    mobileLinks.forEach(link => {
      let href = link.getAttribute('href') || '';
      const idMatch = href.match(/id(\d+)/);
      if (idMatch) {
        link.setAttribute('href', `itms-apps://apps.apple.com/app/id${idMatch[1]}`);
      }
    });
  }
}

// Interactive Vector Icon & Dynamic Color Cycler Animation
function initEmojiCycler() {
  const emojiEl = document.getElementById('coffeeEmoji');
  const badgeContainer = document.querySelector('.doodle-coffee');
  if (!emojiEl || !badgeContainer) return;

  const items = [
    {
      bg: '#FF6B4A', // 落日暖橙 (Coffee)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>`
    },
    {
      bg: '#2563EB', // 极客深蓝 (Mac Laptop)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>`
    },
    {
      bg: '#D97706', // 活力琥珀金 (Rocket)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.55 1.5-2.5A13.48 13.48 0 0 1 3 11.25c.95.24 1.79.79 2.5 1.5z"></path><path d="M12 15l-3-3 8.5-8.5a2.12 2.12 0 0 1 3 3L12 15z"></path></svg>`
    },
    {
      bg: '#10B981', // 薄荷翡翠绿 (Lightning)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
    },
    {
      bg: '#E11D48', // 樱桃玫红 (Sparkles)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`
    },
    {
      bg: '#7C3AED', // 沉静电光紫 (Headphones)
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path><path d="M18 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path><path d="M2 14v-3a10 10 0 0 1 20 0v3"></path></svg>`
    }
  ];

  let index = 0;

  setInterval(() => {
    emojiEl.classList.add('switching');
    setTimeout(() => {
      index = (index + 1) % items.length;
      badgeContainer.style.backgroundColor = items[index].bg;
      emojiEl.innerHTML = items[index].icon;
      emojiEl.classList.remove('switching');
    }, 220);
  }, 2600);
}
