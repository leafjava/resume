# Leaf | Lin Shen - Personal Portfolio Website

> World Champion × AI + Web3 Next-Gen Developer

## 🚀 Project Overview

A premium, professional, futuristic personal portfolio website designed for the Web3 + AI track. Featuring a dark mode and highly tech-savvy cyber-futuristic style, it perfectly showcases personal achievements, technical strength, and industry influence.

## ✨ Features

- 🎨 **Dark Tech Aesthetic** - Deep black background + electric cyan / neon purple gradients
- 🌟 **Dynamic Interactions** - Smooth scrolling, hover animations, loading effects
- 📱 **Fully Responsive** - Perfect adaptation for mobile, tablet, and desktop
- ⚡ **Fast Loading** - Built on Vue 3 + Vite
- 🌐 **Bilingual Support** - English & Chinese content supported
- 🎯 **Modular Design** - Easy to maintain and extend

## 📦 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS3 (Native CSS Variables)
- **Fonts**: Inter + Noto Sans SC

## 🛠️ Installation & Run

### 1. Install Dependencies

```bash
cd resume
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### 3. Build for Production

```bash
npm run build
```

Built files will be in the `dist` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Customizing Content

### Modify Personal Info

All content lives in the individual components. Edit as needed:

1. **Hero.vue** - Home title, positioning, slogan
2. **Achievements.vue** - Achievements list
3. **Speaking.vue** - Speaking engagements
4. **Projects.vue** - Project showcase
5. **TechStack.vue** - Tech stack
6. **About.vue** - About me
7. **Contact.vue** - Contact info

### Add Personal Photo

1. Place your avatar in `public/images/`
2. Replace the `.avatar-placeholder` content in `Hero.vue`:

```vue
<div class="avatar-placeholder">
  <img src="/images/your-photo.jpg" alt="Leaf" />
</div>
```

### Add Event Photos

In `Speaking.vue`, replace `.image-placeholder` with the actual image:

```vue
<div class="event-image">
  <img :src="event.image" :alt="event.title" />
</div>
```

### Add PDF Resume

1. Place your PDF resume in the `public` directory, named `resume.pdf`
2. Uncomment the download function in `Hero.vue`, `FloatingButton.vue`, and `Contact.vue`:

```javascript
const downloadResume = () => {
  window.open('/resume.pdf', '_blank')
}
```

### Update Contact Info

Update the `contacts` array in `Contact.vue` with your links and info.

## 🎨 Customizing Styles

All color variables are defined in `src/assets/base.css`:

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

## 📱 Page Structure

1. **Hero** - Landing / First Screen
2. **Achievements** - Highlight Achievements
3. **Speaking** - Speaking Engagements
4. **Projects** - Featured Projects
5. **TechStack** - Tech Stack
6. **About** - About Me
7. **Contact** - Contact + Footer

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import the project in Vercel
3. Auto-deploy complete

### Netlify

1. Push code to GitHub
2. Import the project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Static Hosts

Build the project, then upload the `dist` directory to any static host.

## 📄 License

© 2026 Leaf | Lin Shen. All Rights Reserved.

## 🤝 Contact

For technical support or custom development, please reach out via the contact methods on the site.

---

**Built with passion for Web3 & AI 🚀**
