<template>
  <div class="chat-parent">
    <div class="chat-parent--left">
      <div class="chat-parent--left--menu">
        <h1 class="chat-parent--left--menu--title">Xabarlar</h1>
        <div class="chat-parent--left--menu--router-wrapper">
          <router-link
            class="chat-parent--left--menu--router-wrapper--link"
            to="/chat/students"
            >Talabalar</router-link
          >
          <router-link
            class="chat-parent--left--menu--router-wrapper--link"
            to="/chat/companias"
            >Kompaniyalar</router-link
          >
        </div>
        <div class="chat-parent--left--menu--search">
          <input type="text" placeholder="Qidirish" class="chat-parent--left--menu--search--input" />
          <img
            src="../../assets/icons/search.svg"
            alt="search icon"
            class="chat-parent--left--menu--search--icon"
          />
        </div>
      </div>
      <router-view></router-view>
    </div>

    <div class="chat-parent--right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
