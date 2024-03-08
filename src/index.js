import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

function UI() {
    const pageContent = document.querySelector('#content');
    const homeButton = document.querySelector('#home-btn');
    const menuButton = document.querySelector('#menu-btn');
    const aboutButton = document.querySelector('#about-btn');

    const displayHomePage = () => {
        if (pageContent.hasChildNodes()) {
            while (pageContent.firstChild) {
                pageContent.removeChild(pageContent.firstChild);
            }
        }

        pageContent.appendChild(displayHome());
    };

    const displayInitialContent = () => {
        pageContent.appendChild(displayHome());
    }

    const addEvents = () => {
        if (homeButton) {
            homeButton.addEventListener('click', displayHomePage);
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