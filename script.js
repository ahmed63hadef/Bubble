const counterDisplay = document.querySelector("h3");
let counter = 0;

const startTimer = 1;
let time = startTimer * 60;

const timerElement = document.querySelector("h4");

setInterval(() => {
  let secondes = parseInt(time % 15, 10);

  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `Il reste ${secondes}, allezzzzz !`;
  time = time <= 0 ? 0 : time - 1;
}, 1000);

function endGame() {
  if ((secondes = 0)) {
    bubble.clearInterval();
  }
}

const bublleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  const size = Math.random() * 300 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 200 + 150 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bublleMaker, 1000);

function endGame() {
  if ((secondes = 0)) {
    bubble.break();
  }
}
