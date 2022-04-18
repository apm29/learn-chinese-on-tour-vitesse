<template>
  <main class="w-screen h-screen flex">
    <SideNavigation />
    <div class="flex flex-col flex-grow h-100vh overflow-auto">
      <router-view />
      <Footer />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
    </div>
  </main>
</template>
