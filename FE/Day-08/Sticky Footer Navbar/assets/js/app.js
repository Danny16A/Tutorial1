var showNavbar = false;

function toggle(){
const eleNavbarNav = document.querySelector('.navbar-nav')
const elenavbarSearch = document.querySelector('.navbar-search')
if (showNavbar){
    eleNavbarNav.classList.remove('active');
    elenavbarSearch.classList.remove('active');
    showNavbar = false;
}
else {
    eleNavbarNav.classList.add('active');
    elenavbarSearch.classList.add('active');
    showNavbar = true;
}
}