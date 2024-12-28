<template>
  <aside class="aside">
    <div class="aside--top">
      <div class="aside--top--profil" @click="profile">
        <div class="aside--top--profil--icon">
        <img :src="ProfiLogo" alt="Profi logo" class="aside--top--profil--icon--img"  />
        </div>
        <div class="aside--top--profil--name">
          <h3>Profi University <img :src="StarIcon" alt="star icon" /></h3>
          <p>Karyera markazi</p>
        </div>
      </div>
      <div class="aside--top--list">
        <router-link class="aside--top--list--item" v-for="(item ,index) in sidebarItems" :to="item?.to" :key="index">
            <img :src="item?.icon" alt="icon" />
            <span>{{ item?.title }}</span>
        </router-link>
      </div>
    </div>
    <div class="aside--bottom" @click="logout">
      <img :src="Logout" alt="logout icon">
      <span>Chiqish</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import ProfiLogo from "../../assets/icons/profi-logo.svg";
import StarIcon from "../../assets/icons/stars-icon.svg";
import Logout from "../../assets/icons/logout-icon.svg";
import {sidebarItems} from "../../constants";

const router = useRouter();

const logout = ():void => {
    router.push("/");
}

const profile = ():void => {
    router.push("/profile");
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
