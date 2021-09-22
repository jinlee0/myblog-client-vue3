<script>
export default {
  name: "App",
};
</script>

<script setup>
import NavBar from "/@components/NavBar.vue";
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
