<template>
  <Nav class="navbar" />
  <slot></slot>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Nav from "./component/nav.vue";
import Footer from "./component/footer.vue";
</script>
<style scoped lang="scss">
.navbar {
  position: sticky;
  padding: 40px 0px;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #f9f5f2;
  @media screen and (max-width: 1100px) {
    padding: 20px 0px;
  }
  @media screen and (max-width: 470px) {
    padding: 20px 0px;
  }
}
</style>
