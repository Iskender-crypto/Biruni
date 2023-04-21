<template>
  <div class="container">
    <h2 class="h2">Неограниченный доступ к более чем 100 инструкторам .</h2>
    <div class="course-info">
      <div class="course-info__menu"></div>
      <div class="course-info__cards">
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
        <div class="course-info__card"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.course-info__cards {
  display: flex;
  .course-info__card {
    width: 400px;
    height: 300px;
    background-color: red;
    margin-right: 10px;
    display: flex;
  }
}
</style>
