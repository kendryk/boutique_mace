<template>
  <div class="d-flex flex-row justify-content-between p-2">
    <span>
      {{ item.title }} : <strong>{{ item.price }}</strong> €</span
    >
    <button @click="removeItemFromCart" class="btn-close"></button>
  </div>
</template>

<script>
import {eventBus} from '../../main'

export default {
  props: ["item"],
  methods: {
    removeItemFromCart() {
        eventBus.removeItemFromCart({ ...this.item});
    },
  },
};
</script>

<style></style>
