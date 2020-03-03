const setup = () => {
  // eslint-disable-next-line no-param-reassign
  const nav = document.getElementById('navbar');

  if (nav.nextElementSibling != null) {
    nav.nextElementSibling.remove();
  }
};

export default setup;
