let counterValue = document.getElementById('value');
const incrementBt = document.querySelector('button[data-action="increment"]');
const decrementBt = document.querySelector('button[data-action="decrement"]');
let valueEL = +(counterValue.textContent);
incrementBt.addEventListener('click', () => {
    ++valueEL;
    return counterValue.textContent = valueEL;
});
decrementBt.addEventListener('click', () => {
    --valueEL
    return counterValue.textContent = valueEL;
});