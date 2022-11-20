// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.assEventListener('click', () => {
    navbarMenu.classList.toggle('ia-active');
});