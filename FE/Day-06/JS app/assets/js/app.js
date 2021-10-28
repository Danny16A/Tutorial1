var showElement = false;
console.log("app.js");

function Ex1() {
    console.log("Hello World!");
    var elementShow = document.querySelector('.ex-1');
    if (showElement == false) {
        elementShow.classList.add('show')
        showElement = true
    }

    else {
        elementShow.classList.remove('show')
        showElement = false;
    }
}

function Ex2() {
    var elementResult = document.querySelector("#ex-2");
    var elementInput = document.querySelector("#input-number");
    var number = elementInput.value;

    var resultString = "";

    var isEven = true;
    if (number % 2 != 0) {
        isEven = false;
    }
    console.log(isEven + "check isEven");

    if (isEven) {
        resultString = "Even";
    }
    else {
        resultString = "Odd";
    }

    var isPositive = true;
    if (number < 0) {
        isPositive = false;
    }

    if (isPositive) {
        resultString += " and positive";
    }
    else {
        resultString += " and negative";
    }
    elementResult.innerHTML = resultString;
}

function Ex3() {
    var elementResult = document.querySelector("#ex-3");
    var elementInput1 = document.querySelector("#input-number-1");
    var elementInput2 = document.querySelector("#input-number-2");
    var number1 = elementInput1.value;
    var number2 = elementInput2.value;

    var resultString = "";

    var numSum = parseInt(number1) + parseInt(number2);
    var numMinus = number1 - number2;
    var numMul = number1 * number2;

    resultString = "a + b = " + numSum + ", a - b = " + numMinus + ", a * b = " + numMul;

    if (number2 != 0) {
        var numDiv = number1 / number2;
        resultString += ", a / b = " + numDiv;
    }
    else {
        resultString += ", cant divide because b = 0"
    }

    console.log("Sum is " + numSum);

    elementResult.innerHTML = resultString;
}

function Ex4() {
    var elementResult = document.querySelector("#ex-4");
    var elementInput1 = document.querySelector("#input-number-3");
    var elementInput2 = document.querySelector("#input-number-4");
    var number1 = elementInput1.value;
    var number2 = elementInput2.value;

    var resultString = "";

    if (parseInt(number1) > parseInt(number2)) {
        resultString = number1 + " > " + number2;
    }
    else if (parseInt(number1) < parseInt(number2)) {
        resultString = number1 + " < " + number2;
    }
    else {
        resultString = number1 + "=" + number2;
    }

    elementResult.innerHTML = resultString;
}

function Ex5(){
    var elementResult = document.querySelector("#ex-5");
    var elementInput1 = document.querySelector("#input-number-5");
    var elementInput2 = document.querySelector("#input-number-6");
    var elementInput3 = document.querySelector("#input-number-7");
    var elementInput4 = document.querySelector("#input-number-8");
    var number1 = elementInput1.value;
    var number2 = elementInput2.value;
    var number3 = elementInput3.value;
    var number4 = elementInput4.value;

    var resultString = "";

    var maxNumber = 0;

    if (parseInt(number1) > parseInt(number2))
    {
        maxNumber = parseInt(number1);
    }
    else {
        maxNumber = parseInt(number2);
    }

    if (maxNumber > parseInt(number3))
    {
        maxNumber = maxNumber;
    }
    else{
        maxNumber = parseInt(number3);
    }

    if (maxNumber > parseInt(number4))
    {
        maxNumber = maxNumber;
    }
    else{
        maxNumber = parseInt(number4);
    }

    if (parseInt(number1) == parseInt(number2) && parseInt(number2) == parseInt(number3) && parseInt(number3) == parseInt(number4)){
        resultString = "They are all equal";
    }
    else{
        resultString = "The largest number is " + maxNumber;
    }

    elementResult.innerHTML = resultString;
}

function Ex6(){
    var elementResult = document.querySelector("#ex-6");
    var elementInput1 = document.querySelector("#input-width");
    var elementInput2 = document.querySelector("#input-height");
    var width = elementInput1.value;
    var height = elementInput2.value;

    var resultString = "";

    var perimeter = (parseInt(width) + parseInt(height)) * 2;
    var area = parseInt(width) * parseInt(height);

    resultString = "The P is " + perimeter + " and S is " + area;
    console.log(perimeter);
    elementResult.innerHTML = resultString;
}