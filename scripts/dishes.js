const dishes = [
  {
    name: 'Signature Burger',
    price: '$18',
    image: 'images/Frame 45 (1).png',
    description: 'Juicy grilled beef with caramelized onions and cheddar.'
  },
  {
    name: 'Crispy Chicken Bowl',
    price: '$20',
    image: 'images/Frame 45 (2).png',
    description: 'Crispy chicken, rice, and fresh slaw packed with flavor.'
  },
  {
    name: 'Garden Pasta',
    price: '$16',
    image: 'images/Frame 45 (3).png',
    description: 'A light pasta loaded with roasted vegetables and herbs.'
  },
  {
    name: 'Chef Pizza',
    price: '$22',
    image: 'images/Frame 45.png',
    description: 'Wood-fired pizza with bold toppings and melted cheese.'
  },
  {
    name: 'Spicy Tacos',
    price: '$14',
    image: 'images/Frame 45 (4).png',
    description: 'Three tacos with smoky salsa and crunchy toppings.'
  },
  {
    name: 'Sweet Dessert Box',
    price: '$12',
    image: 'images/Frame 45 (5).png',
    description: 'A mix of mini desserts made for sharing.'
  }
];

const dishesContainer = document.getElementById('dish-cards');

if (dishesContainer) {
  dishes.forEach((dish) => {
    const card = document.createElement('article');
    card.className = 'food-card flex';

    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" />
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <strong>${dish.price}</strong>
    `;

    dishesContainer.appendChild(card);
  });
}
