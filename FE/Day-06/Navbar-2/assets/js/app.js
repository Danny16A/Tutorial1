function showDropdown() {

    var eleDropdown = document.querySelector('.dropdown-menu');
    if (showDropdown == false) {
        eleDropdown.classList.add('show');
        showDropdown = true;
    }
    else {
        eleDropdown.classList.remove('show');
        showDropdown = false;
    }
}