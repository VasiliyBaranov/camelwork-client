<template>
  <div class="nav">
    <div>
      <router-link :to="{ name: 'home' }" tag="div" class="nav-text">
        Routing Data Apache Camel
      </router-link>
    </div>
    <div class="main-links">
      <router-link :to="{ name: 'home' }" tag="div" class="nav-item">
        Справочник «Место работы»
      </router-link>
      <router-link :to="{ name: 'phoneBookEdit' }" tag="div" class="nav-item">
        Редактирование телефонной книги
      </router-link>
      <router-link :to="{ name: 'workBookCreate' }" tag="div" class="nav-item">
        Добавить место работы
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
.nav {
  width: 100%;
  height: 6rem;
  background-color: #242424;
  color: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 4rem;
  justify-content: space-around;
  @include respond(tab) {
    min-height: 9rem;
    padding: 0 1rem;
  }
  .nav-text {
    padding: 0.5rem 0.5rem;
    font-size: 2.4rem;
    color: #fff;
  }
  .main-links {
    display: flex;
    align-items: center;
    .nav-item {
      padding: 0.5rem 2rem;
      font-size: 2rem;
      &:hover {
        color: aquamarine;
        cursor: pointer;
      }
      &.router-link-exact-active {
        color: aquamarine;
      }
    }
  }
}
</style>
