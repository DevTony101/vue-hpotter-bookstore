<template>
  <div>
    <img :src="source" alt="404" />
    <h1>
      Oops! No hemos podido encontrar la página que estabas buscando!
    </h1>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "NotFound",
    mounted() {
      this.fetchImage();
    },
    data: function() {
      return {
        source: "",
      };
    },
    methods: {
      fetchImage: function() {
        let accentColor = getComputedStyle(document.body)
          .getPropertyValue("--text-color")
          .substr(3);
        console.log("Thanks to blairlee227 for the image!");
        this.source = `https://illustatus.herokuapp.com/?title=&fill=%23${accentColor}`;
      },
    },
    computed: mapState(["colorTheme"]),
    watch: {
      // eslint-disable-next-line no-unused-vars
      colorTheme: function(value, oldValue) {
        this.fetchImage();
      },
    },
  };
</script>

<style scoped>
  div {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }
</style>
