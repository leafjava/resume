<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="nav-container">
      <div class="nav-logo">
        <span class="logo-text">林燊</span>
        <span class="logo-subtitle">Lin Shen</span>
      </div>
      
      <div :class="['nav-menu', { 'active': menuOpen }]">
        <!-- <a href="#home" @click="closeMenu">Home</a> -->
        <a @click="routeToPage('/')">Home</a>
        <a @click="routeToPage('/gwdc')">GWDC Champion</a>
        <a @click="routeToPage('/achievement')">光渡·AI论坛</a>
        <a @click="routeToPage('/achievement2')">香港开发者港湾</a>
        <a @click="routeToPage('/achievement3')">ENI项目合作</a>
        <a @click="routeToPage('/achievement4')">Agent主题分享</a>
        <a @click="routeToPage('/achievement5')">TON Builders Day</a>
        <!-- <a href="#contact" @click="closeMenu">Contact</a> -->
      </div>

      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeMenu = () => {
  menuOpen.value = false
}

const routeToPage = (path) => {
  closeMenu()
  router.push(path)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 245, 255, 0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;

  span{
    cursor: pointer;
    color: var(--color-text-primary);
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;
  }

  span::after{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }
}

.nav-menu a {
  cursor: pointer;
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-menu a:hover {
  color: var(--color-cyan);
}

.nav-menu a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-cyan);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    padding: 2rem;
  }

  .nav-menu.active {
    right: 0;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-menu a {
    font-size: 1.2rem;
  }
}
</style>
