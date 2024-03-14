<template>
  <div>nul</div>
  <!-- <div class="yep">d</div> -->
  <div class="carre"></div>
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default {
//   mounted() {
//     gsap.registerPlugin(ScrollTrigger);
//     this.carreAnimation();
//   },
//   methods: {
//     carreAnimation() {
//       gsap.from(".carre", {
//         opacity: 0,
//         scale: 0,
//         backgroundColor: "#f9f9f9",
//       });
//       gsap.to(".carre", {
//         scrollTrigger: {
//           trigger: ".yep",
//           start: "top bottom",
//           end: "bottom 10%",
//           scrub: 2,
//         },

//         backgroundColor: "#20f029",
//         opacity: 0.8,
//         scale: 1,
//       });
//     },
//   },
// };
</script>

<style scoped>
.carre {
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
}
</style>
