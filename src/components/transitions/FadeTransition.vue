<script setup lang="ts">
import anime from "animejs";
import { TransitionGroup, Transition } from "vue";
const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 300,
  },
  group: {
    type: Boolean,
    default: false,
  },
});
const onBeforeEnter = function (el: HTMLElement) {
  console.log("brefore enter");
  anime.set(el, {
    opacity: "0",
  });
};
const onEnter = function (el: HTMLElement, done: Function) {
  console.log("enter");
  anime({
    targets: [el],
    duration: props.duration,
    delay: props.delay,
    opacity: [0, 1],
    complete: () => done(),
  });
};

const onAfterEnter = function (el: HTMLElement) {
  console.log("after enter");
};
const onBeforeLeave = function (el: HTMLElement) {
  console.log("before leave");
  anime.set(el, {
    opacity: "1",
  });
};
const onLeave = function (el: HTMLElement, done: Function) {
  console.log("leave");
  anime({
    targets: [el],
    duration: props.duration,
    delay: props.delay,
    opacity: [1, 0],
    complete: () => done(),
  });
};

const onAfterLeave = function (el: HTMLElement) {
  console.log("after leave");
};
</script>
<template>
  <Component
    :is="props.group ? TransitionGroup : Transition"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
    mode="out-in"
    v-bind="$attrs"
    :css="false"
  >
    <slot />
  </Component>
</template>
