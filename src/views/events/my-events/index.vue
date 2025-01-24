<template>
  <div class="evendCard--wrapper">
    <EventCard v-for="el in myEventsData" :key="el?.id"  :data="el" />
  </div>
</template>

<script setup lang="ts">
import {myEventsData} from "@/constants";
import { EventCard } from "@/components/ui";

</script>

<style scoped lang="scss" src="./style.scss">

</style>
