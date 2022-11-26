<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-row">
      <the-shop class="w-75"></the-shop>
      <the-cart  class="w-25"></the-cart>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheShop from "./components/Shop/TheShop.vue";
import TheCart from "./components/Cart/TheCart.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheShop,
    TheCart,
  },
};
</script>

<style></style>
