const input =
document.getElementById('#input'),

number = document.querySelectorAll('.numbers'),

operator = document.querySelectorAll('.key--operator'),

result = document.getElementById('#result'),

clear = document.getElementById('#clear'),

resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {
    let currentString = input.innerHTML;
    let lastChar = 
    currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML
    } else {
      resultDisplayed = false; 
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML
    }

  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
      let newString = currentString.substring(0,
        currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString; 
       } else if (currentString.length == 0) {
        console.log("enter a number first");
       } else {
        input.innerHTML;
       }
  });  
  
}

resultDisplayed.addEventListener("click", function() {
  let inputString = input.innerHTML;
  let numbers = inputString.split(/\+|\-|\×|\÷/g);

  let operators = inputString.replace(/[0-9]|\./g, "").split("");)

  let divide = operator.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] /)
  }
}
