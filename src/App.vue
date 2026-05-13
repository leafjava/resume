<template>
  <div id="app">
    <Navbar />
    <main>
      <Hero />
      <Achievements />
      <Speaking />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </main>
    <FloatingButton />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Achievements from './components/Achievements.vue'
import Speaking from './components/Speaking.vue'
import Projects from './components/Projects.vue'
import TechStack from './components/TechStack.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import FloatingButton from './components/FloatingButton.vue'
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
