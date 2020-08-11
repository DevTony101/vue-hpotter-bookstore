<template>
  <div>
    <section class="main-section">
      <BookCard id="1"></BookCard>
      <BookCard id="2"></BookCard>
      <BookCard id="3"></BookCard>
      <BookCard id="4"></BookCard>
      <BookCard id="5"></BookCard>
      <BookCard id="6"></BookCard>
      <BookCard id="7"></BookCard>
    </section>
  </div>
</template>

<script>
  import BookCard from "../components/BookCard";
  export default {
    components: { BookCard },
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
