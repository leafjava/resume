<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">About Me</p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="intro-text">
            I'm <strong>Leaf (Lin Shen)</strong> — a next-gen developer and full-stack engineer who transitioned from the world champion stage to the AI + Web3 space.
          </p>

          <p class="intro-text">
            As a <strong>2026 World Champion</strong>, I deeply understand that excellence comes from continuous effort and innovation. This mindset runs through my entire tech career — from traditional development to blockchain, from Web2 to Web3, from coding to influence-building. I have always maintained a champion-level execution and learning ability.
          </p>

          <p class="intro-text">
            With a <strong>strong institutional background and deep connections in the Hong Kong circle</strong>, I've been invited to attend CPPCC-related events, and have been an active featured guest on top platforms like Jinse Finance, Dashu Finance, and the OpenClaw AI Agent Conference. In-depth exchanges with industry leaders — including Harvard researchers, Tsinghua Blockchain Association leaders, and the ClawOS founder — allow me to understand the convergence of technology and business from a higher vantage point.
          </p>

          <p class="intro-text">
            Over the past months, I have been actively building my personal brand with a focus on <strong>innovation and real-world implementation in the AI Agent and blockchain space</strong>. I believe true value lies not just in the technology itself, but in how to convert top-tier resources into tangible project value — using technology to bridge the real world and the Web3 future.
          </p>

          <div class="highlights">
            <div class="highlight-item">
              <span class="highlight-icon">🎯</span>
              <div>
                <h4>Core Strengths</h4>
                <p>Young, high execution, cross-ecosystem resource integrator</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🚀</span>
              <div>
                <h4>Tech Focus</h4>
                <p>AI Agents, Blockchain, Full-Stack Development</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🌟</span>
              <div>
                <h4>Personal Mission</h4>
                <p>Using technology and influence to connect the next generation of Web3</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-number">2026</div>
            <div class="stat-label">World Champion</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">Tech Stacks</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">Featured Projects</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">∞</div>
            <div class="stat-label">Possibilities</div>
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
