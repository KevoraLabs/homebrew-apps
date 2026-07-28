cask "key-launch" do
  version "1.3.9"
  sha256 "3201e4234f0321c1cdb4c9f904d2ed6a67b62c8ab4df96566634fa19ef959016"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
