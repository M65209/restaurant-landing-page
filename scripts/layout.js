const navigationElements = [{
    path: '/index.html',
    name: 'Home',

},
{
    path: "/pages/about.html",
    name: "About"
},
{
    path: "/pages/contact.html",
    name: "Contact"
}
]

const navLinksContainer = document.getElementById('nav-links');

navigationElements.forEach(element => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    // add class to the link
    link.classList.add('nav-link');
    // mark active link based on the current page
    if (window.location.pathname === element.path) {
        link.classList.add('active', 'font-bold');
    }

    link.href = element.path;
    link.textContent = element.name;
    listItem.appendChild(link);
    navLinksContainer.appendChild(listItem);
});