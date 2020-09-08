function loadMenuContent() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const article = document.createElement('article');
  article.classList.add('col');

  const desc = document.createElement('div');
  desc.setAttribute('id','desc');

  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const item1 = document.createElement('p');
  let menuname = document.createElement('em');
  menuname.textContent = 'Menu Item #1';
  item1.appendChild(menuname);
  let menudesc = document.createTextNode('Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.');
  item1.appendChild(menudesc);

  const item2 = document.createElement('p');
  menuname = document.createElement('em');
  menuname.textContent = 'Menu Item #2';
  item2.appendChild(menuname);
  menudesc = document.createTextNode('Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly.');
  item2.appendChild(menudesc);

  const item3 = document.createElement('p');
  menuname = document.createElement('em');
  menuname.textContent = 'Menu Item #3';
  item3.appendChild(menuname);
  menudesc = document.createTextNode('Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.');
  item3.appendChild(menudesc);

  const item4 = document.createElement('p');
  menuname = document.createElement('em');
  menuname.textContent = 'Menu Item #4';
  item4.appendChild(menuname);
  menudesc = document.createTextNode('Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly.');
  item4.appendChild(menudesc);

  const item5 = document.createElement('p');
  menuname = document.createElement('em');
  menuname.textContent = 'Menu Item #5';
  item5.appendChild(menuname);
  menudesc = document.createTextNode('Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.');
  item5.appendChild(menudesc);

  desc.appendChild(title);
  desc.appendChild(item1);
  desc.appendChild(item2);
  desc.appendChild(item3);
  desc.appendChild(item4);
  desc.appendChild(item5);

  article.appendChild(desc);

  main.appendChild(article);

  console.log('Loaded Menu');
}

export { loadMenuContent }