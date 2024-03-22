<template>
  <div class="cards-container">
    <div class="auda-cards">
      <img
        class="card-img-star card-img-star-first"
        :src="require('@/assets/imgs/img-card-star.svg')"
        alt="auda"
      />
      <div class="card-border">
        <div class="card card-smiling"></div>
      </div>
      <img
        class="card-img-star card-img-star-second"
        :src="require('@/assets/imgs/img-card-star.svg')"
        alt="auda"
      />
    </div>
    <div class="auda-cards">
      <img
        class="card-img-star card-img-star-first"
        :src="require('@/assets/imgs/img-card-star.svg')"
        alt="auda"
      />
      <div class="card-border">
        <div class="card card-jumping"></div>
      </div>
      <img
        class="card-img-star card-img-star-second"
        :src="require('@/assets/imgs/img-card-star.svg')"
        alt="auda"
      />
    </div>
    <div class="auda-cards">
      <img
        class="card-img-star card-img-star-first"
        :src="require('@/assets/imgs/img-card-star.svg')"
        alt="auda"
      />
      <div class="card-border">
        <div class="card card-hanging"></div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.cards-container {
  width: 90vw;
  height: 80vh;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  opacity: 1;
  background-color: rgb(102, 102, 114, 0);
}

.auda-cards {
  overflow: visible;
  width: 22vw;
  height: 70vh;
  margin: 0% 5%;
  opacity: 0;
  position: relative;
}

.card-border {
  width: 23vw;
  height: 71.5vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(209, 211, 188, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
}

.card-img-star {
  position: absolute;
  z-index: 100;
  width: 80px;
  height: 80px;
}

.card-img-star-first {
  top: -6.5%;
  left: 50%;
  transform: translateX(-50%);
}

.card-img-star-second {
  bottom: -9%;
  right: 50%;
  transform: translateX(50%);
}

.card {
  overflow: visible;
  position: absolute;
  width: 22vw;
  height: 70vh;
  border-radius: 5px;
  background-color: white;
  background: linear-gradient(
    267deg,
    rgba(209, 211, 188, 0.5) -95.46%,
    rgba(144, 155, 141, 0.5) 133.85%
  );
  backdrop-filter: blur(2px);

  transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform-origin: center;
}

.card:hover {
  transform: scaleX(1.06) scaleY(1.03);
  background-color: rgba(144, 155, 141, 0.5);
}

.card-smiling::after {
  content: "";
  pointer-events: none;
  position: absolute;
  top: -10%; /* Ajustez ces valeurs selon l'effet désiré */
  left: -30%;
  width: 95%; /* Permet à l'image de dépasser */
  height: 120%;
  background-image: url("../assets/imgs/img-card-auda-smiling.webp");
  background-position: center left 1.5vw;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

.card-jumping::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: -10%; /* Ajustez ces valeurs selon l'effet désiré */
  left: -25%;
  width: 150%; /* Permet à l'image de dépasser */
  height: 120%;
  background-image: url("../assets/imgs/img-card-auda-jumping.webp");
  background-position: center left;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

.card-hanging::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: 9%; /* Ajustez ces valeurs selon l'effet désiré */
  right: 0;
  width: 95%; /* Permet à l'image de dépasser */
  height: 120%;
  background-image: url("../assets/imgs/img-card-auda-hanging.webp");
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>
