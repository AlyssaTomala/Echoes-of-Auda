<template>
  <div class="header-button">
    <p>Click on the orb to discover the DLC</p>

    <div class="button-border">
      <button id="buttonOrb" @click="$emit('hide-header')"></button>
      <svg
        class="orb-star"
        width="81"
        height="81"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_67_484)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.1677 0.223755C18.1073 0.223755 0.223759 18.1073 0.223759 40.1677C0.223759 62.2282 18.1073 80.1117 40.1677 80.1117C62.2282 80.1117 80.1117 62.2282 80.1117 40.1677C80.1117 18.1073 62.2282 0.223755 40.1677 0.223755ZM36.3597 36.0703L39.7005 27.2969C39.864 26.8674 40.4715 26.8674 40.635 27.2969L43.9757 36.0703C44.0265 36.2036 44.1318 36.3088 44.2651 36.3596L53.0385 39.7003C53.4679 39.8639 53.4679 40.4714 53.0385 40.6349L44.2651 43.9756C44.1318 44.0264 44.0265 44.1317 43.9757 44.265L40.635 53.0383C40.4715 53.4678 39.864 53.4678 39.7005 53.0383L36.3597 44.265C36.309 44.1317 36.2037 44.0264 36.0704 43.9756L27.297 40.6349C26.8676 40.4714 26.8676 39.8639 27.297 39.7003L36.0704 36.3596C36.2037 36.3089 36.309 36.2036 36.3597 36.0703Z"
            fill="#FFFFEA"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_67_484"
            x="-3.77624"
            y="-3.77625"
            width="87.8879"
            height="87.8879"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_67_484"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_67_484"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div class="button-background-animation"></div>
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
  opacity: 0;
  cursor: pointer;
  width: 4.5vw;
  aspect-ratio: 1/1;
  border-radius: 500px;
  border: none;
  z-index: 3;
}

.orb-star {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

#buttonOrb:hover .orb-star {
  transform: scale(1.25);
}

.button-border {
  width: 4.8vw;
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
  transform: scale(1.25);
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}

.header-button p {
  font-family: "Wigrum";
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.44);
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
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
    opacity: 0;
  }

  50% {
    scale: 1;
    opacity: 1;
  }

  100% {
    scale: 0.7;
    opacity: 0;
  }
}

.button-background-animation {
  width: 5.3vw;
  aspect-ratio: 1/1;
  border-radius: 500px;
  position: absolute;
  z-index: -1;

  border: 4px solid rgb(255, 255, 255);
  filter: blur(8px);
  animation: backgroundAura 2s ease-in-out infinite;
}

.orb-star {
  position: absolute;
  z-index: 2;
  scale: 0.85;
}
</style>
