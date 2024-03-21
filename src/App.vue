<template>
  <frameElement />
  <loaderSection />
  <headerSection />
  <dlcSection />
  <audaSection />
  <!-- <worldTransition /> -->
  <transitionWorld />
</template>

<script>
import frameElement from "./components/frameElement.vue";
import loaderSection from "./components/01loaderSection.vue";
import headerSection from "./components/02headerSection.vue";
import dlcSection from "./components/03dlcSection.vue";
import audaSection from "./components/04audaSection.vue";
// import worldTransition from "./components/worldTransition.vue";
import transitionWorld from "./components/05transitionWorld.vue";
export default {
  components: {
    frameElement,
    loaderSection,
    headerSection,
    dlcSection,
    audaSection,
    // worldTransition,
    transitionWorld,
  },
};
</script>

<style>
@font-face {
  font-family: "Wigrum";
  font-weight: 500;
  font-style: normal;
  src: url("../src/assets/fonts/Wigrum_Medium.woff2") format("woff2");
}

@font-face {
  font-family: "Wigrum";
  font-weight: 500;
  font-style: italic;
  src: url("../src/assets/fonts/Wigrum_Medium_Italic.woff2") format("woff2");
}
@font-face {
  font-family: "Wigrum";
  font-weight: 300;
  font-style: normal;
  src: url("../src/assets/fonts/Wigrum_Regular.woff2") format("woff2");
}

@font-face {
  font-family: "Wigrum";
  font-weight: 300;
  font-style: italic;
  src: url("../src/assets/fonts/Wigrum_Italic.woff2") format("woff2");
}

body {
  font-family: "Wigrum", sans-serif;
  margin: 0px;
}

/* * {
  overflow-x: visible;
} */
</style>
