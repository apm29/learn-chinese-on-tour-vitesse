<script setup lang="ts">
interface route {
  label: string;
  path?: string;
  icon: string;
  sub?: route[];
  active?: boolean;
}
const routes = reactive([
  {
    label: "Home",
    path: "/",
    icon: "i-mdi-home"
  },
  {
    label: "About us",
    path: "/about",
    icon: "i-mdi-airplane-takeoff",
    sub: [
      {
        label: "Our service",
        path: "/about/our-service",
        icon: "i-mdi-face-agent"
      },
      {
        label: "Our team",
        path: "/about/our-team",
        icon: "i-mdi-account-group"
      },
    ],
    active: false,
  },
  {
    label: "Course on tours",
    icon: "i-mdi-wallet-travel",
    path: "/classes",
    sub: [
      {
        label: "Online class",
        path: "/classes/online-class",
        icon: "i-mdi-television-classic"
      },
      {
        label: "Offline class",
        path: "/classes/offline-class",
        icon: "i-mdi-human-male-board"
      },
    ],
    active: false,
  },
  {
    label: "Living in Hangzhou",
    path: "/living-in-hangzhou",
    icon: "i-mdi-city-variant",
    sub: [
      {
        label: "School in Hangzhou",
        path: "/living-in-hangzhou/school-in-hangzhou",
        icon: "i-mdi-school"
      },
      {
        label: "Tours in Hangzhou",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-train-car"
      },
    ],
    active: false,
  },
  {
    label: "About chinese",
    path: "/about-chinese",
    icon: "i-mdi-post-outline",
    sub: [
      {
        label: "One sentence a day",
        path: "/living-in-hangzhou/school-in-hangzhou",
        icon: "i-mdi-chat"
      },
      {
        label: "Tongue twist",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-thumb-up"
      },
      {
        label: "Traditional culture",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-silverware-variant"
      },
      {
        label: "Spoken Chinese",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-emoticon-excited-outline"
      },
    ],
    active: false,
  },
  {
    label: "Contact us",
    path: "/contact-us",
    icon: "i-mdi-email-outline"
  }
])
const router = useRouter();
const $route = useRoute();
const handleRoute = function (route: route) {
  console.log(route.path)
  if (route.sub) {
    routes.forEach(r => {
      if (r.active && r.path !== route.path) {
        r.active = false;
      }
    })
    route.active = !route.active;
  } else {
    router.push(route.path ?? "/");
  }
}
const isActive = function (route: route) :boolean{
 return $route.path === route.path || (route.sub && route.sub.some(r => isActive(r))) || false;
}
</script>
<template>
  <nav min-w-240px shadow-lg flex flex-col items-center py-10 bg-surface>
    <img src="/logo.png" w-80px h-auto mb-3 />
    <img src="/studio.png" w-100px h-auto mb-6 />
    <div divider-h mb-5></div>
    <div
      class="navigation-item"
      self-start
      btn-on-bg-surface
      v-for="route of routes"
      :key="route.label"
    >
      <div :class="isActive(route)?'underline text-blue-400':''" flex items-center gap-4 ml-4 py-4 px-3 @click="handleRoute(route)">
        <i :class="route.icon" />
        <span>{{ route.label }}</span>
      </div>
      <CollapseTransition>
        <nav  v-if="route.sub && route.active" min-w-150px ml-10 flex flex-col items-start>
          <div
            class="navigation-item-sub"
            py-2
            px-3
            text-sm
            btn-on-bg-surface
            v-for="sub in route.sub"
            :key="sub.label"
          >
            <div :class="isActive(route)?'underline text-blue-400':''" flex items-center gap-4 @click="handleRoute(route)">
              <i :class="sub.icon" />
              <span>{{ sub.label }}</span>
            </div>
          </div>
        </nav>
      </CollapseTransition>
    </div>
  </nav>
</template>
