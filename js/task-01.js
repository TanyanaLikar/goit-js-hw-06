const navEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
   const titleEl = item.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);
    const listEl = item.querySelectorAll('li');
    console.log(`Elements: ${listEl.length}`)
})


itemEl.forEach(elem => {    
     console.log(`Category:`, elem.firstElementChild);
    
     console.log(`Elements:`,)
 })
 

