<template>
  <section class="event--wrapper">
    <div class="event--wrapper--top">
      <h1>Tadbirlar</h1>
      <MinniHeader />
    </div>
    <div class="event--wrapper--menu">
      <div class="event--wrapper--menu--rout">
        <router-link :class="isRoote ? `event--wrapper--menu--rout--link flex` : `event--wrapper--menu--rout--link`" to="/events">
          <svg v-if="isRoote == `AllEvents`" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M14.8517 2H10.1517C9.11172 2 8.26172 2.84 8.26172 3.88V4.82C8.26172 5.86 9.10172 6.7 10.1417 6.7H14.8517C15.8917 6.7 16.7317 5.86 16.7317 4.82V3.88C16.7417 2.84 15.8917 2 14.8517 2Z" fill="#EAEEFF"/>
            <path d="M17.7391 4.81998C17.7391 6.40998 16.4391 7.70998 14.8491 7.70998H10.1491C8.55906 7.70998 7.25906 6.40998 7.25906 4.81998C7.25906 4.25998 6.65906 3.90998 6.15906 4.16998C4.74906 4.91998 3.78906 6.40998 3.78906 8.11998V17.53C3.78906 19.99 5.79906 22 8.25906 22H16.7391C19.1991 22 21.2091 19.99 21.2091 17.53V8.11998C21.2091 6.40998 20.2491 4.91998 18.8391 4.16998C18.3391 3.90998 17.7391 4.25998 17.7391 4.81998ZM12.8791 16.95H8.49906C8.08906 16.95 7.74906 16.61 7.74906 16.2C7.74906 15.79 8.08906 15.45 8.49906 15.45H12.8791C13.2891 15.45 13.6291 15.79 13.6291 16.2C13.6291 16.61 13.2891 16.95 12.8791 16.95ZM15.4991 12.95H8.49906C8.08906 12.95 7.74906 12.61 7.74906 12.2C7.74906 11.79 8.08906 11.45 8.49906 11.45H15.4991C15.9091 11.45 16.2491 11.79 16.2491 12.2C16.2491 12.61 15.9091 12.95 15.4991 12.95Z" fill="#EAEEFF"/>
          </svg>
        Barcha tadbirlar
        </router-link>
        <router-link :class="isRoote ? `event--wrapper--menu--rout--link flex` : `event--wrapper--menu--rout--link`" to="/events/my-events">
          <svg v-if="isRoote == `MyEvents`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <path d="M14.3517 2H9.65172C8.61172 2 7.76172 2.84 7.76172 3.88V4.82C7.76172 5.86 8.60172 6.7 9.64172 6.7H14.3517C15.3917 6.7 16.2317 5.86 16.2317 4.82V3.88C16.2417 2.84 15.3917 2 14.3517 2Z" fill="#EAEEFF"/>
           <path d="M17.2391 4.81998C17.2391 6.40998 15.9391 7.70998 14.3491 7.70998H9.64906C8.05906 7.70998 6.75906 6.40998 6.75906 4.81998C6.75906 4.25998 6.15906 3.90998 5.65906 4.16998C4.24906 4.91998 3.28906 6.40998 3.28906 8.11998V17.53C3.28906 19.99 5.29906 22 7.75906 22H16.2391C18.6991 22 20.7091 19.99 20.7091 17.53V8.11998C20.7091 6.40998 19.7491 4.91998 18.3391 4.16998C17.8391 3.90998 17.2391 4.25998 17.2391 4.81998ZM15.3391 12.73L11.3391 16.73C11.1891 16.88 10.9991 16.95 10.8091 16.95C10.6191 16.95 10.4291 16.88 10.2791 16.73L8.77906 15.23C8.48906 14.94 8.48906 14.46 8.77906 14.17C9.06906 13.88 9.54906 13.88 9.83906 14.17L10.8091 15.14L14.2791 11.67C14.5691 11.38 15.0491 11.38 15.3391 11.67C15.6291 11.96 15.6291 12.44 15.3391 12.73Z" fill="#EAEEFF"/>
          </svg>
        Tadbirlarim</router-link>
      </div>
      <button>+ Yaratish</button>
    </div>
    <div class="event--wrapper--bottom">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref , watchEffect} from "vue"
import {useRoute} from "vue-router";
import MinniHeader from "@/components/header/min-header.vue";

const route = useRoute();

const isRoote = ref();

watchEffect(() => {
  isRoote.value = route.name;
  console.log(isRoote.value);

});
</script>

<style scoped lang="scss" src="./style.scss"></style>
