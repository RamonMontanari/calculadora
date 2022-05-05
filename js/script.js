const $buttonsNumbers = document.querySelectorAll(
  ".calculator__buttons--number"
); //todos os números
const $buttonsOperators = document.querySelectorAll(
  ".calculator__buttons--operator"
); //todos operadores
const $inputGetNumbers = document.querySelector(".calculator__display-input"); //linha 14html
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator__buttons--result");

let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;

    $inputGetNumbers.value = calculate.replaceAll(" ", " ");
  });
});

$buttonsOperators.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", " ");
  });
});

$buttonResult.addEventListener("click", function () {
  $result.textContent = eval(calculate);
});
