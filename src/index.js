import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

function UI() {
    const pageContent = document.querySelector('#content');

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

    return {
        displayInitialContent
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    ui.displayInitialContent();
});