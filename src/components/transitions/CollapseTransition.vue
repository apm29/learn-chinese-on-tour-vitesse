<script lang="ts">
import "animate.css";
</script>
<template>
  <transition
    name="collapse"
  >
    <slot></slot>
  </transition>
</template>
<style scoped>
.collapse-enter-active {
  animation: collapse-in 0.5s;
}
.collapse-leave-active {
  animation: collapse-out 0.5s;
}

@keyframes collapse-in {
  from {
    opacity: 0;
    transform: translateY(-100%) scaleY(0.1);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1.0);
  }
}

@keyframes collapse-out {
  to {
    opacity: 0;
    transform: translateY(-100%) scaleY(0.1);
  }
  from {
    opacity: 1;
    transform: translateY(0) scaleY(1.0);
  }
}
</style>
