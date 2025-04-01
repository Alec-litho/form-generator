<template>
  <div class="home-view">
    <h1>Form Generator Demo</h1>
    <div class="navigation">
      <router-link to="/simple-form" class="nav-card">
        <h3>Simple Form</h3>
        <p>Basic example with common form elements</p>
      </router-link>

      <router-link to="/advanced-form" class="nav-card">
        <h3>Advanced Form</h3>
        <p>Complex form with custom slots and validation</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
  }

  .navigation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .nav-card {
    padding: 1.5rem;
    border-radius: 8px;
    background: #f8f9fa;
    transition: transform 0.2s;
    text-decoration: none;
    color: inherit;
    border: 1px solid #e9ecef;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #42b983;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      font-size: 0.9rem;
    }
  }
}
</style>
