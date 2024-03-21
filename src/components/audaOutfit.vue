<template>
  <div class="outfit-container">
    <div class="outfit-text-container">
      <h3>new outfit</h3>
      <p>
        In "Auda: Origins of the Monumental Realm", our heroine, Auda, is given
        a renewed outfit, specially designed for exploring the monumental world
        from which her mystical companion originates.
      </p>
    </div>
    <div class="outfit-img-container"></div>
  </div>
</template>

<script></script>

<style scoped>
.outfit-container {
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  bottom: 18vh;
  z-index: -2;
  background-color: rgba(255, 192, 203, 0);
}

.outfit-text-container {
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  margin-left: 16vw;
  margin-bottom: 22vh;
}

.outfit-text-container h3 {
  font-size: 2em;
  color: #766848;
  opacity: 0.9;
  font-weight: 300;
  text-transform: uppercase;
}

.outfit-text-container p {
  font-size: 2.8em;
  color: #766848;
  line-height: 55px;
}

.outfit-img-container {
  height: 100%;
  position: absolute;
  right: -1vh;
  top: 22vh;
  background-image: url("../assets/imgs/Orbon.png");
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 80vw;
}
</style>
