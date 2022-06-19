let btn = document.querySelector('button');
let login = document.querySelector('input#login');
let pswd = document.querySelector('input#password');
let infoText = document.getElementById('info');

btn.addEventListener('click', (e) => {
    infoText.innerText = login.value + ": " + pswd.value;
});