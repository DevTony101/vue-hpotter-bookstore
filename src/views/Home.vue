<template>
  <div>
    <section class="main-section">
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
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
