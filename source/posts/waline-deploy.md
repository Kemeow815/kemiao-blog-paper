---
title: Waline评论在Vercel部署
description: 使用Waline评论我喜欢使用的部署方法(个人认为最简便)。
date: "2025-04-14"
categories: 技术分享
tags: 
  - Waline评论部署
  - Vercel部署
keywords: Waline评论部署
---

> 使用Waline评论我喜欢使用的部署方法(个人认为最简便)

## 所需账号
1. 一个Github账号
2. 一个Vercel账号
3. 一个leancloud账号(最好是国际服的，你有了Github难道还用大陆的吗？大陆的要备案，故在这里不阐述，末尾放原文链接)

---

## 在 leancloud 里创建数据库
1. [登录](https://console.leancloud.app/login) 或 [注册](https://console.leancloud.app/register) `LeanCloud 国际版` 并进入 [控制台](https://console.leancloud.app/apps)
2. 点击左上角 [创建应用](https://console.leancloud.app/apps) 并起一个你喜欢的名字 (请选择免费的开发版):
   ![创建应用](https://s2.loli.net/2025/04/14/7FOYbvS8MlQXe52.png)
3. 进入应用，选择左下角的 `设置` > `应用 Key`。记录 `APP ID`, `APP Key` 和 `Master Key`

---

## 在 Vercel 部署
[![Vercel](https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/vercel.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)

1. 点击上方按钮跳转至 Vercel 部署
2. 输入项目名称并点击 `Create`
   ![创建项目](https://s2.loli.net/2025/04/14/XauJLO7hfcWVx2Y.png)
3. 部署完成后点击 `Go to Dashboard`
   ![deploy](https://s2.loli.net/2025/04/14/HqfvwV6GdrFROSZ.png)
4. 配置环境变量 `LEAN_ID`, `LEAN_KEY`, `LEAN_MASTER_KEY`
   ![设置环境变量](https://s2.loli.net/2025/04/14/9laMFio1umnjB6g.png)
5. 重新部署使环境变量生效
   ![redeploy](https://s2.loli.net/2025/04/14/WkVxeRub73aIHBX.png)

---

## HTML 引入 (客户端)
```
<head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/@waline/client@v3/dist/waline.css"
  />
</head>
<body>
  <div id="waline"></div>
  <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
    init({
      el: '#waline',
      serverURL: 'https://your-domain.vercel.app',
    });
  </script>
</body>
```

## 评论服务 (服务端)

1. 评论服务此时就会在你的网站上成功运行。

## 评论管理 (管理端)

1. 部署完成后，请访问 `<serverURL>/ui/register` 进行注册。首个注册的人会被设定成管理员。
1. 管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。
1. 用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。

## 视频教程

以下是热心用户制作的视频教程，以上操作不清楚的也可以参考一二。

### Waline 部署教程（快速上手）

> UP 主：[rickroll 摇](https://space.bilibili.com/381992209)

<iframe src="//player.bilibili.com/player.html?isOutside=true&amp;aid=603711299&amp;bvid=BV1pB4y1E7fp&amp;cid=851182849&amp;p=1" allowFullScreen={true} />

### 使用 Vercel 简单地部署 Waline 评论系统

> UP 主：[岚天呀](https://space.bilibili.com/355877984)

<iframe src="//player.bilibili.com/player.html?isOutside=true&amp;aid=986143204&amp;bvid=BV1Ft4y1A73f&amp;cid=851363812&amp;p=1" allowFullScreen={true} />

---

## 以上为部分修改原文
原文链接: https://waline.js.org/guide/get-started/
