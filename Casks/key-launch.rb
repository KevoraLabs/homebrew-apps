cask "key-launch" do
  version "1.3.8"
  sha256 "ee560d1366f61d9f2e0a9ba5ffb86433796f472bf61fbc82f2bd88bdee88023c"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
