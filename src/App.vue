<template>
  <div id="app">
    <the-header></the-header>

    <div class="d-flex flex-column v-100">
      <router-view> </router-view>
    </div>
    
  </div>
</template>

<script>

import TheHeader from "./components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
    
  },
 
};
</script>

<style></style>
