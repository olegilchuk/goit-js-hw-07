const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('focus', focusInputEl)
function focusInputEl(event) {
    const inputLength = Number(event.target.dataset.length);
    const inputValue = event.target.value.length;
    if (inputLength === inputValue) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    console.log(inputLength === inputValue)
}