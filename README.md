# 王一然个人网站

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

> 基于 Astro 框架开发的现代化个人展示网站，展现全国作文一等奖获得者王一然在学业、文学、科技、体育等方面的全面成就。

## ✨ 项目特点

- 🎨 **现代化设计** - 采用科技蓝+深空紫配色，适合青少年风格
- ⚡ **超快加载** - Astro 静态站点生成，首屏加载< 1.5 秒
- 🎭 **动态效果** - 粒子背景、滚动动画、3D 悬停效果
- 📱 **完全响应式** - 完美适配手机、平板、桌面端
- ♿ **可访问性** - 遵循 WCAG 标准，支持键盘导航
- 🚀 **SEO 优化** - 完整的 meta 标签和 Open Graph 支持
- 🌐 **全球 CDN** - 部署在 Netlify，全球边缘节点加速

## 📋 项目内容

### 页面结构

- **首页** (`/`) - Hero 区域、成就卡片、时间轴
- **关于我** (`/about`) - 个人信息、学业成绩、自荐理由
- **荣誉墙** (`/awards`) - 15 个奖项展示（国家级、省部级、校级）
- **诗歌集** (`/poems`) - 63 篇原创诗歌作品
- **作品集** (`/portfolio`) - 编程项目和技能展示
- **联系** (`/contact`) - 联系方式和留言表单

### 核心功能

#### 1. 首页亮点

- 动态 Hero 区域，数字递增动画
- 4 个成就卡片展示核心优势
- 时间轴展示 10 个重要奖项
- 统计面板：15 个奖项、63 篇诗歌、3 个项目、98 分成绩

#### 2. 荣誉墙

- 15 个奖项按级别分类展示
- 证书图片画廊，点击放大查看
- 统计面板显示奖项数量
- 响应式卡片网格布局

#### 3. 诗歌集

- 展示 8 首精选代表作
- 按类别分类（写人、写景、抒情、叙事）
- 优雅的中文排版
- 创作时间和分类标签

#### 4. 作品集

- 3 个项目详细介绍
- 技能水平可视化展示
- 项目亮点和技术栈标签
- 外链和内链导航

## 🛠️ 技术栈

### 核心框架

- **Astro 5.5+** - 现代静态站点生成器
- **React 18+** - 交互式组件
- **TypeScript** - 类型安全

### 样式

- **TailwindCSS 4.0+** - 原子化 CSS
- **CSS3** - 动画和过渡效果
- **Inter Variable Font** - 现代字体

### 部署

- **Netlify** - 全球 CDN + 自动部署
- **Netlify Forms** - 表单处理
- **Git** - 版本控制

## 🚀 开发指南

### 环境要求

- Node.js 18.14+
- npm 或 pnpm
- Git

### 本地开发

```bash
# 1. 克隆仓库
git clone <repository-url>
cd resumelucasaps

# 2. 安装依赖
npm install
# 或
pnpm install

# 3. 启动开发服务器
npm run dev
# 或
netlify dev  # 使用Netlify本地环境

# 4. 访问网站
# http://localhost:4321
```

### 构建生产版本

```bash
# 构建静态文件
npm run build

# 预览构建结果
npm run preview
```

### 部署到 Netlify

#### 方式 1：自动部署（推荐）

```bash
# 1. 推送到Git仓库
git add .
git commit -m "feat: 完成网站开发"
git push origin main

# 2. Netlify自动触发部署
```

#### 方式 2：手动部署

```bash
# 1. 构建
npm run build

# 2. 部署（分步执行避免超时）
netlify deploy --prod --dir=dist
```

## 📁 项目结构

```
resumelucasaps/
├── docs/                        # 项目文档
│   ├── PRD.md                   # 产品需求文档
│   └── ARCHITECTURE.md          # 架构设计文档
│
├── src/                         # 源代码
│   ├── components/              # 组件
│   │   ├── layout/              # 布局组件
│   │   │   ├── Header.astro    # 导航栏
│   │   │   ├── Footer.astro    # 页脚
│   │   │   └── BaseLayout.astro # 基础布局
│   │   ├── home/                # 首页组件
│   │   │   ├── Hero.astro
│   │   │   ├── AchievementCards.astro
│   │   │   └── Timeline.astro
│   │   ├── awards/              # 奖项组件
│   │   │   └── AwardCard.astro
│   │   ├── effects/             # 特效组件
│   │   │   └── ParticleBackground.tsx
│   │   └── common/              # 通用组件
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── Badge.astro
│   │
│   ├── pages/                   # 页面
│   │   ├── index.astro         # 首页
│   │   ├── about.astro         # 关于我
│   │   ├── awards.astro        # 荣誉墙
│   │   ├── poems.astro         # 诗歌集
│   │   ├── portfolio.astro     # 作品集
│   │   └── contact.astro       # 联系
│   │
│   ├── styles/                  # 样式
│   │   ├── globals.css         # 全局样式
│   │   └── animations.css      # 动画样式
│   │
│   ├── data/                    # 数据文件
│   │   ├── personal-info.json  # 个人信息
│   │   ├── awards.json         # 奖项数据
│   │   ├── poems.json          # 诗歌数据
│   │   └── projects.json       # 项目数据
│   │
│   └── utils/                   # 工具函数
│
├── public/                      # 静态资源
│   ├── images/
│   │   └── awards/             # 奖项证书图片
│   └── favicon.svg
│
├── astro.config.mjs            # Astro配置
├── tailwind.config.mjs         # Tailwind配置
├── tsconfig.json               # TypeScript配置
├── package.json                # 项目依赖
└── README.md                   # 本文件
```

## 📊 数据管理

### 更新奖项

编辑 `src/data/awards.json`：

```json
{
  "awards": [
    {
      "id": "award-xxx",
      "title": "奖项名称",
      "level": "national|provincial|school",
      "rank": "一等奖|二等奖|第X名",
      "date": "2025-01",
      "organization": "颁发机构",
      "image": "/images/awards/图片文件名.png",
      "description": "描述信息"
    }
  ]
}
```

### 更新诗歌

编辑 `src/data/poems.json`：

```json
{
  "featured": [
    {
      "id": "poem-xxx",
      "title": "诗歌标题",
      "content": "诗歌内容\n换行",
      "category": "写人|写景|抒情|叙事",
      "date": "2024",
      "featured": true
    }
  ]
}
```

### 更新项目

编辑 `src/data/projects.json`：

```json
{
  "projects": [
    {
      "id": "project-xxx",
      "title": "项目名称",
      "subtitle": "副标题",
      "description": "项目描述",
      "tech": ["技术1", "技术2"],
      "url": "https://...",
      "image": "/images/projects/xxx.png",
      "featured": true
    }
  ]
}
```

## 🎨 设计系统

### 色彩方案

```css
/* 主色调 - 科技蓝 */
--color-primary-500: #1976D2
--color-primary-600: #1565C0
--color-primary-800: #0A1929  /* 深蓝背景 */

/* 强调色 */
--color-accent-cyan: #00E5FF   /* 电光蓝 */
--color-accent-purple: #A855F7 /* 亮紫 */
--color-accent-gold: #FFB800   /* 金色 */

/* 背景色 */
--color-bg-primary: #0A0E1A
--color-bg-secondary: #1A1F35
```

### 动画效果

- ✅ 淡入淡出 (fadeIn, fadeOut)
- ✅ 滑动动画 (fadeInUp, fadeInDown, fadeInLeft, fadeInRight)
- ✅ 缩放动画 (scaleIn)
- ✅ 3D 悬停 (card-3d)
- ✅ 粒子背景 (ParticleBackground)
- ✅ 滚动触发 (scroll-reveal)
- ✅ 数字递增 (count-up)
- ✅ 进度条填充 (progress-fill)

## 📈 性能指标

### 目标指标

- ✅ 首屏加载时间: < 1.5 秒
- ✅ 页面大小: < 500KB (初始加载)
- ✅ Lighthouse 分数: > 90 (Performance)
- ✅ 完全响应式设计

### 优化措施

1. **图片优化** - WebP 格式 + 懒加载
2. **代码分割** - Astro 自动处理
3. **CSS 优化** - TailwindCSS 自动清除未使用样式
4. **CDN 加速** - Netlify 全球边缘节点

## 🔒 隐私保护

- ❌ 不展示具体联系方式（手机号、家庭地址）
- ✅ 仅展示学校名称和班级
- ✅ 父母信息仅展示职业（已脱敏）
- ✅ 所有内容已审核（无敏感信息）

## 📝 更新日志

### v1.0.0 (2025-10-19)

- ✅ 完成网站初始开发
- ✅ 实现 6 个核心页面
- ✅ 集成 15 个奖项数据
- ✅ 展示 63 篇诗歌作品
- ✅ 部署到 Netlify

## 🤝 贡献指南

本项目为个人网站，暂不接受外部贡献。

## 📄 许可证

© 2025 王一然。保留所有权利。

## 🙏 致谢

- **Astro** - 提供强大的静态站点生成框架
- **Netlify** - 提供免费且优秀的部署平台
- **Inter Font** - 提供现代化字体
- **AI 编程工具** - 辅助开发效率

## 📞 联系方式

- 学校：永泰小学（十一集团校）
- 班级：五年级四班
- 游戏项目：[lako.top](https://lako.top)

---

**Built with ❤️ by 王一然 using Astro + AI**
