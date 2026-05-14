<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FloatingButton />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import FloatingButton from './components/FloatingButton.vue'
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
