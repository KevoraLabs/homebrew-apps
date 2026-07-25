cask "wechat-multi" do
  version "0.1.3"
  sha256 "f7955e81f4da6e829c4234220821789d1fdcf87a338bdb2b9c5a5c75188e9512"

  url "https://github.com/KevoraLabs/wechat-multi/releases/download/v#{version}/wechat-multi-#{version}.zip"
  name "WeChatMulti"
  desc "Launch multiple WeChat instances"
  homepage "https://github.com/KevoraLabs/wechat-multi"

  depends_on :macos

  app "WeChatMulti.app"
end
