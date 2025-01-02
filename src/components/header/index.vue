<template>
  <header class="header">
    <div class="header--title">
      <h1>Dashbord</h1>
      <p>{{ formattedDate }}</p>
    </div>
    <div class="header--menu">
      <div class="header--menu--search">
        <input type="text" placeholder="Qidirish" class="header--menu--search--input" >
       <img src="../../assets/icons/search.svg" alt="search icon" class="header--menu--search--icon">
      </div>
      <DarkModToggle/>
      <Lang/>
      <Notification/>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DarkModToggle, Lang , Notification} from "@/components/ui";

const currentDate = ref(new Date());

const monthNames = [
  "yanvar", "fevral", "mart", "aprel", "may", "iyun",
  "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
];

const formattedDate = `${currentDate.value.getDate()}-${monthNames[currentDate.value.getMonth()]}, ${currentDate.value.getFullYear()}`;

</script>

<style scoped lang="scss" src="./style.scss"></style>
