<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">精选项目</h2>
        <p class="section-subtitle">Featured Projects</p>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card" :class="{ 'featured': project.featured }">
          <div class="project-header">
            <div class="project-icon">{{ project.icon }}</div>
            <span v-if="project.featured" class="featured-badge">主打项目</span>
          </div>
          
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          
          <div class="project-stats">
            <div v-for="stat in project.stats" :key="stat.label" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
          
          <div class="project-links">
            <a v-if="project.github" :href="project.github" class="project-link" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a v-if="project.demo" :href="project.demo" class="project-link" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M10 3.5C5.5 3.5 2 7 2 10s3.5 6.5 8 6.5 8-3 8-6.5-3.5-6.5-8-6.5z" stroke-width="1.5"/>
                <circle cx="10" cy="10" r="2.5" stroke-width="1.5"/>
              </svg>
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    icon: '🏆',
    title: '世界冠军链上成就展示 DApp',
    description: '将世界冠军荣誉铸造为 NFT，通过区块链技术永久记录个人成就，展示 Web3 与现实世界的完美结合',
    tech: ['Solidity', 'React', 'ethers.js', 'IPFS', 'Hardhat'],
    stats: [
      { label: 'NFT Minted', value: '100+' },
      { label: 'Users', value: '500+' }
    ],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    icon: '🤖',
    title: 'AI Agent 交易助手',
    description: '基于 LangChain 开发的智能交易助手，帮助用户分析市场趋势，提供个性化投资建议',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    stats: [
      { label: 'API Calls', value: '10K+' },
      { label: 'Accuracy', value: '85%' }
    ],
    github: '#'
  },
  {
    icon: '💼',
    title: 'Web3 项目管理平台',
    description: '为 Web3 项目团队打造的协作平台，集成链上数据分析、任务管理、DAO 治理等功能',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Web3.js'],
    stats: [
      { label: 'Projects', value: '50+' },
      { label: 'Teams', value: '200+' }
    ],
    demo: '#'
  },
  {
    icon: '📊',
    title: 'DeFi 数据分析仪表板',
    description: '实时追踪 DeFi 协议数据，提供可视化分析工具，帮助用户做出更明智的投资决策',
    tech: ['Vue.js', 'Chart.js', 'The Graph', 'Web3.js'],
    stats: [
      { label: 'Protocols', value: '30+' },
      { label: 'Daily Users', value: '1K+' }
    ],
    github: '#',
    demo: '#'
  }
]
</script>

<style scoped>
.projects {
  padding: 8rem 2rem;
  background: var(--color-bg-primary);
}

.container {
  max-width: 1400px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-cyan);
  box-shadow: 0 20px 60px rgba(0, 245, 255, 0.2);
}

.project-card.featured {
  border: 2px solid var(--color-cyan);
  background: var(--gradient-card);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-icon {
  font-size: 3rem;
}

.featured-badge {
  padding: 0.4rem 1rem;
  background: var(--gradient-primary);
  color: var(--color-bg-primary);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.project-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--color-cyan);
  font-weight: 500;
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(0, 245, 255, 0.1);
  border-bottom: 1px solid rgba(0, 245, 255, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-cyan);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 1px solid var(--color-cyan);
  border-radius: 50px;
  color: var(--color-cyan);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(0, 245, 255, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
