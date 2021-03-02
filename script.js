const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const startButton = document.querySelector(".start");

const order = [button1, button2, button1, button3];

// play the sequence
startButton.addEventListener("click", () => {
  let time = 0;
  for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
      order[i].classList.toggle("blue");
      order[i - 1].classList.toggle("blue");
    }, time);
    time += 2000;
  }
});
