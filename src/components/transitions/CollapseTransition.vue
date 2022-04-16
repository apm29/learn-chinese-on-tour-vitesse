<script lang="ts" setup>
const transitionStyle = "0.2s height ease-in-out";
const transition = {
  //这些钩子是vue中transiton标签的一些钩子方法
  beforeEnter(el:HTMLElement) {
    el.style.transition = transitionStyle;
    el.style.height = "0";
  },

  enter(el:HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = "";
    }
    el.style.overflow = "hidden";
  },

  afterEnter(el:HTMLElement) {
    el.style.transition = "";
    el.style.height = "";
  },

  beforeLeave(el:HTMLElement) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },

  leave(el:HTMLElement) {
    if (el.scrollHeight != 0) {
      el.style.transition = transitionStyle;
      el.style.height = "0";
    }
  },

  afterLeave(el:HTMLElement) {
    el.style.transition = "";
    el.style.height = "";
  },
};
</script>
<template>
  <transition
    @before-enter="transition.beforeEnter"
    @enter="transition.enter"
    @after-enter="transition.afterEnter"
    @before-leave="transition.beforeLeave"
    @leave="transition.leave"
    @after-leave="transition.afterLeave"
  >
    <slot></slot>
  </transition>
</template>
