(function() {
    var wrap = document.querySelector('.wrap'),
        menuBttn = document.querySelector('.header__menu-button');


    menuBttn.addEventListener('click', function() {
        wrap.classList.toggle('open-menu');
    })
}())