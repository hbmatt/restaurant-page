function loadHomeContent() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const figure = document.createElement('figure');
  figure.classList.add('col');
  
  const img = document.createElement('img');
  img.setAttribute('src','images/mitifotos.jpg');

  figure.appendChild(img);

  const article = document.createElement('article');
  article.classList.add('col');

  const title = document.createElement('h1');
  title.textContent = 'Loaf Oaf';

  const desc = document.createElement('div');
  desc.setAttribute('id','desc');

  const para1 = document.createElement('p');
  para1.textContent = 'Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.';
  const para2 = document.createElement('p');
  para2.textContent = 'Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly.';

  article.appendChild(title);

  desc.appendChild(para1);
  desc.appendChild(para2);

  article.appendChild(desc);

  main.appendChild(figure);
  main.appendChild(article);
}

export { loadHomeContent }