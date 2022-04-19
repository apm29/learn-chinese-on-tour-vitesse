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
      p-3
      right-0
      backdrop="~ blur-sm"
      bg="white gradient-to-b opacity-60"
      class="dark:from-gray-900/70 dark:to-gray-400/60"
      flex
      flex-col
      gap-5
      justify-center
      items-center
    >
      <h1 text-4xl font-extrabold title-1>
        {{ t("study-mandarin-on-tour") }}
      </h1>
      <h5 text-3xl text-gray-500 dark:text-gray-300>
        {{ t("want-to-learn-chinese") }}
      </h5>
      <div class="flex gap-4">
        <a href="/contact-us" btn-primary capitalize>{{ t("get-started") }}</a>
        <a href="/contact-us" btn-primary capitalize>{{ t("one-on-one-class") }}</a>
      </div>
    </div>
  </div>
   <h1 class='title-1 self-start h-16 ml-6 mt-8'>
      Meet Our Full-time Mandarin Teachers On tour in Hangzhou
    </h1>
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
      hover:shadow-xl
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
        <p class="teacher-intro__text text-gray-500 font-sans">
          {{ teacher.desc }}
        </p>
      </div>
    </div>
  </div>
   <div class='why-us__container px-6 mt-8'>
    <h1 class='title-1 self-start col-span-full h-16'>
      Why Us
    </h1>
   <ol class='why-us__list px-6 text-lg mb-3 list-decimal font-sans'>
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
  <h1 mx-auto my-8 px-6 class='title-1 self-start col-span-full h-16'>{{ t("get-trail-lesson") }}</h1>
  <ContactForm  px-6 mx-auto min-w-full md:min-w-600px/>
  <ContactUs px-6 mx-auto min-w-full md:min-w-600px/>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
