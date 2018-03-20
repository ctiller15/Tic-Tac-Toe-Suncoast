const displayMenu = document.querySelector(".display-menu")
const gamePieceMenu = document.querySelector(".gamePieceMenu");

const startPlayerGame = (event) => {
  console.log("Starting game vs player!");
  // First: Hide the menu.
  console.log(displayMenu);
  displayMenu.style.display = "none";
  // Then: Display the gamePiece menu
  gamePieceMenu.style.display = "block";
}

const startComputerGame = (event) => {
  console.log("Starting game vs computer!");
}

const choosePlayerPiece = (val) => {
  console.log(val);
}

const main = () => {
  document.querySelector('h1').textContent += '?';
}

document.addEventListener('DOMContentLoaded', main);
