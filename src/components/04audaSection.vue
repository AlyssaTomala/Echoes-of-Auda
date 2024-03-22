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

    this.initCardsAnimation();
  },

  methods: {
    initCardsAnimation() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".auda-section-container",
          start: "50% center",
          once: true,
          zIndex: 22222200,
          onEnter: () => {
            gsap.to(".auda-section-container", {
              autoAlpha: 1,
              opacity: 1,
              onComplete: () => this.animateCards(),
            });
          },
        },
      });
    },

    animateCards() {
      const cards = gsap.utils.toArray(".auda-cards");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 250,
          },
          {
            autoAlpha: 1,
            y: 0,

            delay: index * 0.25,
            duration: 1.5,
            ease: "elastic.out(0.6,0.5)",
          }
        );
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
  opacity: 1;
  z-index: 10;
  background-color: #fbf9ec;
}
</style>
