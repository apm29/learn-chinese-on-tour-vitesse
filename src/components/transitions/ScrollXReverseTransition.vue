<script setup lang="ts">
import anime from "animejs";
import { TransitionGroup, Transition } from "vue";
const attrs = useAttrs();
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
    translateX: "100%",
  });
};
const onEnter = function (el: HTMLElement, done: Function) {
  console.log("enter", window.getComputedStyle(el).backgroundColor);
  anime({
    targets: [el],
    duration: props.duration,
    delay: props.delay,
    translateX: ["100%", "0%"],
    easing: "linear",
    complete: () => done(),
  });
};

const onAfterEnter = function (el: HTMLElement) {
  console.log("after enter");
};
const onBeforeLeave = function (el: HTMLElement) {
  console.log("before leave");
  anime.set(el, {
    translateX: "0%",
  });
};
const onLeave = function (el: HTMLElement, done: Function) {
  console.log("leave", window.getComputedStyle(el).backgroundColor);
  anime({
    targets: [el],
    duration: props.duration,
    delay: props.delay,
    translateX: ["0%", "-100%"],
    easing: "linear",
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
    v-bind="attrs"
    :css="false"
    mode="out-in"
  >
    <slot />
  </Component>
</template>
