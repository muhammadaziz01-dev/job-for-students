import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkmoodStore = defineStore('darkmood', () => {
  const darkmood = ref<boolean>(false)
  function isDarkmood():void {
    darkmood.value = !darkmood.value
    // console.log(darkmood.value);
  }

  return { darkmood, isDarkmood }
})
