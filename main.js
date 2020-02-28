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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\r\n\r\nconst contactContent = document.querySelector(\"#content\");\r\n\r\nconst contactInfo = [\r\n    [\"Email: pizzadream@company.com\"],\r\n    [\"Phone: 555.555.5555\"],\r\n    [\"Address: 123 pizzadream 100, SP\"]\r\n];\r\n\r\nconst addTitle = title => {\r\n  let text = document.createElement(\"h1\");\r\n  text.innerHTML = title;\r\n\r\n  return text;\r\n};\r\n\r\nconst addinfo = info => {\r\n  let text = document.createElement(\"h2\");\r\n  text.innerHTML = info;\r\n\r\n  return text;\r\n};\r\n\r\nconst showContact = () => {\r\n  Object(_setup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contactContent);\r\n  contactContent.setAttribute(\"class\", \"content-contact\");\r\n\r\n  const title = addTitle(\"Contact Us\");\r\n  contactContent.appendChild(title);\r\n\r\n  const info = addinfo(\"Email: pizzadream@company.com\");\r\n\r\n  for (let i = 0; i <= contactInfo.length - 1; i++) {\r\n    let info = addinfo(contactInfo[i]);\r\n    contactContent.appendChild(info);\r\n  }\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showContact);\r\n\n\n//# sourceURL=webpack:///./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\r\n\r\nconst homeContent = document.querySelector(\"#content\");\r\n\r\nconst addTitle = title => {\r\n  let text = document.createElement(\"div\");\r\n  text.innerHTML = title;\r\n\r\n  return text;\r\n};\r\n\r\nconst addParagraph = p => {\r\n  let text = document.createElement(\"p\");\r\n  text.innerHTML = p;\r\n\r\n  return text;\r\n};\r\n\r\nconst showHome = () => {\r\n  Object(_setup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(homeContent);\r\n  homeContent.setAttribute(\"class\", \"content-home\");\r\n\r\n  const title = addTitle(\"Pizza Dream\");\r\n  const p = addParagraph(\r\n    \"Our Pizza is always warm with lots of flavor that will surprise you. Lectus phasellus tristique cras interdum at dictumst luctus, mollis aptent tincidunt lorem ad ligula curae, morbi purus ut cubilia pellentesque platea. consectetur justo faucibus sociosqu aliquet aenean conubia ultrices hendrerit hac, non lacinia leo felis condimentum\"\r\n  );\r\n\r\n  homeContent.appendChild(title);\r\n  homeContent.appendChild(p);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showHome);\r\n\n\n//# sourceURL=webpack:///./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\nconst homeNav = document.querySelector(\"#home-nav\");\r\nconst menuNav = document.querySelector(\"#menu-nav\");\r\nconst contactNav = document.querySelector(\"#contact-nav\");\r\n\r\nObject(_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\nhomeNav.addEventListener('click', function() {\r\n    Object(_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nmenuNav.addEventListener('click', function() {\r\n    Object(_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ncontactNav.addEventListener('click', function() {\r\n    Object(_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\r\n\r\nconst menuContent = document.querySelector(\"#content\");\r\n\r\nconst pizzaInfo = [\r\n  [\"Pepperoni\", \"img/pepperoni.jpg\", \"pepperoni\"],\r\n  [\"Margherita\", \"img/margherita.jpg\", \"margherita\"],\r\n  [\"Mozzarella\", \"img/mozzarella.jpg\", \"mozzarella\"],\r\n  [\"napolitan\", \"img/napolitan.jpg\", \"napolitan\"]\r\n];\r\n\r\nconst addTitle = title => {\r\n  let text = document.createElement(\"h1\");\r\n  text.innerHTML = title;\r\n\r\n  return text;\r\n};\r\n\r\nconst addPizza = (title, src, alt) => {\r\n  let div = document.createElement(\"div\");\r\n\r\n  let h2 = document.createElement(\"h2\");\r\n  let image = document.createElement(\"img\");\r\n\r\n  h2.innerHTML = title;\r\n  image.setAttribute(\"src\", src);\r\n  image.setAttribute(\"alt\", alt);\r\n\r\n  div.appendChild(h2);\r\n  div.appendChild(image);\r\n\r\n  return div;\r\n};\r\n\r\nconst showMenu = () => {\r\n  Object(_setup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuContent);\r\n  menuContent.setAttribute(\"class\", \"content-menu\");\r\n\r\n  const title = addTitle(\"Only the most traditional pizzas\");\r\n  menuContent.appendChild(title);\r\n\r\n  let div1 = document.createElement(\"div\");\r\n  div1.setAttribute(\"class\", \"content-pizza\");\r\n\r\n  for (let i = 0; i <= pizzaInfo.length - 1; i++) {\r\n    let div = addPizza(pizzaInfo[i][0], pizzaInfo[i][1], pizzaInfo[i][2]);\r\n    div1.appendChild(div);\r\n  }\r\n\r\n  menuContent.appendChild(div1);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showMenu);\r\n\n\n//# sourceURL=webpack:///./src/menuPage.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setup = content => {\r\n  content.innerHTML = \"\";\r\n  content.setAttribute(\"class\", \"\");\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (setup);\r\n\n\n//# sourceURL=webpack:///./src/setup.js?");

/***/ })

/******/ });