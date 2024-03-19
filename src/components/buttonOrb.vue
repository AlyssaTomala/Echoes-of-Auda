<template>
  <div class="header-button">
    <p>Click on the orb to discover the DLC</p>

    <div class="button-border">
      <div class="button-background-animation"></div>

      <button id="buttonOrb" @click="$emit('hide-header')"></button>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  mounted() {
    gsap.to("#loader", {
      duration: 2,
      opacity: 0,
      onComplete: () => {
        this.startAnimations();
      },
    });
  },
  methods: {
    startAnimations() {
      gsap.from(".button-border", {
        duration: 1,
        delay: 2.2,
        opacity: 0,
        ease: "power1.inOut",
      });

      gsap.from(".header-button p", {
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: "power1.inOut",
      });
    },
  },
};
</script>

<style scoped>
.header-button {
  width: 100%;
  position: absolute;

  top: 45vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#buttonOrb {
  opacity: 1;
  cursor: pointer;
  width: 2.7vw;
  aspect-ratio: 1/1;
  border-radius: 500px;
  border: none;

  transition: transform 0.3s ease;
}

#buttonOrb:hover {
  transform: scale(1.16);
  background-color: rgb(255, 255, 255);
}

.button-border {
  width: 3vw;
  z-index: 950;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 500px;
  border: 1.5px solid rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
}

.button-border:hover {
  transform: scale(1.05);
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}

.header-button p {
  font-family: "Wigrum";
  font-size: 16px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  padding-bottom: 5px;
  animation: moving 1.5s ease-in-out infinite;
}

@keyframes moving {
  0% {
    transform: translateY(1px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(1px);
  }
}

@keyframes backgroundAura {
  0% {
    scale: 0.7;
  }

  50% {
    scale: 0.82;
  }

  100% {
    scale: 0.7;
  }
}

.button-background-animation {
  width: 3.3vw;
  aspect-ratio: 1/1;
  border-radius: 500px;
  position: absolute;
  z-index: -1;
  background-color: rgb(255, 255, 255);
  opacity: 0.7;
  filter: blur(8px);
  animation: backgroundAura 2s ease-in-out infinite;
}
</style>
