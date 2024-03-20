<template>
  <div class="world-sections-container">
    <div class="world-first-section-container">
      <worldTransition />
    </div>
    <p class="world-text">Titre</p>

    <div class="world-second-section-container" ref="lol">
      <worldFooter />
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import worldTransition from "./worldTransition.vue";
import worldFooter from "./worldFooter.vue";

export default {
  components: {
    worldTransition,
    worldFooter,
  },

  methods: {
    enableScrollY() {
      document.body.style.overflowY = "visible";
    },
    disableScroll() {
      document.body.style.overflow = "hidden";
    },

    ScrollStopOnSecondSection() {
      ScrollTrigger.create({
        trigger: ".world-second-section-container",
        start: "-36% bottom",
        end: "-36% bottom",
        markers: true,
        duration: 1,
        onEnter: () => this.disableScroll(),
      });
    },
  },

  mounted() {
    this.enableScrollY();

    // this.ScrollStopOnSecondSection();
    // this.worldTextTransition();
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".world-first-section-container", {});

    gsap.to(".world-sections-container", {
      scrollTrigger: {
        trigger: ".auda-presentation",
        start: "10% top",
        end: "68.8 bottom",
        scrub: 2,

        // markers: true,
        onEnter: () => {
          this.disableScroll();
          // this.worldTextTransition();
          setTimeout(() => {
            this.enableScrollY();
          }, 3000);
        },
      },
      opacity: 1,
      zIndex: 333333,
      y: "-110vh",
      duration: 3,

      ease: "circ.out",
    });

    gsap.to(".world-first-section-container", {
      scaleX: 0.95,
      transformOrigin: "center center",
      borderRadius: "20px",

      scrollTrigger: {
        trigger: ".world-first-section-container",
        start: "40% bottom",
        end: "60% 90%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.to(".world-second-section-container", {
      scaleX: 1,
      scaleY: 1.05,
      y: -350,
      transformOrigin: "center center",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".world-second-section-container",
        start: "-90% bottom",
        end: "-70% 60%",
        scrub: 1.5,
        markers: false,
        // markers: true,
      },
    });

    gsap.to(".world-first-section-container", {
      transformOrigin: "center center",

      y: -400,
      scrollTrigger: {
        trigger: ".world-second-section-container",
        start: "-90% bottom",
        end: "-70% 60%",
        scrub: 1,
      },
    });

    gsap.from(".world-text", {
      opacity: 0,
    });

    gsap.to(".world-text", {
      color: "green",
      opacity: 1,
      y: -360,
      scrollTrigger: {
        trigger: ".world-second-section-container",
        start: "-90% bottom",
        end: "-20% bottom",
        scrub: 1,
      },
    });

    // gsap.to(".world-text", {
    //   transformOrigin: "center center",

    //   scrollTrigger: {
    //     trigger: ".world-text",
    //     start: "-280% bottom",
    //     end: "-250% 90%",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });
  },
};
</script>
<style scoped>
.world-sections-container {
  opacity: 0.2;
  height: 100%;
  top: 130vh;
  position: relative;
  background-color: rgb(212, 212, 212);
}

.world-first-section-container {
  width: 100vw;
  height: 250vh;
  overflow: hidden;
  background-color: rgb(125, 108, 104, 1);
}

.world-second-section-container {
  width: 100vw;
  height: 100vh;
  scale: 0.95;
  overflow: hidden;
  border-radius: 20px;
  background-color: rgba(1, 111, 1, 1);
}

p {
  opacity: 0.5;

  font-family: "wigrum";
  font-size: 50px;
  text-align: center;
  padding: 6vh 0;
  color: blue;
}
</style>
