<template>
  <aside class="aside">
    <div class="aside--top">
      <router-link to="/" class="aside--top--profil">
        <img :src="ProfiLogo" alt="Profi logo" class="aside--top--profil--icon" />
        <div class="aside--top--profil--name">
          <h3>Profi University <img :src="StarIcon" alt="star icon" /></h3>
          <p>Karyera markazi</p>
        </div>
      </router-link>
      <div class="aside--top--list"></div>
    </div>
    <div class="aside--bottom">
      <div class="aside--bottom--logout">Logout</div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ProfiLogo from "../../assets/icons/profi-logo.svg";
import StarIcon from "../../assets/icons/stars.svg";
</script>

<style scoped lang="scss" src="./style.scss"></style>
