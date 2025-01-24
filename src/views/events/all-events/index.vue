<template>
  <div class="evendCard--wrapper">
      <div v-for="el in eventsData" class="evendCard--wrapper--card" :key="el.id">
         <div class="evendCard--wrapper--card--left">
            <h2 class="evendCard--wrapper--card--left--day">{{ el.day }} <span>{{ el.month }}</span> </h2>
         </div>
         <div class="evendCard--wrapper--card--right">
           <h2>{{ el?.title }}</h2>
           <div class="evendCard--wrapper--card--right--bottom">
             <span>
               <img :src="IconTime" alt="time icons">
                {{ el?.time }}
             </span>
             <span>
               <img :src="IconLocation" alt="location icons">
                {{ el?.location }}
             </span>

             <span v-if="el?.isEdit">
               <img :src="IconEdit" alt="edit icons">
               <p>Tahrirlash</p>
             </span>
           </div>
         </div>

      </div>

  </div>
</template>

<script setup lang="ts">
import {eventsData} from "@/constants"
import IconTime from "../../../assets/icons/time-icon.svg";
import IconLocation from "../../../assets/icons/location-icon.svg";
import IconEdit from "../../../assets/icons/edit-icon.svg";

</script>

<style scoped lang="scss" src="./style.scss">

</style>
