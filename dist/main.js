/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAbout: () => (/* binding */ displayAbout)
/* harmony export */ });
function displayAbout() {
    const createWrapper = () => {
        const about = document.createElement('div');
        about.classList.add('about');
        about.setAttribute('id', 'about');

        return about;
    };

    const createImage = () => {
        const aboutImage = document.createElement('img');

        aboutImage.setAttribute('alt', 'Restaurant');
        aboutImage.setAttribute('src', './img/restaurant.jpg');
        
        return aboutImage;
    };

    const createDescription = () => {
        const description = document.createElement('div');
        const heading = document.createElement('h2');
        const descText = document.createElement('p');
        const contact = document.createElement('address');
        const iconMap = document.createElement('i');
        const iconMessage = document.createElement('i');
        const address = document.createElement('p');
        const email = document.createElement('p');

        description.classList.add('about-content');
        heading.classList.add('title');
        descText.classList.add('text');
        contact.classList.add('contact');
        address.classList.add('text', 'address');
        email.classList.add('text', 'email');
        iconMap.classList.add('mdi', 'mdi-map-marker', 'about-icon');
        iconMessage.classList.add('mdi', 'mdi-email', 'about-icon');

        heading.textContent = 'Good food - good experience';
        descText.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae fugit ea possimus
                        repellat tempore, sed ratione? Accusamus eligendi sint repellat a hic enim corporis, aliquid
                        dolorum harum? Illum ea, aspernatur vitae vero aliquid iste sed aliquam deleniti eligendi atque`;

        description.appendChild(heading);
        description.appendChild(descText);
        description.appendChild(contact);
        contact.appendChild(address);
        address.appendChild(iconMap);
        address.insertAdjacentText('beforeend', 'Street Name, Oradea, Romania');
        contact.appendChild(email);
        email.appendChild(iconMessage);
        email.insertAdjacentText('beforeend', 'catalinbroinas@yahoo.com');

        return description;
    };

    return {
        createWrapper,
        createImage,
        createDescription
    };
}



/***/ }),

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
    const buttonIcon = document.createElement('i');

    home.classList.add('home');
    home.setAttribute('id', 'home');
    subTitle.classList.add('sub-title');
    pageTitle.classList.add('page-title');
    logo.setAttribute('src', './img/odin.png');
    logo.setAttribute('alt', 'Odin Project');
    logo.classList.add('logo');
    title.classList.add('title');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'view-menu-btn');
    button.classList.add('btn', 'btn-primary');
    buttonIcon.classList.add('mdi', 'mdi-silverware', 'menu-icon');

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
    button.appendChild(buttonIcon);

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

    const createCard = ({ imageSrc, imageAlt, title, text }) => {
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




function UI() {
    const pageContent = document.querySelector('#content');
    const homeButton = document.querySelector('#home-btn');
    const menuButton = document.querySelector('#menu-btn');
    const aboutButton = document.querySelector('#about-btn');

    const cleanPageContent = () => {
        if (pageContent.hasChildNodes()) {
            while (pageContent.firstChild) {
                pageContent.removeChild(pageContent.firstChild);
            }
        }
    };

    const setActiveNavbarButton = (getActiveItem) => {
        const navItems = document.querySelectorAll('.nav-item');
        const setActiveItem = document.querySelector(`#${getActiveItem}`);

        navItems.forEach((button) => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });

        if (setActiveItem) {
            setActiveItem.classList.add('active');
        }
    };

    const attachMenuButtonClickEvent = () => {
        const viewMenuButton = document.querySelector('#view-menu-btn');
        viewMenuButton.addEventListener('click', (event) => {
            rippleEffect(event.target);
            setTimeout(displayMenuPage, 500);
        });
    };

    const displayHomePage = () => {
        cleanPageContent();

        setActiveNavbarButton('home-btn');
        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)());
        attachMenuButtonClickEvent();
    };

    const displayInitialContent = () => {
        setActiveNavbarButton('home-btn');
        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)());
        attachMenuButtonClickEvent();
    };

    const createMenuItem = (image, name, description) => {
        return {
            imageSrc: image,
            imageAlt: name,
            title: name,
            text: description
        };
    };

    const createMenu = () => {
        const menuItems = [];

        const spicyDesc = `Indulge in a tantalizing, fiery pizza experience 
            with bold spices that awaken your taste buds, leaving you craving more of its zesty goodness`;
        const spicyPizza = createMenuItem('spicyPizza.jpg', 'Spicy Pizza', spicyDesc);

        const burgerDesc = `Succulent beef patty nestled in a toasted bun, layered with fresh lettuce,
            juicy tomatoes, and savory condiments for a mouthwatering burger experience.`;
        const beefBurger = createMenuItem('beefBurger.jpg', 'Beef Burger', burgerDesc);

        const soupDesc = `Soup dumplings: Delicate parcels of dough filled with savory meat or vegetables,
            enveloping a burst of flavorful broth within, creating a delectable fusion of taste and texture.`;
        const soup = createMenuItem('soup.jpg', 'Soup Dumplings', soupDesc);

        const breakfastDesc = `Breakfast nature: A wholesome morning meal comprised of fresh fruits, nuts,
            seeds, and grains, providing a nutritious start to the day with natural flavors and vital nutrients.`;
        const breakfast = createMenuItem('breakfast.jpg', 'Breakfast Nature', breakfastDesc);

        menuItems.push(spicyPizza, beefBurger, soup, breakfast);

        return menuItems;
    };

    const displayAboutPage = () => {
        const about = (0,_about__WEBPACK_IMPORTED_MODULE_2__.displayAbout)();
        const aboutWrapper = about.createWrapper();
        const aboutImage = about.createImage();
        const aboutDescription = about.createDescription();

        cleanPageContent();
        setActiveNavbarButton('about-btn');

        pageContent.appendChild(aboutWrapper);
        aboutWrapper.appendChild(aboutImage);
        aboutWrapper.appendChild(aboutDescription);
    };

    const displayMenuPage = () => {
        const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu)();
        const menuArray = createMenu();
        const menuWrapper = menu.createWrapper();
        const menuCardGroup = menu.createCardWrapper();

        const descTitle = `Our Specialties`;
        const descText = `Indulge in Flavorful Delights at Our Table`;

        const menuDescription = menu.createDescription(descTitle, descText);

        cleanPageContent();
        setActiveNavbarButton('menu-btn');

        pageContent.appendChild(menuWrapper);
        menuWrapper.appendChild(menuDescription);
        menuWrapper.appendChild(menuCardGroup);

        menuArray.forEach((item) => {
            const card = menu.createCard(item);
            menuCardGroup.appendChild(card);
            ;
        });
    };

    // Add ripple effect to buttons
    const rippleEffect = (btn) => {
        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        btn.appendChild(ripple);

        // Get position of X
        const x = btn.clientX - btn.offsetLeft;

        // Get position of Y 
        const y = btn.clientY - btn.offsetTop;

        // Position the span element 
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove span after 0.3s 
        setTimeout(() => {
            ripple.remove();
        }, 300);
    };

    const addEvents = () => {
        if (homeButton) {
            homeButton.addEventListener('click', () => {
                setTimeout(displayHomePage, 500);
            });
        }
        if (aboutButton) {
            aboutButton.addEventListener('click', () => {
                setTimeout(displayAboutPage, 500);
            });
        }
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                setTimeout(displayMenuPage, 500);
            });
        }
    };

    return {
        displayInitialContent,
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    ui.displayInitialContent();
    ui.addEvents();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map