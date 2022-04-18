<script setup lang="ts">
const { t } = useI18n();
interface Teacher {
  pic: string;
  name: string;
  desc: string;
  tag: string;
}
const teachers: Teacher[] = [
  {
    pic: "/teacher/rebecca.png",
    name: "Rebecca Yang",
    desc:
      "Teacher Yang is a wonderful teacher,i think her genuine kindness shines through her instruction in the Chinese tour. ",
    tag: "English/Chinese Teacher",
  },
  {
    pic: "/teacher/keran-li.png",
    name: "Keran Li",
    desc:
      "Mon professeur est très sérieux et charmant, nous aimons sa passion et son humour.",
    tag: "French/Chinese Teacher",
  },
  {
    pic: "/teacher/ailu.png",
    name: "Ailu",
    desc: "Ailu es muy amable, simpática y tiene mucha paciencia.",
    tag: "Spanish/Chinese Teacher",
  },

  {
    pic: "/teacher/ling-avatar.jpg",
    name: "Ling",
    desc:
      "Ling is great, Cheerful and lively, honest and modest are her attitude during the lessons on tour!",
    tag: "English/Chinese Teacher",
  },
  {
    pic: "/teacher/monica.png",
    name: "Monica",
    desc:
      "my teacher Monica has so many years of oral practical experience. She speaks like native speakers ,we had great fun in her lesson on tour.",
    tag: "English/Chinese Teacher",
  },
  {
    pic: "/teacher/drizzle.png",
    name: "Drizzle",
    desc:
      "Drizzle‘s lesson atmosphere is stable and interesting，she will give you many surprises example to help you to understand obscure grammar and language point.",
    tag: "English/Chinese Teacher",
  },
];
</script>

<template>
  <div w-full h-32rem relative>
    <!-- 背景图 -->
    <img w-full h-full object-cover object-top src="/dashboard-bg.webp" />
    <div
      absolute
      top-0
      left-0
      bottom-0
      right-0
      backdrop="~ blur-sm"
      bg-white
      bg-gradient-to-b
      class="dark:from-gray-900/70 dark:to-gray-400/60"
      bg-opacity-60
      flex
      flex-col
      gap-5
      justify-center
      items-center
    >
      <h1 text-4xl font-extrabold text-gray-800 text-shadow dark:text-white>
        {{ t("study-mandarin-on-tour") }}
      </h1>
      <h5 text-3xl text-gray-500 dark:text-gray-100>
        {{ t("want-to-learn-chinese") }}
      </h5>
      <div class="flex gap-4">
        <button btn-primary capitalize>{{ t("get-started") }}</button>
        <button btn-primary capitalize>{{ t("one-on-one-class") }}</button>
      </div>
    </div>
  </div>
  <div
    class="teachers-grid grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-4 px-6 pb-32 pt-16"
  >
    <div
      v-for="teacher of teachers"
      flex
      flex-col
      items-center
      shadow
      rounded-2xl
      py-6
      px-8
      transition-all
      cursor-pointer
      hover:-translate-x-1
      hover:-translate-y-1
      transform
      hover:shadow-2xl
      bg-surface
    >
      <img
        :alt="teacher.name"
        :src="teacher.pic"
        class="teacher-avatar__img"
        w-48
        h-48
        rounded-full
        border-8
        border-blue-200
        rounded
        object-cover
        bg-blue-200
      />
      <div
        class="teacher-intro__container px-0 py-2"
      >
        <h2 class="teacher-tag text-xs text-blue-600 relative">
          <span h-full rounded-r-2xl w-2 bg-blue-600>&nbsp;</span>
          {{ teacher.tag }}
        </h2>
        <h2 class="teacher-contact__title mt-4 text-gray-600 text-xl font-extrabold">
          {{ teacher.name }}
        </h2>
        <div class="mt-4 text-sm font-bold text-gray-400">Students Says...</div>
        <p class="teacher-intro__text text-gray-500 font-serif break-all">
          {{ teacher.desc }}
        </p>
      </div>
    </div>
  </div>
   <div class='why-us__container grid grid-cols-1 max-w-full px-24 mt-8'>
    <h1 class='text-2xl font-bold text-gray-800 dark:text-gray-200 self-start col-span-full h-16'>
      Why Us
    </h1>
   <ol class='why-us__list text-lg mb-3 font-serif list-decimal'>
     <li>Flexibility – you decide where and when you would like to have your class with our private Mandarin tutor.</li>
     <li>Mandarin Learning Materials – access to all of our course books and online courses.</li>
     <li>We offer the basic classes online and touch the real culture offline.</li>
     <li>A distinguished and experienced teachers -All of our tutors are Ministry of Teacher certified .They are all highly
       trained and experienced in organizing and teaching individuals and sharing culture for students with interests and
       love. All of them get tour guide certificate.</li>
     <li>We are a Legitimate LOCAL Chinese learning Company,lcot-hangzhou.com is fully owned and operated Hangzhou
       co-operation international education agency which is a legitimate education company licensed by the government.</li>
   </ol>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
