let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let links = document.querySelectorAll('.header__menu-item');

/* Open/close mobile menu */
function toggleMobileMenu() {
  burger.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}

burger.addEventListener('click', toggleMobileMenu);

/* Close menu after choose link */
links.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

/* Close menu after click on free space */
menu.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target === menu) {
    toggleMobileMenu();
    console.log('menu click');
  }
});
