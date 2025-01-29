<template>
  <section class="post--wrapper">
    <div class="post--wrapper--top">
      <h1>Postlar</h1>
      <MinniHeader />
    </div>
    <div class="post--wrapper--menu">
      <div class="post--wrapper--menu--rout">
        <!-- postlar -->
        <router-link
          :class="
            isRoote
              ? `post--wrapper--menu--rout--link flex`
              : `post--wrapper--menu--rout--link`
          "
          to="/posts"
        >

          <svg v-if="isRoote == `AllPosts`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048Z" fill="white"/>
  <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="white"/>
</svg>
          Barcha postlar
        </router-link>


         <!-- talabalr -->
        <router-link
          :class="
            isRoote
              ? `post--wrapper--menu--rout--link flex`
              : `post--wrapper--menu--rout--link`
          "
          to="/posts/student-posts"
        >

          <svg v-if="isRoote == `StudentPosts`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.8272 15.6402C17.4972 15.2002 18.3772 15.6802 18.3772 16.4802V17.7702C18.3772 19.0402 17.3872 20.4002 16.1972 20.8002L13.0072 21.8602C12.4472 22.0502 11.5372 22.0502 10.9872 21.8602L7.79719 20.8002C6.59719 20.4002 5.61719 19.0402 5.61719 17.7702V16.4702C5.61719 15.6802 6.49719 15.2002 7.15719 15.6302L9.21719 16.9702C10.0072 17.5002 11.0072 17.7602 12.0072 17.7602C13.0072 17.7602 14.0072 17.5002 14.7972 16.9702L16.8272 15.6402Z" fill="white"/>
  <path d="M19.9834 6.45957L13.9934 2.52957C12.9134 1.81957 11.1334 1.81957 10.0534 2.52957L4.03344 6.45957C2.10344 7.70957 2.10344 10.5396 4.03344 11.7996L5.63344 12.8396L10.0534 15.7196C11.1334 16.4296 12.9134 16.4296 13.9934 15.7196L18.3834 12.8396L19.7534 11.9396V14.9996C19.7534 15.4096 20.0934 15.7496 20.5034 15.7496C20.9134 15.7496 21.2534 15.4096 21.2534 14.9996V10.0796C21.6534 8.78957 21.2434 7.28957 19.9834 6.45957Z" fill="white"/>
</svg>
          Talaba </router-link
        >

        <!-- Kompaniya -->
<router-link
          :class="
            isRoote
              ? `post--wrapper--menu--rout--link flex`
              : `post--wrapper--menu--rout--link`
          "
          to="/posts/componi-posts"
        >

          <svg v-if="isRoote == `ComponiPosts`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z" fill="white" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 11H5V18H7V11Z" fill="white"/>
  <path d="M11 11H9V18H11V11Z" fill="white"/>
  <path d="M15 11H13V18H15V11Z" fill="white"/>
  <path d="M19 11H17V18H19V11Z" fill="white"/>
  <path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill="white"/>
  <path d="M21.37 5.74984L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74984C2.28 5.88984 2 6.29984 2 6.67984V9.99984C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99984V6.67984C22 6.29984 21.72 5.88984 21.37 5.74984ZM12 8.49984C11.17 8.49984 10.5 7.82984 10.5 6.99984C10.5 6.16984 11.17 5.49984 12 5.49984C12.83 5.49984 13.5 6.16984 13.5 6.99984C13.5 7.82984 12.83 8.49984 12 8.49984Z" fill="white"/>
</svg>
          Kompaniya </router-link
        >

        <!-- Postlarim -->
        <router-link
          :class="
            isRoote
              ? `post--wrapper--menu--rout--link flex`
              : `post--wrapper--menu--rout--link`
          "
          to="/posts/my-posts"
        >

          <svg v-if="isRoote == `MyPosts`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.48 15.7C11.96 17.37 10.13 18.27 9.5 18.27C8.86 18.27 7.07 17.4 6.52 15.7C6.16 14.59 6.57 13.14 7.84 12.73C8.42 12.54 9.04 12.65 9.49 13C9.94 12.65 10.56 12.54 11.15 12.73C12.43 13.14 12.83 14.59 12.48 15.7Z" fill="white"/>
  <path d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z" fill="white"/>
</svg>
          Postlarim </router-link
        >
      </div>
      <button>+ Yaratish</button>
    </div>
    <div class="post--wrapper--bottom">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import MinniHeader from "@/components/header/min-header.vue";

const route = useRoute();

const isRoote = ref();

watchEffect(() => {
  isRoote.value = route.name;
  console.log(isRoote.value);
  console.log(route.name);


});
</script>

<style scoped lang="scss" src="./style.scss"></style>
