<template>
  <main>
    <Hero />

    <section class="gwdc-gallery-section">
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

.gwdc-gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

  .gwdc-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}
</style>
