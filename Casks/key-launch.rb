cask "key-launch" do
  version "1.3.11"
  sha256 "272ff29114dad5d4db0375f9839e6f56a5053a21177084a45186a29b4d475e95"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
