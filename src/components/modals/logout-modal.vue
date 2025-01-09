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

    <a-modal v-model:open="open" >

    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
</script>

<style  lang="scss">
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
        color: #84828A;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        background-color: transparent;
        border:none;

        &:hover {
            background: #EFE9FF;
            color: #6425FE;
        }

}

.ant-modal-wrap{
  background: rgba(0, 0, 0, 0.25) !important;
}

.ant-modal-footer,
.ant-modal-close,
.ant-modal-body{
  display:none !important;

}
</style>
