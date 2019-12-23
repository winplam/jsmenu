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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsmenu */ \"./src/jsmenu.js\");\n\n\n// Menu titles and URL's\nconst titles = [\n  ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'],\n  ['#', '#', '#', '#', '#']]\n\n// Submenu content\nconst submenu = [\n  [\n    ['Lorem', 'Labore', 'Consectur', 'Velit', 'Dolor'],\n    ['#', '#', '#', '#', '#'],\n  ], [\n    ['Ipsum', 'Adipiscing', 'Elit', 'Eiusmod', 'Amet'],\n    ['#', '#', '#', '#', '#'],\n  ], [\n    ['Dolor', 'Magnis', 'Natoque', 'Felis', 'Justo'],\n    ['#', '#', '#', '#', '#'],\n  ], [\n    ['Aenean', 'Rhoncus', 'Etiam', 'Curabitur', 'Quam'],\n    ['#', '#', '#', '#', '#'],\n  ], [\n    ['Commodo', 'Augue', 'Magna', 'Luctus', 'Faucibus'],\n    ['#', '#', '#', '#', '#'],\n  ],\n]\n\n// Call method to generate menu. The first parameter is the ID of the parent element\nObject(_jsmenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().menuContainer('menu', titles, submenu)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jsmenu.js":
/*!***********************!*\
  !*** ./src/jsmenu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction jsmenu (parent, titles, submenu) {\n  const anchorTag = {\n    createAnchor (parent, href, title) {\n      const newElement = document.createElement('a')\n      newElement.href = href\n      newElement.textContent = title\n      parent.appendChild(newElement)\n    },\n  }\n\n  const menuContents = {\n    createUL (menuHeader, items, href, index) {\n      const menuContainer = document.createElement('div')\n      menuContainer.id = `menu-${index}`\n      menuHeader.appendChild(menuContainer)\n      items.forEach((menuName, index) => {\n        anchorTag.createAnchor(menuContainer, href[index], menuName)\n      })\n    },\n  }\n\n  const menuHeader = {\n    createLI (menuBar, title, href) {\n      const newElement = document.createElement('li')\n      menuBar.appendChild(newElement)\n      anchorTag.createAnchor(newElement, href, title)\n      return newElement\n    },\n  }\n\n  const menuBar = {\n    createUL (parent) {\n      const parentElement = document.getElementById(parent)\n      const newElement = document.createElement('ul')\n      newElement.classList.add('menu')\n      parentElement.appendChild(newElement)\n      const clearDiv = document.createElement('div')\n      clearDiv.style.clear = 'both'\n      parentElement.appendChild(clearDiv)\n      return newElement\n    },\n  }\n\n  function menuContainer (parent, titles, submenu) {\n    const newMenuBar = menuBar.createUL(parent)\n\n    function createMenuHeaders () {\n      titles[0].forEach((headerName, index) => {\n        const newMenuHeader = menuHeader.createLI(newMenuBar, headerName,\n          titles[1][index])\n        menuContents.createUL(newMenuHeader, submenu[index][0], submenu[index][1],\n          index + 1)\n      })\n    }\n\n    createMenuHeaders()\n    menuController(parent)\n  }\n\n  function closeAllMenus () {\n    const menuHeaders = document.querySelectorAll('li > a')\n    menuHeaders.forEach(header => {\n      header.nextElementSibling.style.visibility = 'hidden'\n    })\n  }\n\n  function menuController (menuID) {\n    let mouseOnMenu = false\n    const menuHeaders = document.querySelectorAll('li > a')\n    menuHeaders.forEach(\n      header => header.addEventListener('mouseover', function () {\n        if (header.nextElementSibling.style.visibility === 'visible' && mouseOnMenu) {\n          closeAllMenus()\n        } else {\n          closeAllMenus()\n          header.nextElementSibling.style.visibility = 'visible'\n        }\n      }))\n    menuHeaders.forEach(\n      header => header.nextElementSibling.addEventListener('click', function () {\n        header.nextElementSibling.style.visibility = 'hidden'\n      }))\n    menuHeaders.forEach(\n      header => header\n        .addEventListener('mouseover', function () {mouseOnMenu = true}))\n    menuHeaders.forEach(\n      header => header.nextElementSibling\n        .addEventListener('mouseover', function () {mouseOnMenu = true}))\n    menuHeaders.forEach(\n      header => header\n        .addEventListener('mouseout', function () {mouseOnMenu = false}))\n    menuHeaders.forEach(\n      header => header.nextElementSibling\n        .addEventListener('mouseout', function () {mouseOnMenu = false}))\n    document.addEventListener('click', function (e) {\n      if (!mouseOnMenu) +closeAllMenus()\n    })\n  }\n\n  return { menuContainer }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jsmenu);\n\n//# sourceURL=webpack:///./src/jsmenu.js?");

/***/ })

/******/ });