cask "pause-loop" do
  version "1.0"
  sha256 "0e1f0908200d8976fc1518a184c32fe1aed7911c64ffe7a99c74229dbc0c7398"

  url "https://github.com/KevoraLabs/homebrew-apps/releases/download/pause-loop-v#{version}/pause-loop-#{version}.dmg"
  name "PauseLoop"
  desc "Build a healthier focus and break rhythm"
  homepage "https://kevoralabs.github.io/pauseloop-site/"

  depends_on macos: :sonoma

  app "PauseLoop.app"
end
