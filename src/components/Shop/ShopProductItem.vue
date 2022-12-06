<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
        <img style="height:150px" :src="product.img" :alt="product.title">
    </div>
    <div>
        <h3> {{product.title}}</h3>
        <hr>
    </div>
    <div>
        <p>{{ product.description}}</p>
    </div>
    <div class="d-flex flex-row justify-content-between">
        <span>{{ product.price}} €</span>
        <button @click="addProductToCart" class="btn btn-primary btn-sm"> Commander </button>

    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  props: ['product'],
  methods:{
    addProductToCart(){
      eventBus.addProductToCart({...this.product})

    }
  }
};
</script>

<style>
.product-container {
  height: 400px;
  padding: 5px;
}
p{
    font-size : 12px
}
</style>
