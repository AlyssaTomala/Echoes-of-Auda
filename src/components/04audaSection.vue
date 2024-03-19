<template>
  <div class="auda-section-container">
    <div class="card-container">
      <cardsAuda />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardsAuda from "./05cardsAuda.vue";

export default {
  components: {
    cardsAuda,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".auda-section-container", {
      scrollTrigger: {
        trigger: ".section-scroll-trigger",
        start: "center bottom",
        end: "60% 90%",
        scrub: 1,
      },
      duration: 1,
      y: "-100vh",
      ease: "power2.inOut",
    });

    // gsap.to(".auda-section-container", {
    //   scrollTrigger: {
    //     trigger: ".auda-section-container",
    //     start: "top center",
    //     end: "10% top",
    //     scrub: 1,
    //     markers: true,
    //   },
    //   rotate: 90,
    //   duration: 1,
    //   ease: "power2.inOut",
    // });
  },

  methods: {},
};
</script>

<style scoped>
.auda-section-container {
  width: 100vw;
  height: 200vh;
  background-color: #d2d9d1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  width: 100vw;
  height: 100vh;
  background-color: #496246;
  position: relative;
  bottom: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .carre {
  width: 100vw;
  height: 40vh;
  opacity: 0.2;
  background-color: green;
  position: relative;

  pointer-events: none;
}
.yep {
  width: 20vw;
  height: 30px;
  position: relative;

  opacity: 1;
  background-color: red;
} */
</style>
