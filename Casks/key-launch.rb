cask "key-launch" do
  version "1.3.13"
  sha256 "9d6424071fb6901cb7343c69ef857d6e7148b77ae1edda95c2ca46c45b5c12f1"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
