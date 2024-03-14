<template>
  <animationTitle />
  <borderElement />
  <loaderSection />
  <headerSection />
  <horizontalIntroduction />
  <!-- <audaSection /> -->
  <!-- <transitionAuda /> -->

  <backgroundHeader />
  <testSection />
  <backgroundIntroduction />

  <introdctionSection />

  <outfitAuda />
  <transitionWorld />
  <backgroundWingedWorld />
  <worldSection />
  <transitionBackgroundWorld />
  <secondWorldSection />
  <backgroundNatureWorld />
</template>

<script>
import animationTitle from "./components/00animationTitle.vue";
import borderElement from "./components/00borderElement.vue";
import loaderSection from "./components/01loaderSection.vue";
import backgroundHeader from "./components/02backgroundHeader.vue";
import headerSection from "./components/02headerSection.vue";
import backgroundIntroduction from "./components/03backgroundIntroduction.vue";
import horizontalIntroduction from "./components/03horizontalIntroduction.vue";
import introdctionSection from "./components/03introductionSection.vue";
// import transitionAuda from "./components/04transitionAuda.vue";
// import audaSection from "./components/05audaSection.vue";

import outfitAuda from "./components/05outfitAuda.vue";
import transitionWorld from "./components/06transitionWorld.vue";
import backgroundWingedWorld from "./components/07backgroundWingedWorld.vue";
import worldSection from "./components/07worldSection.vue";
import transitionBackgroundWorld from "./components/08transitionBackgroundWorld.vue";
import secondWorldSection from "./components/09secondWorldSection.vue";
import backgroundNatureWorld from "./components/09backgroundNatureWorld.vue";
import testSection from "./components/00testSection.vue";

export default {
  components: {
    animationTitle,
    borderElement,
    testSection,
    loaderSection,
    backgroundHeader,
    headerSection,

    backgroundIntroduction,
    horizontalIntroduction,
    introdctionSection,
    // transitionAuda,
    // audaSection,

    outfitAuda,
    transitionWorld,
    backgroundWingedWorld,
    worldSection,
    transitionBackgroundWorld,
    secondWorldSection,
    backgroundNatureWorld,
  },
};
</script>

<style>
@font-face {
  font-family: "Wigrum";
  font-weight: 500;
  src: url("../src/assets/fonts/Wigrum-Medium.woff2") format("woff2");
}

body {
  margin: 0px;
}

/* * {
  overflow-x: visible;
} */
</style>
