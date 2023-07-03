const gato = document.querySelector(".gato");
const box = document.querySelector(".box");
const gameBoard = document.querySelector("[data-game-board]");
const lossMessageTextElement = document.querySelector(
  "[data-loss-message-text]"
);
const lossMessage = document.querySelector("[data--message]");
const restartButton = document.querySelector("[data-restart-button]");

const jump = () => {
  gato.classList.add("jump");

  setTimeout(() => {
    gato.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log("loop");

  const boxPosition = box.offsetLeft;
  const gatoPosition = window.getComputedStyle(gato).bottom.replace("px", "");

  if (boxPosition <= 200 /*180*/ && boxPosition > 0 && gatoPosition < 140) {
    box.style.animation = "none";
    box.style.left = `${boxPosition}px`;

    gato.style.animation = "none";
    gato.style.bottom = `${gatoPosition}px`;

    gato.src = "./image/gatosleep.gif";
    gato.style.width = "300px";
    gato.style.marginLeft = "-90px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
