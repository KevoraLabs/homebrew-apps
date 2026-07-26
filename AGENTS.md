# AGENTS.md

> 💡 **系统设定**：当用户在对话中提到“启动官网”时，默认指运行本仓库的 烂人文工作室主官网 (`python3 -m http.server 8088`)。

Welcome to **Lanrenwen Studio / homebrew-apps**. This repository serves a dual purpose:
1. **Official Website**: Hosted on GitHub Pages at [https://lanrenwenstudio.github.io/homebrew-apps/](https://lanrenwenstudio.github.io/homebrew-apps/).
2. **Homebrew Tap Repository**: Contains Homebrew Cask definitions (`Casks/key-launch.rb`, `Casks/pause-loop.rb`) for installing Lanrenwen Studio macOS apps via `brew install --cask LanrenwenStudio/apps/<app>`.

---

## 🤖 Guidelines for AI Agents & Developers

### 1. GitHub CLI Preference (`gh`)
Always prefer using the official GitHub CLI (`gh`) for repository operations, status checks, pull requests, issue tracking, and release management:

```bash
# Check authentication status
gh auth status

# View repository details
gh repo view LanrenwenStudio/homebrew-apps

# View open issues and pull requests
gh issue list
gh pr list

# Create a new release or trigger workflow
gh release list
gh workflow list
```

---

## 📁 Repository Structure

### 官网展示清单锁定

`src/data/apps.js` 是官网作品展示的唯一运行时来源，当前清单见 `SHOWCASE_LOCK.md`。UI 优化不得删除、重命名或改动 App 的平台、图标、描述和操作入口，除非用户明确要求更新作品目录。

```
homebrew-apps/
├── AGENTS.md               # Agent guidelines and repository documentation
├── README.md               # Public documentation and Homebrew install guides
├── index.html              # Main single-page application (Apple-inspired dark UI)
├── styles.css             # Design system (CSS variables, glassmorphic UI, glowing ambient accents)
├── app.js                 # Frontend logic (i18n, filter tabs, GitHub API sync, toast notifications)
├── translations.js        # Multilingual strings (zh-Hans, zh-Hant, en, ja, ko)
├── assets/                # App icon assets and visual logos
└── Casks/                 # Homebrew Cask ruby formulas
    ├── key-launch.rb      # Cask definition for KeyLaunch
    └── pause-loop.rb      # Cask definition for PauseLoop
```

---

## ⚡ Deployment & Git Workflow

- **Branching**: The primary branch is `main`. Push changes to `main` to trigger GitHub Pages deployment.
- **Homebrew Tap Updates**: Cask formulas inside `Casks/` are automatically updated by GitHub Actions during app releases.
- **Coding Standards**:
  - Keep styling modular in `styles.css` using predefined CSS Custom Properties.
  - Preserve multilingual keys in `translations.js`.
  - Maintain zero build step for maximum portability and fast GitHub Pages serving.

---

## 🍺 Quick Homebrew Commands

```bash
# Tap repository
brew tap LanrenwenStudio/apps

# Install applications
brew install --cask LanrenwenStudio/apps/key-launch
brew install --cask LanrenwenStudio/apps/pause-loop

# Clear Gatekeeper Quarantine if prompted on first launch
xattr -dr com.apple.quarantine /Applications/KeyLaunch.app
xattr -dr com.apple.quarantine /Applications/PauseLoop.app
```
