<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" />
        Macé
    </a>
      <button class="navbar-toggler">
        <span
          class="navbar-toggler-icon"
          v-trigger-collapse="'navbarNavAltMarkup'"
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/shop"> Boutique </router-link>

          <router-link class="nav-link" to="/admin"> Admin </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  directives: {
    TriggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });

        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener("click", (e) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          e.stopPropagation();
        });
      },
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}

router-link active {
  font-weight: bold;
}
</style>
