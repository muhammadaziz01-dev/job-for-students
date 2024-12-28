<template>
  <div class="layout--wrapper">
     <Aside/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Aside} from '../../components'
</script>

<style scoped lang="scss" src="./style.scss"></style>
