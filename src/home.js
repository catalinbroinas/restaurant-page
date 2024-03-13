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

export { displayHome };