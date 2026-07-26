cask "pause-loop" do
  version "1.0.1"
  sha256 "6ef30f09e575b820524b75ab3438622501dc33cfea649be69fc4ce2d6ee3e03c"

  url "https://github.com/KevoraLabs/homebrew-apps/releases/download/pause-loop-v#{version}/pause-loop-#{version}.dmg"
  name "PauseLoop"
  desc "Build a healthier focus and break rhythm"
  homepage "https://kevoralabs.github.io/pauseloop-site/"

  depends_on macos: :sonoma

  app "PauseLoop.app"
end
