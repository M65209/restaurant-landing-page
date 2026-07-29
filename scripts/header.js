const header = document.getElementById('site-header');

const headerHTML =`
<header>
  <div class="header-container">
    <div class="logo">
      <h2>Foodie</h2>
    </div>
    <nav class="navbar flex">
      <ul class="nav-links flex">
        <li><a href="/pages/index.html">Home</a></li>
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/menu.html">Menu</a></li>
        <li><a href="/pages/foods.html">Food</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

header.innerHTML = headerHTML;