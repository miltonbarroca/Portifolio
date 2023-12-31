document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#vermais');
    var extraContent = document.querySelector('#extra-content');

    button.addEventListener('click', function() {
        extraContent.classList.toggle('hidden');
        button.textContent = extraContent.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
    });
});
//botao slider de cards
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
//menu hamburguer responsivo
document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.querySelector('.navigation ul');
    navList.classList.toggle('show');
});

// Adiciona um evento de clique aos links para fechar o menu
var navLinks = document.querySelectorAll('.navigation ul li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navList = document.querySelector('.navigation ul');
        navList.classList.remove('show');
    });
});
