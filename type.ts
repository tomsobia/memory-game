// index.ts

// Import the required DOM elements
const moves = document.querySelector("#movesCount") as HTMLElement;
const timeValue = document.querySelector("#time") as HTMLElement;
const startButton = document.querySelector("#start") as HTMLButtonElement;
const stopButton = document.querySelector("#stop") as HTMLButtonElement;
const gameContainer = document.querySelector(".game_Container") as HTMLElement;
const result = document.querySelector("#result") as HTMLElement;
const controls = document.querySelector(".controls_Container") as HTMLElement;
let cards: NodeListOf<HTMLDivElement>;
let interval: NodeJS.Timeout;
let firstCard: HTMLDivElement | false = false;
let secondCard: HTMLDivElement | false = false;
let stopGame: (() => void) | undefined;
let time: number;
let firstCardValue;

class Item {
  constructor(public name, public image) {}
}


// Items array
const items: Item[] = [
  new Item("java", "img/java.png"),
  new Item("c++", "img/C.png"),
  new Item("css", "img/css.webp"),
  new Item("html", "img/html.png"),
  new Item("js", "img/js.jpeg"),
  new Item("python", "img/Python.png"),
  new Item("react", "img/React.png"),
  new Item("android", "img/android.png"),
  new Item("git", "img/git.png"),
  new Item("ios", "img/ios.png"),
];

// Time
let seconds = 0;
let minutes = 0;

// Moves and win count
let movesCount = 0;
let winCount = 0;

// Timer
function Timer() {
  seconds += 1;
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
}

// Calculating moves
function movesCounter() {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
}

// Pick 8 random objects from the items array
function generateRandom() {
  let size = 4;
  let tempArray = [...items];
  let cardValues: Item[] = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
}

function matrixGenerator(cardValues: Item[]) {
  const size = 4;
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
      <div class="card_container" data-card-value="${cardValues[i].name}">
        <div class="card_before">?</div>
        <div class="card_after"><img src="${cardValues[i].image}" class="image"/></div>
      </div>
    `;
  }
  gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
  cards = document.querySelectorAll(".card_container");
  firstCard = false;
  secondCard = false;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (
        !card.classList.contains("matched") &&
        !secondCard &&
        card !== firstCard
      ) {
        card.classList.add("flipped");
        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value") as string;
        } else {
          movesCounter();
          secondCard = card;
          const secondCardValue = card.getAttribute(
            "data-card-value"
          ) as string;
          if (firstCardValue == secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            firstCard = false;
            secondCard = false;
            winCount += 1;
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>You Won!</h2><h4>Moves: ${movesCount}`;
              clearInterval(interval);
              if (stopGame) {
                showResult("Game Failed");
              } else {
                showResult("You Won!");
              }

              stopGame?.();
            }
          } else {
            const [tempFirst, tempSecond] = [firstCard, secondCard];
            setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
              firstCard = false;
              secondCard = false;
            }, 900);
          }
        }
      }
    });
  });
}

// Start game
startButton.addEventListener("click", () => {
  movesCount = 0;
  time = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");

  interval = setInterval(Timer, 1000);
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;

  initializer();
});

// Stop game
stopButton.addEventListener("click", () => {
  stopGame = true; // Set stopGame to true to indicate the game was stopped prematurely
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);
  showResult("Game Failed"); // Display "Game Failed" message
});

function initializer() {
  result.innerHTML = "";
  winCount = 0;
  const cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
  minutes = 0;
  seconds = 0;
  timeValue.innerHTML = "<span>Time:</span>00:00";

}

function showResult(message: string) {
  result.innerHTML = `<h2>${message}</h2><h4>Moves: ${movesCount}</h4> <h4>Time: ${timeValue.innerText}</h4>`;
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
}
