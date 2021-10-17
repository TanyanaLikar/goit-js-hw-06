const nameInput = document.querySelector('#name-input');
const nameOutput=document.querySelector('#name-output');

nameInput.addEventListener('input', onClickInput) 

  
function onClickInput(){
    //  if(nameInput.value === ''){
    //     return nameOutput.textContent = 'Anonymous';
    // }
    // return nameOutput.textContent=nameInput.value
    nameOutput.textContent =  nameInput.value ? nameInput.value : "Anonymous";
}

    