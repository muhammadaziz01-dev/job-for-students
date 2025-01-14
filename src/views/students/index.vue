<template>
    <section class="student--wrapper">
      <div class="student--wrapper--top">
      <h1>Talabalar</h1>
      <MinniHeader/>
      </div>
      <StudentStatus :data="dataStudentStatus"/>
      <div class="student--wrapper--parent">
      <TabelFilter :data="studentFilter"/>
       <Table :dataBody="students" :dataHeader="studentHeder" :title="`students`" />
       <Paginaton />
      </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {StudentStatus , Table , TabelFilter , Paginaton} from "@/components/ui";
import MinniHeader from "@/components/header/min-header.vue";
import {type Istudents} from "@/types";
import { dataStudentStatus} from "@/constants";



const students:Istudents[] = reactive([
  {
    id: 1,
    name: 'Alisher Mo’minov Ne’mat o’g’li',
    course: 4 ,
    jobStatus: "Ishlamoqda",
    color: "#088CFC",
  },{
    id: 2,
    name: 'Alisher G’aniyev Ne’mat o’g’li',
    course: 4,
    jobStatus: "Loyihaviy ishlamoqda",
    color: "#C1A875",
  },
  {
    id: 3,
    name: 'Guli Naimova Akmal qizi',
    course: 2,
    jobStatus: "Ishsiz",
    color: "#F04248",
  },
  {
    id: 4,
    name: 'Tal’at Usmonov Kamol o’g’li',
    course: 2,
    jobStatus: "Ish qidirmoqda",
    color: "#25C196",
  },
  {
    id: 5,
    name: 'Muslima G’aniyeva Orif qizi',
    course: 4,
    jobStatus: "Passiv qidiruvda",
    color: "rgba(242, 187, 22, 0.75)",
  },
  {
    id: 6,
    name: 'Jamshid Talayev Kamol o’g’li',
    course: 4,
    jobStatus: "Ishsiz",
    color: "#F04248",
  },
  {
    id: 7,
    name: 'Mahmud Khamidov Kamol o’g’li',
    course: 3,
    jobStatus: "Loyihaviy ishlamoqda",
    color: "#C1A875",
  },
  {
    id: 8,
    name: 'Taimur G’alimov Akmal qizi',
    course: 3,
    jobStatus: "Ish qidirmoqda",
    color: "#25C196",
  },
  {
    id: 9,
    name: 'Mahmud Mammadov Kamol o’g’li',
    course: 2,
    jobStatus: "Ishlamoqda",
    color: "#088CFC",
  }


])

const studentHeder:string[]=["Ism-Familiya", "Kurs", "Ish statusi", "Chat"];

const studentFilter={
  title:'Barcha talabalar',
  description: 'Aktiv talabalar ro’yxati',
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
