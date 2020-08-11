<template>
  <div class="card rounded">
    <div class="book-cover">
      <img
        class="rounded book-cover"
        src="../assets/demo.jpg"
        alt="Book Cover"
        width="180"
        height="250"
      />
    </div>
    <div class="book-info">
      <h1>Harry Potter y la Piedra Filosofal</h1>
      <p class="description">
        El día de su cumpleaños, Harry Potter descubre que es hijo de dos
        conocidos hechiceros, de los que ha heredado poderes mágicos. Debe
        asistir a una famosa escuela de magia y hechicería, donde entabla una
        amistad con dos jóvenes que se convertirán en sus compañeros de
        aventura. Durante su primer año en Hogwarts, descubre que un malévolo y
        poderoso mago llamado Voldemort está en busca de una piedra filosofal
        que alarga la vida de quien la posee.
      </p>
      <hr />
      <div class="purchase-info">
        <div>
          <p>Cantidad Disponible: 500</p>
          <p>Precio: $58.000</p>
        </div>
        <div class="add-to-cart">
          <div class="quantity">
            <input v-model.number="quantity" type="number" min="1" max="9" />
          </div>
          <BaseButton>
            <template>
              <BaseIcon class="icon" icon-name="cart-plus" />
              Agregar al Carrito
            </template>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseIcon from "./base/BaseIcon";

  export default {
    name: "BookCard",
    components: { BaseIcon },
    data: function() {
      return {
        quantity: 1,
      };
    },
  };
</script>

<style scoped>
  .rounded {
    border-radius: 1rem;
  }

  .book-cover {
    padding: 0.5rem 0.5rem;
  }

  .description {
    text-align: justify;
  }

  .card {
    margin: 0 0 30px 0;
    display: inline-flex;
    background-color: var(--primary-variant);
    padding: 1rem 1rem;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  }

  .book-info {
    margin: 0 1.5rem;
    padding: 0 2.5rem 0 0;
  }

  .purchase-info {
    margin-top: 20px;
    font-weight: bold;
    font-size: medium;
    display: flex;
    justify-content: space-between;
  }

  .add-to-cart {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  .quantity input {
    transition: all 500ms ease-in-out;
    width: 30px;
    height: 50px;
    line-height: 1.65;
    float: left;
    display: block;
    margin: 0;
    padding: 0 0 0 10px;
    color: var(--text-color);
    background-color: var(--primary-accent);
    border: 1px solid var(--primary-variant);
    border-radius: 6px;
  }

  .quantity input:focus {
    outline: 0;
  }
</style>
