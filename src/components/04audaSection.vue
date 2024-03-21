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

    this.cardsAnimation();

    gsap.to(".auda-section-container", {
      scrollTrigger: {
        trigger: ".section-container",
        scrub: 2,
        start: "100% bottom",
        end: "bottom 99%",

        onComplete: () => {
          this.cardsAnimation();
        },
      },
      pointerEvents: "all",
      autoAlpha: 1,
      opacity: 1,
      zIndex: 2020202,
      ease: "power2.inOut",
    });
  },

  methods: {
    cardsAnimation() {
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".section-container",
          start: "top 50%",
          onEnter: () => {
            const cards = [
              { selector: ".card-smiling", delay: 0.25 },
              { selector: ".card-jumping", delay: 0.5 },
              { selector: ".card-hanging", delay: 0.75 },
            ];

            cards.forEach((card) => {
              gsap.fromTo(
                card.selector,
                {
                  y: "50vh",
                },
                {
                  transformOrigin: "center bottom",
                  transform: "scaleX(1)",
                  opacity: 1,
                  y: 0,
                  duration: 1.75,
                  delay: card.delay,
                  ease: "power2.inOut",
                }
              );
            });
          },
        },
      });
    },
  },
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
  pointer-events: none;
}

.auda-card-container {
  width: 100vw;
  height: 80vh;

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
  z-index: -3;
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
