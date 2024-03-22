<template>
  <div class="frame-container">
    <div class="frame"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.to(".frame", {
      opacity: 0.8,
      duration: 0.5,
      delay: 1.2,
    });
  },
};
</script>

<style scoped>
.frame-container {
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
.frame {
  width: 98%;
  height: 96%;
  border-radius: 10px;
  border: 2px solid rgb(255, 240, 240);
  opacity: 0;
}
</style>
