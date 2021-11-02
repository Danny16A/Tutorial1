const elementEmail = document.querySelector(
    ".login-container .login-input[name=email]"
);
const elementPassword = document.querySelector(
    ".login-container .login-input[name=password]"
);
const elementAlertValidate = document.querySelector(
    ".login-container .alert-validate"
);

function validateInput() {
    hideValidate();

    var msg = "";

    if (!elementEmail.value) {
        msg = "Email required !";
    } else if (!validateEmail(elementEmail.value)) {
        msg = "Email invalid !";
    } else if (!elementPassword.value) {
        msg = "Password required !";
    } else if (elementPassword.value.length < 6) {
        msg = "Password large 6 character !";
    }

    showValidate(msg);
}

function showValidate(tham_so) {
    if (tham_so.length > 0) {
        elementAlertValidate.innerHTML = tham_so;
        elementAlertValidate.style.display = "block";
    }
}

function hideValidate() {
    elementAlertValidate.style.display = "none";
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
