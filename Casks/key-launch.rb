cask "key-launch" do
  version "1.1"
  sha256 "50675a624bbe11419700351da54020733eed73c8ad03c3a8c2a7c2e938d05887"

  url "https://github.com/KevoraLabs/homebrew-tap/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://kevoralabs.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
