# 王一然个人网站 - 架构设计文档

## 系统架构

### 整体架构

```
┌─────────────────────────────────────────────────────────────┐
│                        用户浏览器                              │
│                  (Chrome, Safari, Firefox等)                 │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                     Netlify CDN                              │
│                  (全球边缘节点分发)                            │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  静态站点 (SSG)                               │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐      │
│  │   HTML      │  │    CSS      │  │   JavaScript   │      │
│  │   Pages     │  │   Styles    │  │   Interactivity│      │
│  └─────────────┘  └─────────────┘  └────────────────┘      │
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │              Images (WebP优化)                   │       │
│  └─────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### 技术选型理由

#### Astro 5.5+

**选择理由**：

- ✅ 静态站点生成(SSG)，超快加载速度
- ✅ 部分水合(Partial Hydration)，仅交互组件使用 JS
- ✅ 支持 React 组件，可实现复杂交互
- ✅ 优秀的 SEO 性能
- ✅ 开发体验好，热更新快

**适用场景**：

- 内容展示型网站
- 个人简历/作品集
- 性能要求高的静态站点

#### TailwindCSS 4.0+

**选择理由**：

- ✅ 原子化 CSS，快速开发
- ✅ 响应式设计简单
- ✅ 自动清除未使用的 CSS
- ✅ 配置灵活，易于定制

#### React 18+

**选择理由**：

- ✅ 用于需要交互的组件(诗歌筛选、图片画廊等)
- ✅ 状态管理简单
- ✅ 生态丰富

#### Netlify

**选择理由**：

- ✅ 免费托管静态站点
- ✅ 全球 CDN 加速
- ✅ 自动化部署(Git Push 触发)
- ✅ 图片优化 CDN
- ✅ 表单处理功能

---

## 目录结构设计

```
resumelucasaps/
├── docs/                         # 项目文档
│   ├── PRD.md                   # 产品需求文档
│   └── ARCHITECTURE.md          # 本架构文档
│
├── src/                          # 源代码目录
│   ├── components/              # 组件目录
│   │   ├── layout/              # 布局组件
│   │   │   ├── Header.astro    # 导航栏
│   │   │   ├── Footer.astro    # 页脚
│   │   │   └── BaseLayout.astro # 基础布局
│   │   │
│   │   ├── home/                # 首页组件
│   │   │   ├── Hero.astro      # 英雄区
│   │   │   ├── AchievementCards.astro # 成就卡片
│   │   │   ├── Timeline.astro   # 时间轴
│   │   │   └── SkillsChart.tsx  # 技能图表(React)
│   │   │
│   │   ├── awards/              # 奖项组件
│   │   │   ├── AwardCard.astro # 奖项卡片
│   │   │   ├── AwardGallery.tsx # 奖项画廊(React)
│   │   │   └── StatsPanel.astro # 统计面板
│   │   │
│   │   ├── poems/               # 诗歌组件
│   │   │   ├── PoemCard.astro  # 诗歌卡片
│   │   │   ├── PoemList.tsx    # 诗歌列表(React)
│   │   │   └── PoemFilter.tsx  # 诗歌筛选(React)
│   │   │
│   │   ├── portfolio/           # 作品集组件
│   │   │   ├── ProjectCard.astro # 项目卡片
│   │   │   └── TechStack.astro  # 技术栈展示
│   │   │
│   │   ├── effects/             # 特效组件
│   │   │   ├── ParticleBackground.tsx # 粒子背景
│   │   │   ├── GridBackground.astro   # 网格背景
│   │   │   ├── GradientOrb.astro      # 渐变光球
│   │   │   └── ScrollReveal.tsx       # 滚动显示
│   │   │
│   │   └── common/              # 通用组件
│   │       ├── Button.astro     # 按钮
│   │       ├── Card.astro       # 卡片
│   │       ├── Badge.astro      # 徽章
│   │       └── Section.astro    # 区块容器
│   │
│   ├── pages/                   # 页面目录
│   │   ├── index.astro         # 首页
│   │   ├── about.astro         # 关于我
│   │   ├── awards.astro        # 荣誉墙
│   │   ├── poems.astro         # 诗歌集
│   │   ├── portfolio.astro     # 作品集
│   │   └── contact.astro       # 联系方式
│   │
│   ├── layouts/                 # 页面布局
│   │   └── MainLayout.astro    # 主布局
│   │
│   ├── styles/                  # 样式文件
│   │   ├── globals.css         # 全局样式
│   │   ├── animations.css      # 动画样式
│   │   └── utilities.css       # 工具类样式
│   │
│   ├── data/                    # 数据文件
│   │   ├── personal-info.json  # 个人信息
│   │   ├── awards.json         # 奖项数据
│   │   ├── poems.json          # 诗歌数据
│   │   ├── projects.json       # 项目数据
│   │   └── achievements.json   # 成就数据
│   │
│   └── utils/                   # 工具函数
│       ├── animation.ts        # 动画工具
│       ├── constants.ts        # 常量定义
│       ├── date.ts             # 日期处理
│       └── image.ts            # 图片处理
│
├── public/                      # 静态资源目录
│   ├── images/                 # 图片资源
│   │   ├── awards/             # 奖项证书(从image/复制)
│   │   ├── avatar/             # 头像/个人照片
│   │   ├── projects/           # 项目截图
│   │   └── og-image.png        # Open Graph图片
│   │
│   ├── fonts/                  # 字体文件(如需要)
│   │
│   └── favicon.svg             # 网站图标
│
├── astro.config.mjs            # Astro配置
├── tailwind.config.mjs         # Tailwind配置
├── tsconfig.json               # TypeScript配置
├── package.json                # 项目依赖
├── netlify.toml                # Netlify部署配置
└── README.md                   # 项目说明文档
```

---

## 页面路由设计

### 路由表

| 路径         | 页面   | 描述                           |
| ------------ | ------ | ------------------------------ |
| `/`          | 首页   | Hero 区 + 成就亮点 + 时间轴    |
| `/about`     | 关于我 | 个人信息 + 自荐理由 + 学业成绩 |
| `/awards`    | 荣誉墙 | 所有奖项展示 + 证书图片画廊    |
| `/poems`     | 诗歌集 | 63 首诗歌列表 + 分类筛选       |
| `/portfolio` | 作品集 | 游戏、网站等项目展示           |
| `/contact`   | 联系   | 联系方式 + 留言表单            |

### 页面导航流程

```
首页 (/)
  ├─> 关于我 (/about)
  ├─> 荣誉墙 (/awards)
  │     └─> 点击证书 → 弹窗放大
  ├─> 诗歌集 (/poems)
  │     └─> 点击诗歌 → 展开全文
  ├─> 作品集 (/portfolio)
  │     └─> 点击项目 → 跳转外部链接
  └─> 联系 (/contact)
        └─> 提交表单 → Netlify处理
```

---

## 组件设计

### 1. 布局组件层级

```
MainLayout.astro
  ├─> Header.astro (导航栏)
  │     ├─> Logo
  │     ├─> NavMenu
  │     └─> MobileMenu (汉堡菜单)
  │
  ├─> <slot /> (页面内容)
  │
  └─> Footer.astro (页脚)
        ├─> Copyright
        └─> TechStack
```

### 2. 首页组件层级

```
index.astro
  ├─> ParticleBackground.tsx (粒子背景)
  ├─> Hero.astro (英雄区)
  │     ├─> TypewriterText.tsx (打字机效果)
  │     └─> CTAButton.astro
  │
  ├─> AchievementCards.astro (成就卡片)
  │     └─> Card.astro × 4
  │
  └─> Timeline.astro (时间轴)
        └─> TimelineItem.astro × N
```

### 3. 荣誉墙组件层级

```
awards.astro
  ├─> StatsPanel.astro (统计面板)
  │     └─> StatCard.astro × 4
  │
  └─> AwardGallery.tsx (奖项画廊)
        ├─> CategoryTabs (分类标签)
        ├─> AwardGrid (奖项网格)
        │     └─> AwardCard.astro × N
        └─> ImageModal (图片弹窗)
```

### 4. 诗歌集组件层级

```
poems.astro
  ├─> PoemStats.astro (统计信息)
  │
  └─> PoemList.tsx (诗歌列表)
        ├─> PoemFilter.tsx (筛选器)
        │     └─> TagButton × N
        │
        └─> PoemGrid (诗歌网格)
              └─> PoemCard.astro × 63
                    ├─> Title
                    ├─> Preview (前4行)
                    └─> ExpandButton (展开按钮)
```

---

## 数据流设计

### 数据管理策略

#### 静态数据 (编译时)

所有数据在构建时从 JSON 文件读取，生成静态 HTML。

```typescript
// 数据读取流程
JSON文件 (src/data/*.json)
  ↓ import
Astro组件 (编译时)
  ↓ 渲染
静态HTML (dist/)
  ↓ 部署
Netlify CDN
```

#### 动态交互 (运行时)

用户交互由 React 组件处理，不需要后端 API。

```typescript
// 交互流程示例: 诗歌筛选
用户点击分类标签
  ↓
React setState更新选中分类
  ↓
过滤诗歌数组
  ↓
重新渲染诗歌列表
```

### 数据文件格式

#### awards.json

```json
{
  "statistics": {
    "total": 15,
    "national": 6,
    "provincial": 5,
    "school": 4
  },
  "awards": [
    {
      "id": "award-001",
      "title": "全国叶圣陶杯华人青少年作文大赛小学组一等奖",
      "level": "national",
      "rank": "一等奖",
      "date": "2025-01",
      "organization": "叶圣陶杯组委会",
      "image": "/images/awards/国家级-一等奖-叶圣陶作文-2025年1月.png"
    }
  ]
}
```

#### poems.json

```json
{
  "total": 63,
  "poems": [
    {
      "id": "poem-001",
      "title": "秦国诗",
      "content": "秦始帝王千里路\n滚高上扬统六国\n...",
      "category": "叙事",
      "date": "2021",
      "featured": false
    }
  ]
}
```

#### projects.json

```json
{
  "projects": [
    {
      "id": "project-001",
      "title": "植物大战僵尸网页版",
      "description": "基于AI编程开发的经典游戏复刻",
      "tech": ["HTML5", "JavaScript", "Canvas"],
      "url": "https://lako.top",
      "image": "/images/projects/pvz-screenshot.png",
      "featured": true
    }
  ]
}
```

---

## 样式设计系统

### 色彩系统

```css
/* TailwindCSS配置 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1976D2', // 主色
          600: '#1565C0',
          700: '#0D47A1',
          800: '#0A1929', // 深蓝背景
          900: '#050E1A',
        },
        accent: {
          cyan: '#00E5FF',    // 电光蓝
          purple: '#A855F7',  // 亮紫
          gold: '#FFB800',    // 金色
        },
        dark: {
          bg: '#0A0E1A',
          surface: '#1A1F35',
          border: '#2D3748',
        }
      }
    }
  }
}
```

### 排版系统

```css
/* 字体大小 */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 4rem; /* 64px */

/* 字重 */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### 间距系统

```css
/* Tailwind默认间距 */
0, 1(4px), 2(8px), 3(12px), 4(16px),
6(24px), 8(32px), 12(48px), 16(64px),
20(80px), 24(96px), 32(128px)
```

### 动画系统

```css
/* 缓动函数 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 持续时间 */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 1000ms;
```

---

## 动画实现方案

### 1. 粒子背景

**技术**：Canvas API + RequestAnimationFrame
**文件**：`ParticleBackground.tsx`

```typescript
// 伪代码
class Particle {
  x, y, vx, vy, size
  update() { /* 移动逻辑 */ }
  draw(ctx) { /* 绘制逻辑 */ }
}

function animate() {
  ctx.clearRect(0, 0, width, height)
  particles.forEach(p => {
    p.update()
    p.draw(ctx)
  })
  requestAnimationFrame(animate)
}
```

### 2. 滚动触发动画

**技术**：Intersection Observer API
**文件**：`ScrollReveal.tsx`

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
```

### 3. CSS 动画

**文件**：`animations.css`

```css
/* 渐入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 3D卡片翻转 */
@keyframes cardFlip {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}

/* 打字机效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
```

---

## 性能优化策略

### 1. 图片优化

- ✅ 使用 WebP 格式（PNG/JPG 转换）
- ✅ 响应式图片（多尺寸）
- ✅ 懒加载（Intersection Observer）
- ✅ Netlify Image CDN 自动优化

### 2. 代码优化

- ✅ Astro 自动代码分割
- ✅ 仅交互组件使用 React（部分水合）
- ✅ TailwindCSS 自动清除未使用样式
- ✅ CSS/JS 压缩（生产构建）

### 3. 加载优化

- ✅ 预加载关键资源
- ✅ 字体子集化（仅加载使用的字符）
- ✅ 服务端渲染（SSG）
- ✅ CDN 边缘缓存

### 4. 动画性能

- ✅ 使用 CSS transform 和 opacity（GPU 加速）
- ✅ 避免 layout/repaint（不用 width/height 动画）
- ✅ RequestAnimationFrame 优化 Canvas
- ✅ 节流/防抖滚动事件

---

## 响应式设计

### 断点策略

```typescript
const breakpoints = {
  sm: '640px', // 手机横屏
  md: '768px', // 平板竖屏
  lg: '1024px', // 平板横屏/小笔记本
  xl: '1280px', // 桌面
  '2xl': '1536px' // 大屏
};
```

### 布局适配

| 组件      | 桌面(>1024px) | 平板(768-1024px) | 手机(<768px) |
| --------- | ------------- | ---------------- | ------------ |
| 导航栏    | 水平菜单      | 水平菜单         | 汉堡菜单     |
| 成就卡片  | 4 列网格      | 2 列网格         | 1 列堆叠     |
| 奖项网格  | 3 列          | 2 列             | 1 列         |
| 诗歌列表  | 3 列          | 2 列             | 1 列         |
| Hero 字体 | 4xl-6xl       | 3xl-4xl          | 2xl-3xl      |

---

## 浏览器兼容性

### 目标浏览器

- ✅ Chrome 90+ (覆盖率 ~70%)
- ✅ Safari 14+ (覆盖率 ~15%)
- ✅ Firefox 88+ (覆盖率 ~10%)
- ✅ Edge 90+ (覆盖率 ~5%)

### 降级方案

- Canvas 不支持 → 纯色背景
- CSS Grid 不支持 → Flexbox 兜底
- Intersection Observer → 立即显示(无动画)

---

## 安全考虑

### 1. 隐私保护

- ❌ 不展示具体联系方式(手机号、家庭地址)
- ✅ 仅展示学校名称和班级
- ✅ 父母信息仅展示职业(已脱敏)

### 2. 内容安全

- ✅ 所有内容已审核(无敏感信息)
- ✅ 证书图片水印处理(如需要)
- ✅ 表单防垃圾(Netlify 内置防护)

### 3. 技术安全

- ✅ HTTPS 强制启用
- ✅ CSP 内容安全策略
- ✅ 无 XSS 风险(静态站点)

---

## 部署流程

### 开发环境

```bash
# 本地开发
npm install
netlify dev  # 本地运行(模拟Netlify环境)
```

### 生产部署

```bash
# 构建
npm run build  # 输出到dist/

# 部署(自动触发)
git add .
git commit -m "feat: xxx"
git push origin main  # 推送触发Netlify部署
```

### Netlify 配置

**netlify.toml**

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 监控与维护

### 性能监控

- Netlify Analytics (访问统计)
- Google Lighthouse (性能评分)
- WebPageTest (加载速度测试)

### 内容更新

```
新增奖项 → 更新awards.json + 添加证书图片 → Git推送 → 自动部署
新增诗歌 → 更新poems.json → Git推送 → 自动部署
```

---

**文档版本**：v1.0
**创建日期**：2025-10-19
**最后更新**：2025-10-19
