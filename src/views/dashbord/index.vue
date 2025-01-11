<template>
    <section id="dashbord-section">
     <Header />
     <div class="dashboard-content">
       <div class="dashboard-content--left">
          <div class="dashboard-content--left--status">
             <StatusCardDashbord v-for="el in 3" :key="el"/>
          </div>
       </div>
       <div class="dashboard-content--right"></div>
     </div>

    </section>
</template>

<script setup lang="ts">
import {Header} from "@/components"
import {StatusCardDashbord} from "@/components/ui"
</script>

<style scoped lang="scss" src="./style.scss">

</style>
