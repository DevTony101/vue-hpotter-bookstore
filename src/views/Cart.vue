<template>
  <div>
    <div class="main-section">
      <h1>Carrito de Compras</h1>
      <div class="cart" v-if="!cartIsEmpty">
        <div>
          <BookInfo
            v-for="book in cart"
            :key="book.id"
            :id="book.id"
            :title="book.title"
            :q="book.quantity"
            :price="book.price"
          ></BookInfo>
        </div>
        <div class="purchase-info">
          <div style="text-align: center">
            <p id="msg-total">Valor Total de Compra:</p>
            <p id="price">${{ totalPrice }}</p>
            <div class="action-buttons">
              <BaseButton buttonClass="action-button success" @click="confirm">
                <template>
                  Confirmar Compra
                </template>
              </BaseButton>
              <BaseButton buttonClass="action-button" @click="cancel">
                <template>
                  Cancelar Compra
                </template>
              </BaseButton>
            </div>
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
  import { mapState, mapGetters, mapActions } from "vuex";

  export default {
    name: "Cart",
    mounted() {
      this.updateTotal();
    },
    components: { BookInfo },
    methods: {
      ...mapActions("books", [
        "updateTotal",
        "restoreCart",
        "putBook",
        "getBookById",
        "fetchBooks",
      ]),
      cancel: function() {
        this.$swal({
          title: "¿Está Seguro?",
          text: "Esta acción vaciará su carrito de compra!",
          icon: "warning",
          buttons: ["No, mantener libros", "Si, cancelar compra"],
          dangerMode: true,
        }).then(willDelete => {
          if (willDelete) {
            this.restoreCart().then(() => {
              this.$swal("Listo!", "Su compra se ha cancelado", {
                icon: "success",
              });
            });
          }
        });
      },
      confirm: function() {
        this.$swal({
          title: "¿Está Seguro?",
          icon: "warning",
          buttons: ["No, quiero seguir buscando", "Si, confirmar compra"],
        }).then(confirm => {
          if (confirm) {
            for (let book of this.cart) {
              this.getBookById(book.id).then(original => {
                this.putBook({
                  ...original,
                  quantity: (
                    parseInt(original.quantity) - parseInt(book.quantity)
                  ).toString(),
                }).then(() => this.fetchBooks());
              });
            }
            this.restoreCart().then(() => {
              this.$router.push({
                name: "Home",
                params: { showSuccess: true },
              });
            });
          }
        });
      },
    },
    computed: {
      ...mapState("books", ["cart", "totalPrice"]),
      ...mapGetters("books", ["getBookInCartById", "cartIsEmpty"]),
    },
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

  .action-buttons {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #msg-total {
    color: var(--word-emphasis);
    margin: 0;
  }

  #price {
    font-size: xx-large;
    font-weight: bold;
  }

  #msg-empty {
    font-size: xx-large;
    text-align: center;
    color: var(--word-emphasis);
    margin-top: 50px;
  }
</style>
