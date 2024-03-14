<template>
  <div class="container">
    <div class="cards-section">
      <cardsAuda />
    </div>
  </div>
</template>
<script>
import cardsAuda from "./05cardsAuda.vue";

export default {
  components: {
    cardsAuda,
  },
};
</script>
<style scoped>
.container {
  height: 300vh;
  margin-top: 50vh;
  background-color: rgb(220, 220, 220);
}
</style>
