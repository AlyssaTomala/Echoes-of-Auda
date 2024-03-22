<template>
  <div class="fond">
    <div class="transition-container">
      <div class="world-texte-transition" ref="worldText">
        Step into a world of wonders
      </div>
      <div class="transition-img">
        <svg
          class="transition-svg-star"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9673 1.22714C23.8038 0.797709 23.1962 0.797711 23.0327 1.22714L17.0992 16.8098C17.0484 16.9431 16.9431 17.0484 16.8098 17.0992L1.22714 23.0327C0.79771 23.1962 0.79771 23.8038 1.22714 23.9673L16.8098 29.9008C16.9431 29.9516 17.0484 30.0569 17.0992 30.1902L23.0327 45.7729C23.1962 46.2023 23.8038 46.2023 23.9673 45.7729L29.9008 30.1902C29.9516 30.0569 30.0569 29.9516 30.1902 29.9008L45.7729 23.9673C46.2023 23.8038 46.2023 23.1962 45.7729 23.0327L30.1902 17.0992C30.0569 17.0484 29.9516 16.9431 29.9008 16.8098L23.9673 1.22714Z"
            fill="url(#paint0_radial_67_514)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_67_514"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(23.5 23.5) rotate(90) scale(42.0151)"
            >
              <stop stop-color="#828778" />
              <stop offset="1" stop-color="#919789" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="scroll-svg-container">
      <svg
        class="scroll-down-svg"
        width="57"
        height="44"
        viewBox="0 0 57 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_122_6)">
          <path
            d="M48 9L29.3 33.9333C28.9 34.4667 28.1 34.4667 27.7 33.9333L9 9"
            stroke="url(#paint0_linear_122_6)"
            stroke-width="5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_122_6"
            x="-0.00012207"
            y="-0.000152588"
            width="57.0004"
            height="43.3335"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_122_6"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_122_6"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_122_6"
            x1="28"
            y1="-80.5"
            x2="31"
            y2="107"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.494664" stop-color="#FFFFF7" />
            <stop offset="1" stop-color="#95AD8A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="bottom-text">
      An immense realm, where <br />only winged beings can survive.
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    this.StarTransitionWorld();
    this.animateText();
    this.bottomTextAnimation();
  },

  methods: {
    StarTransitionWorld() {
      gsap.to(".transition-svg-star", {
        scrollTrigger: {
          trigger: ".world-first-section-container",
          start: "-10% bottom",
          end: "10% 50%",

          onEnter: () => {
            this.animateText();
          },
        },
        duration: 2.2,
        delay: 1.2,
        opacity: 1,
        rotate: 180,
        scale: 0,
        ease: "power1.inOut",
      });

      gsap.to(".world-texte-transition", {
        scrollTrigger: {
          trigger: ".world-first-section-container",
          start: "-10% bottom",
          end: "10% 50%",
        },
        opacity: 1,
        zIndex: 102200,
        delay: 0.3,
        duration: 1.5,
      });

      gsap.to(".scroll-down-svg", {
        scrollTrigger: {
          trigger: ".world-first-section-container",
          start: "-10% bottom",
          end: "10% 50%",
        },
        opacity: 1,
        delay: 2,
        duration: 0.8,
        top: "-60vh",
        zIndex: 222222,
      });

      gsap.to(".bottom-text", {
        scrollTrigger: {
          trigger: ".world-first-section-container",
          start: "-10% bottom",

          onEnter: () => {
            this.bottomTextAnimation();
          },
        },

        delay: 5,
        opacity: 1,
      });
    },

    animateText() {
      let split = new SplitText(".world-texte-transition", { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        scale: 0,
        y: -30,
        rotationX: -180,
        transformOrigin: "bottom -2",
        stagger: 0.03,
        ease: "back.out(0.1)",
        duration: 1,
      });
    },

    bottomTextAnimation() {
      let split = new SplitText(".bottom-text", { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        ease: "power2.out",
        stagger: 0.03,
        delay: 0.5,
      });
    },
  },
};
</script>
<style>
.world-texte-transition {
  opacity: 1;
  font-size: 3em;
  color: #ffffea;
  position: relative;
  top: 30vh;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.44);
  text-align: center;
  z-index: 1000;
}

.transition-img {
  width: 100vw;
  height: 100vh;
  position: relative;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0);
}

.transition-svg-star {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0vw;
  scale: 8;
  top: -20vh;
  opacity: 1;
  transform: rotate(0deg);
  z-index: 1000;
}

.fond {
  opacity: 1;
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: -2;
  background-image: url("../assets/imgs/img-world-tree.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom -22vh center;
}

.scroll-down-svg {
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 0;
  position: absolute;
  animation: downAnimation ease-in-out 1.5s infinite;
  top: -70vh;
  scale: 0.02;
}

@keyframes downAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30vh);
  }
  100% {
    transform: translateY(0);
  }
}

.bottom-text {
  color: white;
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  position: relative;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  top: 81vh;
  opacity: 0;
}
</style>
