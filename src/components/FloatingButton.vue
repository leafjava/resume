<template>
  <div class="floating-buttons">
    <button @click="scrollToTop" class="floating-btn scroll-top" :class="{ 'visible': showScrollTop }">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
    
    <button @click="downloadResume" class="floating-btn download-resume">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="12" y2="18"/>
        <line x1="15" y1="15" x2="12" y2="18"/>
      </svg>
      <span class="btn-tooltip">下载简历</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const downloadResume = () => {
  alert('PDF 简历下载功能 - 请将您的简历 PDF 放在 public 文件夹中')
  // window.open('/resume.pdf', '_blank')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-buttons {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
}

.floating-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 4px 20px rgba(0, 245, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.floating-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 245, 255, 0.5);
}

.scroll-top {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.download-resume:hover .btn-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-10px);
}

.btn-tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 245, 255, 0.3);
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .floating-buttons {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .floating-btn {
    width: 48px;
    height: 48px;
  }

  .btn-tooltip {
    display: none;
  }
}
</style>
