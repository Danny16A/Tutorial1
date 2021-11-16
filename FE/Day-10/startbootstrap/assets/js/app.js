const navbar = document.querySelector('.navbar');

function handleNavbar(){
    window.addEventListener('scroll', function(){
        let  heightCurent = window.pageYOffset;
        if(heightCurent >= 100){
            navbar.classList.add('navbar-move');
        }
        else {
            navbar.classList.remove('navbar-move');

        }
    })
}

handleNavbar();