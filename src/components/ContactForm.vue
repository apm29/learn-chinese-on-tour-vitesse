<script lang="ts" setup>
const name = ref("");
const email = ref("");
const tel = ref("");
const location = ref("");
const needs = ref("");
</script>
<template>
  <div grid grid-cols-2 gap-3 max-w-650px>
    <Textfield placeholder="Your Name" v-model="name" />
    <Textfield placeholder="EMail address" v-model="email" />
    <Textfield placeholder="Tel." v-model="tel" />
    <Textfield placeholder="Your location" v-model="location" />
    <Textfield
      native-type="textarea"
      :rows="3"
      col-span-full
      placeholder="Tell us your needs"
      v-model="needs"
    />
     <button btn-send col-span-full uppercase>send message</button>
  </div>
 
</template>
