<template>
  <div :class="darkmood ? `layout--wrapper-dark` : `layout--wrapper`" >
     <Aside/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {useDarkmoodStore } from '@/stores';
import {Aside} from '../../components';
const stores = useDarkmoodStore();
const {darkmood} = storeToRefs(stores)

</script>

<style scoped lang="scss" src="./style.scss"></style>
