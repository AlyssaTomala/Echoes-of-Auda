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

    this.cardsAnimation();
    // this.onHoverEnd();
    // this.onHoverStart();

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
        width: "20vw",
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
            background:
              "radial-gradient(111.45% 111.45% at 50% 32.22%, #8F917D 0%, #909B8D 100%)",
            transformOrigin: "center bottom",
            transform: "scaleX(1)",
            opacity: 2,
            y: 0,
            duration: 2,
            delay: card.delay,
            ease: "elastic.out(0.3,0.4)",
            scrollTrigger: {
              trigger: ".cards-container",
              start: "top 70%",
              end: "30% bottom",
              once: true,
              markers: true,
              scrub: 1,
            },
          }
        );
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

  z-index: 100;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.card:hover {
  cursor: pointer;
  position: relative;
  z-index: 2222;
}

.auda-img {
  position: absolute;

  object-fit: cover;
}

.card-smiling img {
  width: 32vw;
  left: -5vw;
}

.card-jumping img {
  width: 30vw;
  bottom: 2vh;
}

.card-hanging img {
  width: 25vw;
  top: 3vh;
  right: 0;
}
</style>
