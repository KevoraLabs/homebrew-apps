# homebrew-apps

Homebrew tap & product showcase for Lanrenwen Studio macOS apps and browser extensions.

🌐 **Official Site**: [https://lanrenwenstudio.github.io/homebrew-apps/](https://lanrenwenstudio.github.io/homebrew-apps/)

## Install via Homebrew

```bash
# Add Lanrenwen Studio apps tap
brew tap LanrenwenStudio/apps

# Install macOS Casks
brew install --cask LanrenwenStudio/apps/key-launch
brew install --cask LanrenwenStudio/apps/pause-loop
```

If macOS blocks an app on first launch, remove its quarantine attribute:

```bash
xattr -dr com.apple.quarantine /Applications/KeyLaunch.app
xattr -dr com.apple.quarantine /Applications/PauseLoop.app
```

## Included casks

- `key-launch`
- `pause-loop`
