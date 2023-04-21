<template>
  <div class="container">
    <nav ref="nav">
      <router-link to="/" class="logo">
        <img src="../../assets/img/logo.svg" alt="" />
      </router-link>
      <ul class="menu">
        <li>
          <router-link class="menu__link" :to="'#categories'"
            >Категории</router-link
          >
        </li>
        <li>
          <router-link class="menu__link" to="#about">О нас</router-link>
        </li>
        <li>
          <router-link class="menu__link" to="#contact">Контакты</router-link>
        </li>
      </ul>
      <div class="servies">
        <router-link class="menu__link" to="/login/register">Login</router-link>
        <button class="free">Free Trial</button>
      </div>

      <router-link
        to="#"
        @click="callMenu"
        class="burger"
        :class="{ burger: !isTrue, burgerClick: isTrue }"
      >
        <div class="burger__item"></div>
        <div class="burger__item"></div>
      </router-link>
    </nav>
    <div class="burger__menu" :class="{ 'burger__menu-height': isTrue }">
      <ul class="menu">
        <li>
          <router-link class="menu__link" to="#categories"
            >Категории</router-link
          >
        </li>
        <hr />
        <li>
          <router-link class="menu__link" to="#about">О нас</router-link>
        </li>
        <hr />
        <li>
          <router-link class="menu__link" to="#contact">Контакты</router-link>
        </li>
      </ul>
      <div class="servies">
        <router-link class="menu__link" to="/login/register">Login</router-link>
        <button class="free">Free Trial</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isTrue = ref(false);
const callMenu = () => {
  if (isTrue.value == true) {
    isTrue.value = false;
  } else {
    isTrue.value = true;
  }
};
const nav = ref();
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 10) {
    nav.value.classList.add("navSticky");
  } else {
    nav.value.classList.remove("navSticky");
  }
});
</script>
<style scoped lang="scss">
.container {
  position: relative;
}
nav {
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu {
    display: flex;
    color: black;
    margin-right: 300px;
  }
  .menu__link {
    margin-right: 40px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1e1e2f;
    position: relative;
    z-index: 2;
  }
  .menu__link:after {
    height: 0px;
    transition: 0.6s;
    position: absolute;
    z-index: 1;
    content: "";
    display: block;
    background-color: #3b35e483;
    width: 100%;
    bottom: 0;
  }
  .menu__link:hover:after {
    height: 10px;
  }
  .servies {
    display: flex;
    align-items: center;
  }
  .free {
    width: 160px;
    height: 42px;
    background-color: #1e1e2f;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border: 0.1px solid #ffffff;
    font-family: "Gilroy";
    border-radius: 100px;
    cursor: pointer;
  }
  .free:hover {
    background-color: #5853e4;
  }
  .burger {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    background-color: #1e1e2f;
    cursor: pointer;
  }
  .burger__item {
    background-color: white;
    height: 2px;
    width: 15px;
    margin: 3px;
    transition: 0s;
  }

  .burgerClick {
    position: relative;
    transition: 0s;
    .burger__item:nth-child(1) {
      position: absolute;
      transform-origin: 50% 50%;
      transform: translateX(-70%) translateY(-80%) rotate(45deg);
      top: 50%;
      left: 50%;
      transition: 0s;
    }
    .burger__item:nth-child(2) {
      position: absolute;
      transform-origin: 50% 50%;
      transform: translateX(-70%) translateY(-80%) rotate(-45deg);
      top: 50%;
      left: 50%;
      transition: 0s;
    }
  }

  @media screen and (max-width: 1100px) {
    .menu,
    .servies {
      display: none;
    }

    .burger {
      display: flex;
    }
  }
}

.burger__menu {
  height: 0px;
  overflow: hidden;
  position: absolute;
  background-color: #f8f4f0;
  transition: 1s cubic-bezier(0.88, 0.06, 0.3, 0.97);
  width: 100%;
  padding: 0px 20px;

  .menu {
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    @media screen and (max-width: 470px) {
      // position: static;
      width: 90%;
    }
  }
  .menu__link {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1e1e2f;
    position: relative;
    z-index: 2;
    margin: 20px 0px;
    margin-right: 40px;
    width: fit-content;
  }
  .menu__link:after {
    height: 0px;
    transition: 0.6s;
    position: absolute;
    z-index: 1;
    content: "";
    display: block;
    background-color: rgba(128, 0, 128, 0.436);
    width: 100%;
    bottom: 0;
  }
  .menu__link:hover:after {
    height: 10px;
  }
  .servies {
    display: flex;
    align-items: center;
  }
  .free {
    width: 160px;
    height: 42px;
    background-color: #1e1e2f;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border: 0.1px solid #ffffff;
    font-family: "Gilroy";
    border-radius: 100px;
    cursor: pointer;
  }
  .free:hover {
    background-color: #5853e4;
  }
}

.burger__menu-height {
  height: 300px;
}
</style>
