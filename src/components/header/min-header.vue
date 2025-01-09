<template>
  <div class="min-header-parent">
    <DarkModToggle />
    <Lang />
    <Notification />
  </div>
</template>

<script setup lang="ts">
import { DarkModToggle, Lang, Notification } from "@/components/ui";
</script>

<style scoped>
.min-header-parent {
  display: flex;
  align-items: center;
  gap: 17px;
}
</style>
