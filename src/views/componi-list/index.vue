<template>
  <section class="componi--wrapper">
    <div class="componi--wrapper--top">
      <RoadNavigation :data="componiNavigation" />
      <MinniHeader />
    </div>
    <StudentStatus :data="dataComponiStatus" />
    <div class="componi--wrapper--parent">
      <TabelFilter :data="componiFilter" />
      <Table :dataBody="componiList" :dataHeader="componiHeder" :title="`companias`" />
      <Paginaton />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  StudentStatus,
  Table,
  TabelFilter,
  Paginaton,
  RoadNavigation,
} from "@/components/ui";
import MinniHeader from "@/components/header/min-header.vue";
import { dataComponiStatus } from "@/constants";
import { componiList, componiHeder } from "@/constants/tabel-data";
const componiFilter = {
  title: "Ish beruvchilar",
  description: "Aktiv kompaniyalar ro’yxati",
};

const componiNavigation = [
  {
    id: 1,
    name: "Dashbord ",
    icon: "> ",
    path: "/dashbord",
  },
  {
    id: 2,
    name: " Ish beruvchilar ",
    path: "/dashbord/componi-list",
    color: "#84828A",
  },
];
</script>

<style scoped lang="scss" src="./style.scss"></style>
