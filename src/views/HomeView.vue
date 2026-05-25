<template>
  <main>
    <Hero />

    <section class="gwdc-gallery-section">
      <div class="gwdc-intro">
        <span class="gwdc-kicker">GWDC 2026 Hackathon</span>
        <h2 class="gwdc-title">Conflux Track Champion · 全球 Web3 开发者大会高光时刻</h2>
        <p class="gwdc-desc">
          GWDC 2026 Hackathon 圆满落幕，来自全球 8 个国家和地区的 35 支团队、超过 120 名开发者齐聚香港。我所在团队获得 GWDC Conflux 链冠军，在国际化 Web3 开发者舞台中脱颖而出。
        </p>
        <div class="gwdc-highlights">
          <span>全国政协吴杰庄主礼致辞</span>
          <span>香港财政司副司长 Michael Wong 开场致辞</span>
          <span>孙宇晨发表“稳定币 × AI”主题演讲</span>
          <span>香港数码港董事孔剑平参与启动</span>
          <span>Web3Labs 顾问任命与行业交流</span>
          <span>RWA 与稳定币圆桌讨论</span>
        </div>
      </div>

      <div class="gwdc-gallery-grid">
        <img
          v-for="(image, index) in gwdcImages"
          :key="image"
          :src="image"
          :alt="`GWDC 高光图片 ${index + 1}`"
          class="gwdc-gallery-image"
        />
      </div>
    </section>

    <Achievements />
    <Speaking />
    <Projects />
    <TechStack />
    <About />
    <Contact />
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Achievements from '../components/Achievements.vue'
import Speaking from '../components/Speaking.vue'
import Projects from '../components/Projects.vue'
import TechStack from '../components/TechStack.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const gwdcImageModules = import.meta.glob('../assets/image/gwdc2/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default'
})

const gwdcImages = Object.entries(gwdcImageModules)
  .sort(([pathA], [pathB]) => {
    const numberA = Number(pathA.match(/(\d+)\.jpg$/)?.[1] ?? 0)
    const numberB = Number(pathB.match(/(\d+)\.jpg$/)?.[1] ?? 0)
    return numberA - numberB
  })
  .map(([, image]) => image)
</script>

<style scoped>
.gwdc-gallery-section {
  padding: 4rem 2rem 8rem;
  background: var(--color-bg-primary);
}

.gwdc-intro {
  max-width: 1100px;
  margin: 0 auto 3rem;
  text-align: center;
}

.gwdc-kicker {
  display: inline-flex;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 999px;
  background: rgba(0, 245, 255, 0.08);
  color: var(--color-cyan);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gwdc-title {
  margin-bottom: 1.25rem;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.25;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gwdc-desc {
  max-width: 900px;
  margin: 0 auto 1.5rem;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

.gwdc-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.gwdc-highlights span {
  padding: 0.65rem 1rem;
  border: 1px solid rgba(0, 245, 255, 0.18);
  border-radius: 999px;
  background: var(--gradient-card);
  color: var(--color-text-primary);
  font-size: 0.95rem;
  font-weight: 600;
}

.gwdc-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.gwdc-gallery-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(0, 245, 255, 0.25);
  box-shadow: 0 12px 36px rgba(0, 245, 255, 0.16);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.gwdc-gallery-image:hover {
  transform: translateY(-6px);
  border-color: var(--color-cyan);
  box-shadow: 0 18px 48px rgba(0, 245, 255, 0.28);
}

@media (max-width: 768px) {
  .gwdc-gallery-section {
    padding: 3rem 1rem 5rem;
  }

  .gwdc-title {
    font-size: 1.7rem;
  }

  .gwdc-desc {
    font-size: 1rem;
    text-align: left;
  }

  .gwdc-highlights {
    justify-content: flex-start;
  }

  .gwdc-highlights span {
    width: 100%;
    text-align: left;
  }

  .gwdc-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}
</style>
