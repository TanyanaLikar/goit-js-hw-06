const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = ingredients.map(ingredient => {
 const itemEl = document.createElement('li');
 itemEl.classList.add('item');
 itemEl.textContent = ingredient;
 return itemEl;
}) 


const navEl = document.querySelector('#ingredients');
  navEl.append(...elements);
  console.log(navEl)