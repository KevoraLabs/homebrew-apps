cask "pause-loop" do
  version "1.0"
  sha256 "ebef5608177eac235eb20a69e632272bc84e35cd75c848d2b1fbfc30a94c3643"

  url "https://github.com/KevoraLabs/homebrew-tap/releases/download/pause-loop-v#{version}/pause-loop-#{version}.dmg"
  name "PauseLoop"
  desc "Build a healthier focus and break rhythm"
  homepage "https://kevoralabs.github.io/pauseloop-site/"

  depends_on macos: :sonoma

  app "PauseLoop.app"
end
