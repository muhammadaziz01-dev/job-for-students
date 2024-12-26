<template>
  <Loader v-if="isLoader" />
  <div v-else class="wrapper--login">
    <Container>
      <h1>Login page</h1>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Loader } from "../../components/ui";
import { Container } from "../../components";

const isLoader = ref<boolean>(true);

setTimeout((): void => {
  isLoader.value = false;
}, 3000);
</script>

<style scoped lang="scss" src="./style.scss"></style>
