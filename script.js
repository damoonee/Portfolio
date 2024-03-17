function openMenuMobile() {
    document.querySelector('.header-nav').classList.add('open');
    document.querySelector('.overlay').classList.add('open');
}

function closeMenuMobile() {
    document.querySelector('.header-nav').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
}

function switchTheme() {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('.theme-icon').classList.toggle('fa-moon');
    document.querySelector('.theme-icon').classList.toggle('fa-sun');
}