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

    const displayHomePage = () => {
        cleanPageContent();

        pageContent.appendChild(displayHome());
    };

    const displayInitialContent = () => {
        pageContent.appendChild(displayHome());
    };

    const displayAboutPage = () => {
        const about = displayAbout();
        const aboutWrapper = about.createWrapper();
        const aboutImage = about.createImage();
        const aboutDescription = about.createDescription();

        cleanPageContent();

        pageContent.appendChild(aboutWrapper);
        aboutWrapper.appendChild(aboutImage);
        aboutWrapper.appendChild(aboutDescription);
    };

    const addEvents = () => {
        if (homeButton) {
            homeButton.addEventListener('click', displayHomePage);
        }
        if (aboutButton) {
            aboutButton.addEventListener('click', displayAboutPage);
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