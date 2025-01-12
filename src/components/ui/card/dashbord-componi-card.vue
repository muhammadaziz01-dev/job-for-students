<template>
  <div class="componi-card">
    <h2 class="componi-card--title">{{ props?.data?.title }}</h2>

    <div class="componi-card--list">
      <div
        v-for="(el , index) in props?.data?.data"
        :key="el?.id"
        :class=" index + 1 !== props?.data?.data.length ? `componi-card--list--itim itim-border ` : `componi-card--list--itim`"
      >
        <div class="componi-card--list--itim--icon" v-html="el?.icon"></div>
        <div class="componi-card--list--itim--title">
          <p class="componi-card--list--itim--title--name">{{ el?.name}}</p>
          <p class="componi-card--list--itim--title--count" v-if="el?.count">
            {{ el?.count }} <span>+{{ el?.increaseCount }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="componi-card--footer">
      <p class="componi-card--footer--title">{{ props?.data?.btnTitle }}</p>
      <button class="componi-card--footer--btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.33203 15.8335L14.1654 10.0002L8.33203 4.16683"
            stroke="#6425FE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      title: "Ish beruvchilar (142)",
      btnTitle: "Barchasini ko’rish",
      url: "/dashbord/componi-list",
      data: [
        {
          id: 1,
          name: "Progress Solution",
          count: 25,
          increaseCount: 3,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M17.6377 31.0137C18.3912 31.0137 19.002 30.4029 19.002 29.6494C19.002 28.8959 18.3912 28.2852 17.6377 28.2852C16.8843 28.2852 16.2734 28.8959 16.2734 29.6494C16.2734 30.4029 16.8843 31.0137 17.6377 31.0137Z" fill="#0079FE"/>
                    <path d="M21.3291 28.6602C22.0825 28.6602 22.6934 28.0493 22.6934 27.2959C22.6934 26.5424 22.0825 25.9316 21.3291 25.9316C20.5756 25.9316 19.9648 26.5424 19.9648 27.2959C19.9648 28.0493 20.5756 28.6602 21.3291 28.6602Z" fill="#0079FE"/>
                    <path d="M26.6102 18.3044C27.3592 18.3044 27.9665 17.6971 27.9665 16.9481C27.9665 16.199 27.3592 15.5918 26.6102 15.5918C25.8611 15.5918 25.2539 16.199 25.2539 16.9481C25.2539 17.6971 25.8611 18.3044 26.6102 18.3044Z" fill="#0079FE"/>
                    <path d="M24.3135 14.9375C25.0669 14.9375 25.6777 14.3267 25.6777 13.5733C25.6777 12.8198 25.0669 12.209 24.3135 12.209C23.56 12.209 22.9492 12.8198 22.9492 13.5733C22.9492 14.3267 23.56 14.9375 24.3135 14.9375Z" fill="#0079FE"/>
                    <path d="M21.3291 7.98048C22.0825 7.98048 22.6934 7.36969 22.6934 6.61624C22.6934 5.86274 22.0825 5.25195 21.3291 5.25195C20.5756 5.25195 19.9648 5.86274 19.9648 6.61624C19.9648 7.36969 20.5756 7.98048 21.3291 7.98048Z" fill="#0079FE"/>
                    <path d="M17.6377 5.71486C18.3912 5.71486 19.002 5.10407 19.002 4.35061C19.002 3.59712 18.3912 2.98633 17.6377 2.98633C16.8843 2.98633 16.2734 3.59712 16.2734 4.35061C16.2734 5.10407 16.8843 5.71486 17.6377 5.71486Z" fill="#0079FE"/>
                    <path d="M8.40331 8.65871C9.1568 8.65871 9.76759 8.04791 9.76759 7.29442C9.76759 6.54097 9.1568 5.93018 8.40331 5.93018C7.64985 5.93018 7.03906 6.54097 7.03906 7.29442C7.03906 8.04791 7.64985 8.65871 8.40331 8.65871Z" fill="#0079FE"/>
                    <path d="M9.13769 18.6235C9.89114 18.6235 10.502 18.0128 10.502 17.2593C10.502 16.5058 9.89114 15.895 9.13769 15.895C8.38423 15.895 7.77344 16.5058 7.77344 17.2593C7.77344 18.0128 8.38423 18.6235 9.13769 18.6235Z" fill="#0079FE"/>
                    <path d="M9.13753 24.1764C9.88658 24.1764 10.4938 23.5692 10.4938 22.8202C10.4938 22.0711 9.88658 21.4639 9.13753 21.4639C8.38849 21.4639 7.78125 22.0711 7.78125 22.8202C7.78125 23.5692 8.38849 24.1764 9.13753 24.1764Z" fill="#0079FE"/>
                    <path d="M13.1221 28.2769C13.8756 28.2769 14.4863 27.6661 14.4863 26.9126C14.4863 26.1592 13.8756 25.5483 13.1221 25.5483C12.3686 25.5483 11.7578 26.1592 11.7578 26.9126C11.7578 27.6661 12.3686 28.2769 13.1221 28.2769Z" fill="#0079FE"/>
                    <path d="M15.3209 17.4669C15.8395 16.9244 16.7171 16.9244 17.2357 17.4669C17.7623 17.9855 17.7623 18.8551 17.2357 19.3737C16.7171 19.9242 15.8395 19.9242 15.3209 19.3737C14.7784 18.8472 14.7784 17.9855 15.3209 17.4669Z" fill="#0079FE"/>
                    <path d="M18.2352 29.8728H17.0624V25.8518L11.9883 20.7936V14.2914L17.0305 9.27314V4.25488H18.2032V9.75983L13.177 14.7941V20.307L18.2352 25.3651V29.8728Z" fill="#0079FE"/>
                    <path d="M18.0604 26.0191L17.2227 25.1974L20.4299 21.9822V17.1235L17.4061 14.0838L20.757 10.7409V6.61621H21.9218V11.2356L19.0816 14.0838L21.6186 16.6208V22.4848L18.0604 26.0191Z" fill="#0079FE"/>
                    <path d="M20.8047 22.4536L16.6357 18.2847L15.8008 19.1196L19.9697 23.2886L20.8047 22.4536Z" fill="#0079FE"/>
                    <path d="M12.1565 14.6982L7.81641 10.3501V7.29443H8.99714V9.86341L13.0022 13.8525L12.1565 14.6982Z" fill="#0079FE"/>
                    <path d="M24.7444 14.0151L23.9173 13.1724L20.5977 16.4306L21.4248 17.2733L24.7444 14.0151Z" fill="#0079FE"/>
                    <path d="M13.0099 20.1249L9.56085 16.6914L8.71094 17.5452L12.1599 20.9786L13.0099 20.1249Z" fill="#0079FE"/>
                    <path d="M21.6815 27.7186L20.8438 26.8729L23.7478 23.9849V18.9746L26.1891 16.5093L27.0348 17.355L24.9206 19.4532V24.4715L21.6815 27.7186Z" fill="#0079FE"/>
                    <path d="M13.5473 26.4977L9.55886 22.5093L8.70703 23.3611L12.6955 27.3496L13.5473 26.4977Z" fill="#0079FE"/>
                 </svg>`,
        },
      ],
    },
  },
});

console.log(props)
</script>

<style scoped lang="scss">
.componi-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 20px 12px;
  border-radius: 10px;
  background-color: #fff;
  width: 208px;

  &--title {
    color: #444655;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }

  &--list {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 10px;
  }

  &--list{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    &--itim {
      display: flex;
      align-items: center;
      gap: 16px;

      &--title {
         display: flex;
         flex-direction: column;
         align-items: start;

         &--name,
         &--count{
          color: #2C2C2C;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0;
         }

         &--count{
            display: flex;
            align-items: center;
            gap: 5px;
            text-transform: uppercase;
            color: #84828A;
            text-align: right;

            span{
              color: #77B900;
            }
         }
      }


    }

    .itim-border{
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid #E8E9FF;
    }
  }


  &--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &--title {
      color: #444655;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
    }

    &--btn {
      border: none;
      display: flex;
      align-items: start;
      justify-content: center;
      padding: 10px;
      border-radius: 34px;
      background: #efe9ff;
      box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.06);
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: hsl(257, 100%, 94%);
        box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
