<template>
  <div  class="evendCard--wrapper--card" >
         <div class="evendCard--wrapper--card--left">
            <h2 class="evendCard--wrapper--card--left--day">{{ data?.day }} <span>{{ data?.month }}</span> </h2>
         </div>
         <div class="evendCard--wrapper--card--right">
           <h2>{{ data?.title }}</h2>
           <div class="evendCard--wrapper--card--right--bottom">
             <span>
               <img :src="IconTime" alt="time icons">
                {{ data?.time }}
             </span>
             <span>
               <img :src="IconLocation" alt="location icons">
                {{ data?.location }}
             </span>

             <span v-if="data?.isEdit">
               <img :src="IconEdit" alt="edit icons">
               <p>Tahrirlash</p>
             </span>
           </div>
         </div>

      </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconTime from "@/assets/icons/time-icon.svg";
import IconLocation from "@/assets/icons/location-icon.svg";
import IconEdit from "@/assets/icons/edit-icon.svg";
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      id: 1,
      day: "28",
      month: "Okt",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "09:00 - 12:30",
      location: "Online",
      isEdit: false,
    },
  },
});
</script>

<style scoped lang="scss">
.evendCard--wrapper--card{
        display: flex;
        width: 100%;
        height: 150px;
        align-items: center;
        gap: 40px;
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 15px;
        padding: 35px 40px;
        background: #F7F6FA;

        &--left {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 40px;
            border-right: 0.5px solid #84828A;
            height: 100%;

            &--day {
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 10px;
                color: #B79BFF;
                font-size: 32px;
                font-weight: 500;
                line-height: 19px;
                margin: 0;



                span {
                    font-size: 20px;
                    margin: 0;

                }
            }
        }

        &--right {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 20px;

            h2 {
                color: #444655;
                font-size: 18px;
                font-weight: 500;
                line-height: 19px;
                align-self: stretch;
            }

            &--bottom {
                display: flex;
                align-items: center;
                gap: 40px;
                position: relative;
                width: 100%;

                span {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--Gray-text, #84828A);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;

                    p{
                        cursor: pointer;
                        border-bottom: 1px solid #84828A;
                        margin: 0;
                    }
                }

                span:nth-child(3){
                    position: absolute;
                    right: 0;
                }
            }
        }

    }
</style>
