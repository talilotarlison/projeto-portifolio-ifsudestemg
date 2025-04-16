let btnMenu = document.querySelector('#menu');

btnMenu.addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.style.display = (!nav.style.display || nav.style.display === 'none') ? 'block' : 'none';

})