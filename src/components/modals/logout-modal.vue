<template>
  <div>
    <button class="logout--btn" @click="showModal">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.9 7.56023C9.21 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24 20.0802 8.91 16.5402M15 12.0002H3.62M5.85 8.65023L2.5 12.0002L5.85 15.3502"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span> Chiqish</span>
    </button>

    <a-modal v-model:open="open">
    <div class="modal--wrapper">
      <img :src="DengerIcon" alt="icon">
    <div class="modal--wrapper--title">
        <strong>Chiqishni tasdiqlaysizmi?</strong>
        <p>Hisobingizdan chiqish uchun tasdiqlang. Chiqishdan oldin ma'lumotlaringizni saqlashni unutmang!</p>
    </div>
    <div class="modal--wrapper--footer">
      <button @click="handleOk" class="modal--wrapper--footer--clos">Qolish</button>
      <button @click="router.push(`/`)" class="modal--wrapper--footer--ok">Chiqish</button>

    </div>
    </div>
   </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
import DengerIcon from "@/assets/icons/danger.svg"
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};

const router = useRouter();

</script>

<style lang="scss">
.logout--btn {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 252px;
  cursor: pointer;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  transition: all 0.4s ease;
  color: #84828a;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  &:hover {
    background: #efe9ff;
    color: #6425fe;
  }
}

.ant-modal-wrap {
  background: rgba(0, 0, 0, 0.25) !important;
}

.ant-modal-footer,
.ant-modal-close {
  display: none !important;
}

.ant-modal-content {
  padding: 30px 60px !important;
  der-radius: 10px !important;
  box-shadow: none !important;
}

.modal--wrapper{
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 30px;

  &--title{
    display:flex;
    flex-direction: column;
    gap:15px;
    text-align: center;

    strong{
      color: #444655;
      font-size: 28px ;
      font-weight: 600;
      line-height: 20px;
    }

    p{
      color: #444655;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  &--footer{
    display: flex;
    gap: 16px;

    button{
      border:none;
      width: 203px;
      height: 70px;
      display:flex;
      align-items:center;
      justify-content: center;
      border-radius: 15px;
      cursor:pointer;
      font-size: 18px;
      font-weight: 500;
      transition:  0.5s  ;
    }

    &--clos{
      background: #EFE9FF;
      color: #6425FE;

      &:hover{
        background: #D6D2FF;
      }
    }

    &--ok{
      background: #C1A8FF;
      color: #FFFFFF;

      &:hover{
        background: #ac8eff;
      }
    }
  }
}
</style>
