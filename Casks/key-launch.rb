cask "key-launch" do
  version "1.1"
  sha256 "50675a624bbe11419700351da54020733eed73c8ad03c3a8c2a7c2e938d05887"

  url "https://github.com/KevoraLabs/key-launch/releases/download/v#{version}/key-launch-#{version}.dmg",
      verified: "github.com/KevoraLabs/key-launch/"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts on macOS"
  homepage "https://github.com/KevoraLabs/key-launch"

  app "KeyLaunch.app"
end
