<template>
  <div class="fond">
    <div class="transition-container">
      <div class="texte" ref="texte">A giant world awaits</div>
      <div class="transition-img"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  methods: {
    enableScrollY() {
      document.body.style.overflowY = "visible";
    },
    disableScroll() {
      document.body.style.overflow = "hidden";
    },

    worldTextTransition() {
      gsap.to(this.$refs.texte, {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        // faut mettre l'img ici, dans la variblee pour que ca apparaisse après le texte
      });

      gsap.to(".transition-img", {
        opacity: 0,
        duration: 0.8,
        delay: 2,
        background: "rgba(0, 255, 255, 1)",
      });
    },
  },

  mounted() {
    this.worldTextTransition();
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".fond", {
    //   scrollTrigger: {
    //     trigger: ".auda-presentaiton",
    //     start: "68.45% bottom",
    //     end: "68.45% bottom",
    //     scrub: 2,
    //     markers: true,

    //     onEnter: () => {
    //       this.disableScroll();
    //       this.worldTextTransition();
    //       setTimeout(() => {
    //         this.enableScrollY();
    //       }, 3000);
    //     },
    //   },
    //   opacity: 1,
    //   y: "-100vh",
    //   duration: 2,
    //   ease: "power1.inOut",
    // });

    gsap.to(this.$refs.texte, {
      color: "green",
      // y: -100,
      duration: 3,
      scrollTrigger: {
        trigger: ".fond",
        start: "30% 40%", // Adjust this value as necessary to control when the text starts to appear.
        end: "50% 20%",
        // markers: true,
      },
    });
  },
};
</script>

<style scoped>
.fond {
  opacity: 1;
  width: 100vw;
  height: 100%;
  position: relative;
  /* bottom: 9vh; */
  z-index: 9;
  background-image: url("../assets/imgs/grosArbre.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  transition: background-color 0.5s ease;
}

.transition-container {
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.transition-img {
  width: 100vw;
  opacity: 1;
  height: 100%;
  position: relative;
  /* bottom: 320vh; */
  /* top: 290vh; */
  z-index: 200;

  background-color: rgba(0, 255, 255, 1);
}

.texte {
  opacity: 1;
  font-size: 3em;
  color: rgb(255, 255, 255);
  position: relative;
  top: 20%;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.44);
  text-align: center;

  z-index: 1000;
}
</style>
