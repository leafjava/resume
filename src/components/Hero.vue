<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>Available for Opportunities</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-main">林燊</span>
          <span class="title-sub">Lin Shen</span>
        </h1>
        
        <div class="hero-position">
          <h2 class="position-main">世界冠军 × AI + Web3 新生代开发者</h2>
          <p class="position-sub">金色财经 / 大树财经 / OpenClaw 特邀嘉宾</p>
        </div>
        
        <p class="hero-slogan">
          从世界冠军赛场到区块链与 AI Agent 前沿<br/>
          用技术与影响力连接下一代 Web3 未来
        </p>
        
        <div class="hero-buttons">
          <a href="#" class="btn btn-primary" @click.prevent="downloadResume">
            <span>查看 PDF 简历</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 12.5L6.25 8.75L7.5 7.4375L9.375 9.3125V2.5H10.625V9.3125L12.5 7.4375L13.75 8.75L10 12.5ZM5 17.5C4.3125 17.5 3.72396 17.2552 3.23438 16.7656C2.74479 16.276 2.5 15.6875 2.5 15V12.5H3.75V15C3.75 15.3438 3.86979 15.6406 4.10938 15.8906C4.34896 16.1406 4.64583 16.2656 5 16.2656H15C15.3438 16.2656 15.6406 16.1406 15.8906 15.8906C16.1406 15.6406 16.2656 15.3438 16.2656 15V12.5H17.5V15C17.5 15.6875 17.2552 16.276 16.7656 16.7656C16.276 17.2552 15.6875 17.5 15 17.5H5Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#contact" class="btn btn-secondary">
            <span>联系我</span>
          </a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="avatar-container">
          <div class="avatar-glow"></div>
          <div class="avatar-placeholder">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="45" r="20" fill="url(#gradient1)"/>
              <path d="M30 95C30 78 42 70 60 70C78 70 90 78 90 95" stroke="url(#gradient1)" stroke-width="8" stroke-linecap="round"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="120" y2="120">
                  <stop offset="0%" stop-color="#00F5FF"/>
                  <stop offset="100%" stop-color="#C026D3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="floating-elements">
          <div class="float-item" style="--delay: 0s">AI</div>
          <div class="float-item" style="--delay: 1s">Web3</div>
          <div class="float-item" style="--delay: 2s">Champion</div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const downloadResume = () => {
  alert('PDF 简历下载功能 - 请将您的简历 PDF 放在 public 文件夹中')
  // window.open('/resume.pdf', '_blank')
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 2rem 4rem;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(192, 38, 211, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--color-cyan);
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-cyan);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.title-main {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-sub {
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
}

.hero-position {
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease 0.4s both;
}

.position-main {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.position-sub {
  font-size: 1.1rem;
  color: var(--color-cyan);
  font-weight: 500;
}

.hero-slogan {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  animation: fadeInUp 0.6s ease 0.8s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-bg-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 245, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-cyan);
  color: var(--color-cyan);
}

.btn-secondary:hover {
  background: rgba(0, 245, 255, 0.1);
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease 0.4s both;
}

.avatar-container {
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

.avatar-placeholder {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--gradient-card);
  border: 3px solid rgba(0, 245, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.float-item {
  position: absolute;
  padding: 0.75rem 1.5rem;
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-cyan);
  animation: float 4s ease-in-out infinite;
  animation-delay: var(--delay);
}

.float-item:nth-child(1) { top: 10%; right: -10%; }
.float-item:nth-child(2) { bottom: 20%; left: -15%; }
.float-item:nth-child(3) { top: 60%; right: -5%; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 1s ease 1.5s both;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid var(--color-cyan);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--color-cyan);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .title-main {
    font-size: 3.5rem;
  }

  .position-main {
    font-size: 1.5rem;
  }

  .avatar-container {
    width: 280px;
    height: 280px;
  }

  .avatar-placeholder {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 6rem 1.5rem 3rem;
  }

  .title-main {
    font-size: 2.5rem;
  }

  .title-sub {
    font-size: 1.5rem;
  }

  .position-main {
    font-size: 1.2rem;
  }

  .hero-slogan {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .avatar-container {
    width: 220px;
    height: 220px;
  }

  .avatar-placeholder {
    width: 180px;
    height: 180px;
  }
}
</style>
