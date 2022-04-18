<template>
  <main class="w-screen h-screen flex">
    <SideNavigation />
    <div class="flex flex-col flex-grow h-100vh overflow-auto">
      <router-view />
      <Footer />
      <SiteInfo/>
    </div>
  </main>
</template>
