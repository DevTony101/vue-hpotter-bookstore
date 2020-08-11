<template>
  <div>
    <div class="main-section">
      <h1>Carrito de Compras</h1>
      <div class="cart">
        <div>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
        </div>
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BookInfo from "../components/BookInfo";
  export default {
    name: "Cart",
    components: { BookInfo },
  };
</script>

<style scoped>
  .main-section {
    margin: 1.5rem 1rem;
    padding: 0 1rem;
  }

  .cart {
    display: grid;
    column-count: 2;
    grid-template-columns: 750px auto;
    column-gap: 2rem;
    margin-top: 40px;
  }

  .rounded {
    border-radius: 1rem;
  }

  .card {
    margin: 0 0 30px 0;
    display: inline-flex;
    background-color: var(--primary-variant);
    padding: 0 1rem;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
