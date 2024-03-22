<template>
  <div class="video-background">
    <video ref="videoHeader" autoplay loop muted playsinline>
      <source
        :src="require('@/assets/imgs/video-header.webm')"
        type="video/webm"
      />
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  </div>
  <div class="header-section" ref="header">
    <div ref="titleHeader">
      <h2 ref="h2Title">
        <animationTitle v-if="showAnimationTitle" titleText="Echoes of Auda" />
      </h2>
      <h1>Origins of the Monumental Realm</h1>
    </div>
    <buttonOrb @hide-header="hideHeader" />
    <div class="date-text">
      <p>Coming in Spring 2024 on PC and Nintendo Switch</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import buttonOrb from "./buttonOrb.vue";
import animationTitle from "./animationTitle.vue";
export default {
  data() {
    return {
      showAnimationTitle: false,
    };
  },
  mounted() {
    this.disableScroll();
    setTimeout(() => {
      this.showAnimationTitle = true;
    }, 2800);

    gsap.to(".date-text", {
      duration: 1,
      delay: 4,
      opacity: 1,
      ease: "power1.inOut",
    });
  },

  components: {
    animationTitle,
    buttonOrb,
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
    enableScroll() {
      document.body.style.overflow = "visible";
    },
    enableScrollX() {
      document.body.style.overflowY = "visible";
    },

    opacityVideo() {
      gsap.to(".video-background", {
        duration: 1,
        opacity: 0,
        autoAlpha: 0,
        ease: "power1.inOut",
      });
      gsap.to(this.$refs.videoHeader, {
        duration: 1,
        opacity: 0,
        autoAlpha: 0,
        ease: "power1.inOut",
        onComplete: () => {
          this.$refs.videoHeader.style.display = "none";
          this.enableScrollX();
        },
      });
    },

    hideHeader() {
      gsap.to(this.$refs.header, {
        duration: 0.5,
        opacity: 0,
        autoAlpha: 0,
        ease: "power1.inOut",
        onComplete: () => {
          this.opacityVideo();
        },
      });
    },
  },
};
</script>

<style scoped>
.video-background {
  position: fixed; /* ou 'absolute' selon le besoin */
  width: 100vw;
  height: 100vh;
  z-index: 10; /* Assurez-vous qu'elle est derrière d'autres éléments */
  overflow: hidden;
}

.video-background video {
  width: 100vw;
  top: 0;
}

.header-section {
  background-color: rgb(51, 66, 49, 0);
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 8222220;
}

.header-section h1,
h2 {
  font-family: "Wigrum";
  font-size: 60px;
  opacity: 1;
  letter-spacing: 2px;
  color: rgb(253, 243, 243);
  text-align: center;
  position: relative;
  bottom: 19.8vh;
  opacity: 1;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.44);
}

h2 {
  opacity: 1;
  font-size: 40px;
}

.date-text {
  font-family: "Wigrum";
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  color: rgb(253, 243, 243);
  position: relative;
  top: 30vh;
  opacity: 0;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
}
</style>
