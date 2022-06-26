const btn = document.getElementById("send");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");


const regPassword = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#%\+\*;\.])^.{6,12}$/;
const strRegPswd = regPassword.toString(); // и обрезать начало и конец
userPassword.setAttribute('pattern', regPassword);


