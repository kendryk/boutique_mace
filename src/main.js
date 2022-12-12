import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: "1",
        img: "https://img.ltwebstatic.com/images3_pi/2021/04/16/161853626711beac347f81e30e23ae24c2680d8335_thumbnail_900x.webp",
        title: "T-shirt unicolore",
        description:
          "T-shirt unicolore 62% Polyester, 34% Coton, 4% Élasthanne",
        price: 10,
      },
      {
        id: "2",
        img: "https://img.ltwebstatic.com/images3_pi/2020/05/22/1590135601d676b24076d29b3efc7935c42b4f7f7f_thumbnail_900x.webp",
        title: "T-shirt avec col rond",
        description:
          "Noir et Blanc Tissu tricoté, 97% Polyester, 3% Élasthanne",
        price: 19,
      },
      {
        id: "3",
        img: "https://img.ltwebstatic.com/images3_pi/2021/10/19/16346369223e9ccb0865c7c5efdc0e80bc00f028f2.webp",
        title: "T-shirt unicolore",
        description: "Multicolore 100% Polyester",
        price: 34,
      },
    ],
    cart: [],
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map((i) => i.id).includes(product.id)) {
        this.cart = [...this.cart, product];
        this.$emit("update:cart", this.cart);
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter((i) => i.id !== item.id);
      this.$emit("update:cart", this.cart);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
