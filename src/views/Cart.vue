<template>
  <div>
    <div class="main-section">
      <h1>Carrito de Compras</h1>
      <div class="cart" v-if="!cartIsEmpty">
        <div>
          <BookInfo></BookInfo>
          <BookInfo></BookInfo>
        </div>
        <div class="purchase-info">
          <div style="text-align: center">
            <p id="msg-total">Valor Total de la Compra:</p>
            <p id="price">$132.000</p>
            <BaseButton buttonClass="purchase-button">
              <template>
                Confirmar Compra
              </template>
            </BaseButton>
          </div>
        </div>
      </div>
      <div v-else>
        <p id="msg-empty">Oops! Parece que tu carrito de compras está vacío.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import BookInfo from "../components/BookInfo";
  import { mapGetters } from "vuex";

  export default {
    name: "Cart",
    components: { BookInfo },
    computed: mapGetters("books", ["cartIsEmpty"]),
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
    grid-template-columns: 1000px auto;
    column-gap: 2rem;
    margin-top: 40px;
  }

  .purchase-info p {
    color: var(--text-color);
    font-size: x-large;
  }

  .purchase-info {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  #msg-total {
    color: lightgray;
    margin: 0;
  }

  #price {
    font-size: xx-large;
    font-weight: bold;
  }

  #msg-empty {
    font-size: xx-large;
    text-align: center;
    color: gray;
    margin-top: 50px;
  }
</style>
