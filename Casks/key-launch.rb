cask "key-launch" do
  version "1.3.10"
  sha256 "45564fb30cb089cd8d5e60eb8e26885c0dc7a5c2803f244c4ac0b9daac30828c"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
