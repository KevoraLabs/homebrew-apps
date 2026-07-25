# homebrew-apps

Homebrew tap & product showcase for KevoraLabs macOS apps and browser extensions.

🌐 **Official Site**: [https://kevoralabs.github.io/homebrew-apps/](https://kevoralabs.github.io/homebrew-apps/)

## Install via Homebrew

```bash
# Add KevoraLabs apps tap
brew tap KevoraLabs/apps

# Install macOS Casks
brew install --cask KevoraLabs/apps/key-launch
brew install --cask KevoraLabs/apps/pause-loop
```

If macOS blocks an app on first launch, remove its quarantine attribute:

```bash
xattr -dr com.apple.quarantine /Applications/KeyLaunch.app
xattr -dr com.apple.quarantine /Applications/PauseLoop.app
```

## Included casks

- `key-launch`
- `pause-loop`
