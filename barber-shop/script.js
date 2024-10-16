var navIcon = document.getElementById('toggle-icon');
var nav = document.getElementById('header');
navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    nav.classList.toggle('active');
});
