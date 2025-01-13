<template>
    <!-- HTML -->
  <table class="custom-table">
    <thead>
      <tr>
        <th v-for="(itim , index) in dataHeader" :key="index">{{itim}}</th>
      </tr>
    </thead>
    <tbody>
     <!-- Student list rendre -->
      <tr v-if="title == `students`" v-for="(el , i) in dataBody" :key="i" >
        <td>{{ el?.name }}</td>
        <td>{{ el?.course }}</td>
        <td :style="`color: ${el?.color}`">{{ el?.jobStatus }}</td>
        <td><button @click="router.push(`/chat/${title}/${el?.id}`)" class="chat-btn">Chat <img class="chat-icon" :src="ChatIcon" alt="icon"/></button></td>
      </tr>

      <!-- Componi list render -->
      <tr v-if="title == `companias`" v-for="el  in dataBody" :key="el?.id" >
        <td>{{ el?.name }}</td>
        <td>{{ el?.announcementsCount }}</td>
        <td style="max-width: 151px;">{{ el?.direction }}</td>
        <td><button @click="router.push(`/chat/${title}/${el?.id}`)" class="chat-btn">Chat <img class="chat-icon" :src="ChatIcon" alt="icon"/></button></td>
      </tr>
    </tbody>
  </table>

</template>

<script setup lang="ts">
import { defineProps , type PropType } from 'vue';
import {useRouter} from 'vue-router'
// import {type Istudents} from "@/types"
import ChatIcon from "@/assets/icons/chat-icon.svg"

const props = defineProps({
  title:{
    type: String,
    required: true,
    default: "student"
  },
  dataHeader: {
    type: Array as PropType<string[]>,
    required: true,
  },
  dataBody: {
    type: Array as PropType <any[]>,
    required: true,

  },
})

const router = useRouter()

console.log(props?.dataBody)
</script>

<style scoped lang="scss" src="./style.scss">

</style>
