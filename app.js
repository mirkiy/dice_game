const button = document.querySelector("button");
const player1 = document.querySelector("player1");
const player2 = document.querySelector("player2");
const output = document.querySelector("output");

const getRoll = () => {
  console.log("works");
  let rolls = [roll(6), roll(6)];
  console.log(rolls);
};

const roll = (num) => {
  let rNumber = Math.floor(Math.random() * num) + 1;
  return rNumber;
};

button.addEventListener("click", getRoll);
