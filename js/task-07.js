const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
//    console.log(input.value)  
   textEl.style.fontSize = `${input.value}px`;
}

