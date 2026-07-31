cask "key-launch" do
  version "1.3.12"
  sha256 "2c87c63639ef20994ee90649f645ff719ffe413edbd4d82befc1056b30c2d75d"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
