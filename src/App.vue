<template>
  <div id="app">
    <router-link to="/">Accueil</router-link>|
    <router-link to="/contact">Contact</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style>

</style>
