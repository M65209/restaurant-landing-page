const navigationElements = [
  { name: 'Home', file: 'index.html' },
  { name: 'Menu', file: 'menu.html' },
  { name: 'Foods', file: 'foods.html' },
  { name: 'About', file: 'about.html' },
  { name: 'Contact', file: 'contact.html' }
];

function getRelativeHref(fileName) {
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  const isInsidePages = currentPath.includes('/pages/');

  if (fileName === 'index.html') {
    return isInsidePages ? '../index.html' : 'index.html';
  }

  return isInsidePages ? fileName : `pages/${fileName}`;
}

function getCurrentPageName() {
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  return currentPath.split('/').pop() || 'index.html';
}

const headerPlaceholder = document.getElementById('site-header');
const footerPlaceholder = document.getElementById('site-footer');

if (headerPlaceholder) {
  headerPlaceholder.innerHTML = `
    <header>
      <nav class="navbar flex" id="navbar">
        <a href="${getRelativeHref('index.html')}" class="logo">🍔 Foodie</a>
        <ul class="nav-links flex" id="nav-links"></ul>
        <a href="#" class="text-primary p-8 rounded-md border border-primary">Login</a>
      </nav>
    </header>
  `;
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = `
    <footer class="footer">
      <div class="footer-column">
        <h5>Product and Services</h5>
        <ul class="footer-links">
          <li><a href="${getRelativeHref('menu.html')}">Menu</a></li>
          <li><a href="${getRelativeHref('foods.html')}">Foods</a></li>
          <li><a href="${getRelativeHref('about.html')}">About Us</a></li>
          <li><a href="${getRelativeHref('contact.html')}">Contact</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>Visit Us</h5>
        <ul class="footer-links">
          <li><a href="${getRelativeHref('menu.html')}">Lunch Specials</a></li>
          <li><a href="${getRelativeHref('foods.html')}">Chef Picks</a></li>
          <li><a href="${getRelativeHref('contact.html')}">Hours & Location</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>Support</h5>
        <ul class="footer-links">
          <li><a href="${getRelativeHref('contact.html')}">Contact</a></li>
          <li><a href="#">Email Support</a></li>
          <li><a href="#">Live Chat</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>Account</h5>
        <ul class="footer-links">
          <li><a href="#">My Orders</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Wishlist</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>About</h5>
        <ul class="footer-links">
          <li><a href="${getRelativeHref('about.html')}">Company</a></li>
          <li><a href="${getRelativeHref('about.html')}">Our Story</a></li>
          <li><a href="${getRelativeHref('contact.html')}">Careers</a></li>
        </ul>
      </div>
    </footer>
  `;
}

const navLinksContainer = document.getElementById('nav-links');

if (navLinksContainer) {
  navigationElements.forEach((element) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.classList.add('nav-link');
    link.href = getRelativeHref(element.file);
    link.textContent = element.name;

    if (getCurrentPageName() === element.file) {
      link.classList.add('active', 'font-bold');
    }

    listItem.appendChild(link);
    navLinksContainer.appendChild(listItem);
  });
}