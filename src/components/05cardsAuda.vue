<template>
  <div class="cards-container">
    <div
      class="card card-smiling"
      @mouseenter="onHoverStartSmiling('.card-smiling')"
      @mouseleave="onHoverEndSmiling('.card-smiling')"
    >
      <!-- <div class="img"></div>
      <div class="text">Lol</div> -->
    </div>
    <div
      class="card card-jumping"
      @mouseenter="onHoverStartJumping('.card-jumping')"
      @mouseleave="onHoverEndJumping('.card-jumping')"
    ></div>
    <div
      class="card card-hanging"
      @mouseenter="onHoverStartHanging('.card-hanging')"
      @mouseleave="onHoverEndHanging('.card-hanging')"
    ></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.cardsAnimation();
    this.onHoverEndJumping();
    this.onHoverStartJumping();
    this.onHoverEndHanging();
    this.onHoverStartHanging();
    this.onHoverEndSmiling();
    this.onHoverStartSmiling();
  },

  methods: {
    onHoverStartJumping(selector) {
      gsap.to(selector, {
        transformOrigin: "center center",
        width: "90vw",
        scaleY: 1.05,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(".card-smiling, .card-hanging", {
        transformOrigin: "center center",
        opacity: 0.5,
        scale: 0.9,
      });
    },

    onHoverEndJumping(selector) {
      gsap.to(selector, {
        scale: 1,
        width: "30vw",
        ease: "power2.inOut",
      });
      gsap.to(".card-smiling, .card-hanging", {
        transformOrigin: "center center",
        opacity: 1,
        scale: 1,
      });
    },

    onHoverStartHanging(selector) {
      gsap.to(selector, {
        transformOrigin: "center right",
        width: "90vw",
        duration: 0.5,

        scaleY: 1.05,
        ease: "power2.inOut",
      });

      gsap.to(".card-smiling, .card-jumping", {
        transformOrigin: "center center",
        opacity: 0.5,
        scale: 0.9,
      });
    },

    onHoverEndHanging(selector) {
      gsap.to(selector, {
        scale: 1,
        width: "30vw",
        ease: "power2.inOut",
      });

      gsap.to(".card-smiling, .card-jumping", {
        transformOrigin: "center center",
        opacity: 1,
        scale: 1,
      });
    },

    onHoverStartSmiling(selector) {
      gsap.to(selector, {
        transformOrigin: "center left",
        width: "90vw",
        duration: 0.5,
        scaleY: 1.05,
        ease: "power2.inOut",
      });

      gsap.to(".card-hanging, .card-jumping", {
        transformOrigin: "center center",
        opacity: 0.5,
        scale: 0.9,
      });
    },

    onHoverEndSmiling(selector) {
      gsap.to(selector, {
        scale: 1,
        width: "30vw",
        ease: "power2.inOut",
      });

      gsap.to(".card-hanging, .card-jumping", {
        transformOrigin: "center center",
        opacity: 1,
        scale: 1,
      });
    },

    cardsAnimation() {
      const cards = [
        { selector: ".card-smiling", delay: "1" },
        { selector: ".card-jumping", delay: "1.2" },
        { selector: ".card-hanging", delay: "1.5" },
      ];

      cards.forEach((card) => {
        gsap.fromTo(
          card.selector,
          {
            y: "50vh",
          },
          {
            backgroundColor: "rgba(115, 164, 213)",
            transformOrigin: "center bottom",
            transform: "scaleX(1)",
            opacity: 1,
            y: 0,
            duration: 2,
            delay: card.delay,
            ease: "elastic.out(0.3,0.4)",
          }
        );
      });
    },

    setupScrollTrigger() {
      ScrollTrigger.create({
        trigger: ".cards-container",
        start: "60% bottom",

        markers: false,
        onEnter: () => this.cardsAnimation(),
      });
    },
  },
};
</script>
<style scoped>
.cards-container {
  width: 80vw;
  height: 80vh;
  opacity: 1;
  background-color: rgba(168, 32, 32, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.card {
  /* animation: hoverEffectOut 0.5s ease-in-out forwards; */
  opacity: 1;
  transform: scale(0);
  width: 18vw;
  height: 70vh;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 1%;
  z-index: 2;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.card:hover {
  cursor: pointer;
  position: relative;
  z-index: 2222;
}

@keyframes hoverEffect {
  0% {
    opacity: 1;
    width: 30vw;
  }

  100% {
    transform-origin: center center;
    transform: scale(1.02);
    /* transform: scale(1.02); */

    /* margin: 2px; */
    opacity: 1;
    position: relative;
    z-index: 2222;
    backdrop-filter: blur(120%);
  }
}

@keyframes hoverEffectOut {
  0% {
    transform-origin: center center;
    transform: scale(1.02);

    /* margin: 2px; */
    opacity: 1;
    position: relative;
    z-index: 2222;
    backdrop-filter: blur(120%);
  }

  100% {
    opacity: 1;
    width: 30vw;
  }
}

.img {
  width: 90px;
  height: 80px;
  background-color: blue;
}
</style>
