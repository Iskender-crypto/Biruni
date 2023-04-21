<template>
  <div class="search">
    <input
      type="search"
      name=""
      class="search__input"
      id=""
      placeholder="Find your passion"
    />
    <button class="search__go">Go</button>
  </div>
</template>
<style scoped lang="scss">
.search {
  display: flex;
  box-shadow: 0px 46px 50px rgba(0, 0, 0, 0.03);
  width: fit-content;
  margin-top: -250px;
  position: absolute;
  z-index: 50;
  &__input,
  &__input::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    color: #1e1e2f;
    font-family: "Gilroy";
  }
  &__input {
    border: none;
    outline: none;
    background-color: white;
    padding: 48px 30px;
    transition: 0.6s;
  }
  &__input:focus {
    border: 1px solid #524eb8;
    transition: 0.6s;
  }
  &__input:hover::after {
    background-color: rgb(246, 246, 246);
  }
  &__go {
    background: #8682fe;
    border: none;
    padding: 38px 35px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 22px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fdfcfb;
    position: relative;
  }
  &__go::after {
    position: absolute;
    display: block;
    content: "";
    height: 0px;
    width: 100%;
    background-color: #b8984e;
    top: 0px;
    left: 0;
    transition: 0.6s;
  }
  &__go:hover {
    background-color: #524eb8;
  }
  &__go:hover::after {
    height: 100%;
  }
  @media screen and (max-width: 1100px) {
    .search__input {
      padding: 20px 15px;
    }
    .search__input::placeholder {
      padding: 20px 15px;
    }
  }
  @media screen and (max-width: 620px) {
    position: static;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 470px) {
  .search__input {
    padding: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.4px;
    line-height: 17px;
    color: #1e1e2f;
  }
  .search__input::placeholder {
    padding: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.4px;
    line-height: 17px;
    text-align: start;
    color: #1e1e2f;
  }

  .search__go {
    padding: 10px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 24.48px;
    line-height: 16px;
    color: #fdfcfb;
  }
}
</style>
