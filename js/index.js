let el = document.querySelector('select');

el.addEventListener('change', (e) => {
    console.log(e.target.value); // выбранный список значение
})

let btn = document.querySelector('button');
let inputText = document.querySelector('input#login');

btn.addEventListener('click', (e) => {
    console.log(inputText.value); // содержимое в поле инпут
})