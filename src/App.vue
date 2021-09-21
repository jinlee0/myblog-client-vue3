<script>
export default {
  name: "App",
};
</script>

<script setup>
import NavBar from "/@components/NavBar.vue";
import Profile from "/@components/Profile.vue";
</script>

<template>
  <nav-bar></nav-bar>
  <profile></profile>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
