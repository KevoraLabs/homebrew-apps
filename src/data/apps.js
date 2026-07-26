export const APPS = [
  {
    id: 'keylaunch',
    nameKey: 'keylaunch.name',
    tagline: 'Instant app & workflow launcher for macOS',
    descKey: 'keylaunch.desc',
    icon: 'assets/keylaunch-icon.webp',
    categories: ['macos'],
    badges: [
      { text: 'macOS App', type: 'macos' },
      { text: 'SwiftUI', type: 'tech' }
    ],
    features: ['keylaunch.f1', 'keylaunch.f2', 'keylaunch.f3'],
    website: 'https://keylaunch.lanrenwen.com',
    storeUrl: 'macappstore://itunes.apple.com/app/id6759540480?mt=12&l=us',
    brewCmd: 'brew install --cask LanrenwenStudio/apps/key-launch'
  },
  {
    id: 'pauseloop',
    nameKey: 'pauseloop.name',
    tagline: 'Focus & break timer to prevent eye strain',
    descKey: 'pauseloop.desc',
    icon: 'assets/pauseloop-icon.webp',
    categories: ['macos'],
    badges: [
      { text: 'macOS App', type: 'macos' },
      { text: 'SwiftUI', type: 'tech' }
    ],
    features: ['pauseloop.f1', 'pauseloop.f2', 'pauseloop.f3'],
    website: 'https://pauseloop.lanrenwen.com',
    storeUrl: 'macappstore://itunes.apple.com/app/id6790401487?mt=12&l=us',
    brewCmd: 'brew install --cask LanrenwenStudio/apps/pause-loop'
  },
  {
    id: 'englishcc',
    nameKey: 'englishcc.name',
    tagline: 'Bilingual subtitles & AI vocabulary tutor',
    descKey: 'englishcc.desc',
    icon: 'assets/englishcc-icon.webp',
    categories: ['extension'],
    badges: [
      { text: 'Chrome Extension', type: 'extension' },
      { text: 'TypeScript', type: 'tech' }
    ],
    features: ['englishcc.f1', 'englishcc.f2'],
    website: 'https://englishcc.lanrenwen.com/',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/englishcc/iimpbffhdjodajgccmlmdblnbjhkfpnc'
  },
  {
    id: 'sidestash',
    nameKey: 'sidestash.name',
    tagline: 'Sidebar tab manager & web text clipper',
    descKey: 'sidestash.desc',
    icon: 'assets/side-stash-icon.webp',
    categories: ['extension'],
    badges: [
      { text: 'Chrome Extension', type: 'extension' },
      { text: 'React', type: 'tech' }
    ],
    features: ['sidestash.f1', 'sidestash.f2'],
    website: 'https://sidestash.lanrenwen.com/',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/side-stash/khbkjkjokbmldbaelpknjbfoecdkehbk'
  },
  {
    id: 'highlightshare',
    nameKey: 'highlightshare.name',
    tagline: 'Turn text highlights into aesthetic cards',
    descKey: 'highlightshare.desc',
    icon: 'assets/highlight-share-icon.webp',
    categories: ['extension'],
    badges: [
      { text: 'Chrome Extension', type: 'extension' },
      { text: 'Canvas', type: 'tech' }
    ],
    features: ['highlightshare.f1', 'highlightshare.f2'],
    website: 'https://highlightshare.lanrenwen.com/',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/highlight-share/nmjdekhjdeebjbckapcpjagkjcabcgla'
  },
  {
    id: 'yinyuejianji',
    nameKey: 'yinyuejianji.name',
    tagline: 'Cross-platform desktop audio workstation',
    descKey: 'yinyuejianji.desc',
    icon: 'assets/music-master-electron-icon.webp',
    categories: ['electron'],
    badges: [
      { text: 'Electron Desktop', type: 'dev' },
      { text: 'React & Node', type: 'tech' }
    ],
    features: ['yinyuejianji.f1', 'yinyuejianji.f2'],
    website: 'https://yinyuejianji.com/'
  },
  {
    id: 'mp3editor',
    nameKey: 'mp3editor.name',
    tagline: 'Native audio cutter & vocal separator',
    descKey: 'mp3editor.desc',
    icon: 'assets/mp3-editor-icon.webp',
    categories: ['ios', 'mini', 'harmony'],
    badges: [
      { text: 'iOS App', type: 'dev' },
      { text: 'WeChat Mini Program', type: 'dev' },
      { text: 'HarmonyOS', type: 'dev' }
    ],
    features: ['mp3editor.f1', 'mp3editor.f2'],
    storeUrl: 'https://apps.apple.com/app/id6747578080',
    miniQr: 'assets/qr-mp3editor.webp'
  },
  {
    id: 'musicgen',
    nameKey: 'musicgen.name',
    tagline: 'AI music & lyric generation suite',
    descKey: 'musicgen.desc',
    icon: 'assets/music-generator-icon.webp',
    categories: ['ios', 'mini'],
    badges: [
      { text: 'iOS App', type: 'dev' },
      { text: 'WeChat Mini Program', type: 'dev' }
    ],
    features: ['musicgen.f1', 'musicgen.f2'],
    storeUrl: 'https://apps.apple.com/app/id6740610342',
    miniQr: 'assets/qr-musicgen.webp'
  },
  {
    id: 'jiyaodashi',
    nameKey: 'jiyaodashi.name',
    tagline: 'Voice notes, meeting transcript & AI summary',
    descKey: 'jiyaodashi.desc',
    icon: 'assets/jiyao-dashi-icon.webp',
    categories: ['ios'],
    badges: [
      { text: 'iOS App', type: 'dev' }
    ],
    features: ['jiyaodashi.f1', 'jiyaodashi.f2'],
    storeUrl: 'https://apps.apple.com/app/id6758984144'
  },
  {
    id: 'jianyun',
    nameKey: 'jianyun.name',
    tagline: 'Waveform audio editor & track merger',
    descKey: 'jianyun.desc',
    icon: 'assets/harmony/jianyun.png',
    categories: ['harmony', 'mini'],
    badges: [
      { text: 'HarmonyOS', type: 'dev' },
      { text: 'ArkTS', type: 'tech' },
      { text: 'WeChat Mini Program', type: 'dev' }
    ],
    features: ['jianyun.f1', 'jianyun.f2'],
    miniQr: 'assets/qr-jianyun.webp'
  },
  {
    id: 'qrcode',
    nameKey: 'qrcode.name',
    tagline: 'Offline QR & barcode generator & scanner',
    descKey: 'qrcode.desc',
    icon: 'assets/harmony/qrcode.webp',
    categories: ['harmony'],
    badges: [
      { text: 'HarmonyOS', type: 'dev' },
      { text: 'ArkTS', type: 'tech' }
    ],
    features: ['qrcode.f1', 'qrcode.f2']
  },
  {
    id: 'lightscript',
    nameKey: 'lightscript.name',
    tagline: 'Floating teleprompter & camera script assistant',
    descKey: 'lightscript.desc',
    icon: 'assets/harmony/lightscript.png',
    categories: ['harmony'],
    badges: [
      { text: 'HarmonyOS', type: 'dev' },
      { text: 'ArkTS', type: 'tech' }
    ],
    features: ['lightscript.f1', 'lightscript.f2']
  },
  {
    id: 'homeinventory',
    nameKey: 'homeinventory.name',
    tagline: 'Home item categorization & expiration tracker',
    descKey: 'homeinventory.desc',
    icon: 'assets/harmony/home-inventory.webp',
    categories: ['harmony'],
    badges: [
      { text: 'HarmonyOS', type: 'dev' },
      { text: 'ArkTS', type: 'tech' }
    ],
    features: ['homeinventory.f1', 'homeinventory.f2']
  },
  {
    id: 'imagecraft',
    nameKey: 'imagecraft.name',
    tagline: 'Image compressor, converter & watermark tool',
    descKey: 'imagecraft.desc',
    icon: 'assets/harmony/imagecraft.webp',
    categories: ['harmony'],
    badges: [
      { text: 'HarmonyOS', type: 'dev' },
      { text: 'ArkTS', type: 'tech' }
    ],
    features: ['imagecraft.f1', 'imagecraft.f2']
  }
];
