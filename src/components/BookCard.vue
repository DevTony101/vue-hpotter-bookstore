<template>
  <div class="card rounded">
    <img
      class="rounded book-cover"
      src="../assets/demo.jpg"
      alt="Book Cover"
      width="170"
      height="230"
    />
    <div class="book-info">
      <h1>Harry Popotter y la Piedra Filosofal</h1>
      <p>Cantidad Disponible: 500</p>
      <p>Precio: 5$</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookCard",
  };
</script>

<style scoped>
  .rounded {
    border-radius: 1rem;
  }

  .card {
    margin: 0 0 30px 0;
    display: inline-flex;
    text-align: center;
    background-color: var(--primary-variant);
    padding: 1rem 1rem;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  }

  .book-info {
    margin: 0 1.5rem;
    padding: 0 2.5rem;
  }
</style>
