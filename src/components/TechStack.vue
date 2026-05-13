<template>
  <section id="tech" class="tech-stack">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">技术栈</h2>
        <p class="section-subtitle">Tech Stack & Skills</p>
      </div>

      <div class="tech-categories">
        <div v-for="category in techStack" :key="category.name" class="tech-category">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="tech-items">
            <div v-for="tech in category.items" :key="tech.name" class="tech-item">
              <div class="tech-icon">{{ tech.icon }}</div>
              <span class="tech-name">{{ tech.name }}</span>
              <span v-if="tech.learning" class="learning-badge">学习中</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techStack = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' }
    ]
  },
  {
    name: 'Backend',
    items: [
      { name: 'Java / Spring Boot', icon: '☕' },
      { name: 'Go / Gin', icon: '🐹' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' }
    ]
  },
  {
    name: 'Blockchain & Web3',
    items: [
      { name: 'Solidity', icon: '💎' },
      { name: 'Web3.js', icon: '🌐' },
      { name: 'ethers.js', icon: '⚡' },
      { name: 'Hardhat', icon: '⛑️' },
      { name: 'Rust (Solana)', icon: '🦀', learning: true },
      { name: 'Foundry', icon: '🔨', learning: true }
    ]
  },
  {
    name: 'AI & Tools',
    items: [
      { name: 'LangChain', icon: '🔗' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Prompt Engineering', icon: '💬' },
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' }
    ]
  }
]
</script>

<style scoped>
.tech-stack {
  padding: 8rem 2rem;
  background: var(--color-bg-secondary);
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

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.tech-category {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.tech-category:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.15);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-cyan);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(0, 245, 255, 0.2);
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 245, 255, 0.05);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(0, 245, 255, 0.1);
  border-color: var(--color-cyan);
  transform: translateX(5px);
}

.tech-icon {
  font-size: 1.8rem;
  width: 40px;
  text-align: center;
}

.tech-name {
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.learning-badge {
  padding: 0.3rem 0.8rem;
  background: rgba(192, 38, 211, 0.2);
  border: 1px solid var(--color-purple);
  border-radius: 50px;
  font-size: 0.7rem;
  color: var(--color-purple);
  font-weight: 600;
}

@media (max-width: 768px) {
  .tech-categories {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
