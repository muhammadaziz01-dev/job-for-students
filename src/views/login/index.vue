<template>
  <Loader v-if="isLoader" />
  <section v-else class="login">
    <div class="login--wrapper">
      <img
        src="../../assets/images/login-img1.png"
        class="login--wrapper--img"
        alt="login img"
      />
      <img
        src="../../assets/images/login-bg-icon.png"
        class="login--wrapper--icon"
        alt="login icon"
      />

      <Container>
        <div class="login--wrapper--parent-form">
           <LoginForm/>
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Loader } from "../../components/ui";
import { Container } from "../../components";
import {LoginForm} from "../../components/ui"

const isLoader = ref<boolean>(true);

setTimeout((): void => {
  isLoader.value = false;
}, 1500);
</script>

<style scoped lang="scss" src="./style.scss"></style>
