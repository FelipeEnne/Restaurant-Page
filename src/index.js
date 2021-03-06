import showHome from './homePage';
import showMenu from './menuPage';
import showContact from './contactPage';
import init from './init';

init();

const homeNav = document.querySelector('#home-nav');
const menuNav = document.querySelector('#menu-nav');
const contactNav = document.querySelector('#contact-nav');

showHome();

homeNav.addEventListener('click', () => {
  showHome();
});

menuNav.addEventListener('click', () => {
  showMenu();
});

contactNav.addEventListener('click', () => {
  showContact();
});
