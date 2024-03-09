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

export { displayMenu };