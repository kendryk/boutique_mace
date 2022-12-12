<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" />
        Macé
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a
            class="nav-link"
            :class="{ active: page === 'TheUser' }"
            @click="changePage('TheUser')"
            >Boutique</a
          >
          <a
            class="nav-link"
            :class="{ active: page === 'TheAdmin' }"
            @click="changePage('TheAdmin')"
            >Admin</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      page: eventBus.page,
    };
  },

  methods: {
    changePage(page) {
      eventBus.changePage(page);
      this.page = page;
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
