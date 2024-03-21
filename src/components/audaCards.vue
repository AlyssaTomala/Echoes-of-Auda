<template>
  <div class="cards-container">
    <div
      class="card card-smiling"
      @mouseenter="onHoverStartSmiling('.card-smiling')"
      @mouseleave="onHoverEndSmiling('.card-smiling')"
    >
      <img
        class="auda-img auda-img-smiling"
        src="../assets/imgs/Audaone.png"
        alt="auda"
      />
    </div>
    <div
      class="card card-jumping"
      @mouseenter="onHoverStartJumping('.card-jumping')"
      @mouseleave="onHoverEndJumping('.card-jumping')"
    >
      <img
        class="auda-img auda-img-jumping"
        src="../assets/imgs/audajumping.png"
        alt="auda"
      />
    </div>
    <div
      class="card card-hanging"
      @mouseenter="onHoverStartHanging('.card-hanging')"
      @mouseleave="onHoverEndHanging('.card-hanging')"
    >
      <img
        class="auda-img auda-img-hanging"
        src="../assets/imgs/audatrhee.png"
        alt="auda"
      />
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
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
        width: "21vw",

        duration: 0.5,
        opacity: 1,
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
        width: "20vw",
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
        width: "21vw",
        duration: 0.5,

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
        width: "20vw",
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
        width: "21vw",
        duration: 0.5,

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
        width: "20vw",
        ease: "power2.inOut",
      });

      gsap.to(".card-hanging, .card-jumping", {
        transformOrigin: "center center",
        opacity: 1,
        scale: 1,
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  opacity: 1;
}

.card {
  opacity: 1;
  transform: scale(0);
  width: 20vw;
  height: 70vh;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 1%;

  background: linear-gradient(
    267deg,
    rgba(209, 211, 188, 0.8) -95.46%,
    rgba(144, 155, 141, 0.8) 133.85%
  );
  border: 3px rgb(254, 255, 231) solid;

  backdrop-filter: blur(2px);
  z-index: 100;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.card:hover {
  cursor: pointer;
  position: relative;
  z-index: 2222;
  transition: background 1s ease-in-out;
  background: linear-gradient(
    267deg,
    rgba(209, 211, 188, 1) -95.46%,
    rgba(144, 155, 141, 1) 133.85%
  );
}

.auda-img {
  position: absolute;
  pointer-events: none;
  object-fit: cover;
}

.card-smiling img {
  width: 28vw;
  left: -5vw;
}

.card-jumping img {
  width: 30vw;
  top: -18vh;
}

.card-hanging img {
  width: 25vw;
  top: -3vh;
  right: 0;
}
</style>
