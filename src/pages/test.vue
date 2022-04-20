<script lang="ts" setup>
const toggle = ref(true);
const tag = ref(0)
</script>
<template>
  <div p-12>
    <button btn-send @click="toggle = !toggle;tag+=1" my-3>toggle</button>
    <div grid grid-cols-3 gap-4>
      <ScrollXReverseTransition group tag="ol">
        <li v-for="item in tag" :key="item">
            {{ item }}
        </li>
      </ScrollXReverseTransition>
      <ScrollXReverseTransition :duration="600">
        <div h-200px bg-red-400 v-if="toggle"></div>
        <div h-200px bg-blue-400 v-else></div>
        <li v-for="item in tag" :key="item">
            {{ item }}
        </li>
      </ScrollXReverseTransition>
       <ScrollXTransition :duration="600">
        <div h-200px bg-orange-400 v-if="toggle"></div>
        <div h-200px bg-purple-400 v-else></div>
        <li v-for="item in tag" :key="item">
            {{ item }}
        </li>
      </ScrollXTransition>
    </div>
  </div>
</template>
