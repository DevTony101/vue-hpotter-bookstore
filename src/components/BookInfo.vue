<template>
  <div class="card rounded">
    <section>
      <div class="info">
        <div>
          <h1>Harry Potter y la Piedra Filososal</h1>
          <div style="display: flex">
            <p id="cantidad">Cantidad:</p>
            <div class="quantity">
              <input type="number" min="1" max="9" />
            </div>
          </div>
          <p>Precio: $58.000</p>
        </div>
        <div class="purchase-info">
          <p>Precio Total: $58.000</p>
          <BaseButton>
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
  export default {
    name: "BookInfo",
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
    width: 940px;
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
