<template>
  <div class="chatid-parent">
    <div class="chatid-parent--header">
      <div class="chatid-parent--header--card">
        <div class="chatid-parent--header--card--avatar">
          <img
            class="chatid-parent--header--card--avatar--img"
            src="../../../assets/icons/avatr1.svg"
            alt="icon"
          />
          <div class="chatid-parent--header--card--avatar--title">
            <h3>Valisher G’aniyev</h3>
            <p>Online</p>
          </div>
        </div>
        <button class="chatid-parent--header--card--btn" @click="isMenu">
          <img src="../../../assets/icons/more.svg" alt="ison" />
        </button>

        <div
          class="chatid-parent--header--card--menu"
          v-if="toggleMenu"
          data-aos="flip-up"
        >
          <button @click="isMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.56 14C16.41 14.15 16.22 14.22 16.03 14.22C15.84 14.22 15.65 14.14 15.5 14L12.5 11L9.5 14C9.21 14.29 8.73 14.29 8.44 14C8.15 13.71 8.15 13.23 8.44 12.94L11.97 9.41C12.26 9.12 12.74 9.12 13.03 9.41L16.56 12.94C16.85 13.23 16.85 13.7 16.56 14Z"
                fill="white"
              />
            </svg>
            <span>Suhbat boshiga chiqish</span>
          </button>

          <button @click="isMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                fill="#F04248"
              />
              <path
                d="M19.2317 8.14C18.9917 7.89 18.6617 7.75 18.3217 7.75H5.6817C5.3417 7.75 5.0017 7.89 4.7717 8.14C4.5417 8.39 4.4117 8.73 4.4317 9.08L5.0517 19.34C5.1617 20.86 5.3017 22.76 8.7917 22.76H15.2117C18.7017 22.76 18.8417 20.87 18.9517 19.34L19.5717 9.09C19.5917 8.73 19.4617 8.39 19.2317 8.14ZM13.6617 17.75H10.3317C9.9217 17.75 9.5817 17.41 9.5817 17C9.5817 16.59 9.9217 16.25 10.3317 16.25H13.6617C14.0717 16.25 14.4117 16.59 14.4117 17C14.4117 17.41 14.0717 17.75 13.6617 17.75ZM14.5017 13.75H9.5017C9.0917 13.75 8.7517 13.41 8.7517 13C8.7517 12.59 9.0917 12.25 9.5017 12.25H14.5017C14.9117 12.25 15.2517 12.59 15.2517 13C15.2517 13.41 14.9117 13.75 14.5017 13.75Z"
                fill="#F04248"
              />
            </svg>
            <span>Chatni o’chirish</span>
          </button>
        </div>
      </div>
    </div>
    <div class="chatid-parent--body">
      <div class="chatid-parent--body--content">
        <!-- Chat messages rendered -->
      </div>
      <div class="chatid-parent--body--input-wraper">
        <div class="chatid-parent--body--input-wraper--input-parent">
          <button class="chatid-parent--body--input-wraper--input-parent--btn-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.2734 10.1249L8.2151 12.1833C7.07344 13.3249 7.07344 15.1666 8.2151 16.3083C9.35677 17.4499 11.1984 17.4499 12.3401 16.3083L15.5818 13.0666C17.8568 10.7916 17.8568 7.0916 15.5818 4.8166C13.3068 2.5416 9.60677 2.5416 7.33177 4.8166L3.79844 8.34994C1.84844 10.2999 1.84844 13.4666 3.79844 15.4249"
                stroke="#84828A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Xabar yozish"
            class="chatid-parent--body--input-wraper--input-parent--input"
          />
          <button class="chatid-parent--body--input-wraper--input-parent--btn-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.92668 3.52487L15.06 7.09153C18.26 8.69154 18.26 11.3082 15.06 12.9082L7.92668 16.4749C3.12668 18.8749 1.16835 16.9082 3.56835 12.1165L4.29335 10.6749C4.47668 10.3082 4.47668 9.69987 4.29335 9.3332L3.56835 7.8832C1.16835 3.09153 3.13502 1.12487 7.92668 3.52487Z"
                stroke="#84828A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.53516 10H9.03516"
                stroke="#84828A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toggleMenu = ref<boolean>(false);

const isMenu = () => {
  toggleMenu.value = !toggleMenu.value;
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
