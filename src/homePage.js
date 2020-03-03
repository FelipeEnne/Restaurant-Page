import setup from './setup';

const homeContent = document.querySelector('#content');

const addTitle = (title) => {
  const text = document.createElement('div');
  text.innerHTML = title;

  return text;
};

const addParagraph = (p) => {
  const text = document.createElement('p');
  text.innerHTML = p;

  return text;
};

const showHome = () => {
  setup();
  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'content-home');
  homeContent.appendChild(divContent);

  const title = addTitle('Pizza Dream');
  const p = addParagraph(
    'Our Pizza is always warm with lots of flavor that will surprise you. Lectus phasellus tristique cras interdum at dictumst luctus, mollis aptent tincidunt lorem ad ligula curae, morbi purus ut cubilia pellentesque platea. consectetur justo faucibus sociosqu aliquet aenean conubia ultrices hendrerit hac, non lacinia leo felis condimentum',
  );

  divContent.appendChild(title);
  divContent.appendChild(p);
};

export default showHome;
