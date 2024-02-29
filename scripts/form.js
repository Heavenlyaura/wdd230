const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const message = document.querySelector('#message')
const button = document.querySelector('#submit');
const range = document.querySelector('#range');
const rangeValue = document.querySelector('.rangevalue');
const confirm = document.querySelector('.confirm')

rangeValue.innerHTML = `Range: ${range.value}`

range.addEventListener('change', () => {
    rangeValue.innerHTML = `Range: ${range.value}`;
})

password2.addEventListener('focusout', ()=> {
    if (password.value !== password2.value) {
        message.textContent = 'Passwords do not match❌';
        password2.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3"
        password2.value = '';
        password2.focus();
    }

    else {
        message.style.display = 'none';
        password2.style.backgroundColor = '#fff';
    }
})

button.addEventListener("click", () => {
    confirm.textContent = 'Your form has been submitted'
})



