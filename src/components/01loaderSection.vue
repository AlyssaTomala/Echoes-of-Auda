<template>
  <div class="loader" v-if="showLoader" ref="loaderContainer">
    <div id="loader-title" ref="loaderTitle">
      <div class="decoration-sparkle-container">
        <div id="decorationSparkle" class="sparkle-one">
          <img
            class="img-card-star"
            :src="require('@/assets/imgs/img-card-star.svg')"
            alt="sparkle"
          />
        </div>
        <div id="decorationSparkle" class="sparkle-two">
          <svg
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
        <div id="decoration-sparkle" class="sparkle-three">
          <img
            class="img-card-star"
            :src="require('@/assets/imgs/img-card-star.svg')"
            alt="sparkle"
          />
        </div>
      </div>
      <h1>
        <animationTitle titleText="Origins of the Monumental Realm" />
      </h1>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import animationTitle from "./animationTitle.vue";

export default {
  data() {
    return {
      showLoader: true,
    };
  },

  components: {
    animationTitle,
  },

  mounted() {
    this.loaderanimation();
    this.disableScroll();
    gsap.from(".sparkle-one", {
      duration: 0.8,
      delay: 0.5,
      scale: 0,
      rotate: -90,
      opacity: 0,
    });

    gsap.from(".sparkle-two", {
      duration: 0.6,
      delay: 0.9,
      scale: 0,
      rotate: 60,
      opacity: 0,
    });

    gsap.from(".sparkle-three", {
      duration: 0.8,
      delay: 0.8,
      scale: 0,
      rotate: 30,
      opacity: 0,
    });

    gsap.to(".sparkle-three, .sparkle-two, .sparkle-one", {
      y: 5,
      duration: 1,
      repeat: Infinity,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(".sparkle-two", {
      y: 8,
      delay: 0.5,
      duration: 1,
      repeat: Infinity,
      yoyo: true,
      ease: "power2.inOut",
    });
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
    loaderanimation() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.showLoader = false;
          this.disableScroll();
        },
      });

      tl.from(this.$refs.loaderContainer, {
        duration: 0.4,
      })
        .from(this.$refs.loaderTitle, {
          duration: 2,

          y: 100,
          opacity: 0,
          ease: "power4.out",
        })
        .to(this.$refs.loaderContainer, {
          backgroundColor: "#909b8d",
          opacity: 0,
          // duration: Infinity,
          duration: 2,
          delay: 0.5,
          ease: "power4.out",
        });
    },
  },
};
</script>

<style>
.decoration-sparkle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1000;
}

.decoration-sparkle {
  opacity: 1;
}

.sparkle-one,
.sparkle-two,
.sparkle-three {
  position: absolute;
}

.img-card-star {
  width: 4vh;
}

.sparkle-one {
  top: 18vh;
  right: 80%;
}

.sparkle-two {
  position: absolute;
  top: 20vh;
  right: 68%;
  scale: 0.8;
}

.sparkle-three {
  position: absolute;
  bottom: 3vh;
  left: 85%;
  scale: 1.6;
}

.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    111.45% 111.45% at 50% 32.22%,
    #8f917d 0%,
    #909b8d 100%
  );
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10222200;
  opacity: 1;
}

#loader-title {
  position: relative;
  bottom: 20vh;
}
#loader-title h1 {
  font-family: "Wigrum";
  font-size: 60px;
  opacity: 1;
  letter-spacing: 2px;
  color: rgb(253, 243, 243);
  text-align: center;
  text-shadow: 0.2rem 0.2rem 4rem rgba(0, 0, 0, 0.2);
}
</style>
