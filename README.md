# RES-QICHEN - Cloudflare Pages 部署指南

## 项目概述

这是一个基于 React + TypeScript + Vite + Tailwind CSS 构建的软件资源库，采用 Material Design 3 设计规范。

## 功能特性

- 🏠 **首页**: 公告区域、分类筛选、软件卡片列表
- 📦 **软件详情页**: 软件介绍、截图轮播、功能特性
- 📥 **下载页面**: 各平台下载链接，点击跳转
- 🔍 **搜索功能**: 支持关键词搜索
- 🎨 **MD3 设计**: Material Design 3 风格，简洁美观
- ✨ **动画效果**: 平滑的过渡动画和悬停效果
- 📱 **响应式设计**: 适配各种设备

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到 Cloudflare Pages

### 方法一：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy dist
```

### 方法二：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages
3. 点击 "Create application"
4. 选择 "Pages" > "Connect to Git" 或 "Upload assets directly"
5. 如果使用 Git：
   - 连接您的 Git 仓库
   - 设置构建命令：`npm run build`
   - 设置输出目录：`dist`
6. 如果直接上传：
   - 运行 `npm run build` 生成本地构建
   - 上传 `dist` 目录中的所有文件

### 配置路由重定向

项目已包含 `public/_redirects` 文件，确保 SPA 路由正常工作。

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **路由管理**: React Router DOM 6
- **样式方案**: Tailwind CSS
- **设计系统**: Material Design 3
- **类型系统**: TypeScript
- **部署平台**: Cloudflare Pages

## 自定义软件数据

编辑/创建 `src/data/apps.json` 文件来添加、修改或删除软件资源。

