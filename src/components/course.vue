<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="course mySwiper"
  >
    <swiper-slide
      class="course__col"
      v-for="course in courses"
      :key="course.id"
      :class="{ '&__col:hover': isTrue, activeCourse: course.activeCourse }"
      @mouseover="mouseOver(course.id)"
      @mouseleave="mouseOver(course.id)"
    >
      <div class="course__block">
        <img :src="`${course.img}`" class="course__img" alt="" />
        <div class="course__info">
          <div
            class="course__title"
            :class="{ titleActive: !course.activeCourse }"
          >
            {{ course.courseTitle }}
          </div>
          <div
            class="course__duration"
            :class="{ durationActive: !course.activeCourse }"
          >
            <h3 class="course__duration--number">
              {{ course.courseDurationNumber }}
            </h3>
            <p class="course__duration--text">
              {{ course.courseDurationText }}
            </p>
          </div>
        </div>
        <div
          class="course__inblock"
          :class="{ inblockActive: !course.activeCourse }"
        ></div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";
import { ref } from "vue";
const isTrue = ref(false);
const courses = ref([
  {
    id: 1,
    img: "/src/assets/img/abay.png",
    courseTitle: "UX/UI Дизайн",
    courseDurationNumber: "12",
    courseDurationText: "неделя",
    activeCourse: true,
  },
  {
    id: 2,
    img: "src/assets/img/abay.png",
    courseTitle: "UX/UI Дизайн",
    courseDurationNumber: "12",
    courseDurationText: "неделя",
    activeCourse: false,
  },
  {
    id: 3,
    img: "src/assets/img/abay.png",
    courseTitle: "UX/UI Дизайн",
    courseDurationNumber: "12",
    courseDurationText: "неделя",
    activeCourse: false,
  },
  {
    id: 4,
    img: "src/assets/img/abay.png",
    courseTitle: "UX/UI Дизайн",
    courseDurationNumber: "12",
    courseDurationText: "неделя",
    activeCourse: false,
  },
  {
    id: 5,
    img: "src/assets/img/abay.png",
    courseTitle: "UX/UI Дизайн",
    courseDurationNumber: "12",
    courseDurationText: "неделя",
    activeCourse: false,
  },
]);

const modules = ref([Pagination]);

const mouseOver = ref((id: number) => {
  isTrue.value = !isTrue.value;
  courses.value.forEach((el) => {
    el.activeCourse = false;
    if (el.id == id) {
      el.activeCourse = true;
    }
  });
});
</script>

<style scoped lang="scss">
.course {
  display: flex;
  width: 100%;

  &__col {
    border-radius: 20px;
    transition: 0.6s;
    overflow: hidden;
  }
  swiper-slide {
    transition: 0.6s;
  }
  .activeCourse {
    width: 50%;
  }
  &__block {
    position: relative;
  }

  &__img {
    width: 100%;
    height: 590px;
    object-fit: cover;
    object-position: center;
  }

  &__info {
    position: absolute;
    bottom: 13%;
    display: flex;
    width: 70%;
    left: 50%;
    transform: translateX(-40%);
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
  &__title {
    width: 20%;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 37px;
    color: #ffffff;
  }
  .titleActive {
    transform: rotate(-90deg);
  }

  &__duration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 1;
  }

  .durationActive {
    opacity: 0;
  }
  &__duration--number {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 52px;
    text-align: center;

    color: #ffffff;
  }
  &__duration--text {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }

  &__inblock {
    width: 120px;
    height: 120px;
    background-color: #1e1e2f;
    position: absolute;
    bottom: 13%;
    left: -120px;
    z-index: 4;
  }
  .inblockActive {
    left: 0px;
  }
  @media screen and (max-width: 820px) {
    &__info {
      width: 80%;
      transform: translate(-50%);
    }
  }
  @media screen and (max-width: 620px) {
  }
  @media screen and (max-width: 470px) {
    .swiper {
      height: 300px !important;
    }
  }
}
</style>
