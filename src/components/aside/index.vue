<template>
  <aside class="aside">
    <div class="aside--top">
      <div class="aside--top--profil" @click="profile">
        <div class="aside--top--profil--icon">
          <img :src="ProfiLogo" alt="Profi logo" class="aside--top--profil--icon--img" />
        </div>
        <div class="aside--top--profil--name">
          <h3>Profi University <img :src="StarIcon" alt="star icon" /></h3>
          <p>Karyera markazi</p>
        </div>
      </div>
      <div class="aside--top--list">
        <router-link
          class="aside--top--list--item"
          v-for="(item, index) in sidebarItems"
          :to="item?.to"
          :key="index"
        >
          <span v-html="item?.icon"></span>
          <p>{{ item?.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="aside--bottom" @click="logout">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.9 7.56023C9.21 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24 20.0802 8.91 16.5402M15 12.0002H3.62M5.85 8.65023L2.5 12.0002L5.85 15.3502"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Chiqish</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ProfiLogo from "../../assets/icons/profi-logo.svg";
import StarIcon from "../../assets/icons/stars-icon.svg";
import Logout from "../../assets/icons/logout-icon.svg";
import { sidebarItems } from "../../constants";

const router = useRouter();

const logout = (): void => {
  router.push("/");
};

const profile = (): void => {
  router.push("/profile");
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
