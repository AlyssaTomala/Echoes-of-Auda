<template>
  <div class="auda-section-container">
    <div class="auda-card-container">
      <cardsAuda />
    </div>
    <div class="auda-presentation">
      <audaOutfit />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardsAuda from "./audaCards.vue";
import audaOutfit from "./audaOutfit.vue";

export default {
  components: {
    cardsAuda,
    audaOutfit,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".auda-section-container", {
      scrollTrigger: {
        trigger: ".section-container",
        scrub: 2,
        start: "100% bottom",
        end: "bottom 99%",
      },
      opacity: 1,
      zIndex: 202020,

      ease: "power2.inOut",
    });

    // this.cardsAnimation();

    // gsap.to(".cards-container", {
    //   scrollTrigger: {
    //     trigger: ".auda-card-container",
    //     start: "top 10%",
    //     end: "center 60%",
    //     scrub: 2,
    //     markers: true,
    //     duration: "3s",
    //   },
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   onEnter: () => {
    //     this.cardsAnimation();
    //   },
    // });

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

    // gsap.to(".auda-presentation", {
    //   scrollTrigger: {
    //     trigger: ".auda-card-container",
    //     start: "38% center",
    //     end: "40% center",
    //     scrub: 1,
    //     // markers: true,
    //   },
    //   opacity: 1,

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
  height: 300vh;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.auda-card-container {
  width: 100vw;
  height: 80vh;
  background-color: rgba(0, 0, 255, 0);
  position: relative;
  display: flex;
  top: 5vh;
  z-index: 2;
  justify-content: center;
  align-items: center;
}

.auda-presentation {
  width: 100vw;
  height: 120vh;
  position: absolute;
  bottom: -30vh;
  background-color: #fbf9ec;
}

/* .auda-presentation {
  width: 100vw;
  height: 140vh;
  background-color: #385135;
  position: relative;
  z-index: 902;
  top: 18vh;
  opacity: 1;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
} */
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
