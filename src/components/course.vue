<template>
  <div class="courses">
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
    <div class="course">
      <div class="course__block"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
</script>

<style scoped lang="scss">
.courses {
  display: flex;
  overflow: auto;
  overflow: hidden;
  .course {
    width: 200px !important;
    padding-left: 10px;
    .course__block {
      height: 300px;
      background-color: red;
    }
  }
}
</style>
