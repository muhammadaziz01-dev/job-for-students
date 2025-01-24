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
          :class="
            isActive(route?.path , item?.to )
              ? `aside--top--list--item activ-aside`
              : `aside--top--list--item`
          "
          v-for="(item, index) in sidebarItems"
          :to="item?.to"
          :key="index"
        >
          <span v-html="item?.icon"></span>
          <p>{{ item?.title }}</p>
        </router-link>
      </div>
    </div>
    <LogoutModal />
  </aside>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import ProfiLogo from "../../assets/icons/profi-logo.svg";
import StarIcon from "../../assets/icons/stars-icon.svg";
import {isActive} from "@/utils"
import { sidebarItems } from "../../constants";
import LogoutModal from "@/components/modals/logout-modal.vue";

const router = useRouter();
const route = useRoute();


const logout = (): void => {
  router.push("/");
};

const profile = (): void => {
  router.push("/profile");
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
