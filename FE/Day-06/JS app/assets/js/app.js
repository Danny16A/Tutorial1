var showElement = false;

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