var execute = false;
var expressionArray= [];
var decimalInsert = false;
var decimalNumberInsert = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var signinserted = false;
var afterEqualLastSym = false;
var exponentialAlert;
var firstNegationStatus = false;
var negation = false;

function display(num){
  if(execute == false){
  document.calc.display.value=""
  execute = true;
}

if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-' || expressionArray[expressionArray.length -1 == '*'] || expressionArray[expressionArray.length - 1] == '/'){
    expressionArray.pop();
    expressionArray.push(num);
    signinserted = true;
  }

}

  if(signinserted == false){
    document.calc.display.value = document.calc.display.value + num;
    expressionArray.push(num)

  }

  if(Number(document.calc.display.value.length) <= 10){
    document.calc.display.value = document.calc.display.value
  }else{
    document.getElementById("zero").disabled = true;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;
    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
    document.getElementById("button9").disabled = true;
    document.getElementById("decimalButton").disabled = true;
  }

  if(decimalNumberInsert == false){
 let commaInput = Number(document.calc.display.value.split(",").join("")).toLocaleString();
 document.calc.display.value = commaInput;
  }
}

function clearOperator(){
  signinserted = false
   i = i = 7;
  symbolStatus = false
  firstPercent = false;
  document.calc.display.value= 0
  execute = false;
  decimalInsert = false;
  decimalNumberInsert = false;
  firstNegationStatus = true;

  document.getElementById("zero").disabled = false;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
  document.getElementById("button3").disabled = false;
  document.getElementById("button4").disabled = false;
  document.getElementById("button5").disabled = false;
  document.getElementById("button6").disabled = false;
  document.getElementById("button7").disabled = false;
  document.getElementById("button8").disabled = false;
  document.getElementById("button9").disabled = false;
  document.getElementById("decimalButton").disabled = false;
}
function equal(){
  negation = false;
  symbolStatus = false
  firstPercent = false;
  afterEqualLastSym = true;


  document.getElementById("decimalButton").disabled = true;
  document.getElementById("zero").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
  document.getElementById("button5").disabled = true;
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true;
  document.getElementById("button9").disabled = true;

  let caclEvaluated= eval(expressionArray.join(''));
  if(expressionArray.join(",").includes("e")){
     exponentialAlert = true;
  }

    expressionArray = [];
    expressionArray.push(caclEvaluated)
  if(caclEvaluated > 999999999 || caclEvaluated < -999999999){
    document.calc.display.value = caclEvaluated.toExponential(9)
  }else{
    document.calc.display.value=caclEvaluated.toLocaleString("en")
  }
  if(exponentialAlert == true){
    document.calc.display.value = caclEvaluated
  }

  if(document.calc.display.value === "Infinity" || document.calc.display.value === "∞" || document.calc.display.value === "NaN") {
    document.calc.display.value = "Error";
  }
}

function clearCalc(){
  afterEqualLastSym = false;
  signinserted = false
  document.calc.display.value=0;
   i = i = 7;
  execute = false;
  decimalInsertion = false;
  decimalNumberInsert = false;
  firstNegationStatus = false
    expressionArray = [];

    document.getElementById("zero").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("decimalButton").disabled = false;
}

function numberNegation(){
  document.calc.display.value = document.calc.display.value.split(",").join('')
  let numsCountNeg = document.calc.display.value.length

  document.calc.display.value = document.calc.display.value * -1

  let negValue = document.calc.display.value
  document.calc.display.value = Number(document.calc.display.value.split(",").join('')).toLocaleString();

  if(firstNegationStatus == false){
    expressionArray[expressionArray.length - expressionArray.length ]= expressionArray[expressionArray.length - expressionArray.length] *-1
    firstNegationStatus = true;
    negation = true;
  }
  else {
    let whereToNegate = expressionArray.length - numsCountNeg
    if(expressionArray.length >= whereToNegate){
      expressionArray.pop();
      negation = true;
    }

    expressionArray.push(negValue)
  }
}

function displayDecimal(num){
  if(decimalInsert == false){
    document.calc.display.value = document.calc.display.value + num
    expressionArray.push(num)
    decimalInsert = true;
    decimalNumberInsert = true;
    document.getElementById("decimalButton").disabled = true;
  }
}

function numberPercentage(){
  document.calc.display.value = document.calc.display.value.split(",").join("")
if(afterEqualLastSym == false){
  if(firstPercent == false){
    let numsCount = document.calc.display.value.length
    numsCount = numsCount -1

  let amountToBeRemoved = expressionArray.length - numsCount
  while(expressionArray.length >= amountToBeRemoved){
    expressionArray.pop();
  }
  document.calc.display.value = Number(document.calc.display.value) / 100
expressionArray[amountToBeRemoved] = document.calc.display.value
  firstPercent = true;
}
else{
 let numsCount2 = document.calc.display.value.length
 numsCount2 = numsCount2 - i
  let amountToBeRemoved2 = expressionArray.length - numsCount2
expressionArray.splice(expressionArray.length -1)
  document.calc.display.value = document.calc.display.value / 100
  expressionArray.push(document.calc.display.value)
  if(document.calc.display.value>= 0.9999999){
    let expon= Number(document.calc.display.value)
    document.calc.display.value = expon.toExponential(9)
  }
  i = i+2;
}
}else{
  document.calc.display.value = document.calc.display.value / 100
  expressionArray = []
  expressionArray.push(document.calc.display.value)
  let expon= Number(document.calc.display.value)
  if(document.calc.display.value>= 0.9999999){
  document.calc.display.value = expon.toExponential(9)
    }
  }
}
