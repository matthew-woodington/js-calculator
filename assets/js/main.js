const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector(".clear-btn");
const displayScrn = document.querySelector(".display-scrn");
const calculateBtn = document.querySelector(".calc-btn");

let calculation = [];

numberBtn.forEach((button) => {
  button.addEventListener("click", function pushNumber(e) {
    // alert(e.target.innerHTML);
    calculation.push(e.target.innerHTML);
    displayScrn.value = calculation.join("");
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", function pushOperator() {
    // alert(e.target.innerHTML);
    calculation.push(this.innerText);
    displayScrn.value = calculation.join("");
  });
});

clearBtn.addEventListener("click", function clearAll() {
  // alert('clear all');
  calculation = [];
  num1 = "";
  num2 = "";
  opperation = "";
  displayScrn.value = "0";
});

calculateBtn.addEventListener("click", function calculate() {
  let num1 = "";
  let num2 = "";
  let operator = null;
  const operators = ["*", "/", "+", "-"];
  let answer;

  for (let i = 0; i < calculation.length; i++) {
    const calcChar = calculation[i];
    if (operators.includes(calcChar)) {
      operator = calcChar;
    } else if (!operator) {
      num1 += calcChar;
    } else {
      num2 += calcChar;
    }
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "-") {
    answer = num1 - num2;
  } else if (operator === "*") {
    answer = num1 * num2;
  } else if (operator === "/") {
    answer = num1 / num2;
  }

  const finalAnswer = answer;

  displayScrn.value = finalAnswer;
});
