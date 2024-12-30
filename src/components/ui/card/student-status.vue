<template>
  <div class="status--wrapper">
    <div class="status--wrapper--card" v-for="(itim, index) in data" :key="index">
      <div class="status--wrapper--card--icon" v-html="itim?.icon"></div>
      <div class="status--wrapper--card--title">
        <p>{{ itim?.title }}</p>
        <h2>{{ itim?.statistika }}</h2>
        <div class="status--wrapper--card--title--statis">
          <img :src="itim?.protses == true ? ArrowTop : ArrowBottom " alt="icon" />
          <p><span :class="itim?.protses == true ? `status--wrapper--card--title--statis--top` : `status--wrapper--card--title--statis--bottom`">{{ itim?.kaficent + "% " }}</span> ushbu oy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowTop from "../../../assets/icons/strelca-top.svg"
import ArrowBottom from "../../../assets/icons/strelca-bottom.svg"

const data = [
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
         <path d="M16.827 19.023C16.6449 19.0055 16.4264 19.0055 16.226 19.023C11.8914 18.883 8.44922 15.4705 8.44922 11.2705C8.44922 6.98299 12.0553 3.50049 16.5356 3.50049C20.9977 3.50049 24.6221 6.98299 24.6221 11.2705C24.6039 15.4705 21.1617 18.883 16.827 19.023Z" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M30.0297 6.99951C33.563 6.99951 36.4042 9.74701 36.4042 13.1245C36.4042 16.432 33.6723 19.127 30.2665 19.2495C30.1208 19.232 29.9569 19.232 29.793 19.2495" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M7.71966 25.4795C3.3122 28.3145 3.3122 32.9345 7.71966 35.752C12.7281 38.972 20.9421 38.972 25.9505 35.752C30.358 32.917 30.358 28.297 25.9505 25.4795C20.9603 22.277 12.7464 22.277 7.71966 25.4795Z" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M33.5469 35.0005C34.8582 34.738 36.0966 34.2305 37.1166 33.478C39.9577 31.4305 39.9577 28.053 37.1166 26.0055C36.1149 25.2705 34.8946 24.7805 33.6015 24.5005" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "Jami talabalar",
    statistika: "5,423 ",
    kaficent: 16,
    protses: true,
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
         <path d="M25.2695 31.7501L27.9295 34.2835L33.2495 29.2168" stroke="#6425FE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M21.2805 18.1168C21.1055 18.1002 20.8955 18.1002 20.703 18.1168C16.538 17.9835 13.2305 14.7335 13.2305 10.7335C13.213 6.65016 16.6955 3.3335 20.983 3.3335C25.2705 3.3335 28.753 6.65016 28.753 10.7335C28.753 14.7335 25.428 17.9835 21.2805 18.1168Z" stroke="#6425FE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M20.9828 36.3496C17.7978 36.3496 14.6303 35.583 12.2153 34.0496C7.98031 31.3496 7.98031 26.9496 12.2153 24.2663C17.0278 21.1996 24.9203 21.1996 29.7328 24.2663" stroke="#6425FE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "Ishlayotganlar",
    statistika: "1,893 ",
    kaficent: 1,
    protses: false,
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20.0013 20.0002C24.6037 20.0002 28.3346 16.2692 28.3346 11.6668C28.3346 7.06446 24.6037 3.3335 20.0013 3.3335C15.3989 3.3335 11.668 7.06446 11.668 11.6668C11.668 16.2692 15.3989 20.0002 20.0013 20.0002Z" stroke="#6425FE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.68359 36.6667C5.68359 30.2167 12.1003 25 20.0003 25" stroke="#6425FE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30.3334 35.6667C33.2789 35.6667 35.6667 33.2789 35.6667 30.3334C35.6667 27.3878 33.2789 25 30.3334 25C27.3878 25 25 27.3878 25 30.3334C25 33.2789 27.3878 35.6667 30.3334 35.6667Z" stroke="#6425FE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M36.6667 36.6667L35 35" stroke="#6425FE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "Ish qidirayotganlar",
    statistika: "3,893 ",
    kaficent: 1,
    protses: true,
  },
];
</script>

<style scoped lang="scss" src="./style.scss"></style>
