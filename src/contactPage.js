import setup from './setup';

const contactContent = document.querySelector('#content');

const contactInfo = [
  ['Email: pizzadream@company.com'],
  ['Phone: 555.555.5555'],
  ['Address: 123 pizzadream 100, SP'],
];

const addTitle = (title) => {
  const text = document.createElement('h1');
  text.innerHTML = title;

  return text;
};

const addinfo = (info) => {
  const text = document.createElement('h2');
  text.innerHTML = info;

  return text;
};

const showContact = () => {
  setup(contactContent);
  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'content-contact');
  contactContent.appendChild(divContent);


  const title = addTitle('Contact Us');
  divContent.appendChild(title);

  for (let i = 0; i <= contactInfo.length - 1; i += 1) {
    const info = addinfo(contactInfo[i]);
    divContent.appendChild(info);
  }
};

export default showContact;
