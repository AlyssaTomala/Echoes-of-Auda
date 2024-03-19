<template>
  <div class="section-container">
    <div class="section-introduction">
      <div class="panel section-first-step">
        <p class="step-text first-step-text-01">
          <animationTitle v-if="showText01" titleText="An adventure DLC" />
        </p>
        <p class="first-step-text-02">Scroll</p>
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
    <div class="section-transition"></div>
  </div>
  <div class="section-trigger-container"></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animationTitle from "./animationTitle.vue";
// import cardsAuda from "./05cardsAuda.vue";
// import lolAtt from "./lolAtt.vue";

export default {
  data() {
    return {
      showText01: false,
    };
  },

  components: {
    animationTitle,
    // cardsAuda,
    // lolAtt,
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.section2bAnimation();
    this.textApparition();
    this.animateTexteApparition();

    ScrollTrigger.create({
      trigger: ".section-first-step",
      start: "center center",

      duration: 1.5,
      onEnter: () => {
        this.showText01 = true;
      },
    });

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
      gsap.to(".section-transition", {
        transformOrigin: "center center",
        borderRadius: "0px",
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section-container",
          scrub: 1,
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
}

.section-container {
  background: rgb(72, 123, 72);
  scroll-behavior: smooth;
}

.section-container p {
  font-family: "Wigrum";
  opacity: 1;
}

.section-introduction {
  background: rgb(136, 36, 36);
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

.first-step-text-02 {
  font-family: "Wigrum";
  font-size: 16px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  position: fixed;
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
}

.second-step-text-02 {
  position: relative;
  top: 20vh;
}

.section-first-step,
.section-third-step {
  width: 100vw;
}

.section-second-step {
  width: 225vw;

  background: rgb(119, 119, 172);
}

.section-third-step {
  background: orange;
}

.panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-transition {
  height: 100vh;
  scale: 0;
  position: relative;
  bottom: 100%;
  width: 100vw;
  opacity: 0;
  z-index: 10;
  border-radius: 1000px;
  background: yellow;
}

.section-trigger-container {
  width: 100vw;
  height: 0.2vh;
  z-index: 900;
  background: rgba(255, 0, 0, 0);
  position: absolute;
}
</style>
