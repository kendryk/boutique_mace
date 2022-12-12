<template>
  <div class="d-flex flex-row">
    <the-shop class="w-75"></the-shop>
    <the-cart class="w-25"></the-cart>
  </div>
</template>

<script>
import TheShop from "./Shop/TheShop";
import TheCart from "./Cart/TheCart";

export default {
  components: {
    TheShop,
    TheCart,
  },
};
</script>

<style></style>
