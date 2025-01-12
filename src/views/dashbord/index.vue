<template>
    <section id="dashbord-section">
     <Header />
     <div class="dashboard-content">
       <div class="dashboard-content--left">
          <div class="dashboard-content--left--status">
             <StatusCardDashbord v-for="el in dashStatusCardData" :key="el?.id" :date="el"/>
          </div>
       </div>
       <div class="dashboard-content--right">
         <DashbordComponiCard :data="dataComponiCardData" />
         <DashbordComponiCard :data="dataComponiCardData2" />

       </div>
     </div>

    </section>
</template>

<script setup lang="ts">
import {Header} from "@/components"
import {StatusCardDashbord , DashbordComponiCard} from "@/components/ui";
import {dashStatusCardData , dataComponiCardData , dataComponiCardData2} from "@/constants"
</script>

<style scoped lang="scss" src="./style.scss">

</style>
