<template>
  <div class="container">
    <div class="banner">
      <h1 class="title">Учись строить будущее</h1>
      <Course></Course>
    </div>
    <Search></Search>
  </div>
</template>
<script setup lang="ts">
import Course from "../components/course.vue";
import Search from "../components/search.vue";
import CourseInfo from "../components/course-info.vue";
</script>
<style scoped lang="scss">
.banner {
  display: flex;
  align-items: flex-start;
  .title {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 76px;
    line-height: 76px;
    display: flex;
    align-items: center;
    color: #1e1e2f;
    width: 30%;
    margin-top: 50px;
    margin-right: 40px;
  }
  @media screen and (max-width: 1100px) {
    .title {
      font-weight: 600;
      font-size: 50px;
      line-height: 60px;
      margin-right: 60px;
      width: 100%;
    }
  }
  @media screen and (max-width: 620px) {
    flex-direction: column;
    .title {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 470px) {
    .title {
      margin-top: 10px;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 45px;
      display: flex;
      align-items: center;
      color: #1e1e2f;
      width: 50%;
    }
  }
}
</style>
