<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.greater( 'md')
</script>
<template>
  <main class="w-screen h-screen flex">
    <SideNavigation v-if="md"/>
    <div class="flex flex-col flex-grow h-100vh overflow-auto transition-all ease-in-out">
      <router-view />
      <Footer />
      <SiteInfo/>
    </div>
  </main>
</template>
