const main = document.querySelector("main");
const color = document.querySelector(".color");
const colorArr = [
  "blue",
  "red",
  "white",
  "black",
  "aqua",
  "blueviolet",
  "coral",
  "green",
  "gray",
  "orange",
  "pink",
  "brown",
  "purple",
  "yellow",
];
const charactersHex = "0123456789ABCDEF";
let indexMenu = 0;

function init() {
  activeButton();
  activeMenu();
  randomColor(indexMenu);
}

function randomNumberArr() {
  return Math.floor(Math.random() * colorArr.length);
}

function activeMenu() {
  const menu = document.querySelectorAll("nav > p");
  menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      menu[indexMenu].classList.remove("active");
      indexMenu = index;
      item.classList.add("active");
      randomColor(indexMenu);
    });
  });
}

function activeButton() {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    randomColor(indexMenu);
  });
}

function randomColor(index) {
  if (index === 0) {
    const colorName = colorArr[randomNumberArr()];
    activeColor(colorName);
  } else {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersHex.length);
      hexCode += charactersHex.charAt(randomIndex);
    }
    activeColor(hexCode);
  }
}

function activeColor(colorValue) {
  main.style.backgroundColor = colorValue;
  color.innerHTML = colorValue;
  color.style.color = colorValue;
}

init();
