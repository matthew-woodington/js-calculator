const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempDisplayEl = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const calcBtn = document.querySelector(".calculate");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".clear-last");

let display1Num = "";
let display2Num = "";
let result = null;
let lastOperator = "";
let hasDecimal = false;
let hasCalc = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerHTML === "." && !hasDecimal) {
      hasDecimal = true;
    } else if (e.target.innerHTML === "." && hasDecimal) {
      return;
    }

    if (!hasCalc) {
      display2Num += e.target.innerHTML;
      display2El.innerHTML = display2Num;
    } else {
      clearAll.click();
      hasCalc = false;
      display2Num += e.target.innerHTML;
      display2El.innerHTML = display2Num;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!display2Num) return;

    hasCalc = false;
    hasDecimal = false;

    const operationType = e.target.innerHTML;

    if (display1Num && display2Num && lastOperator) {
      executeMath();
    } else {
      result = parseFloat(display2Num);
    }

    clearVariable(operationType);
    lastOperator = operationType;
  });
});

calcBtn.addEventListener("click", (e) => {
  if (!display2Num || !display1Num) return;
  hasDecimal = false;
  executeMath();
  clearVariable();

  display2El.innerHTML = result;
  tempDisplayEl.innerHTML = "";

  display2Num = result;
  display1Num = "";

  hasCalc = true;
});

clearAll.addEventListener("click", () => {
  display1El.innerHTML = "";
  display2El.innerHTML = "";
  tempDisplayEl.innerHTML = "";

  display1Num = "";
  display2Num = "";

  result = "";

  hasCalc = false;
});

clearLast.addEventListener("click", () => {
  display2El.innerHTML = "";
  display2Num = "";

  hasCalc = false;
});

function executeMath() {
  if (lastOperator === "x") {
    result = parseFloat(result) * parseFloat(display2Num);
  } else if (lastOperator === "/") {
    result = parseFloat(result) / parseFloat(display2Num);
  } else if (lastOperator === "+") {
    result = parseFloat(result) + parseFloat(display2Num);
  } else if (lastOperator === "-") {
    result = parseFloat(result) - parseFloat(display2Num);
  } else if (lastOperator === "%") {
    result = parseFloat(result) % parseFloat(display2Num);
  }
}

function clearVariable(name = "") {
  display1Num += display2Num + " " + name + " ";
  display1El.innerHTML = cleanDisplay(display1Num);
  display2El.innerHTML = "";
  display2Num = "";
  tempDisplayEl.innerHTML = result;
}

function cleanDisplay(input) {
  let displayArray = input.split("");

  for (let i = 0; i < displayArray.length; i++) {
    const opperations = ["x", "/", "+", "-", "%"];
    let indexOpperator = displayArray[i];

    if (opperations.includes(displayArray[i])) {
      displayArray[i] = `<span class='opp'>${indexOpperator}</span>`;
    }
  }

  output = displayArray.join("");
  return output;
}

// keyboard functionality

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickNumBtn(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOppBtn(e.key);
  } else if (e.key === "*") {
    clickOppBtn("x");
  } else if (e.key === "Enter" || e.key === "=") {
    clickCalc();
  } else if (e.key === "Backspace") {
    clickClearLast();
  } else if (e.key === "Escape") {
    clickClearAll();
  }
});

function clickNumBtn(key) {
  numbers.forEach((number) => {
    if (number.innerHTML === key) {
      number.click();
    }
  });
}

function clickOppBtn(key) {
  operators.forEach((opperator) => {
    if (opperator.innerHTML === key) {
      opperator.click();
    }
  });
}

function clickCalc() {
  calcBtn.click();
}

function clickClearLast() {
  clearLast.click();
}

function clickClearAll() {
  clearAll.click();
}
