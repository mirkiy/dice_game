const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector(".output");

// const getRoll = () => {
//   console.log("works");
//   let rolls = [roll(6), roll(6)];
//   let temp;
//   if (rolls[0] == rolls[1]) {
//     temp = "It was a draw";
//   } else if (rolls[0] > rolls[1]) {
//     temp = "Player 1 wins";
//   } else {
//     temp = "Player 2 wins";
//   }
//   console.log(rolls);
//   output.innerHTML = temp;
//   player1.innerHTML = rolls[0];
//   player2.innerHTML = rolls[1];
// };

const roll = (num) => {
  let rNumber = Math.floor(Math.random() * num) + 1;
  //   let n = 9855 + rNumber;
  //   let char = "&#" + n + ";";
  //   return rNumber + "" + char;
};

const rollTheDice = () => {
  let rollDice = roll(6);
  console.log(rollDice);
  let holder = builder(rollDice);
  console.log(output.children[0])
  if (output.children[0]) {
    output.children[0].remove();
  }
  output.appendChild(holder);
};

// button.addEventListener("click", getRoll);
button.addEventListener("click", rollTheDice);

const builder = (num) => {
  let div = document.createElement("div");
  div.setAttribute("class", "dicer");
  return div;
};
