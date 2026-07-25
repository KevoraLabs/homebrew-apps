cask "key-launch" do
  version "1.3.5"
  sha256 "c27cdc4f4f8607843d9a7c1485c86b5d0e632c2907b9c60a3324cd177b1390a7"

  url "https://github.com/KevoraLabs/homebrew-apps/releases/download/key-launch-v#{version}/key-launch-#{version}.dmg"
  name "KeyLaunch"
  desc "Launch apps with global keyboard shortcuts"
  homepage "https://kevoralabs.github.io/keylaunch-site/"

  depends_on :macos

  app "KeyLaunch.app"
end
