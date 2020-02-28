import showHome from "./homePage";
import showMenu from "./menuPage";
import showContact from "./contactPage";

const homeNav = document.querySelector("#home-nav");
const menuNav = document.querySelector("#menu-nav");
const contactNav = document.querySelector("#contact-nav");

showHome();


homeNav.addEventListener('click', function() {
    showHome();
});

menuNav.addEventListener('click', function() {
    showMenu();
});

contactNav.addEventListener('click', function() {
    showContact();
});