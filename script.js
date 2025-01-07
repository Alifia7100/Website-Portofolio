let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Undergraduate', 'Information System Student', 'at University of', 'Singaperbangsa Karawang'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
  });