const btnDecrementRef= document.querySelector('button[data-action ="decrement"]');
const btnIncrementRef= document.querySelector('button[data-action ="increment"]');
const valueRef= document.querySelector('#value');
let counterValue = 0;
btnIncrementRef.addEventListener('click',() =>{
    counterValue += 1;
    valueRef.textContent=counterValue;
})
btnDecrementRef.addEventListener('click',() =>{
    counterValue -=1;
    valueRef.textContent=counterValue;

})
console.log(btnDecrementRef);
console.log(btnIncrementRef);
console.log(valueRef);

