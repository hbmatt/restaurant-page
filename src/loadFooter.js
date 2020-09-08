function loadFooter() {
  const content = document.getElementById('content');

  const footer = document.createElement('footer');
  footer.setAttribute('id','footer');

  const footerItem = document.createElement('div');
  footerItem.textContent = 'Pictures courtesy of @mitifotos and @moniqa from Unsplash.';

  footer.appendChild(footerItem);

  content.appendChild(footer);
}

export { loadFooter }