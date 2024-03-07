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
        address.classList.add('text');
        email.classList.add('text');
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

export { displayAbout };