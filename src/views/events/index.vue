<template>
  <section class="event--wrapper">
    <div class="event--wrapper--top">
      <h1>Tadbirlar</h1>
      <MinniHeader />
    </div>
    <div class="event--wrapper--menu">
      <div class="event--wrapper--menu--rout">
        <router-link class="event--wrapper--menu--rout--link" to="/event/all">Barcha tadbirlar</router-link>
        <router-link class="event--wrapper--menu--rout--link" to="/event/my">Tadbirlarim</router-link>
      </div>
      <button>+ Yaratish</button>
    </div>
    <div class="event--wrapper--bottom">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup lang="ts">
import MinniHeader from "@/components/header/min-header.vue";
</script>

<style scoped lang="scss" src="./style.scss"></style>
