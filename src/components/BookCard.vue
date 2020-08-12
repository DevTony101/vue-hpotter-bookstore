<template>
  <div class="card rounded">
    <div class="book-cover">
      <img
        class="rounded book-cover"
        :src="cover"
        alt="Book Cover"
        width="180"
        height="250"
      />
    </div>
    <div class="book-info">
      <h1>{{ title }}</h1>
      <p class="description">{{ description }}</p>
      <hr />
      <div class="purchase-info">
        <div>
          <p>
            Cantidad Disponible: {{ isSoldOut ? "Agotado" : initialQuantity }}
          </p>
          <p>Precio: ${{ price }}</p>
        </div>
        <div class="add-to-cart" v-if="!isSoldOut">
          <div class="quantity">
            <input v-model.number="quantity" type="number" min="1" max="9" />
          </div>
          <BaseButton @click="add">
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
  import { mapActions } from "vuex";

  export default {
    name: "BookCard",
    components: { BaseIcon },
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      initialQuantity: {
        // Quantity prop
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      cover: {
        type: String,
        required: true,
      },
    },
    data: function() {
      return {
        quantity: 1,
      };
    },
    methods: {
      ...mapActions("books", ["addToCart"]),
      add: function() {
        this.addToCart({
          id: this.id,
          title: this.title,
          quantity: this.quantity,
          price: this.price,
        });
      },
    },
    computed: {
      isSoldOut: function() {
        return !parseInt(this.initialQuantity);
      },
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
