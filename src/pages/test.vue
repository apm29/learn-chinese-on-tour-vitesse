<script lang="ts" setup>
const toggle = ref(true);
</script>
<template>
  <div p-12>
    <button btn-send @click="toggle = !toggle" my-3>toggle</button>
    <FadeTransition>
      <div w-200px h-300px bg-blue-400 v-if="toggle"></div>
      <div w-200px h-300px bg-red-400 v-else></div>
    </FadeTransition>
  </div>
</template>
