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
      <h1>Harry Popotter y la Piedra Filosofal</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi
        sed velit rutrum cursus quis ac tellus. Nullam non leo at neque lobortis
        consectetur. Vestibulum eu nisl ut augue ultricies ullamcorper. In et
        dolor sit amet tortor tincidunt dapibus sed vel velit. Fusce eget odio
        sollicitudin, venenatis elit eget, cursus dui. Vestibulum vel eleifend
        eros. Nunc dolor sapien, tempus a massa ac, ornare sagittis neque.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas
        velit orci, aliquet sed mattis in, lacinia a elit.
      </p>
      <hr />
      <div class="purchase-info">
        <div>
          <p>Cantidad Disponible: 500</p>
          <p>Precio: $58.000</p>
        </div>
        <div class="add-to-cart">
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
  }
</style>
