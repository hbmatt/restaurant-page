function loadContactContent() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const article = document.createElement('article');
  article.classList.add('col');

  const desc = document.createElement('div');
  desc.setAttribute('id','desc');

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';

  const hours = document.createElement('p');
  let subtitle = document.createElement('strong');
  subtitle.textContent = 'Hours: ';
  let content = document.createTextNode('8:00 - 19:00');
  hours.appendChild(subtitle);
  hours.appendChild(content);

  const address = document.createElement('p');
  subtitle = document.createElement('strong');
  subtitle.textContent = 'Address: ';
  content = document.createTextNode('1234 Lorem Ipsum Ave. Dolor, ST 56565');
  address.appendChild(subtitle);
  address.appendChild(content);

  const phone = document.createElement('p');
  subtitle = document.createElement('strong');
  subtitle.textContent = 'Phone Number: ';
  content = document.createTextNode('(123) 223 - 3345');
  phone.appendChild(subtitle);
  phone.appendChild(content);

  desc.appendChild(title);
  desc.appendChild(hours);
  desc.appendChild(address);
  desc.appendChild(phone);

  article.appendChild(desc);

  main.appendChild(article);
}

export { loadContactContent }