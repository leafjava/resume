<template>
  <section id="speaking" class="speaking">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Speaking Engagements</h2>
        <p class="section-subtitle">Speaking & Guest Appearances</p>
      </div>

      <div class="speaking-grid">
        <div v-for="(event, index) in events" :key="index" class="event-card">
          <div class="event-image">
            <div class="image-placeholder">
              <span class="placeholder-icon">📸</span>
              <p class="placeholder-text">{{ event.imageNote }}</p>
            </div>
          </div>
          <div class="event-content">
            <span class="event-tag">{{ event.tag }}</span>
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-desc">{{ event.description }}</p>
            <div class="event-meta">
              <span class="event-date">{{ event.date }}</span>
              <span class="event-location">{{ event.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    tag: 'AI Agent',
    title: 'OpenClaw AI Agent Conference - Guangzhou',
    description: 'Featured guest for an AI Agent-themed talk, exploring the application and future of AI Agents in the Web3 space with top industry experts.',
    date: 'April 20, 2026',
    location: 'Guangzhou',
    imageNote: 'Event Photos'
  },
  {
    tag: 'AI Agent',
    title: 'OpenClaw AI Agent Conference - Zhuhai',
    description: 'Continued in-depth discussion on AI Agent technology, sharing personal practical experience in AI + Web3.',
    date: 'April 21, 2026',
    location: 'Zhuhai',
    imageNote: 'Event Photos'
  },
  {
    tag: 'Web3',
    title: 'Dashu Finance Premium Forum',
    description: 'As a next-gen representative, joined the premium forum for project roadshow and closed-door discussions, showcasing innovative thinking in Web3.',
    date: 'April 22, 2026',
    location: 'Online + Offline',
    imageNote: 'Forum Photos'
  },
  {
    tag: 'Blockchain',
    title: 'Jinse Finance Exclusive Interview',
    description: 'Exclusive interview with Jinse Finance, sharing the journey and insights of transitioning from World Champion to Web3 developer.',
    date: '2026',
    location: 'Online',
    imageNote: 'Interview Photos'
  }
]
</script>

<style scoped>
.speaking {
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

.speaking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.event-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-cyan);
  box-shadow: 0 20px 60px rgba(0, 245, 255, 0.2);
}

.event-image {
  width: 100%;
  height: 240px;
  background: var(--gradient-card);
  position: relative;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.placeholder-icon {
  font-size: 3rem;
}

.placeholder-text {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.event-content {
  padding: 2rem;
}

.event-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 50px;
  font-size: 0.75rem;
  color: var(--color-cyan);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.event-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.event-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.event-date::before {
  content: '📅 ';
}

.event-location::before {
  content: '📍 ';
}

@media (max-width: 768px) {
  .speaking-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
