<template>
  <div class="wrapper">
    <!-- Form title -->
    <div class="wrapper--title">
      <p class="wrapper--title-text1" data-aos="fade-left" v-if="formStatus == 1">
        Yangi parol yarating
      </p>
      <p
        class="wrapper--title-text2"
        data-aos="fade-left"
        data-aos-duration="1000"
        v-else-if="formStatus == 2"
      >
        Universitet ma’lumotlarini kiriting
      </p>
      <p
        class="wrapper--title-text3"
        data-aos="fade-left"
        data-aos-duration="1000"
        v-else-if="formStatus == 3"
      >
        Kontakt ma’lumotlarini kiriting
      </p>
      <img :src="Stars" alt="stars" />
    </div>

    <!-- Form status -->
    <div class="wrapper--status" v-if="formStatus == 1">
      <img
        class="wrapper--status--img"
        :src="Status1"
        alt="status form"
        data-aos="fade-left"
      />
    </div>
    <div class="wrapper--status" v-else-if="formStatus == 2">
      <img
        class="wrapper--status--img2"
        :src="Status2"
        alt="status form"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
    <div class="wrapper--status" v-else="formStatus == 3">
      <img
        class="wrapper--status--img3"
        :src="Status3"
        alt="status form"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>

    <!-- Form fields -->
    <form
      @submit.prevent="handelSubmitted1"
      v-if="formStatus == 1"
      class="wrapper--field"
      data-aos="fade-left"
    >
      <label for="login" class="wrapper--field--label">
        <input
          :type="isOpen ? 'password' : 'text'"
          placeholder="Parol kiriting"
          v-model="password.password"
          required
        />
        <img @click="toggleOpen" :src="isOpen ? Open : Clos" alt=" icon" />
      </label>
      <label for="login" class="wrapper--field--label">
        <input
          :type="isOpen2 ? 'password' : 'text'"
          placeholder="Parolni takrorlang"
          v-model="password.confirmPassword"
          required
        />
        <img @click="toggleOpen2" :src="isOpen2 ? Open : Clos" alt=" icon" />
      </label>
      <button class="wrapper--field--btn" type="submit">Saqlash</button>
    </form>
    <form
      @submit.prevent="handelSubmitted2"
      v-if="formStatus == 2"
      class="wrapper--field"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <label for="login" class="wrapper--field--label">
        <input
          type="text"
          placeholder="Oliygoh to’liq nomi"
          v-model="university.universityName"
          required
        />
      </label>
      <label for="universityDescription" class="wrapper--field--label-textarea">
        <!-- <input
          type="textarea"
          placeholder="Oliygoh haqida ma’lumot"
          v-model="university.universityDescription"
          required
        /> -->
        <textarea
          name="universityDescription"
          placeholder="Oliygoh haqida ma’lumot"
          id="universityDescription"
          cols="44"
          rows="12"
          v-model="university.universityDescription"
        >
        </textarea>
      </label>
      <button class="wrapper--field--btn" type="submit">Saqlash</button>
    </form>

    <form
      @submit.prevent="handelSubmitted3"
      v-if="formStatus == 3"
      class="wrapper--field3"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <label for="Email" class="wrapper--field3--label">
        <input type="email" placeholder="Email" v-model="contact.email" required />
        <img :src="Email" alt=" icon" />
      </label>
      <label for="tel" class="wrapper--field3--label">
        <input type="tel" placeholder="Telefon raqam" v-model="contact.phone" required />
        <img :src="Tel" alt=" icon" />
      </label>
      <label for="Vebsayt" class="wrapper--field3--label">
        <input type="text" placeholder="Vebsayt" v-model="contact.webSite" required />
        <img :src="Web" alt=" icon" />
      </label>
      <label for="telegram" class="wrapper--field3--label">
        <input
          type="text"
          placeholder="Telegram kanal"
          v-model="contact.telegram"
          required
        />
        <img :src="Telegram" alt="telegram icon" />
      </label>
      <button class="wrapper--field3--btn" type="submit">Saqlash</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {useRouter} from "vue-router"
import { toast } from "vue3-toastify";
import {type Password , type Unversity , type Contact} from "../../../types"
import Open from "../../../assets/icons/open.svg";
import Clos from "../../../assets/icons/clos.svg";
import Stars from "../../../assets/icons/stars.svg";
import Status1 from '../../../assets/icons/status1.svg';
import Status2 from '../../../assets/icons/status2.svg';
import Status3 from '../../../assets/icons/status3.svg';
import Email from "../../../assets/icons/email.svg";
import Tel from "../../../assets/icons/call.svg";
import Web from "../../../assets/icons/global.svg";
import Telegram from "../../../assets/icons/telegram.svg";


const isOpen = ref(true);
const isOpen2 = ref(true);
const formStatus = ref(1);

const router = useRouter()

const toggleOpen = (): void => {
  isOpen.value = !isOpen.value;
};
const toggleOpen2 = (): void => {
  isOpen2.value = !isOpen2.value;
};
const password: Password = reactive({
  password: "",
  confirmPassword: "",
});

const university:Unversity = reactive({
  universityName: "",
  universityDescription: "",
});

const contact: Contact = reactive({
  email: "",
  phone: "",
  webSite: "",
  telegram: "",
});


const handelSubmitted1 = (): void => {
  if (password.password.trim() && password.confirmPassword.trim()) {
   if(password.password == password.confirmPassword){
     toast.success("Password saved successfully!");
     console.log( "Password: " + password.password + "Confirm Password: " + password.confirmPassword  );
     password.confirmPassword = "";
     password.password = "";
     formStatus.value = 2;

   }else{
     toast.error("Parollar bir-birine ekan emas!");
     return;
   }



  } else {
    toast.error("Please fill in both fields!");
  }
};

const handelSubmitted2 = (): void => {
  if (university.universityName.trim() && university.universityDescription.trim()) {
    toast.success("University information saved successfully!");
    console.log( "University Name: " + university.universityName + "Description: " + university.universityDescription  );
    university.universityName = "";
    university.universityDescription = "";
    formStatus.value = 3;
}
}

const handelSubmitted3 = (): void => {
  if (contact.email.trim() && contact.phone.trim() && contact.webSite.trim() && contact.telegram.trim()) {
    toast.success("Contact information saved successfully!");
    console.log( "Email: " + contact.email + "Phone: " + contact.phone + "WebSite: " + contact.webSite + "Telegram: " + contact.telegram  );
    contact.email = "";
    contact.phone = "";
    contact.webSite = "";
    contact.telegram = "";
    setTimeout(() => {

      router.push('/dashbord')
    }, 1000);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 700px;
  height: 700px;
  padding: 50px 80px;
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

    &-text1 {
      margin-top: 52px;
    }

    &-text2 {
      margin-top: 37px;
    }
    &-text3 {
      margin-top: 9px;
    }
  }

  &--status {
    &--img {
      margin-bottom: 95px;
    }
    &--img2 {
      margin-bottom: 65px;
    }
    &--img3 {
      margin-bottom: 45px;
    }
  }

  &--field {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;

    &--label {
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
        font-size: 18px;
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

    &--label-textarea {
      textarea {
        display: flex;
        height: 140px;
        width: 450px;
        padding: 22px 15px;
        align-items: center;
        align-self: stretch;
        border-radius: 15px;
        font-size: 18px;
        border: 1px solid rgba(116, 128, 156, 0.6);
        background: #fff;
        outline: none;
        color: #74809c;
        ::placeholder {
          color: rgba(116, 128, 156, 0.6);
          font-size: 18px;
          font-weight: 400;
        }
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

  &--field3 {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    &--label {
      width: 450px;
      height: 64px;
      flex-shrink: 0;
      border-radius: 15px;
      border: 1px solid rgba(116, 128, 156, 0.6);
      background: #fff;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        padding: 19px 19px 19px 60px;
        font-size: 18px;
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
        left: 20px;
        cursor: pointer;
      }
    }

    &--btn {
      width: 450px;
      height: 64px;
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
