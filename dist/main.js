/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHome: () => (/* binding */ displayHome)
/* harmony export */ });
function displayHome() {
    const home = document.createElement('div');
    const pageTitle = document.createElement('div');
    const subTitle = document.createElement('h2');
    const button = document.createElement('button');
    const logo = document.createElement('img');
    const title = document.createElement('h1');
    const titleSpan = document.createElement('span');

    home.classList.add('home');
    home.setAttribute('id', 'home');
    subTitle.classList.add('sub-title');
    pageTitle.classList.add('page-title');
    logo.setAttribute('src', './img/odin.png');
    logo.setAttribute('alt', 'Odin Project');
    logo.classList.add('logo');
    title.classList.add('title');
    button.setAttribute('type', 'button');
    button.classList.add('btn-primary');

    subTitle.textContent = 'Welcome to our restaurant!';
    titleSpan.textContent = 'Odin';
    button.textContent = 'View Menu';

    home.appendChild(subTitle);
    home.appendChild(pageTitle);
    pageTitle.appendChild(logo);
    pageTitle.appendChild(title);
    title.appendChild(titleSpan);
    title.insertAdjacentText('beforeend', ' Restaurant');
    home.appendChild(button);

    return home;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
function displayMenu() {
    const createWrapper = () => {
        const menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        menu.classList.add('menu');

        return menu;
    }

    const createCardWrapper = () => {
        const cardGroup = document.createElement('div');
        cardGroup.classList.add('card-group');

        return cardGroup;
    }

    const createDescription = (title, text) => {
        const menuDesc = document.createElement('div');
        const heading = document.createElement('h2');
        const description = document.createElement('p');

        menuDesc.classList.add('menu-desc');
        heading.classList.add('title');
        description.classList.add('text');

        heading.textContent = title;
        description.textContent = text;

        menuDesc.appendChild(heading);
        menuDesc.appendChild(description);

        return menuDesc;
    }

    const createCard = (imageSrc, imageAlt, title, text) => {
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const heading = document.createElement('h3');
        const description = document.createElement('p');

        card.classList.add('card');
        cardImage.classList.add('card-img');
        cardImage.setAttribute('alt', imageAlt);
        cardImage.setAttribute('src', `./img/${imageSrc}`);
        heading.classList.add('card-title');
        description.classList.add('card-text');

        heading.textContent = title;
        description.textContent = text;

        card.appendChild(cardImage);
        card.appendChild(heading);
        card.appendChild(description);

        return card;
    }

    return {
        createWrapper,
        createCardWrapper,
        createDescription,
        createCard
    };
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map