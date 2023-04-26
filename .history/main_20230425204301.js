// Here I target the elements on the document
const calculatorDisplay = document.querySelector('.calculator__display');
const calculatorKeys = document.querySelector('.calculator__keys');

// these are variables that I defined to use in my later functions. Everything but current display is left as an empty string ready to be filled :)
let currentInput = '0';
let previousInput = '';
let calculationOperator = '';
let result = '';

// This puts 0 on as a place holder on the calculator display
const updateDisplay = () => {
  calculatorDisplay.textContent = currentInput;
}

// This is my function for the actual math of the calculator. I used the parseFloat method to tell the computer that my strings are really numbers and performs the math functions accordingly
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
// Event listeners
calculatorKeys.addEventListener('click', event => {
  const key = event.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
// 
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
