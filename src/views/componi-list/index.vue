<template>
  <section class="student--wrapper">
    <div class="student--wrapper--top">
    <h1>Dashbord > Ish beruvchilar</h1>
    <MinniHeader/>
    </div>
    <StudentStatus :data="dataComponiStatus"/>
    <div class="student--wrapper--parent">
     <TabelFilter :data="componiFilter"/>
     <Table :dataBody="componiList" :dataHeader="componiHeder" :title="`companias`"/>
     <Paginaton />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {StudentStatus , Table , TabelFilter , Paginaton} from "@/components/ui";
import MinniHeader from "@/components/header/min-header.vue";
import {type Istudents} from "@/types";
import {dataComponiStatus} from "@/constants"

const componiList = reactive([
{
  id: 1,
  name: 'EPAM Uzbekistan',
  announcementsCount: 12,
  direction: "IT va dasturiy ta'minot",
},
{
  id: 2,
  name: 'UzAuto Motors',
  announcementsCount: 15,
  direction: "Avtomobilsozlik va ishlab chiqarish",
},
{
  id: 3,
  name: 'MyTaxi Uzbekistan',
  announcementsCount: 14,
  direction: "Transport va logistika",
},
{
  id: 4,
  name: 'UzCard',
  announcementsCount: 9,
  direction: "Moliya texnologiyalari (FinTech)",
},
{
  id: 5,
  name: 'Progress Solution Technologies',
  announcementsCount: 7,
  direction: "IT va dasturiy ta'minot",
},
{
  id: 6,
  name: 'Click Technologies',
  announcementsCount: 18,
  direction: "FinTech va elektron to‘lovlar",
},

])

const componiHeder :string[]=['Kompaniya nomi' , 'E’lonlar  soni' , 'Yo’nalish' , 'Chat']

const componiFilter={
  title:'Ish beruvchilar',
  description: 'Aktiv kompaniyalar ro’yxati',
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
