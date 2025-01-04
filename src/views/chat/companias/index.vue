<script setup lang="ts">
import { chatcompaniaList } from "../../../constants";
</script>

<template>
  <div class="companiaList-list">
    <router-link
      v-for="el in chatcompaniaList"
      :to="`/chat/companias/${el?.id}`"
      class="companiaList-list--itim"
    >
      <div class="companiaList-list--itim--avatar">
        <img :src="el?.avatar" alt="" class="companiaList-list--itim--avatar--img" />
        <div
          class="companiaList-list--itim--avatar--status"
          :style="
            el?.online ? `background: #27AE60` : `background: rgba(166, 176, 231, 1)`
          "
        ></div>
      </div>
      <div class="companiaList-list--itim--title">
        <h3>{{ el?.name }}</h3>
        <p>
          {{
            el?.isTyping
              ? `... yozmoqda`
              : el?.lastMessag?.length > 25
              ? el.lastMessag.substring(0, 22) + `...`
              : el?.lastMessag
          }}
        </p>
      </div>
      <div class="companiaList-list--itim--time">
        <p>{{ el?.lastMessageTimestamp }}</p>
        <div
          class="companiaList-list--itim--time--unreadCount"
          v-if="el?.unreadCount >= 1"
        >
          {{ el?.unreadCount }}
        </div>
        <span
          v-else
          v-html="el?.unread ? el?.icons2 : el?.icon1"
          class="companiaList-list--itim--time--unread"
        ></span>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss" src="./style.scss"></style>

