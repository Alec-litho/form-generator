<template>
  <div class="app-container">
    <header class="app-header">
      <nav class="nav-container">
        <router-link to="/" class="nav-link" exact-active-class="active"> Home </router-link>
        <router-link to="/simple-form" class="nav-link" active-class="active"> Simple Form </router-link>
        <router-link to="/advanced-form" class="nav-link" active-class="active"> Advanced Form </router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", system-ui, sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background: #2c3e50;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &.active {
      background: #42b983;
      font-weight: 600;
    }
  }
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: #f8f9fa;
}


/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
