<template>
    <table class="table">
    <!-- Tabel heder -->
        <tr class="table--heder">
          <th class="table--heder--th">Ism-familya</th>
          <th>Kurs</th>
          <th>Ish statusi</th>
          <th>Chat</th>
        </tr>
        <!-- Tabel body -->
        <tr class="table--body">
        <td class="table--body-td">Alisher Mo’minov Ne’mat o’g’li</td>
        <td>4</td>
        <td>Ish qidirmoqda</td>
        <td><button>Chat <img :src="ChatIcon" alt="icon"></button></td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import ChatIcon from "../../../assets/icons/chat-icon.svg"
</script>

<style scoped lang="scss" src="./style.scss">

</style>