<template>
  <div class="world-sections-container">
    <div class="world-first-section-container">
      <worldTransition :startAnimation="startWorldTransition" />
    </div>
    <p class="world-text">Discover the origins</p>

    <div class="world-second-section-container" ref="lol">
      <worldFooter />
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
import worldTransition from "./worldTransition.vue";
import worldFooter from "./worldFooter.vue";

export default {
  components: {
    worldTransition,
    worldFooter,
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".auda-presentation", {
      scrollTrigger: {
        trigger: ".auda-presentation",
        start: "bottom bottom",
        end: "center top",
        scrub: 1,
      },
      opacity: 0,
      zIndex: "-5",
    });

    gsap.fromTo(
      ".world-sections-container",
      {
        y: "0vh",
        autoAlpha: 1,
      },
      {
        y: "-120vh",
        autoAlpha: 1,
        zIndex: 333333,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ".auda-presentation",
          start: "top top",
          scrub: 2,
        },
      }
    );

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

      transformOrigin: "center center",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".world-second-section-container",
        start: "-90% bottom",
        end: "-70% 60%",
        scrub: 1.5,
      },
    });

    gsap.to(".world-first-section-container", {
      transformOrigin: "center center",

      scrollTrigger: {
        trigger: ".world-second-section-container",
        start: "-90% bottom",
        end: "-70% 60%",
        scrub: 1,
      },
    });
  },
};
</script>
<style scoped>
.world-sections-container {
  opacity: 0;
  height: 100%;
  top: 130vh;
  position: relative;
  background-color: rgb(255, 255, 255, 0.5);
}

.world-first-section-container {
  width: 100vw;

  height: 200vh;
  margin-bottom: 10vh;
  overflow: hidden;
  background-color: rgb(125, 108, 104, 0.5);
}

.world-second-section-container {
  width: 100vw;
  height: 100vh;
  scale: 0.95;
  overflow: hidden;
  margin-top: 10vh;
  padding-bottom: 20vh;
  border-radius: 20px;
  background-color: rgba(1, 111, 1, 0.5);
}

p {
  opacity: 1;
  font-family: "wigrum";
  font-size: 50px;
  text-align: center;
  position: relative;
  padding-bottom: 9vh 0;
  color: #766848;
}
</style>
