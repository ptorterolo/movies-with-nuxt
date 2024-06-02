<template>
  <div class="background-image">
    <div class="absolute inset-0 bg-black opacity-50" />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.background-image {
  background-image: url('/films-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
