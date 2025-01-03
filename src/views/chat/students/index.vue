<script setup lang="ts">
import { chatStudentList } from "../../../constants";
</script>

<template>
  <div class="studentList-list">
    <router-link
      v-for="el in chatStudentList"
      :to="`/chat/students/${el?.id}`"
      class="studentList-list--itim"
    >
      <div class="studentList-list--itim--avatar">
        <img :src="el?.avatar" alt="" class="studentList-list--itim--avatar--img" />
        <div class="studentList-list--itim--avatar--status" :style="el?.online ? `background: #27AE60` : `background: #EDE9F5`"></div>
      </div>
      <div class="studentList-list--itim--title">
        <h3>{{ el?.name }}</h3>
        <p>
          {{
            el?.isWriting
              ? `... yozmoqda`
              : el?.lastMessag?.length > 25
              ? el.lastMessag.substring(0, 22)+`...`
              : el?.lastMessag
          }}
        </p>
      </div>
      <div class="studentList-list--itim--time">
        <p>{{ el?.lastMessageTimestamp }}</p>

      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss" src="./style.scss"></style>
