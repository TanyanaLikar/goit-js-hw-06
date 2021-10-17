const form =document.querySelector('form.login-form');
form.addEventListener('submit',onFormSubmit);
// console.log(form);
function onFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if(event.currentTarget.elements.email.value  === ''|| event.currentTarget.elements.password.value === ''){
        return alert('Все поля должны быть заполнены');
    }
    const userData ={};
    formData.forEach((value,name) => {
        userData[name] = value;

    });
    console.log(userData);
    form.reset();
}

      
