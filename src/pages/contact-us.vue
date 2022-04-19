<template>
  <div
    class="contact-page__wrapper"
    bg-gradient-to-bl
    from-purple-400
    to-red-600
    relative
    h-screen
    w-full
    flex
    flex-col
    items-center
    overflow-hidden
  >
    <div
      bg-gradient-to-r
      absolute
      transform
      class="bg-light__lower rotate-24 skew-x-16 -top-1/3 -left-1/4 h-4/5 w-160%"
      from-orange-500
      to-orange-400
      shadow-2xl
    ></div>
    <div
      bg-gradient-to-r
      absolute
      transform
      rotate-30
      skew-x-12
      class="bg-light__down -top-1/2 -left-1/3 h-4/5 w-160%"
      from-sky-400
      to-blue-500
       w-screen
      h-screen
      shadow-2x
    ></div>
    <div
      bg-gradient-to-r
      absolute
      transform
      class="bg-light__upper -rotate-24 skew-x-12 -top-1/3 -left-1/4 w-3/4 h-screen"
      from-blue-400
      to-purple-600
      shadow-2xl
    ></div>

    <h2
      class="contact-form__title"
      font-bold
      transform
      text-center
      mt-8
      skew-x-0
      text-white
      text-3xl
      col-span-full
      mb-4
    >
      Contact Us
    </h2>
    <ContactForm
      class="contact-form__body lg:px-32 px-4 pb-16 pt-4 mt-6 transform text-center skew-x-0 w-full lg:w-3/4"
    />
  </div>
</template>
