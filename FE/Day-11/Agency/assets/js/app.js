var showNavbar = false;

function toggle(){
const eleNavbarNav = document.querySelector('.nav-list')
if (showNavbar){
    eleNavbarNav.classList.remove('active');
    showNavbar = false;
}
else {
    eleNavbarNav.classList.add('active');
    showNavbar = true;
}
}