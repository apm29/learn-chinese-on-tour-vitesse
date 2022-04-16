<script lang="ts">
import "animate.css";
</script>
<template>
  <transition
    name="fade"
    enter-active-class="animate__animated animate__flipInX"
    leave-active-class="animate__animated animate__flipOutX"
    class="transition-all"
  >
    <slot></slot>
  </transition>
</template>
<style scoped></style>
