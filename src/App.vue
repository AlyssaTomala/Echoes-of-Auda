<template>
  <frameElement />
  <loaderSection />
  <headerSection />
  <dlcSection />
  <audaSection />
</template>

<script>
import frameElement from "./components/frameElement.vue";
import loaderSection from "./components/01loaderSection.vue";
import headerSection from "./components/02headerSection.vue";
import dlcSection from "./components/03dlcSection.vue";
import audaSection from "./components/04audaSection.vue";

export default {
  components: {
    frameElement,
    loaderSection,
    headerSection,
    dlcSection,
    audaSection,
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
  font-family: "Wigrum", sans-serif;
  margin: 0px;
}

/* * {
  overflow-x: visible;
} */
</style>
./components/frameElement.vue
