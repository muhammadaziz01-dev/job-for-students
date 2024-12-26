<template>
  <form class="form" @submit.prevent="handelSubmitted">
    <!-- Form title -->
    <div class="form--title">
      <p>Yangi parol yarating</p>
      <img :src="Stars" alt="stars" />
    </div>

    <!-- Form status -->
    <div class="form--status">
      <img class="form--status--img" :src="Status1" alt="status form" />
    </div>

    <!-- Form fields -->
    <div class="form--field">
      <label for="login" class="form--field--label">
        <input
          :type="isOpen ? 'password' : 'text'"
          placeholder="Parol kiriting"
          v-model="user.password"
          required
        />
        <img @click="toggleOpen" :src="isOpen ? Open : Clos" alt=" icon" />
      </label>
      <label for="login" class="form--field--label">
        <input
          :type="isOpen2 ? 'password' : 'text'"
          placeholder="Parolni takrorlang"
          v-model="user.password"
          required
        />
        <img @click="toggleOpen2" :src="isOpen2 ? Open : Clos" alt=" icon" />
      </label>
      <button class="form--field--btn" type="submit">Saqlash</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {useRouter} from "vue-router"
import { toast } from "vue3-toastify";
import {type LoginUserData} from "../../../types"
import Open from "../../../assets/icons/open.svg";
import Clos from "../../../assets/icons/clos.svg";
import Stars from "../../../assets/icons/stars.svg";
import Status1 from '../../../assets/icons/status1.svg';

const isOpen = ref(true);
const isOpen2 = ref(true);

const router = useRouter()
const toggleOpen = (): void => {
  isOpen.value = !isOpen.value;
};
const toggleOpen2 = (): void => {
  isOpen2.value = !isOpen2.value;
};
const user: LoginUserData = reactive({
  login: "",
  password: "",
});

const handelSubmitted = (): void => {
  if (user.login.trim() && user.password.trim()) {
    toast.success("Login successful!");
    console.log("User login  : " + user.login  + " " +"User password" + user.password )
    user.login = "";
    user.password = "";
    setTimeout(():void=>{
        router.push('/profile-complete')
    },1500)

  } else {
    toast.error("Please fill in both fields!");
  }
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  width: 700px;
  height: 700px;
  padding: 95px 90px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border: 2px solid transparent; /* Transparent border ishlatamiz */
  border-radius: 30px !important;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: -1.5px;
    border-radius: 30px;
    padding: 1.5px;
    background: linear-gradient(170deg, #fff, #a6b0e7);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
  }

  &--title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--black, #444655);
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 50px;
  }

  &--status {
    &--img {
      margin-bottom: 95px;
    }
  }

  &--field {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 30px;

    &--label{

      width: 450px;
      height: 70px;
      flex-shrink: 0;
      border-radius: 15px;
      border: 1px solid rgba(116, 128, 156, 0.6);
      background: #fff;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        padding: 20px 65px 20px 20px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        border: none;
        outline: none;
        background: transparent;
        color: #74809c;

        ::placeholder {
          color: rgba(116, 128, 156, 0.6);
          font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      img {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
    }
    &--btn {
      width: 450px;
      height: 70px;
      flex-shrink: 0;
      border-radius: 15px;
      background: #0079fe;
      color: #fff;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      border: none;
      cursor: pointer;
      transition: all 0.4s linear;
  
      &:hover {
        background: #0060cc;
      }
  
      &:active {
        background: #0079fe;
      }
    }
  }
}
</style>
