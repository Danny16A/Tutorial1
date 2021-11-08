
var show = false;
function showDropdown(){
    

    var elementDropdown = document.querySelector('.dropdown')
    if  (show == false) {
        elementDropdown.classList.add('show-dropdown');
        show = true;
    }
    else {
        elementDropdown.classList.remove('show-dropdown');
        show = false;
    }
}