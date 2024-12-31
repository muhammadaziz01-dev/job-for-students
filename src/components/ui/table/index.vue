<template>
    <!-- HTML -->
  <table class="custom-table">
    <thead>
      <tr>
        <th>Ism-familiya</th>
        <th>Kurs</th>
        <th>Ish statusi</th>
        <th>Chat</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(el , i) in data" :key="i" >
        <td>{{ el?.name }}</td>
        <td>{{ el?.course }}</td>
        <td :style="`color: ${el?.color}`">{{ el?.jobStatus }}</td>
        <td><button class="chat-btn">Chat <img class="chat-icon" :src="ChatIcon" alt="icon"/></button></td>
      </tr>
    </tbody>
  </table>

</template>

<script setup lang="ts">
import { defineProps , type PropType } from 'vue'
import {type Istudents} from "../../../types"
import ChatIcon from "../../../assets/icons/chat-icon.svg"

const props = defineProps({
  data: {
    type: Array as PropType <Istudents[]>,
    required: true,
    default: () => [
      {
        id: 1,
        name: "Islom Abdullayev",
        course: 3,
        jobStatus: "Ish qidirmoqda",
        color: "#25C196"
      },
    ] as Istudents[]
    
  }
})
</script>

<style scoped lang="scss" src="./style.scss">

</style>