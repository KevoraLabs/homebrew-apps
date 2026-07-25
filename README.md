# homebrew-tap

Homebrew tap for KevoraLabs macOS apps.

## Install

```bash
brew install --cask KevoraLabs/tap/key-launch
brew install --cask KevoraLabs/tap/pause-loop
brew install --cask KevoraLabs/tap/wechat-multi
```

KeyLaunch and PauseLoop are currently ad-hoc signed. If macOS blocks either app
on first launch, remove its quarantine attribute:

```bash
xattr -dr com.apple.quarantine /Applications/KeyLaunch.app
xattr -dr com.apple.quarantine /Applications/PauseLoop.app
xattr -dr com.apple.quarantine /Applications/WeChatMulti.app
```

## Included casks

- `wechat-multi`
- `key-launch`
- `pause-loop`
