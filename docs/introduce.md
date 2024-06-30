---
sidebar_position: 1
---

# 简介

* **YuzeToolkit**是一个设计优雅的Unity游戏开发工具库, 实际了大量Unity开发常用的功能.
* **YuzeFramework**是一个基于数据驱动的组件式开发的网络游戏逻辑框架, 有着良好的GamePlay逻辑的规范.

# 依赖

## 核心依赖

* [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/about/): 网络库
* [UniTask](https://github.com/Cysharp/UniTask/blob/master/README_CN.md): 异步操作的依赖库(**YuzeToolkit**和**YuzeFramework**几乎所有的异步方法都依赖与`UniTask`)
* [EditorToolbox](https://github.com/Cysharp/UniTask/blob/master/README_CN.md): **Editor**界面美化库

## 拓展依赖

* [Addressables](https://docs.unity.cn/Packages/com.unity.addressables@1.21/manual/index.html): 用于`ResMgr`资源加载
* [MultiPlay](https://assetstore.unity.com/packages/tools/utilities/multiplay-170209?aid=1011lds77&utm_campaign=unity_affiliate&utm_medium=affiliate&utm_source=partnerize-linkmaker): 用于**Editor**下的多人游戏

# 系统要求
* 支持版本: Unity2022+
* 支持平台: Windows、OSX、Android、iOS、WebGL
* 开发环境: .NET4.x