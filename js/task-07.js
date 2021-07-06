const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  return  (output.style.fontSize = event.currentTarget.value + "px");
}
