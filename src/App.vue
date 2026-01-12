<script setup>
  import {RouterView} from 'vue-router'
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  
  <div class="app-container">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
  html {
    color: rgb(236, 236, 236);
    background-color:rgb(24, 24, 24);
    
    /* font setting */
    font-size: clamp(8px, 4vw, 24px);
    font-family: "Noto Sans TC", sans-serif;
    font-optical-sizing: auto;
    /* font-weight: <weight>; */
    font-style: normal;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  .app-container {
    padding: 3rem 1.2rem 3rem 1.2rem;
  }

</style>
