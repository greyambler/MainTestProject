let inputEl = document.querySelector('.inputEl');
let btnEl = document.querySelector('.btnEl');

btnEl.addEventListener('click', clickButton);
inputEl.addEventListener('keyup', onKeyUpInput);

btnEl.hidden = isHiddenButton(inputEl.value);

function onKeyUpInput() {
    btnEl.hidden = isHiddenButton(inputEl.value);
}
