/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  Object(_setup__WEBPACK_IMPORTED_MODULE_0__["default"])(contactContent);
  contactContent.setAttribute('class', 'content-contact');

  const title = addTitle('Contact Us');
  contactContent.appendChild(title);

  for (let i = 0; i <= contactInfo.length - 1; i += 1) {
    const info = addinfo(contactInfo[i]);
    contactContent.appendChild(info);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showContact);


/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  Object(_setup__WEBPACK_IMPORTED_MODULE_0__["default"])(homeContent);
  homeContent.setAttribute('class', 'content-home');

  const title = addTitle('Pizza Dream');
  const p = addParagraph(
    'Our Pizza is always warm with lots of flavor that will surprise you. Lectus phasellus tristique cras interdum at dictumst luctus, mollis aptent tincidunt lorem ad ligula curae, morbi purus ut cubilia pellentesque platea. consectetur justo faucibus sociosqu aliquet aenean conubia ultrices hendrerit hac, non lacinia leo felis condimentum',
  );

  homeContent.appendChild(title);
  homeContent.appendChild(p);
};

/* harmony default export */ __webpack_exports__["default"] = (showHome);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");




const homeNav = document.querySelector('#home-nav');
const menuNav = document.querySelector('#menu-nav');
const contactNav = document.querySelector('#contact-nav');

Object(_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();


homeNav.addEventListener('click', () => {
  Object(_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuNav.addEventListener('click', () => {
  Object(_menuPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactNav.addEventListener('click', () => {
  Object(_contactPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  Object(_setup__WEBPACK_IMPORTED_MODULE_0__["default"])(menuContent);
  menuContent.setAttribute('class', 'content-menu');

  const title = addTitle('Only the most traditional pizzas');
  menuContent.appendChild(title);

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'content-pizza');

  for (let i = 0; i <= pizzaInfo.length - 1; i += 1) {
    const div = addPizza(pizzaInfo[i][0], pizzaInfo[i][1], pizzaInfo[i][2]);
    div1.appendChild(div);
  }

  menuContent.appendChild(div1);
};

/* harmony default export */ __webpack_exports__["default"] = (showMenu);


/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const setup = (content) => {
  // eslint-disable-next-line no-param-reassign
  content.innerHTML = '';
  content.setAttribute('class', '');
};

/* harmony default export */ __webpack_exports__["default"] = (setup);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map