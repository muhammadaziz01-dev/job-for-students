<template>
  <a-pagination v-model:current="current" :total="40" show-less-items />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const current = ref(1);
</script>
<style  lang="scss" src="./style.scss">


</style>
