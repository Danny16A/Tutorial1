
var activeBackground = false;
function closeAlert() {
    var elementWarning = document.querySelector('.alert.alert-warning');
    if (activeBackground == false) {

        elementWarning.style.backgroundColor = "red";
        activeBackground = true;
    }
    else {
        elementWarning.style.backgroundColor = "";
        activeBackground = false;
    }

}


function addAlertItem() {

    var eleAlertList = document.querySelector('.alert-list');

    var oldContent = eleAlertList.innerHTML;

    console.log(oldContent);

    eleAlertList.innerHTML = oldContent + `<div class="alert alert-sucess">
                                <button class="alert-close">X</button>
                                Lorem ipsum dolor sit amet.
                            </div>`;

}