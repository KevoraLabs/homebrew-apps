/**
 * Kevin / KevoraLabs — Portfolio & App Showcase JavaScript (homebrew-apps)
 * Supports i18n localization, dynamic GitHub API sync, category tabs & copy toast.
 */

// Fallback Repositories Data
const FALLBACK_REPOS = [
  {
    name: 'KeyLaunch',
    full_name: 'KevoraLabs/KeyLaunch',
    html_url: 'https://github.com/KevoraLabs/KeyLaunch',
    description: 'Fast, minimal keyboard launcher & app switcher for macOS built with Swift and SwiftUI.',
    stargazers_count: 42,
    language: 'Swift',
    updated_at: '2026-07-24T15:17:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'PauseLoop',
    full_name: 'KevoraLabs/PauseLoop',
    html_url: 'https://github.com/KevoraLabs/PauseLoop',
    description: 'Focus & break timer app for macOS to prevent eye strain and burnout.',
    stargazers_count: 28,
    language: 'Swift',
    updated_at: '2026-07-25T11:09:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'EnglishCC',
    full_name: 'KevoraLabs/EnglishCC',
    html_url: 'https://github.com/KevoraLabs/EnglishCC',
    description: 'YouTube dual subtitles & hover dictionary browser extension for language learning.',
    stargazers_count: 64,
    language: 'TypeScript',
    updated_at: '2026-07-21T14:17:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'side-stash',
    full_name: 'KevoraLabs/side-stash',
    html_url: 'https://github.com/KevoraLabs/side-stash',
    description: 'Chrome Side Panel extension to instantly stash text snippets, links, and code while browsing.',
    stargazers_count: 35,
    language: 'TypeScript',
    updated_at: '2026-07-20T19:24:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'highlight-share',
    full_name: 'KevoraLabs/highlight-share',
    html_url: 'https://github.com/KevoraLabs/highlight-share',
    description: 'Web text highlighter & social quote card generator and PNG exporter.',
    stargazers_count: 31,
    language: 'TypeScript',
    updated_at: '2026-07-08T10:03:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'wechat-multi',
    full_name: 'KevoraLabs/wechat-multi',
    html_url: 'https://github.com/KevoraLabs/wechat-multi',
    description: 'Lightweight macOS WeChat multi-instance launcher and account manager.',
    stargazers_count: 58,
    language: 'Swift',
    updated_at: '2026-04-14T16:15:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'homebrew-apps',
    full_name: 'KevoraLabs/homebrew-apps',
    html_url: 'https://github.com/KevoraLabs/homebrew-apps',
    description: 'Official Homebrew Cask tap repository and website for KevoraLabs macOS applications.',
    stargazers_count: 25,
    language: 'Ruby',
    updated_at: '2026-07-25T11:55:00Z',
    owner: 'KevoraLabs'
  },
  {
    name: 'suno-cli',
    full_name: 'kevinxft/suno-cli',
    html_url: 'https://github.com/kevinxft/suno-cli',
    description: 'Command line interface tool for Suno AI audio generation and workflow management.',
    stargazers_count: 47,
    language: 'Python',
    updated_at: '2026-03-01T11:24:00Z',
    owner: 'kevinxft'
  }
];

const LANG_COLORS = {
  Swift: '#F05138',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Ruby: '#701516',
  Shell: '#89E051'
};

let currentLang = 'zh-Hans';
let allFetchedRepos = [];

document.addEventListener('DOMContentLoaded', () => {
  initLanguagePicker();
  initFilterTabs();
  initCopyButtons();
  fetchGitHubRepos();
  initSearchAndSort();
  initScrollSpy();
  updateCopyrightYear();
});

// Language Picker Initialization & Handling
function initLanguagePicker() {
  const langSelect = document.getElementById('languageSelect');
  if (!langSelect) return;

  // Detect user locale or saved language preference
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

// Dynamic GitHub Repos Fetcher
async function fetchGitHubRepos() {
  const grid = document.getElementById('github-repos-grid');
  if (!grid) return;

  try {
    const [userRes, orgRes] = await Promise.allSettled([
      fetch('https://api.github.com/users/kevinxft/repos?per_page=100&sort=updated'),
      fetch('https://api.github.com/users/KevoraLabs/repos?per_page=100&sort=updated')
    ]);

    let userRepos = [];
    let orgRepos = [];

    if (userRes.status === 'fulfilled' && userRes.value.ok) {
      userRepos = await userRes.value.json();
    }
    if (orgRes.status === 'fulfilled' && orgRes.value.ok) {
      orgRepos = await orgRes.value.json();
    }

    let combined = [...orgRepos, ...userRepos];

    const repoMap = new Map();
    combined.forEach(repo => {
      if (!repo.fork && !repoMap.has(repo.name.toLowerCase())) {
        repoMap.set(repo.name.toLowerCase(), {
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          description: repo.description || 'No description provided.',
          stargazers_count: repo.stargazers_count || 0,
          language: repo.language || 'Code',
          updated_at: repo.updated_at,
          owner: repo.owner ? repo.owner.login : 'kevin'
        });
      }
    });

    allFetchedRepos = Array.from(repoMap.values());

    if (allFetchedRepos.length === 0) {
      allFetchedRepos = FALLBACK_REPOS;
    }
  } catch (err) {
    console.warn('GitHub API rate limit or network error. Using fallback repos.', err);
    allFetchedRepos = FALLBACK_REPOS;
  }

  sortRepos('stars');
  renderRepos(allFetchedRepos);
}

function renderRepos(repos) {
  const grid = document.getElementById('github-repos-grid');
  if (!grid) return;

  if (repos.length === 0) {
    grid.innerHTML = `<div class="loading-state"><p>${currentLang === 'en' ? 'No matching repositories found.' : '未找到匹配的开源仓库。'}</p></div>`;
    return;
  }

  grid.innerHTML = repos.map(repo => {
    const langColor = LANG_COLORS[repo.language] || '#94a3b8';
    const formattedDate = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';

    return `
      <article class="repo-card glass-card">
        <div class="repo-card-top">
          <div class="repo-header">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name">${repo.name}</a>
            <span class="repo-owner">${repo.owner}</span>
          </div>
          <p class="repo-desc">${repo.description}</p>
        </div>
        
        <div class="repo-meta">
          <div class="repo-stat">
            <span class="lang-dot" style="background-color: ${langColor}"></span>
            <span>${repo.language}</span>
          </div>
          <div class="repo-stat">
            <span>⭐ ${repo.stargazers_count}</span>
          </div>
          ${formattedDate ? `<div class="repo-stat"><span>Updated ${formattedDate}</span></div>` : ''}
        </div>
      </article>
    `;
  }).join('');
}

// Search and Sorting Controls
function initSearchAndSort() {
  const searchInput = document.getElementById('repo-search-input');
  const sortSelect = document.getElementById('repo-sort-select');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterAndRenderRepos();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortRepos(sortSelect.value);
      filterAndRenderRepos();
    });
  }
}

function sortRepos(criterion) {
  if (criterion === 'stars') {
    allFetchedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (criterion === 'updated') {
    allFetchedRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  } else if (criterion === 'name') {
    allFetchedRepos.sort((a, b) => a.name.localeCompare(b.name));
  }
}

function filterAndRenderRepos() {
  const searchInput = document.getElementById('repo-search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = allFetchedRepos.filter(repo => {
    return repo.name.toLowerCase().includes(query) || 
           (repo.description && repo.description.toLowerCase().includes(query)) ||
           (repo.language && repo.language.toLowerCase().includes(query));
  });

  renderRepos(filtered);
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
