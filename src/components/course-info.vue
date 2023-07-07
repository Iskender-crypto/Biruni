<template>
  <div class="container">
    <h2 class="mb-5 mt-4">
      Неограниченный доступ к более чем 100 инструкторам .
    </h2>

    <swiper
      :modules="modules"
      :slidesPerView="4"
      :spaceBetween="30"
      :breakpoints="breakpoints"
      :navigation="true"
      class="mySwiper3"
    >
      <swiper-slide
        v-for="(slideContent, index) in products"
        :key="index"
        class="sticky top-50"
      >
        <img :src="slideContent.img" alt="" class="w-full" />
        <h3>{{ slideContent.name }}</h3>
        <p>{{ slideContent.duration }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Navigation } from "swiper";
const modules = ref([Navigation]);
const products = ref([
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa5505ecb8e2f5f217405_categories_01.webp.png",
    name: "UX/UI design",
    duration: "3 ай",
  },
  {
    img: "/img/617fa550a239182daefe2e21_categories_02.webp.png",
    name: "Проект менеджмент",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550a23918491cfe2e20_categories_04-p-500.webp.png",
    name: "Scratch",
    duration: "2 ай",
  },
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550a23918491cfe2e20_categories_04-p-500.webp.png",
    name: "Scratch",
    duration: "2 ай",
  },
]);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  414: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  820: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1100: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
</script>
<style scoped lang="scss">
.sticky-element {
  position: sticky !important;
  top: 40% !important;
}
.h-80 {
  height: auto !important;
}
</style>
<style lang="scss">
.mySwiper3 {
  height: 570px;
  .swiper-slide {
    box-shadow: 0px 64px 50px -32px rgba(6, 7, 37, 0.03);
  }

  .swiper-wrapper {
  }
  .swiper-button-next {
    display: block;
    width: 40px;
    height: 40px;
    top: 90%;
    left: 51%;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .swiper-button-next:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
  .swiper-button-next:after {
    display: block;
    background-image: url("../../public/img/next.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }
  .swiper-button-prev {
    display: block;
    width: 40px;
    height: 40px;
    top: 90%;
    left: auto;
    right: 51%;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .swiper-button-prev:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
  .swiper-button-prev:after {
    display: block;
    background-image: url("../../public/img/prev.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }
  @media screen and (max-width: 1300px) {
    height: 450px !important;
  }
  @media screen and (max-width: 1100px) {
    height: 530px !important;
  }
  @media screen and (max-width: 620px) {
    height: 400px !important;
  }
  @media screen and (max-width: 414px) {
    height: 670px !important;
  }
}
</style>
