<template>
    <section class="student--wrapper">
      <div class="student--wrapper--top">
      <h1>Talabalar</h1>
      <MinniHeader/>
      </div>
      <StudentStatus :data="dataStudentStatus"/>
      <div class="student--wrapper--parent">
      <TabelFilter :data="studentFilter"/>
       <Table :dataBody="studentsList" :dataHeader="studentHeder" :title="`students`" />
       <Paginaton />
      </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {StudentStatus , Table , TabelFilter , Paginaton} from "@/components/ui";
import MinniHeader from "@/components/header/min-header.vue";
import { dataStudentStatus} from "@/constants";
import {studentsList , studentHeder} from "@/constants/tabel-data";
const studentFilter={
  title:'Barcha talabalar',
  description: 'Aktiv talabalar ro’yxati',
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
