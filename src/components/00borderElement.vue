<template>
  <div class="cadre-container">
    <div class="cadre"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.to(".cadre", {
      opacity: 0.8,
      duration: 0.5,
      delay: 1.2,
    });
  },
};
</script>

<style scoped>
.cadre-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 22222200;
  color: wheat;
  pointer-events: none;
}
.cadre {
  width: 98%;
  height: 96%;
  border-radius: 10px;
  border: 2px solid rgb(255, 240, 240);
  opacity: 0; /* Définissez l'opacité initiale à 0 pour cacher l'élément */
}
</style>
