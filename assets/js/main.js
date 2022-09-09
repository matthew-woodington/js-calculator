const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector(".clear-btn");
const displayScrn = document.querySelector(".display-scrn");
const calculateBtn = document.querySelector(".calc-btn");

// numberBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert(button.innerText);
//   });
// });

// operatorBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert(button.innerText);
//   });
// });

numberBtn.forEach((button) => {
  button.addEventListener("click", pushNumber);
});

function pushNumber() {
  //   alert(this.innerText);
  calculation.push(this.innerText);
}

operatorBtn.forEach((button) => {
  button.addEventListener("click", pushOperator);
});

function pushOperator() {
  //   alert(this.innerText);
  calculation.push(this.innerText);
}

clearBtn.addEventListener("click", clearAll);

function clearAll() {
  //   alert("clear all");
  calculation = [];
}

calculateBtn.addEventListener("click", calculate);

let calculation = [];

function calculate() {
  //   alert(this.innerText);
  let opperandOne = "";
  let opperandTwo = "";
  let opperation = "";

  for (i = 0; i < calculation.length; i++) {
    if (
      calculation[i] === "+" ||
      calculation[i] === "-" ||
      calculation[i] === "÷" ||
      calculation[i] === "x"
    ) {
      opperation = calculation[i];
    } else if ((opperation = undefined)) {
      opperandOne += calculation[i];
    } else {
      opperandTwo += calculation[i];
    }
  }

  debugger;

  switch (opperation) {
    case "+":
      answer = opperandOne + opperandTwo;
      break;
    case "-":
      answer = opperandOne - opperandTwo;
      break;
    case "÷":
      answer = opperandOne / opperandTwo;
      break;
    case "x":
      answer = opperandOne * opperandTwo;
      break;
  }
}
