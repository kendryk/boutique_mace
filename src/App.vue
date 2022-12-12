<template>
  <div id="app">
    <the-header></the-header>
    <the-user></the-user>
    <the-admin></the-admin>

  </div>
</template>

<script>
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
};
</script>

<style></style>
