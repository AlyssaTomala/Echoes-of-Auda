<template>
  <div class="section2">
    <div class="section2a">
      <div class="panel section2a1">
        <div>
          <p class="animation-texte-horizontal texte-01">
            <animationTitle v-if="showDLCTitle" texte="An adventure DLC" />
          </p>
        </div>
      </div>

      <div class="panel section2a2">
        <div class="section2a-text-container">
          <div class="text1">
            <p>
              To discover a <br />
              Monumental world
            </p>
          </div>
          <div class="text2">
            <p>
              In search of the origins of <br />
              Orbon, Auda's companion
            </p>
          </div>
          <div class="text3">
            <p>
              The two protagonists <br />
              grow trough exploration
            </p>
          </div>
        </div>
      </div>
      <div class="panel section2a3">
        <div>
          <p class="animation-texte-horizontal texte-05">Auda has changed !</p>
        </div>
      </div>
    </div>
    <div class="section2b"></div>
  </div>
  <div class="section3">
    <cardsAudas />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animationTitle from "./00animationTitle.vue";
import cardsAudas from "./05cardsAuda.vue";

export default {
  data() {
    return {
      showDLCTitle: false,
    };
  },
  components: {
    animationTitle,
    cardsAudas,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.section2bAnimation(
      setTimeout(() => {
        this.showDLCTitle = true;
      }, 2800)
    );
    this.textApparition();

    gsap.to(".section2a", {
      x: "-325vw",
      scrollTrigger: {
        trigger: ".section2",
        scrub: 1,
        start: "top top",
        end: "50% top",
      },
    });

    gsap.set(".section2b", { scale: 0.2 });

    gsap.to(".section2", {
      scrollTrigger: {
        trigger: ".section2",
        pin: true,
      },
    });
  },

  methods: {
    textApparition() {
      gsap.to(".text1 p", {
        rotate: 10,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "5% top",
        },
      });

      gsap.to(".text1 p", {
        opacity: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "12% top",
        },
      });

      gsap.to(".text2 p", {
        rotate: 10,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "12% top",
        },
      });

      gsap.to(".text2 p", {
        opacity: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "20% top",
        },
      });

      gsap.to(".text3 p", {
        rotate: 10,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "20% top",
        },
      });

      gsap.to(".text3 p", {
        opacity: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "25% top",
        },
      });
    },

    section2bAnimation() {
      gsap.from(".section2b", {
        width: "40vw",
        height: "0vh",
        opacity: 0.5,
        scale: 1,
        y: "0vh",
        x: "30vw",
        scrollTrigger: {
          trigger: ".section2",
          scrub: 1,
          start: "50% top",
          end: "bottom top",
        },
      });
      gsap.to(".section2b", {
        scale: 1,
        opacity: 1,
        width: "100vw",
        height: "100vh",
        y: "-50vh",
        scrollTrigger: {
          trigger: ".section2",
          scrub: 1,
          start: "50% top",
          end: "bottom top",
        },
      });

      gsap.from(".section3", {
        scale: 1,
        bottom: "0vh",
        scrollTrigger: {
          trigger: ".section3",
          scrub: 1,
          start: "center bottom",
          end: "bottom center",
        },
      });
      gsap.to(".section3", {
        scale: 1,
        zIndex: 20,
        bottom: "125vh",
        background: "black",
        scrollTrigger: {
          trigger: ".section3",
          scrub: 1,
          start: "center bottom",
          end: "bottom center",
        },
      });
    },
  },
};
</script>

<style scoped>
.section1,
.section2,
.section3 {
  height: 100vh;
}

.section2 {
  background: rgba(72, 123, 72, 0);
}

.section2 p {
  font-family: "Wigrum";
  font-size: 50px;
  opacity: 1;
  color: white;
}

.section2a1 {
  background: rgb(88, 129, 95);
}

.section2a-text-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 200vw;
  margin: 10px;
}

.text1,
.text3 {
  position: relative;
  bottom: 20vh;
}

.text2 {
  position: relative;
  top: 20vh;
}

.section2a {
  width: 425vw;
  height: 100vh;
  display: flex;
}

.section2a1,
.section2a3 {
  width: 100vw;
}

.section2a2 {
  width: 225vw;

  background: rgb(79, 109, 79);
}

.section2a3 {
  background: rgba(73, 97, 74, 0.516);
}

.panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section2b {
  height: 100vh;
  position: relative;
  bottom: 50vh;
  width: 100vw;
  opacity: 1;
  z-index: 10;
  background: rgb(132, 168, 137);
}

.section3 {
  background: aqua;
  position: relative;
  border: 1px solid black;
  height: 200vh;
  z-index: 2;
}
</style>
