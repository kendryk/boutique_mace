<template>
  <div>
    <form @submit="trySubmit" class="d-flex flex-column">
      <h4>Ajouter un produit :</h4>
      <div class="mb-3">
        <label class="form-label">Image</label>
        <input v-model="form.img" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input v-model="form.title" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
          v-model="form.description"
          type="textarea"
          class="form-control"
        ></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Prix</label>
        <input v-model.number="form.price" type="number" class="form-control" />
      </div>

      <!-- Visualisation des erreurs -->

      <ul v-if="errors.length">
        <li class="text-danger" v-for="error in errors" :key="error"> {{ error}}</li>
      </ul>

      <!-- Visualisation du formulaire -->

      <pre>{{ $data }}</pre>

      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        img: "",
        title: "",
        description: "",
        price: "",
      },
      errors: [],
    };
  },
  methods: {
    trySubmit(event) {
      event.preventDefault();
      if (this.formIsValid()) {
        console.log({ ...this.form });
      }
    },

    formIsValid(){
       this.errors = [];
      if(!this.form.img){
        this.errors.push('image required')
      }
      
      if(!this.form.title){
        this.errors.push('title required')
      }
      
      if(!this.form.description){
        this.errors.push('description required')
      }
      
      if(!this.form.price){
        this.errors.push('price required')
      }

      // si on a quelqueChose dans 
      return this.errors.length ? false : true;
    }

  },
};
</script>

<style></style>
