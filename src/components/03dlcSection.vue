<template>
  <frameElement />
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
            width="51"
            height="57"
            viewBox="0 0 51 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_110_27)">
              <path
                d="M9 9L41.4875 27.6325C42.1575 28.0168 42.1575 28.9832 41.4875 29.3675L9 48"
                stroke="url(#paint0_linear_110_27)"
                stroke-width="5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_110_27"
                x="-0.000366211"
                y="-0.000424117"
                width="50.9904"
                height="57.0008"
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
                x1="61.1087"
                y1="28.8679"
                x2="-65"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#97845A" />
                <stop offset="1" stop-color="#6C6036" />
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
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9673 1.22714C23.8038 0.797709 23.1962 0.797711 23.0327 1.22714L17.0992 16.8098C17.0484 16.9431 16.9431 17.0484 16.8098 17.0992L1.22714 23.0327C0.79771 23.1962 0.79771 23.8038 1.22714 23.9673L16.8098 29.9008C16.9431 29.9516 17.0484 30.0569 17.0992 30.1902L23.0327 45.7729C23.1962 46.2023 23.8038 46.2023 23.9673 45.7729L29.9008 30.1902C29.9516 30.0569 30.0569 29.9516 30.1902 29.9008L45.7729 23.9673C46.2023 23.8038 46.2023 23.1962 45.7729 23.0327L30.1902 17.0992C30.0569 17.0484 29.9516 16.9431 29.9008 16.8098L23.9673 1.22714Z"
          fill="url(#paint0_angular_67_514)"
        />
        <defs>
          <radialGradient
            id="paint0_angular_67_514"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(23.5 23.5) rotate(90) scale(42.0151)"
          >
            <stop stop-color="#F5F0D5" />
            <stop offset="1" stop-color="white" />
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
import frameElement from "./frameElement.vue";
export default {
  components: {
    animationTitle,
    frameElement,
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
  background-image: url("../assets/imgs/droite.PNG");
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
  background-image: url("../assets/imgs/centre.PNG");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0);
}

.section-third-step {
  background-image: url("../assets/imgs/gauche.PNG");
  background-position: center left;
  background-size: 104%;
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
