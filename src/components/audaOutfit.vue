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
  top: 10vh;
  background-color: rgba(255, 192, 203, 0);
}

.outfit-text-container {
  width: 45vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-left: 20vw;
  margin-bottom: 15vh;
}

.outfit-text-container h3 {
  font-size: 2em;
  text-transform: uppercase;
}

.outfit-text-container p {
  font-size: 3em;
  line-height: 55px;
}

.outfit-img-container {
  height: 100%;
  background-image: url("../assets/imgs/Orbon.png");
  background-position: bottom left 5vh;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50vw;
}
</style>
