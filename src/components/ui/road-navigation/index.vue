<template>
  <div class="road-navigation">
    <span v-for="el in props?.data" :key="el?.id" :style="el?.color ? `color: ${el?.color};`: ``">{{ el?.name }} {{ el?.icon ? el?.icon+ " " : '' }}</span>
  </div >
</template>

<script setup lang="ts">
import { defineProps , type PropType } from "vue";

const props = defineProps({
  data: {
    type: Array as PropType <any[]>,
    required: true,
    default: () => [
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
    ],
  },
});
</script>

<style scoped lang="scss">
.road-navigation {
  display: flex;
  align-items: center;
  color: #444655;
  span {
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin:0;
  }
}
</style>
