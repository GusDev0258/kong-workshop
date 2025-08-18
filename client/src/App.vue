<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
ul {
  display: flex;
  align-items: center;
  list-style: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
