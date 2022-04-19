<script lang="ts" setup>
const toggle = ref(true);
</script>
<template>
  <div p-12>
    <button btn-send @click="toggle = !toggle" my-3>toggle</button>
   <div grid grid-cols-3 gap-4>
     <FadeTransition>
      <div h-200px bg-blue-400 v-if="toggle"></div>
      <div h-200px bg-red-400 v-else></div>
    </FadeTransition>
     <ScrollXTransition>
      <div h-200px bg-blue-400 v-if="toggle"></div>
      <div h-200px bg-red-400 v-else></div>
    </ScrollXTransition>
   </div>
  </div>
</template>
