<script lang="ts" setup>
const props = defineProps({
  orientation: {
    type: String,
    default: "vertical",
    validator: (value:string) => ["vertical", "horizontal"].includes(value),
  },
});
const { orientation } = toRefs(props);
const transitionStyle = computed(() => {
  return orientation.value === "vertical"
    ? "0.2s height ease-in-out"
    : "0.2s width ease-in-out";
});
const changedProperty = computed(() => {
  return orientation.value === "vertical"
    ? "height"
    : "width";
});
const changedScrollProperty = computed(() => {
  return orientation.value === "vertical"
    ? "scrollHeight"
    : "scrollWidth";
});
const transition = {
  //这些钩子是vue中transiton标签的一些钩子方法
  //TODO 原有style需要backup
  beforeEnter(el: HTMLElement) {
    el.style.transition = unref(transitionStyle);
    el.style[unref(changedProperty)] = "0";
  },

  enter(el: HTMLElement) {
    if (el[unref(changedScrollProperty)] !== 0) {
      el.style[unref(changedProperty)] = `${el[unref(changedScrollProperty)]}px`;
    } else {
      el.style[unref(changedProperty)] = "";
    }
    el.style.overflow = "hidden";
  },

  afterEnter(el: HTMLElement) {
    el.style.transition = "";
    el.style[unref(changedProperty)] = "";
  },

  beforeLeave(el: HTMLElement) {
    el.style[unref(changedProperty)] = `${el[unref(changedScrollProperty)]}px`;
    el.style.overflow = "hidden";
  },

  leave(el: HTMLElement) {
    if (el[unref(changedScrollProperty)] != 0) {
      el.style.transition = unref(transitionStyle);
      el.style[unref(changedProperty)] = "0";
    }
  },

  afterLeave(el: HTMLElement) {
    el.style.transition = "";
    el.style[unref(changedProperty)] = "";
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
