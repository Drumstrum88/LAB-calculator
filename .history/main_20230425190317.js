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
