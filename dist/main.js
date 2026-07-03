/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js"
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");


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
  (0,_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);


/***/ },

/***/ "./src/homePage.js"
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");


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
  (0,_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);


/***/ },

/***/ "./src/init.js"
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ },

/***/ "./src/menuPage.js"
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");


const menuContent = document.querySelector('#content');

const pizzaInfo = [
  ['Pepperoni', 'img/pepperoni.jpg', 'pepperoni'],
  ['Margherita', 'img/margherita.jpg', 'margherita'],
  ['Mozzarella', 'img/mozzarella.jpg', 'mozzarella'],
  ['napolitan', 'img/napolitan.jpg', 'napolitan'],
];

const addTitle = (title) => {
  const text = document.createElement('h1');
  text.innerHTML = title;

  return text;
};

const addPizza = (title, src, alt) => {
  const div = document.createElement('div');

  const h2 = document.createElement('h2');
  const image = document.createElement('img');

  h2.innerHTML = title;
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);

  div.appendChild(h2);
  div.appendChild(image);

  return div;
};

const showMenu = () => {
  (0,_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'content-menu');
  menuContent.appendChild(divContent);

  const title = addTitle('Only the most traditional pizzas');
  divContent.appendChild(title);

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'content-pizza');

  for (let i = 0; i <= pizzaInfo.length - 1; i += 1) {
    const div = addPizza(pizzaInfo[i][0], pizzaInfo[i][1], pizzaInfo[i][2]);
    div1.appendChild(div);
  }

  divContent.appendChild(div1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);


/***/ },

/***/ "./src/setup.js"
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setup = () => {
  // eslint-disable-next-line no-param-reassign
  const nav = document.getElementById('navbar');

  if (nav.nextElementSibling != null) {
    nav.nextElementSibling.remove();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./src/init.js");





(0,_init__WEBPACK_IMPORTED_MODULE_3__["default"])();

const homeNav = document.querySelector('#home-nav');
const menuNav = document.querySelector('#menu-nav');
const contactNav = document.querySelector('#contact-nav');

(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();

homeNav.addEventListener('click', () => {
  (0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuNav.addEventListener('click', () => {
  (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactNav.addEventListener('click', () => {
  (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map