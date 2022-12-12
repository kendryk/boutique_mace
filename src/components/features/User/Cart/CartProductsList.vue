<template>
  <div class="d-flex flex-column flex-wrap p-1">
    <h2 class="border-bottom pb-3">Mes achats</h2>
    <cart-product-item v-for="item in cart" :key="item.id" :item="item" />

    <template v-if="cart.length">
      <hr />

      <span>Total : {{ total }} €</span>
    </template>
  </div>
</template>

<script>
import CartProductItem from "./CartProductItem.vue";

export default {
  components: {
    CartProductItem,
  },
  props: ["cart"],
  computed: {
    total() {
      return this.cart.reduce((acc, v) => {
        acc += v.price;
        return acc;
      }, 0);
    },
  },
};
</script>

<style></style>
