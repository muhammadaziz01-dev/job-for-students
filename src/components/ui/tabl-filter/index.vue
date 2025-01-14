<template>
    <div class="filter--wrapper">
       <div class="filter--wrapper--title">
       <h1>{{props?.data?.title}}</h1>
       <p>{{props?.data?.description}}</p>
       </div>
       <div class="filter--wrapper--search">
       <input type="text" placeholder="Qidirish" class="filter--wrapper--search--input" >
       <img src="../../../assets/icons/search.svg" alt="search icon" class="filter--wrapper--search--icon">
       </div>
    </div>
</template>
<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  data:{
    type:Object,
    required:true,
    default:{
      title: 'Barcha talabalar',
      description: 'Aktiv talabalar ro’yxati'
    }
  },
})

</script>

<style scoped lang="scss" src="./stayle.scss">

</style>
