<template>
  <div>
    <button
      v-on="$listeners"
      class="button"
      :class="buttonClass"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </div>
</template>

<script>
  export default {
    name: "BaseButton",
    inheritAttrs: false,
    props: {
      buttonClass: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    padding: 0 40px;
    background: var(--button-color);
    color: var(--text-color);
    border: none;
    border-radius: 6px;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: background-color 500ms ease-in-out, color 500ms ease-in-out,
      transform 0.2s linear;
  }

  .button:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }

  .button:active {
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: none;
  }

  .button:focus {
    outline: 0;
  }

  .button:disabled {
    -webkit-transform: scale(1);
    transform: scale(1);
    background: rgba(0, 0, 0, 0.5) !important;
  }

  .button + .button {
    margin-left: 1em;
  }

  .button.-fill-gradient {
    background: linear-gradient(to right, #16c0b0, #84cf6a);
    color: #ffffff;
  }

  .button.-fill-gray {
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 20px;
    fill: var(--text-color);
  }

  .purchase-button {
    width: 400px;
    display: initial;
    font-size: large;
    font-weight: bolder;
  }
</style>
