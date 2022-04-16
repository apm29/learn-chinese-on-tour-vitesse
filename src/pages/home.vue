<script setup lang="ts">
const show = ref(false);
const handleClick = () => {
  show.value = !show.value;
};
</script>
<template>
   <div class="wrap">
    <h2>css过渡动画</h2>
    <transition
      :duration="{enter:5000,leave:10000}"
      name="collapse"
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
      appear-active-class="animate__animated animate__bounceInDown"
    >
      <div v-if="show">hello world</div>
    </transition>
    <button @click="handleClick">切换显隐</button>
  </div>
</template>
<route lang="yaml">
meta:
  layout: default
</route>
