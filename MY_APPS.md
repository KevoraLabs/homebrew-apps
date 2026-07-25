# Kevin / KevoraLabs — 个人作品与 App 归档及目录规范

本文档归档记录由 Kevin 独立设计与开发的个人软件、应用、小程序及扩展作品，并明确所有 App 项目所在的**三大核心源代码目录**。后续新增 App 或更新展示网站时，固定从这三个目录中查找。

---

## 📁 核心 App 源代码三大目录 (Source Code Directories)

所有个人 App 及扩展均托管在以下三个核心本地目录中：

| 序号 | 目录绝对路径 | 项目类型与方向 | 代表应用 / 模块 |
| :---: | :--- | :--- | :--- |
| **1** | `/Users/kevin/Developer/Code/KevoraLabs` | macOS 原生 App、浏览器插件及官方展示站点 | KeyLaunch、PauseLoop、WeChat Multi、EnglishCC、Side Stash、Highlight Share |
| **2** | `/Users/kevin/Developer/Code/kevin-monorepo` | 跨平台 Electron 桌面应用、React Native 移动 App、iOS 原生与微信小程序 Monorepo 库 | Music Master 桌面版 (音乐剪辑)、纪要大师 (RN)、写歌大师 / 音乐生成器、MP3 剪辑器 |
| **3** | `/Users/kevin/Developer/Code/harmony-project` | 鸿蒙 HarmonyOS (ArkTS / ArkUI) 原生应用工程矩阵 | 剪韵音乐剪辑、小夏图片处理、小夏二维码、光影提词器、家庭库存 |

---

## 🍎 1. macOS 原生应用 & 极简工具 (目录：KevoraLabs)

| 应用名称 | 平台 / 架构 | 描述 | 状态 / 链接 |
| :--- | :--- | :--- | :--- |
| **KeyLaunch (键启)** | macOS (SwiftUI) | 原生 macOS 键盘快捷启动与应用切换器 | [官网](https://kevoralabs.github.io/keylaunch-site/) / Homebrew Cask |
| **PauseLoop** | macOS (SwiftUI) | 原生专注与 20-20-20 护眼休息计时器 | [官网](https://kevoralabs.github.io/pauseloop-site/) / Homebrew Cask |
| **WeChat Multi (微信多开)** | macOS (Swift) | 轻量级 macOS 独立沙盒微信多开分身管理工具 | macOS Utility |

---

## 🌐 2. 浏览器插件 (目录：KevoraLabs & 独立仓库)

| 插件名称 | 技术栈 | 描述 | 状态 / 链接 |
| :--- | :--- | :--- | :--- |
| **EnglishCC** | TypeScript / React | YouTube 沉浸式双语字幕、悬浮划词查词与词汇本扩展 | [englishcc.com](https://englishcc.com) |
| **Side Stash** | React / WXT | Chrome Side Panel 侧边栏文本、链接与碎片收藏助手 | [官网](https://kevoralabs.github.io/side-stash/) |
| **Highlight Share (划词分享)** | TypeScript | 网页文本高亮划词标记与高清社交金句卡片生成工具 | [官网](https://kevoralabs.github.io/highlight-share-site/) |

---

## 📱 3. kevin-monorepo 独立开发应用矩阵 (目录：kevin-monorepo)

| 应用名称 | 平台 / 子工程路径 | 描述 |
| :--- | :--- | :--- |
| **Music Master 桌面版 (音乐剪辑)** | Electron (`apps/electron/Music-Master-Electron`) | 桌面级音乐剪辑、音频多轨处理与格式导出工具 |
| **纪要大师** | React Native App (`apps/rn/jiyao-dashi-app`) | 语音纪要、会议记录与 AI 内容整理 App |
| **写歌大师 / 音乐生成器** | React Native App & 微信小程序 (`apps/rn/music-generator-app` & `apps/weapp/music-generator-weapp`) | 基于 AI 的音乐与歌词生成、音轨创作助手 |
| **MP3 剪辑器** | iOS 原生 App & 微信小程序 (`apps/ios/mp3-editor-ios` & `apps/weapp/mp3-editor-weapp`) | 高精度波形剪辑、格式转换与人声提取工具 |
| **剪韵音乐剪辑** | 微信小程序 (`apps/weapp/jian-yun-editor-weapp`) | 轻量级微信小程序版音频波形剪切与淡入淡出工具 |

---

## 🔴 4. 鸿蒙应用 (目录：harmony-project)

| 应用名称 | 工程目录 | Bundle Name | 核心功能 |
| :--- | :--- | :--- | :--- |
| **剪韵音乐剪辑** | `JianYun` | `com.quyingkeji.jymusic` | 鸿蒙原生高精度音频波形剪切、淡入淡出、音轨合成与格式导出 |
| **小夏图片处理** | `ImageCraft` | `com.yinyuejianji.xeimg` | 本地轻量图片滤镜、拼接、压缩与图片处理 |
| **小夏二维码** | `QrCode` | `com.yinyuejianji.qrcode` | 极简离线二维码/条形码生成与扫码识别 |
| **光影提词器** | `LightScript` | `com.yinyuejianji.luxscript` | 悬浮提词、台词滚动与视频拍摄辅助工具 |
| **家庭库存** | `home-inventory` | `com.yinyuejianji.homeinventory` | 离线家庭物品分类、保质期提醒与物品收纳管理 |

---

> **更新时间**: 2026-07-25  
> **原则**: 后续新增 App 或更新展示网站时，固定从上述三大核心路径查找源代码与工程文件。
