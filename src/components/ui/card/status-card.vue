<template>
  <div
    :style="
      `background:` + props?.date?.backgroundColor + `; color:` + props?.date?.color
    "
    class="status-card"
  >
    <div class="status-card--header">
      <div class="status-card--header--title">
        <h3>{{ props?.date?.title }}</h3>
        <p>{{ props?.date?.description }}</p>
      </div>
      <p
        class="status-card--header--status"
        :style="props?.date?.increase ? `color: #8FC;` : `color: #F04248;`"
      >
        {{
          props?.date?.increase
            ? `+${props?.date?.increase}`
            : `-${props?.date?.decrease}`
        }}
      </p>
    </div>
    <div class="status-card--body">
      <p>{{ props?.date?.count }}</p>
      <span v-html="props?.date?.icon"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  date: {
    type: Object,
    required: true,
    default: {
      id: 1,
      title: "Jami talabalar",
      description: "Ro’yxatdan o’tgan talabalar soni",
      count: 3267,
      color: "#FFF",
      backgroundColor: "#B79BFF",
      increase: 238,
      decrease: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="25" viewBox="0 0 79 25" fill="none">
                <path d="M76.9956 6.09999H78.5V24.5L0.499999 24.5V18.5L2.75657 13.9402L3.6531 16.1802H4.70413L6.8062 13.9402L8.27764 16.1802L12.692 16.1804L15.0042 13.9403L16.2655 10.5797L18.1012 12.2602L19.756 13.9402L20.2728 16.5L21.3239 16.1802H22.6144L25.0214 8.34021L25.7736 10.5802L26.9771 8.34021L27.8797 12.2602L30.2867 5.54021L31.6406 8.34021H34.1981L36.906 2.74022L38.5608 5.54021L40.7401 3.86L43.3955 8.33999L45.1028 0.499999L46.3384 8.33999L54.5804 11.7L55.6334 9.45998H56.6865L59.0935 6.09999H61.5005L62.4031 9.45998L66.0137 2.73999L67.518 11.7L68.2702 8.33999H69.925L71.4294 0.499999L72.9338 7.21999L73.686 3.86H75.6417L76.9956 6.09999Z" fill="url(#paint0_linear_3697_18163)" fill-opacity="0.16"/>
                <path d="M78 6.09999H76.4956L75.1417 3.86H73.186L72.4338 7.21999L70.9294 0.499999L69.425 8.33999H67.7702L67.018 11.7L65.5137 2.73999L61.9031 9.45998L61.0005 6.09999H58.5935L56.1865 9.45998H55.1334L54.0804 11.7L45.8384 8.33999L44.6028 0.499999L42.8955 8.33999L40.2401 3.86L38.0608 5.54021L36.406 2.74022L33.6981 8.34021H31.1406L29.7867 5.54021L27.3797 12.2602L26.4771 8.34021L25.2736 10.5802L24.5214 8.34021L22.1144 16.1802H20.8239L19.7728 16.5L19.256 13.9402L17.6012 12.2602L15.7655 10.5797L14.5042 13.9403L12.192 16.1804L7.77764 16.1802L6.3062 13.9402L4.20413 16.1802H3.1531L2.25657 13.9402L0.499999 18.5" stroke="white" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_3697_18163" x1="39.5" y1="24.5" x2="39.5" y2="0.499999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.809892" stop-color="white"/>
                  </linearGradient>
                </defs>
              </svg>`,
    },
  },
});
</script>

<style scoped lang="scss">
.status-card {
  display: flex;
  width: 220px;
  padding: 16px 12px;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 10px;

  &--header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--title {
      display: flex;
      flex-direction: column;
      align-items: start;

      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
      }

      p {
        font-size: 8px;
        font-weight: 400;
        margin: 0;
      }
    }

    &--status {
      margin: 0;
      text-align: right;
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  &--body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: 18px;
      font-weight: 400;
      text-transform: capitalize;
      margin: 0;
    }
  }
}
</style>
