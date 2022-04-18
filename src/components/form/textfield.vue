<script lang="ts" setup>
import { Ref } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  nativeType: String,
});
const emits = defineEmits({
  "update:modelValue": String,
});
const internalValue: Ref<string | undefined> = ref(props.modelValue);
watch(internalValue, function (newValue) {
  emits("update:modelValue", newValue);
});
</script>
<template>
  <label>
    {{label}}
    <component
      :is="nativeType || 'input'"
      outline-none
      border-none
      ring-0
      focus:ring-2
      focus:ring-purple-800
      rounded
      text-white
      bg-gray-200
      bg-opacity-50
      px-3
      py-2
      w-full
      backdrop-blur-md
      backdrop-filter
      v-bind="$attrs"
      v-model="internalValue"
    />
  </label>
</template>
<style scoped>
input::placeholder {
  color: rgb(108, 111, 117);
}
.dark input::placeholder {
  color: rgb(243, 244, 246);
}
textarea::placeholder {
  color: rgb(108, 111, 117);
}
.dark  textarea::placeholder {
  color: rgb(243, 244, 246);
}
</style>
