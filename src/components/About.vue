<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">关于我</h2>
        <p class="section-subtitle">About Me</p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="intro-text">
            我是<strong>林燊（Lin Shen / Leaf）</strong>，一位从世界冠军赛场转战 AI + Web3 领域的新生代开发者与全栈工程师。
          </p>
          
          <p class="intro-text">
            作为<strong>2026年世界冠军</strong>，我深知卓越源于持续的努力与创新。这种精神同样贯穿于我的技术生涯——从传统开发到区块链，从 Web2 到 Web3，从编码到影响力构建，我始终保持着冠军级的执行力与学习能力。
          </p>
          
          <p class="intro-text">
            我拥有<strong>体制内深厚背景与香港圈资源</strong>，曾受邀参加全国政协相关活动，并作为特邀嘉宾活跃于金色财经、大树财经、OpenClaw AI Agent 大会等顶级平台。与哈佛大学研究员、清华大学区块链协会骨干、ClawOS 创始人等行业领袖的深度交流，让我能够站在更高的视角理解技术与商业的融合。
          </p>
          
          <p class="intro-text">
            过去几个月，我高频输出个人品牌，专注于 <strong>AI Agent 与区块链领域的创新与落地</strong>。我相信，真正的价值不仅在于技术本身，更在于如何将顶级资源转化为实际项目价值，如何用技术连接现实世界与 Web3 未来。
          </p>
          
          <div class="highlights">
            <div class="highlight-item">
              <span class="highlight-icon">🎯</span>
              <div>
                <h4>核心优势</h4>
                <p>年轻、执行力极强、跨圈层资源整合者</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🚀</span>
              <div>
                <h4>技术方向</h4>
                <p>AI Agent、区块链、全栈开发</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🌟</span>
              <div>
                <h4>个人使命</h4>
                <p>用技术与影响力连接下一代 Web3 未来</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-number">2026</div>
            <div class="stat-label">世界冠军</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">技术栈</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">精选项目</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">∞</div>
            <div class="stat-label">可能性</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 8rem 2rem;
  background: var(--color-bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.intro-text strong {
  color: var(--color-cyan);
  font-weight: 600;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  gap: 1.5rem;
  align-items: start;
  padding: 1.5rem;
  background: var(--gradient-card);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  border-color: var(--color-cyan);
  transform: translateX(10px);
}

.highlight-icon {
  font-size: 2.5rem;
}

.highlight-item h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.highlight-item p {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.2);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
