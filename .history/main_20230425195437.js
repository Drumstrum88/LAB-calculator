const calculatorDisplay = document.querySelector('.calculator__display');
const calculatorKeys = document.querySelector('.calculator__keys');


let currentInput = '0';
let previousInput = '';
let calculationOperator = '';
let result = '';

// Function to update the calculator display with the current input
const updateDisplay = () => {
  calculatorDisplay.textContent = currentInput;
}

// Function to perform a calculation and update the display with the result
const calculate = () => {
  switch (calculationOperator) {
    case 'add':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case 'subtract':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case 'multiply':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case 'divide':
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = '';
}

// Event listener for clicking a calculator key
calculatorKeys.addEventListener('click', event => {
  const key = event.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;

  if (event.target.matches('button')) {
    if (action === 'decimal') {
      if (!currentInput.includes('.')) {
        currentInput += '.';
      }
    } else if (action === 'clear') {
      currentInput = '0';
      previousInput = '';
      calculationOperator = '';
      result = '';
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      if (previousInput === '') {
        previousInput = currentInput;
      } else {
        calculate();
      }
      calculationOperator = action;
      currentInput = '';
    } else if (action === 'calculate') {
      if (previousInput === '') {
        return;
      } else {
        calculate();
      }
    } else {
      if (currentInput === '0') {
        currentInput = keyContent;
      } else {
        currentInput += keyContent;
      }
    }
    updateDisplay();
  }
});
