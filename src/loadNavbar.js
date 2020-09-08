import { loadHomeContent } from "./content/loadHomeContent";
import { loadAboutContent } from "./content/loadAboutContent";
import { loadMenuContent } from "./content/loadMenuContent";
import { loadContactContent } from "./content/loadContactContent";

function loadNavbar() {
  const content = document.getElementById('content');

  const navbar = document.createElement('nav');
  navbar.setAttribute('id','navbar');

  const left = document.createElement('div');
  left.setAttribute('id','left');

  const home = document.createElement('div');
  home.classList.add('nav-item');
  home.addEventListener('click', () => loadHomeContent());
  home.textContent = 'home';

  const about = document.createElement('div');
  about.classList.add('nav-item');
  about.addEventListener('click', () => loadAboutContent());
  about.textContent = 'about';

  left.appendChild(home);
  left.appendChild(about);

  const right = document.createElement('div');
  right.setAttribute('id','right');

  const menu = document.createElement('div');
  menu.classList.add('nav-item');
  menu.addEventListener('click', () => loadMenuContent());
  menu.textContent = 'menu';

  const contact = document.createElement('div');
  contact.classList.add('nav-item');
  contact.addEventListener('click', () => loadContactContent());
  contact.textContent = 'contact';

  right.appendChild(menu);
  right.appendChild(contact);

  const logo = document.createElement('figure');
  logo.setAttribute('id','logo');
  
  navbar.appendChild(left);
  navbar.appendChild(right);
  navbar.appendChild(logo);

  const main = document.createElement('section');
  main.setAttribute('id','main');

  content.appendChild(navbar);
  content.appendChild(main);
}

export { loadNavbar }