import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

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
        viewMenuButton.addEventListener('click', displayMenuPage);
    };

    const displayHomePage = () => {
        cleanPageContent();

        setActiveNavbarButton('home-btn');
        pageContent.appendChild(displayHome());
        attachMenuButtonClickEvent();
    };

    const displayInitialContent = () => {
        setActiveNavbarButton('home-btn');
        pageContent.appendChild(displayHome());
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

        menuItems.push(spicyPizza, beefBurger);

        return menuItems;
    };

    const displayAboutPage = () => {
        const about = displayAbout();
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
        const menu = displayMenu();
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
;        });
    };

    const addEvents = () => {
        if (homeButton) {
            homeButton.addEventListener('click', displayHomePage);
        }
        if (aboutButton) {
            aboutButton.addEventListener('click', displayAboutPage);
        }
        if (menuButton) {
            menuButton.addEventListener('click', displayMenuPage);
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