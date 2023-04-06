const button = document.querySelector("button");
// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");
const output = document.querySelector(".output");
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];

const roll = (num) => {
  let rNumber = Math.floor(Math.random() * num) + 1;
  return rNumber;
};

const rollTheDice = () => {
  let rollDice = roll(6);
  let holder = builder(rollDice);
  if (output.children[0]) {
    output.children[0].remove();
  }
  output.appendChild(holder);
};

button.addEventListener("click", rollTheDice);

const builder = (num) => {
  let div = document.createElement("div");
  let dieArray = dice[num - 1];
  console.log(dieArray);
  for (let i = 1; i < 10; i++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");
    if (dieArray.includes(i)) {
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  return div;
};
