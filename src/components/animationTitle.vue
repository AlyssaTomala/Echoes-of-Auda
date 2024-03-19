<template>
  <div class="animation-title" ref="animationTitle">
    {{ titleText }}
  </div>
</template>

<script>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },

  mounted() {
    gsap.registerPlugin(SplitText);

    const texteChars = new SplitText(this.$refs.animationTitle, {
      type: "chars",
    });

    gsap.from(texteChars.chars, {
      opacity: 0,
      y: 15,
      stagger: 0.05,
      ease: "back.out(1.7)",
      duration: 1.2,
    });
  },
};
</script>

<style scoped></style>
