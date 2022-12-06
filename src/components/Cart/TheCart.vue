<template>
  <div>
    <h2 class="pb-3">Mes achats</h2>
    <hr />
    <cart-products-list :cart="cart" />
    <hr />
  </div>
</template>

<script>
import CartProductsList from "./CartProductsList.vue";
import { eventBus } from "../../main";

export default {
  components: {
    CartProductsList,
  },
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on("update:cart", (cart) => {
      this.cart = cart;
    });
  },
};
</script>

<style></style>
