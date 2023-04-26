const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(`.calculator_display`);
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(`.calculator__keys`);
keys.addEventListener(`click`, (event) => {
  const { target } = event;
}
