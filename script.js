const inputs = document.querySelectorAll('.input'); //faz com a que a constante seja um array de 2 elementos
const button = document.querySelector('.login-button')

const handleFocus = ({ target }) => {
   const span = target.previousElementSibling;
   span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }  
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.lenght >= 8) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) =>  input.addEventListener('focus', handleFocus));
inputs.forEach((input) =>  input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) =>  input.addEventListener('focusout', handleChange));