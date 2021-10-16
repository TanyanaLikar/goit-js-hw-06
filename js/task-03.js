const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector('.gallery')
// const markUp = images.map(image => {
//   const itemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery-img')
//   imageEl.url = `${image.url}`;
//   imageEl.alt = `${image.alt}`;
//   itemEl.append(imageEl); 
//   console.log(itemEl);
// });
const markUp = images.map(image => {
return `<li><img class="gallery-img" src="${image.url}" alt="${image.alt}"/></li>`
}).join('');
listEl.insertAdjacentHTML('beforeend',markUp)
console.log(listEl);
console.log(markUp)