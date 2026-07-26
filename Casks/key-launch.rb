cask "key-launch" do
  version "1.3.6"
  sha256 "9e72fb584e20818e2fd4cd09a74fdd801f749443ebeb78687bb8f266c2aee7f6"

  url "https://github.com/LanrenwenStudio/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://lanrenwenstudio.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
