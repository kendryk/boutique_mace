<template>
  <div>
    <form class="d-flex flex-column">
        <h4>Ajouter un produit :</h4>
      <div class="mb-3">
        <label class="form-label">Image</label>
        <input
          type="text"
          class="form-control"
        />
      </div>

     <div class="mb-3">
        <label class="form-label">Titre</label>
        <input
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
          type="textarea"
          class="form-control"
        ></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Prix</label>
        <input
          type="number"
          class="form-control"
        />
      </div>
          
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
