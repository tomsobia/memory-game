// const moves = document.querySelector("#movesCount");
// const timeValue = document.querySelector("#time");
// const startButton = document.querySelector("#start");
// const stopButton = document.querySelector("#stop");
// const gameContainer = document.querySelector(".game_Container");
// const result = document.querySelector("#result");
// const controls = document.querySelector(".controls_Container");
// let cards;
// let interval;
// let firstCard = false;
// let secondCard = false;
// let stopGame;
// let time;
// let firstCardValue;



// // Items array
// const items = [
//   new Item("java", "img/java.png"),
//   new Item("c++", "img/C.png"),
//   new Item("css", "img/css.webp"),
//   new Item("html", "img/html.png"),
//   new Item("js", "img/js.jpeg"),
//   new Item("python", "img/Python.png"),
//   new Item("react", "img/React.png"),
//   new Item("android", "img/android.png"),
//   new Item("git", "img/git.png"),
//   new Item("ios", "img/ios.png"),
// ];

// // Time
// let seconds = 0;
// let minutes = 0;

// // Moves and win count
// let movesCount = 0;
// let winCount = 0;

// // Timer
// function timer() {
//   seconds += 1;
//   if (seconds === 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
//   const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
//   timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
// }

// // Calculating moves
// function movesCounter() {
//   movesCount += 1;
//   moves.innerHTML = `<span>Moves:</span>${movesCount}`;
// }

// // Pick 8 random objects from the items array
// function generateRandom() {
//   let size = 4;
//   let tempArray = [...items];
//   let cardValues = [];
//   size = (size * size) / 2;
//   for (let i = 0; i < size; i++) {
//     const randomIndex = Math.floor(Math.random() * tempArray.length);
//     cardValues.push(tempArray[randomIndex]);
//     tempArray.splice(randomIndex, 1);
//   }
//   return cardValues;
// }

// function matrixGenerator(cardValues) {
//   const size = 4;
//   gameContainer.innerHTML = "";
//   cardValues = [...cardValues, ...cardValues];
//   cardValues.sort(() => Math.random() - 0.5);
//   for (let i = 0; i < size * size; i++) {
//     gameContainer.innerHTML += `
//       <div class="card_container" data-card-value="${cardValues[i].name}">
//         <div class="card_before">?</div>
//         <div class="card_after"><img src="${cardValues[i].image}" class="image"/></div>
//       </div>
//     `;
//   }
//   gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
//   cards = document.querySelectorAll(".card_container");
//   firstCard = false;
//   secondCard = false;
//   cards.forEach((card) => {
//     card.addEventListener("click", () => {
//       if (
//         !card.classList.contains("matched") &&
//         !secondCard &&
//         card !== firstCard
//       ) {
//         card.classList.add("flipped");
//         if (!firstCard) {
//           firstCard = card;
//           firstCardValue = card.getAttribute("data-card-value");
//         } else {
//           movesCounter();
//           secondCard = card;
//           const secondCardValue = card.getAttribute("data-card-value");
//           if (firstCardValue === secondCardValue) {
//             firstCard.classList.add("matched");
//             secondCard.classList.add("matched");

//             firstCard = false;
//             secondCard = false;
//             winCount += 1;
//             if (winCount === Math.floor(cardValues.length / 2)) {
//               result.innerHTML = `<h2>You Won!</h2><h4>Moves: ${movesCount}`;
//               clearInterval(interval);
//               if (stopGame) {
//                 showResult("Game Failed");
//               } else {
//                 showResult("You Won!");
//               }

//               stopGame?.();
//             }
//           } else {
//             const [tempFirst, tempSecond] = [firstCard, secondCard];
//             setTimeout(() => {
//               tempFirst.classList.remove("flipped");
//               tempSecond.classList.remove("flipped");
//               firstCard = false;
//               secondCard = false;
//             }, 900);
//           }
//         }
//       }
//     });
//   });
// }

// // Start game
// startButton.addEventListener("click", () => {
//   movesCount = 0;
//   time = 0;
//   controls.classList.add("hide");
//   stopButton.classList.remove("hide");
//   startButton.classList.add("hide");

//   interval = setInterval(timer, 1000);
//   moves.innerHTML = `<span>Moves:</span>${movesCount}`;

//   initializer();
// });

// // Stop game
// stopButton.addEventListener("click", () => {
//   stopGame = true;
//   controls.classList.remove("hide");
//   stopButton.classList.add("hide");
//   startButton.classList.remove("hide");
//   clearInterval(interval);
//   showResult("Game Failed");
// });

// function initializer() {
//   result.innerHTML = "";
//   winCount = 0;
//   const cardValues = generateRandom();
//   console.log(cardValues);
//   matrixGenerator(cardValues);
//   minutes = 0;
//   seconds = 0;
//   timeValue.innerHTML = "<span>Time:</span>00:00";
// }

// function showResult(message) {
//   result.innerHTML = `<h2>${message}</h2><h4>Moves: ${movesCount}</h4> <h4>Time: ${timeValue.innerText}</h4>`;
//   controls.classList.remove("hide");
//   stopButton.classList.add("hide");
//   startButton.classList.remove("hide");
// }

const moves = document.querySelector("#movesCount");
const timeValue = document.querySelector("#time");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const gameContainer = document.querySelector(".game_Container");
const result = document.querySelector("#result");
const controls = document.querySelector(".controls_Container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let stopGame;
let time;
let firstCardValue;

class Item {
  constructor(public name, public image) {}
}

// Items array
const items = [
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
function timer() {
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
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
}

function matrixGenerator(cardValues) {
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
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          movesCounter();
          secondCard = card;
          const secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue === secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            firstCard = false;
            secondCard = false;
            winCount += 1;
            if (winCount === Math.floor(cardValues.length / 2)) {
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

  interval = setInterval(timer, 1000);
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;

  initializer();
});

// Stop game
stopButton.addEventListener("click", () => {
  stopGame = true;
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);
  showResult("Game Failed");
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

function showResult(message) {
  result.innerHTML = `<h2>${message}</h2><h4>Moves: ${movesCount}</h4> <h4>Time: ${timeValue.innerText}</h4>`;
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
}


