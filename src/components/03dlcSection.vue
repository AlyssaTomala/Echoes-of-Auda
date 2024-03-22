<template>
  <div class="section-container">
    <div class="section-introduction">
      <div class="panel section-first-step">
        <div class="text-container-first-step">
          <p class="step-text first-step-text-01">
            <animationTitle
              class="first-step-title"
              titleText="An adventure DLC"
            />
          </p>
          <p class="first-step-text-02">Scroll</p>
        </div>
        <div class="arrow-container-first-step">
          <svg
            class="arrow-first-step"
            width="44"
            height="58"
            viewBox="0 0 44 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_110_27)">
              <path
                d="M9.5 9.5L34.4333 28.2C34.9667 28.6 34.9667 29.4 34.4333 29.8L9.5 48.5"
                stroke="url(#paint0_linear_110_27)"
                stroke-width="5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_110_27"
                x="0.499878"
                y="0.499853"
                width="43.3335"
                height="57.0003"
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
                  result="effect1_dropShadow_110_27"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_110_27"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_110_27"
                x1="-35"
                y1="29.5"
                x2="87.5"
                y2="29.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D1D3BC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div class="panel section-second-step">
        <div class="section-introduction-text-container">
          <div class="second-step-text-01">
            <p>
              To discover a <br />
              Monumental world
            </p>
          </div>
          <div class="second-step-text-02">
            <p>
              In search of the origins of <br />
              Orbon, Auda's companion
            </p>
          </div>
          <div class="second-step-text-03">
            <p>
              The two protagonists <br />
              grow trough exploration
            </p>
          </div>
        </div>
      </div>
      <div class="panel section-third-step">
        <p class="step-text third-step-text-01">Auda has changed !</p>
      </div>
    </div>
    <div class="section-transition">
      <div class="section-transition-background"></div>
      <svg
        class="transition-star"
        width="315"
        height="315"
        viewBox="0 0 315 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M157.033 313.773C157.196 314.202 157.804 314.202 157.967 313.773L200.854 201.144C200.905 201.01 201.01 200.905 201.144 200.854L313.773 157.967C314.202 157.804 314.202 157.196 313.773 157.033L201.144 114.146C201.01 114.095 200.905 113.99 200.854 113.856L157.967 1.22717C157.804 0.797738 157.196 0.797739 157.033 1.22717L114.146 113.856C114.095 113.99 113.99 114.095 113.856 114.146L1.22717 157.033C0.797737 157.196 0.797738 157.804 1.22717 157.967L113.856 200.854C113.99 200.905 114.095 201.01 114.146 201.144L157.033 313.773Z"
          fill="url(#paint0_radial_127_65)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_127_65"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(157.5 157.5) rotate(-90.1819) scale(157.501 157.501)"
          >
            <stop stop-color="#606E35" stop-opacity="0.63" />
            <stop offset="1" stop-color="#FBF9EC" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div class="section-trigger-container"></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animationTitle from "./animationTitle.vue";

export default {
  components: {
    animationTitle,
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.section2bAnimation();
    this.textApparition();
    this.animateTexteApparition();

    gsap.to(".section-introduction", {
      x: "-325vw",
      scrollTrigger: {
        trigger: ".section-container",
        scrub: 2.5,
        start: "top top",
        end: "50% top",

        behavior: "smooth",
      },
    });

    gsap.set(".section-transition", { scale: 0.2 });

    gsap.to(".section-container", {
      scrollTrigger: {
        trigger: ".section-container",
        pin: true,
        scrub: 2,
      },
    });
  },

  methods: {
    textApparition() {
      this.animateTexteApparition(
        ".second-step-text-01 p",
        "-5vh",
        "5%",
        "12%"
      );
      this.animateTexteApparition(
        ".second-step-text-02 p",
        "5vh",
        "12%",
        "20%"
      );
      this.animateTexteApparition(
        ".second-step-text-03 p",
        "-5vh",
        "20%",
        "25%"
      );
      this.animateTexteApparition(".third-step-text-01", "5vh", "35%", "30%");
    },

    animateTexteApparition(selector, initialTranslateY, startPercent) {
      gsap.fromTo(
        selector,
        {
          opacity: 0,
          translateY: initialTranslateY,
        },
        {
          duration: 1,
          ease: "power1.inOut",
          opacity: 1,
          delay: 0.2,
          translateY: "0vh",
          scrollTrigger: {
            trigger: ".section-container",
            start: startPercent,
          },
        }
      );
    },

    section2bAnimation() {
      gsap.to(".section-transition-background", {
        scale: 6.6,
        duration: 2,

        opacity: 1,
        scrollTrigger: {
          trigger: ".section-container",
          scrub: 2,
          start: "50% top",
          end: "bottom top",
        },
      });

      gsap.to(".transition-star", {
        transformOrigin: "center center",
        scale: 4.5,
        opacity: 1,
        filter: "blur(px)",
        rotate: 92,
        delay: 2,
        scrollTrigger: {
          trigger: ".section-container",
          scrub: 2,
          start: "50% top",
          end: "bottom top",
        },
      });
    },
  },
};
</script>

<style scoped>
.section-container {
  height: 100vh;

  background: linear-gradient(102deg, #ffffff, #fff9d7);
  background-size: 120% 120%;
  animation: gradient-animation 2s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.section-container {
  pointer-events: none;
  scroll-behavior: smooth;
}

.section-container p {
  font-family: "Wigrum";
  opacity: 1;
}

.section-introduction {
  width: 425vw;
  height: 100vh;
  display: flex;
}

.section-introduction-text-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 200vw;
  margin: 10px;
}

.section-introduction-text-container p {
  font-size: 45px;
  opacity: 0;
}

.step-text {
  color: white;
  font-size: 60px;
}

.first-step-title {
  color: #766848;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.first-step-text-02 {
  font-family: "Wigrum";
  font-size: 16px;
  font-weight: 300;
  color: #766852;
  position: fixed;
  font-weight: 300;
  font-style: italic;
  top: 53vh;
  animation: textYoyo 1.5s ease-in-out infinite;
}

@keyframes textYoyo {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20%);
  }

  100% {
    transform: translateY(0);
  }
}
.second-step-text-01,
.second-step-text-03 {
  position: relative;
  bottom: 20vh;
  color: #766848;
  text-align: center;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: textSteps 3s ease-in-out infinite;
}

.second-step-text-01 {
  position: relative;
  right: 10vh;
}

.second-step-text-03 {
  position: relative;
  left: 15vh;
}

.second-step-text-02 {
  position: relative;
  padding-left: 0;
  color: #766848;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  top: 20vh;
  animation: textSteps 3s ease-in-out infinite;
}

@keyframes textSteps {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(0);
  }
}

.section-first-step,
.section-third-step {
  width: 100vw;
}

.section-first-step {
  background-image: url("../assets/imgs/img-dlc-left.webp");
  background-position: center right;
  background-size: 104%;
  background-repeat: no-repeat;
}

.arrow-first-step {
  position: absolute;
  left: 20.5%;
  scale: 0.8;
  animation: ArrowYoyo 1.5s ease-in-out infinite;
}

@keyframes ArrowYoyo {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(12%);
  }

  100% {
    transform: translateX(0);
  }
}

.text-container-first-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-second-step {
  width: 225vw;
  position: relative;
  z-index: 6;
  background-image: url("../assets/imgs/img-dlc-central.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0);
}

.section-third-step {
  background-image: url("../assets/imgs/img-dlc-right.webp");
  background-position: center left;
  background-size: 94%;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255, 0);
}

.section-third-step p {
  color: #766848;
}

.panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-transition {
  height: 100vh;
  scale: 1;
  position: relative;
  bottom: 100%;
  width: 100vw;

  z-index: 10;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-transition-background {
  position: absolute;
  scale: 6.6;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fbf9ec;
  z-index: -1;
}

.section-transition svg {
  position: relative;
  scale: 0;
  background-color: 90px;
  width: 100%;
  height: 100%;
}

/* .section-trigger-container {
  width: 100vw;
  height: 20vh;
  z-index: 900;
  background: rgba(114, 42, 42, 0.207);
  position: absolute;
} */
</style>
