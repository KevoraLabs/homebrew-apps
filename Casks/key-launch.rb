cask "key-launch" do
  version "1.3.14"
  sha256 "790214418b8e5ddba74112ec8f2c3e31783ea6fe869f0cc8901d0e94c555289d"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
