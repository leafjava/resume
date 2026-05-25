# Leaf | Lin Shen - 个人简介网站

> 世界冠军 × AI + Web3 新生代开发者

## 🚀 项目简介

这是一个高端、专业、充满未来感的个人简介网站，专为 Web3 + AI 赛道设计。采用暗黑模式、科技感十足的赛博未来风格，完美展示个人成就、技术实力和影响力。

## ✨ 特性

- 🎨 **暗黑科技风格** - 深黑背景 + 电光青/霓虹紫渐变
- 🌟 **动态交互效果** - 平滑滚动、hover 动画、加载效果
- 📱 **完美响应式** - 移动端、平板、桌面端完美适配
- ⚡ **快速加载** - 基于 Vue 3 + Vite 构建
- 🌐 **中英双语** - 支持中英文内容展示
- 🎯 **模块化设计** - 易于维护和扩展

## 📦 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **样式**: CSS3 (原生 CSS Variables)
- **字体**: Inter + Noto Sans SC

## 🛠️ 安装与运行

### 1. 安装依赖

```bash
cd resume
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 3. 构建生产版本

```bash
npm run build
```

构建后的文件将在 `dist` 目录中

### 4. 预览生产版本

```bash
npm run preview
```

## 📝 自定义内容

### 修改个人信息

所有内容都在各个组件中，您可以根据需要修改：

1. **Hero.vue** - 首页标题、定位、Slogan
2. **Achievements.vue** - 成就列表
3. **Speaking.vue** - 演讲嘉宾经历
4. **Projects.vue** - 项目展示
5. **TechStack.vue** - 技术栈
6. **About.vue** - 关于我
7. **Contact.vue** - 联系方式

### 添加个人照片

1. 将您的头像图片放在 `public/images/` 目录下
2. 在 `Hero.vue` 中替换 `.avatar-placeholder` 的内容：

```vue
<div class="avatar-placeholder">
  <img src="/images/your-photo.jpg" alt="Leaf" />
</div>
```

### 添加活动照片

在 `Speaking.vue` 中，将 `.image-placeholder` 替换为实际图片：

```vue
<div class="event-image">
  <img :src="event.image" :alt="event.title" />
</div>
```

### 添加 PDF 简历

1. 将您的 PDF 简历放在 `public` 目录下，命名为 `resume.pdf`
2. 在 `Hero.vue`、`FloatingButton.vue` 和 `Contact.vue` 中取消注释下载功能：

```javascript
const downloadResume = () => {
  window.open('/resume.pdf', '_blank')
}
```

### 修改联系方式

在 `Contact.vue` 中更新 `contacts` 数组中的链接和信息。

## 🎨 自定义样式

所有颜色变量定义在 `src/assets/base.css` 中：

```css
:root {
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #121212;
  --color-bg-card: #1A1A1A;
  --color-cyan: #00F5FF;
  --color-purple: #C026D3;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --gradient-primary: linear-gradient(135deg, #00F5FF 0%, #C026D3 100%);
  --gradient-card: linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(192, 38, 211, 0.1) 100%);
}
```

## 📱 页面结构

1. **Hero** - 首页/第一屏
2. **Achievements** - 高光成就
3. **Speaking** - 演讲嘉宾经历
4. **Projects** - 精选项目
5. **TechStack** - 技术栈
6. **About** - 关于我
7. **Contact** - 联系方式 + Footer

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令: `npm run build`
4. 发布目录: `dist`

### 其他静态托管

构建后将 `dist` 目录上传到任何静态托管服务即可。

## 📄 许可证

© 2026 Leaf | Lin Shen. All Rights Reserved.

## 🤝 联系方式

如需技术支持或定制开发，请通过网站上的联系方式与我联系。

---

**Built with passion for Web3 & AI 🚀**
