<template>
  <div class="card rounded">
    <section>
      <div class="info" :data-id="id">
        <div>
          <h1>{{ title }}</h1>
          <div style="display: flex">
            <p id="cantidad">Cantidad:</p>
            <div class="quantity">
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                :max="max"
              />
            </div>
          </div>
          <p>Precio Unitario: ${{ price }}</p>
        </div>
        <div class="purchase-info">
          <p>Precio Total: ${{ total }}</p>
          <BaseButton @click="deleteBook">
            <template>
              <BaseIcon class="icon" icon-name="trash" />
              Eliminar del Carrito
            </template>
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "BookInfo",
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      q: {
        type: Number,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      max: {
        type: String,
        required: true,
      },
    },
    data: function() {
      return {
        quantity: this.q,
      };
    },
    methods: {
      ...mapActions("books", [
        "updateTotal",
        "updateCart",
        "removeFromCart",
        "persistCart",
      ]),
      deleteBook: function() {
        this.removeFromCart({ id: this.id });
      },
    },
    computed: {
      ...mapGetters("books", ["getBookInCartById"]),
      total: function() {
        return parseInt(this.quantity || 0) * parseInt(this.price);
      },
    },
    watch: {
      // eslint-disable-next-line no-unused-vars
      quantity: function(newValue, oldValue) {
        const book = this.getBookInCartById(this.id);
        book.quantity = newValue || 0;
        this.updateCart(book).then(() => {
          this.updateTotal().then(() => this.persistCart());
        });
      },
    },
  };
</script>

<style scoped>
  p {
    font-weight: bold;
    font-size: large;
  }

  #cantidad {
    margin-right: 10px;
  }

  .quantity input {
    transition: all 500ms ease-in-out;
    width: 30px;
    height: 38px;
    line-height: 1.65;
    float: left;
    display: block;
    margin: 5px 0 0 0;
    padding: 0 0 0 10px;
    color: var(--text-color);
    background-color: var(--primary-accent);
    border: 1px solid var(--primary-variant);
    border-radius: 6px;
  }

  .quantity input:focus {
    outline: 0;
  }

  .info {
    width: 780px;
    display: flex;
    justify-content: space-between;
  }

  .purchase-info {
    text-align: center;
    padding: 2rem 0;
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
