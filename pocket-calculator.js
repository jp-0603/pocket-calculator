function display(num) {
  document.calc.display.value = document.calc.display.value + num;
}
function decimal() {
  document.calc.display.value = document.calc.display ;
}
function equal() {
let equation = eval(document.calc.display.value)
document.calc.display.value = equation
}
