# LAOZI.ART 奢侈品美学设计规范

## 参考品牌分析

### 爱马仕 (Hermès) 设计特点
- **配色**: 爱马仕橙 (#FF6B35) + 大地色系 + 大量留白
- **字体**: 经典衬线字体，优雅的手写感
- **布局**: 全屏大图、极简导航、杂志式排版
- **动效**: 缓慢优雅的淡入、视差滚动
- **质感**: 皮革纹理、手工工艺感

### LV (Louis Vuitton) 设计特点
- **配色**: 深棕 (#3D2817) + 金色 (#C9A961) + 黑色
- **字体**: 衬线标题 + 无衬线正文，经典与现代的结合
- **布局**: 网格系统、对称美学、精致边框
- **动效**: 流畅的hover效果、微交互
- **质感**: 金属光泽、皮革纹理、经典图案

---

## LAOZI.ART 新设计方向

### 1. 配色方案

```css
/* 主色调 - 道家雅致 */
--color-primary: #1a1a1a;        /* 墨黑 */
--color-secondary: #8B7355;      /* 茶褐 - 道家服饰色 */
--color-accent: #D4A574;         /* 赭石 - 道家印章色 */
--color-gold: #B8956A;           /* 古铜金 */

/* 背景色 */
--color-bg: #FAF8F5;             /* 宣纸白 */
--color-bg-dark: #F5F0E8;        /* 米黄 */

/* 文字色 */
--color-text: #1a1a1a;
--color-text-muted: #6B6B6B;
--color-text-light: #9B9B9B;
```

### 2. 字体系统

```css
/* 标题字体 - 优雅衬线 */
--font-display: "Cormorant Garamond", "Noto Serif SC", Georgia, serif;

/* 正文字体 - 清晰可读 */
--font-body: "Inter", "Noto Sans SC", -apple-system, sans-serif;

/* 特殊字体 - 道家印章感 */
--font-accent: "Playfair Display", "Noto Serif SC", serif;
```

### 3. 设计元素

#### 边框与分隔
- 细线分隔: 0.5px solid rgba(0,0,0,0.1)
- 双边框效果（爱马仕风格）
- 金色装饰线

#### 阴影与深度
- 柔和阴影: 0 4px 20px rgba(0,0,0,0.05)
- hover时微妙抬升

#### 动效
- 缓动函数: cubic-bezier(0.4, 0, 0.2, 1)
- 过渡时间: 0.6s（慢速优雅）
- 滚动视差效果

### 4. 布局原则

- **大量留白**: 元素间距 40px-80px
- **黄金比例**: 内容区 max-width: 1200px
- **全屏Hero**: 100vh 高度，大图背景
- **网格系统**: 12列网格，严格对齐

### 5. 图片风格

- **滤镜**: 降低饱和度，暖色调
- **构图**: 极简、留白、艺术感
- **质感**: 自然材质、手工感
