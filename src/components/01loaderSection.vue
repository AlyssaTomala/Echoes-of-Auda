<template>
  <div class="loader" v-if="showLoader" ref="loader">
    <div id="loader-title">
      <h1>Origins of the Monumental Realm</h1>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    this.loaderanimation();
  },
  methods: {
    loaderanimation() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.showLoader = false;
        },
      });

      tl.from(this.$refs.loader, {
        duration: Infinity,
      }).to(this.$refs.loader, {
        backgroundColor: "#073c15",
        y: "-100%",
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
      });
    },
  },
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #3b6045;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  opacity: 1;
}

#loader-title {
  font-family: "Wigrum";
  font-size: 35px;
  letter-spacing: 2px;
  color: white;
  text-align: center;
  margin-top: 50px;
}
</style>
