# homebrew-tap

Homebrew tap for KevoraLabs macOS apps.

## Install

```bash
brew tap KevoraLabs/tap
brew install --cask wechat-multi
```

Or in one command:

```bash
brew install --cask KevoraLabs/tap/wechat-multi
```

For `key-launch`:

```bash
brew install --cask KevoraLabs/tap/key-launch
```

If macOS blocks the app on first launch, remove the quarantine attribute:

```bash
xattr -dr com.apple.quarantine /Applications/WeChatMulti.app
```

## Included casks

- `wechat-multi`
- `key-launch`
