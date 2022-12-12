<template>
  <div id="app">
    <the-header></the-header>

    <div class="d-flex flex-collumn v-100">
      <components :is="page"></components>
    </div>
    
  </div>
</template>

<script>
import { eventBus } from "./main";

import TheHeader from "./components/TheHeader";
import TheUser from "./components/features/User/TheUser";
import TheAdmin from "./components/features/Admin/TheAdmin";

export default {
  name: "App",
  components: {
    TheHeader,
    TheUser,
    TheAdmin
  },
  data(){
      return {
        page: eventBus.page
      }
    
  },created() {
        eventBus.$on('update:page', (page) => {
          this.page = page;
        })
      }


};
</script>

<style></style>
