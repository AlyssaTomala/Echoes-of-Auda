<template>
  <div class="outfit-container">
    <div class="outfit-text-container">
      <h3 class="outfit-title">new outfit</h3>
      <p class="outfit-text">
        In "Auda: Origins of the Monumental Realm", our heroine, Auda, is given
        a renewed outfit, specially designed for exploring the monumental world
        from which her mystical companion originates.
      </p>
    </div>
    <div class="outfit-img-container"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    this.OutfitTextAnimation();
  },
  methods: {
    OutfitTextAnimation() {
      gsap.to(".outfit-text", {
        scrollTrigger: {
          trigger: ".outfit-text",
          start: "top bottom",

          scrub: 1,
          onEnter: () => {
            this.animateText();
          },
        },
        delay: 2,
      });

      gsap.to(".outfit-title", {
        scrollTrigger: {
          trigger: ".outfit-title",
          start: "top bottom",
          end: "center center",

          scrub: 1,
          onEnter: () => {
            this.animateTitle();
          },
        },
        delay: 1,
      });
    },

    animateText() {
      const split = new SplitText(".outfit-text", { type: "lines" });
      const lines = split.lines;

      gsap.from(lines, {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
      });
    },

    animateTitle() {
      let split = new SplitText(".outfit-title", { type: "chars, words" });

      gsap.from(split.chars, {
        duration: 0.8,
        opacity: 0,
        scale: [0.5, 1],
        y: 20,
        rotationX: 20,
        transformOrigin: "50% 50% -50",
        ease: "elastic.out(0.2, 0.75)",
        stagger: 0.03,
        delay: 0.1,
      });
    },
  },
};
</script>

<style scoped>
.outfit-container {
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  bottom: 18vh;
  z-index: -2;
  background-color: rgba(255, 192, 203, 0);
}

.outfit-text-container {
  width: 40vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  margin-left: 16vw;
  margin-bottom: 22vh;
}

.outfit-text-container h3 {
  font-size: 2em;
  color: #766848;
  opacity: 0.9;
  font-weight: 300;
  text-transform: uppercase;
}

.outfit-text-container p {
  font-size: 2.8em;
  color: #766848;
  line-height: 55px;
}

.outfit-img-container {
  height: 100%;
  position: absolute;
  right: -1vh;
  top: 22vh;
  background-image: url("../assets/imgs/img-outfit-auda.webp");
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 80vw;
}
</style>
