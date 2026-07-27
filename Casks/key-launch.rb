cask "key-launch" do
  version "1.3.7"
  sha256 "065283b505ed5d44ac2d17b9fea00eb47aef0c37f476e0a45aec047783d7056d"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
