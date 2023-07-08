<template>
  <div class="container">
    <h2 class="mb-5 mt-4">
      IT-индустрии высококачественным и эффективным способом
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
        <div
            @click="visible = true"
            class="cursor-pointer"
        >
          <img :src="slideContent.img" alt="" class="w-full " />
          <h3 >{{ slideContent.name }}</h3>
          <p >{{ slideContent.duration }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class=" flex justify-content-center">
    <Dialog class="card" v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50vw' }">
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import { ref} from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
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
const visible = ref(false);

// let myEmodji = [
//     "😁",
//     "😎",
//     "😂",
//     "😍",
//     "😒",
// ]
// let urlAnimate = ()=>{
//   window.location.hash = myEmodji[Math.floor((Date.now()/100)%myEmodji.length)];
//   setTimeout(urlAnimate,200)
// }
//
// urlAnimate();
</script>
<style scoped lang="scss">
.sticky-element {
  position: sticky !important;
  top: 40% !important;
}
.h-80 {
  height: auto !important;
}
.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
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
