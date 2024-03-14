<template>
  <div class="cards-container">
    <div class="card card-smiling">
      <div class="img"></div>
      <div class="text">Lol</div>
    </div>
    <div class="card card-jumping"></div>
    <div class="card card-hanging"></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.setupScrollTrigger();
  },

  methods: {
    cardsAnimation() {
      const cards = [
        { selector: ".card-smiling", delay: "1s" },
        { selector: ".card-jumping", delay: "1.2s" },
        { selector: ".card-hanging", delay: "1.5s" },
      ];

      cards.forEach((card) => {
        gsap.to(card.selector, {
          backgroundColor: "rgba(115, 164, 213)",
          transformOrigin: "center bottom",
          transform: "scaleX(1)",
          opacity: 1,
          duration: 4,
          delay: card.delay,
          ease: "elastic.out(0.6,0.5)",
        });
      });
    },

    setupScrollTrigger() {
      ScrollTrigger.create({
        trigger: ".section3",
        start: "60% bottom",

        markers: true,
        onEnter: () => this.cardsAnimation(),
      });
    },
  },
};
</script>
<style scoped>
.cards-container {
  width: 70vw;
  height: 50vh;
  opacity: 1;
  background-color: rgba(168, 32, 32, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  left: 12%;
  top: 30vh;
}

.card {
  animation: hoverEffectOut 0.5s ease-in-out forwards;
  opacity: 1;
  transform: scale(0);
  aspect-ratio: 1/1.5;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 2%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.card:hover {
  cursor: pointer;
  animation: hoverEffect 0.5s ease-in-out forwards;
}

@keyframes hoverEffect {
  0% {
    opacity: 1;
    width: 25vw;
  }

  100% {
    transform-origin: center bottom;
    transform: scale(1.02);
    background-color: rgb(238, 238, 238);
    width: 25.5vw;
    margin: 2px;
    opacity: 1;
    position: relative;
    z-index: 2222;
    backdrop-filter: blur(120%);
  }
}

@keyframes hoverEffectOut {
  0% {
    transform-origin: center bottom;
    transform: scale(1.02);
    background-color: rgb(238, 238, 238);
    width: 25.5vw;
    margin: 2px;
    opacity: 1;
    position: relative;
    z-index: 2222;
    backdrop-filter: blur(120%);
  }

  100% {
    opacity: 1;
    width: 25vw;
  }
}

.img {
  width: 90px;
  height: 80px;
  background-color: blue;
}
</style>
