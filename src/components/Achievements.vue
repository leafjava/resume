<template>
  <section id="achievements" class="achievements">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">高光成就</h2>
        <p class="section-subtitle">Achievements & Honors</p>
      </div>

      <div class="timeline">
        <div v-for="(achievement, index) in achievements" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <h3 class="achievement-title">{{ achievement.title }}</h3>
            <p class="achievement-desc">{{ achievement.description }}</p>
            <span class="achievement-date">{{ achievement.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  {
    icon: '🏆',
    title: '2026年世界冠军',
    description: '所在团队在国际顶级赛事中脱颖而出，击败来自全球的顶尖选手，荣获世界冠军殊荣',
    date: '2026'
  },
  // {
  //   icon: '🏛️',
  //   title: '全国政协相关活动特邀嘉宾',
  //   description: '受邀参加全国政协相关活动并合影留念，展现新生代影响力',
  //   date: '2026'
  // },
  {
    icon: '📰',
    title: '金色财经特邀嘉宾',
    description: '作为 Web3 领域新生代代表，受邀参与金色财经高端活动与专访',
    date: '2026'
  },
  {
    icon: '🌳',
    title: '大树财经特邀嘉宾',
    description: '在大树财经平台分享 AI + Web3 领域的前沿洞察与实践经验',
    date: '2026'
  },
  {
    icon: '🤖',
    title: 'OpenClaw AI Agent 大会嘉宾',
    description: '广州站 & 珠海站特邀嘉宾，与行业顶尖专家深度交流 AI Agent 技术',
    date: '2026年4月'
  },
  {
    icon: '🎓',
    title: '顶级学术与行业交流',
    description: '与哈佛大学研究员、清华大学区块链协会骨干、ClawOS 创始人等同台交流及闭门会议',
    date: '2026'
  }
]
</script>

<style scoped>
.achievements {
  padding: 8rem 2rem;
  background: var(--color-bg-primary);
  position: relative;
}

.achievements::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--color-cyan), transparent);
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--color-cyan), var(--color-purple));
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item:nth-child(even) .timeline-content {
  grid-column: 1;
  text-align: right;
}

.timeline-item:nth-child(odd) .timeline-content {
  grid-column: 3;
  text-align: left;
}

.timeline-marker {
  grid-column: 2;
  width: 20px;
  height: 20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  border: 4px solid var(--color-bg-primary);
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
}

.timeline-content {
  background: var(--gradient-card);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.timeline-content:hover {
  transform: translateY(-5px);
  border-color: var(--color-cyan);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.2);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.achievement-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.achievement-date {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--color-cyan);
  font-weight: 600;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
  }

  .timeline-item:nth-child(even) .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content {
    grid-column: 2;
    text-align: left;
  }

  .timeline-marker {
    grid-column: 1;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
