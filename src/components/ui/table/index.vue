<template>
    <!-- HTML -->
  <table class="custom-table">
    <thead>
      <tr>
        <th>Ism-familiya</th>
        <th>Kurs</th>
        <th>Ish statusi</th>
        <th>Chat</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="el in 7">
        <td>Alisher Mo'minov Ne'mat o'g'li</td>
        <td>4</td>
        <td class="status">Ish qidirmoqda</td>
        <td><button class="chat-btn">Chat <img class="chat-icon" :src="ChatIcon" alt="icon"/></button></td>
      </tr>
    </tbody>
  </table>

</template>

<script setup lang="ts">
import ChatIcon from "../../../assets/icons/chat-icon.svg"
</script>

<style scoped lang="scss" src="./style.scss">

</style>