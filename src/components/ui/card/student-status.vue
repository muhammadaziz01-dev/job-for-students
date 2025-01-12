<template>
  <div class="status--wrapper">
    <div class="status--wrapper--card" v-for="el in props.data" :key="el?.id">
      <div class="status--wrapper--card--icon" v-html="el?.icon"></div>
      <div class="status--wrapper--card--title">
        <p>{{ el?.title }}</p>
        <h2>{{ el?.statistika }}</h2>
        <div class="status--wrapper--card--title--statis">
          <img :src="el?.protses == true ? ArrowTop : ArrowBottom" alt="icon" />
          <p>
            <span
              :class="
                el?.protses == true
                  ? `status--wrapper--card--title--statis--top`
                  : `status--wrapper--card--title--statis--bottom`
              "
              >{{ el?.kaficent + "% " }}</span
            >
            ushbu oy
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps , type PropType } from "vue";
import ArrowTop from "@/assets/icons/strelca-top.svg";
import ArrowBottom from "@/assets/icons/strelca-bottom.svg";
import {type IDataStudentStatus} from "@/types"

const props = defineProps({
  data: {
    type: Array as PropType<IDataStudentStatus[]> ,
    required: true,
    default: [
      {
        id:1,
        title: "Jami talabalar",
        statistika: "5,423 ",
        kaficent: 16,
        protses: true,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
         <path d="M16.827 19.023C16.6449 19.0055 16.4264 19.0055 16.226 19.023C11.8914 18.883 8.44922 15.4705 8.44922 11.2705C8.44922 6.98299 12.0553 3.50049 16.5356 3.50049C20.9977 3.50049 24.6221 6.98299 24.6221 11.2705C24.6039 15.4705 21.1617 18.883 16.827 19.023Z" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M30.0297 6.99951C33.563 6.99951 36.4042 9.74701 36.4042 13.1245C36.4042 16.432 33.6723 19.127 30.2665 19.2495C30.1208 19.232 29.9569 19.232 29.793 19.2495" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M7.71966 25.4795C3.3122 28.3145 3.3122 32.9345 7.71966 35.752C12.7281 38.972 20.9421 38.972 25.9505 35.752C30.358 32.917 30.358 28.297 25.9505 25.4795C20.9603 22.277 12.7464 22.277 7.71966 25.4795Z" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M33.5469 35.0005C34.8582 34.738 36.0966 34.2305 37.1166 33.478C39.9577 31.4305 39.9577 28.053 37.1166 26.0055C36.1149 25.2705 34.8946 24.7805 33.6015 24.5005" stroke="#6425FE" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      },
    ],
  },
});


</script>

<style scoped lang="scss" src="./style.scss"></style>
