cask "key-launch" do
  version "1.3.12"
  sha256 "ab102040778a99e37b16a99d538dee0c0fe7fe41cb5a03f7d199663cdc1c25e5"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
