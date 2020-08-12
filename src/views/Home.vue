<template>
  <div>
    <section class="main-section">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :title="book.title"
        :description="book.description"
        :price="book.price"
        :cover="book.cover"
        :initial-quantity="book.quantity"
      ></BookCard>
    </section>
  </div>
</template>

<script>
  import BookCard from "../components/BookCard";
  import { mapState } from "vuex";
  import store from "../store/index";

  function getBooks(next) {
    store.dispatch("books/fetchBooks").then(() => {
      next();
    });
  }

  export default {
    components: { BookCard },
    computed: mapState("books", ["books"]),
    beforeRouteEnter(routeTo, routeFrom, next) {
      getBooks(next);
    },
    beforeRouteUpdate(routeTo, routeFrom, next) {
      getBooks(next);
    },
  };
</script>

<style scoped>
  .main-section {
    margin: 1.5rem 1rem;
    padding: 0 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
</style>
