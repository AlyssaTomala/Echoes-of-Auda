<template>
  <div class="header-section" ref="header">
    <div ref="titleHeader">
      <h2>
        <animationTitle texte="Echoes of Auda" />
      </h2>
      <h1>Origins of the Monumental Realm</h1>
    </div>
    <orbHeaderButton @hide-header="hideHeader" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import orbHeaderButton from "./02orbHeaderButton.vue";
import animationTitle from "./00animationTitle.vue";

export default {
  mounted() {
    this.disableScroll();
  },
  components: {
    animationTitle,
    orbHeaderButton,
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
    enableScroll() {
      document.body.style.overflow = "visible";
    },
    hideHeader() {
      gsap.to(this.$refs.header, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => {
          this.$refs.header.style.display = "none";
          this.enableScroll();
        },
      });
    },
  },
};
</script>

<style scoped>
.header-section {
  background-color: rgb(51, 66, 49);
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.header-section h1,
h2 {
  font-family: "Wigrum";
  font-size: 60px;
  opacity: 1;
  letter-spacing: 2px;
  color: rgb(253, 243, 243);
  text-align: center;
  text-shadow: 0.2rem 0.2rem 4rem rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 23.3vh;
  opacity: 1;
}

h2 {
  opacity: 1;
  font-size: 40px;
}
</style>
