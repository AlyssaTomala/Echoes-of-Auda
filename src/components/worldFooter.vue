<template>
  <div class="footer-container">
    <div class="footer-button-container">
      <div class="footer-button-border">
        <button class="footer-button">
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
          <p>precommand</p>
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
        </button>
      </div>
    </div>
    <div class="partners-container">
      <a href="https://store.steampowered.com/?l=french">
        <img
          class="img-steam"
          src="../assets/imgs/img-footer-steam.webp"
          alt=""
      /></a>
      <a href="https://www.nintendo.ch/fr/">
        <img class="img-nintendo" src="../assets/imgs/img-footer-nintendo.webp"
        alt= />
      </a>
    </div>
    <div class="footer-img-container"></div>
  </div>
</template>
<script></script>

<style scoped>
.footer-container {
  background-image: url("../assets/imgs/img-world-footer.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
}

.footer-button-container {
  position: absolute;
  top: 55%;
  scale: 0.8;
  left: 45%;
  transform: translate(-50%, -50%);
}

.footer-button svg {
  scale: 0.5;
  position: relative;
  bottom: 3px;
}

@keyframes footerSVG {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(90deg);
  }
}

.footer-button:hover svg {
  animation: footerSVG 1s ease-in-out forwards;
}

.footer-button {
  background: linear-gradient(90deg, #b4b5a2e4, #c3cfb6e4);
  border: none;
  color: white;
  width: 30vw;
  height: 12vh;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 500px;

  transition: transform 0.5s ease-in-out;
}

.footer-button:hover {
  transform: scaleX(1.05) scaleY(1.1);
}

.footer-button-border {
  width: 31vw;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  border: 2.5px solid #b6b99dc0;
  transition: transform 0.2s ease;
}

.footer-button p {
  color: #fffff9;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  text-align: center;
  font-family: Wigrum;
  font-size: 38px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.partners-container {
  position: absolute;
  bottom: 0;
  left: 33.5%;
  margin-bottom: 15vh;
  width: 30%;

  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a {
  position: relative;
  display: flex;
}

.img-nintendo,
.img-steam {
  scale: 0.5;
  background: radial-gradient(
    86.62% 50.06% at 45.29% 50%,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  backdrop-filter: blur(2px);
  transition: transform 0.2s ease-in-out;
}

.img-nintendo:hover,
.img-steam:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
