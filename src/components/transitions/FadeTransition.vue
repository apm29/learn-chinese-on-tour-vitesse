<script setup lang="ts">
import anime from "animejs";
const onBeforeEnter = function (el: HTMLElement) {
  console.log("brefore enter");
  el.style.transition = "opacity 0.5s ease-in-out";
  el.style.opacity = "0";
};
const onEnter = function (el: HTMLElement, done: Function) {
  console.log("enter");
  anime({
    targets: [el],
    duration: 500,
    opacity: [0, 1],
    complete: () => done(),
  });
};

const onAfterEnter = function (el: HTMLElement) {
  console.log("after enter");
};
const onBeforeLeave = function (el: HTMLElement) {
  console.log("before leave");
  el.style.transition = "opacity 0.5s ease-in-out";
  el.style.opacity = "1";
};
const onLeave = function (el: HTMLElement, done: Function) {
  console.log("leave");
  anime({
    targets: [el],
    duration: 500,
    opacity: [1, 0],
    complete: () => done(),
  });
};

const onAfterLeave = function (el: HTMLElement) {
  console.log("after leave");
};
</script>
<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
    mode="out-in"
    v-bind="$attrs"
  >
    <slot />
  </Transition>
</template>
