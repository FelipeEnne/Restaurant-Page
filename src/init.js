const contentInit = document.querySelector('#content');

const init = () => {
  const navContent = document.createElement('nav');
  navContent.setAttribute('class', 'navbar navbar-dark bg-dark');
  navContent.setAttribute('id', 'navbar');
  contentInit.appendChild(navContent);

  const imglogo = document.createElement('img');
  imglogo.setAttribute('src', 'img/logo.png');
  imglogo.setAttribute('alt', 'logo');

  navContent.appendChild(imglogo);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'nav');

  navContent.appendChild(ul);

  const liHome = document.createElement('li');
  liHome.setAttribute('id', 'home-nav');
  liHome.setAttribute('class', 'nav-item');
  liHome.innerHTML = 'Home';

  ul.appendChild(liHome);

  const liMenu = document.createElement('li');
  liMenu.setAttribute('id', 'menu-nav');
  liMenu.setAttribute('class', 'nav-item');
  liMenu.innerHTML = 'Menu';

  ul.appendChild(liMenu);

  const liContact = document.createElement('li');
  liContact.setAttribute('id', 'contact-nav');
  liContact.setAttribute('class', 'nav-item');
  liContact.innerHTML = 'Contact';

  ul.appendChild(liContact);
};

export default init;
