<template>
  <div class="adminVue">
    <admin-product-form></admin-product-form>
  </div>
</template>

<script>
import AdminProductForm from "./AdminProductForm";

export default {
  components: {
    AdminProductForm,
  },
};
</script>

<style scoped>
  .adminVue{
    display: flex;
    justify-content: center;
    padding: 32px;
  }

</style>
