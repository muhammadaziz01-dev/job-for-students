<template>
  <div class="evendCard--wrapper">
      <div v-for="el in events" class="evendCard--wrapper--card" :key="el.id">
         <div class="evendCard--wrapper--card--left">
            <h2 class="evendCard--wrapper--card--left--day">{{ el.day }} <span>{{ el.month }}</span> </h2>
         </div>
         <div class="evendCard--wrapper--card--right">
           <h2>{{ el?.title }}</h2>
           <div class="evendCard--wrapper--card--right--bottom">
             <span>
               <img src="../../../assets/icons/time-icon.svg" alt="time icons">
                {{ el?.time }}
             </span>
             <span>
               <img src="../../../assets/icons/location-icon.svg" alt="location icons">
                {{ el?.location }}
             </span>

             <span v-if="el?.isEdit">
               <img src="../../../assets/icons/edit-icon.svg" alt="calendar icons">
               <p>Tahrirlash</p>
             </span>
           </div>
         </div>

      </div>

  </div>
</template>

<script setup lang="ts">

const events = [
  {
    id: 1,
    day: '28',
    month: 'Okt',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '09:00 - 12:30',
    location: 'Online',
    isEdit: false
  },
  {
    id: 2,
    day: '29',
    month: 'Okt',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '10:00 - 11:30',
    location: '"Yoshlar Ishlari Agentligi" binosi',
    isEdit: false
  },
  {
    id: 3,
    day: '01',
    month: 'Noy',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '14:20 - 15:40',
    location: '"Yoshlar Ijod Saroyi" binosi',
    isEdit: false
  },
  {
    id: 4,
    day: '04',
    month: 'Noy',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '15:00 - 15:30',
    location: 'Online',
    isEdit: false
  }
];
</script>

<style scoped lang="scss" src="./style.scss">

</style>
