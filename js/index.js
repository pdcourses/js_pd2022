const divArray = document.querySelectorAll('.box');

function handleChangeColor1 (e) {  
    this.classList.remove('color2');  
    this.classList.add('color1');
    console.log(this.classList);
    this.removeEventListener('click', handleChangeColor1);
    this.addEventListener('click', handleChangeColor2);
}

function handleChangeColor2 (e) {
    this.classList.remove('color1'); 
    this.classList.add('color2');
    console.log(this.classList);
    this.removeEventListener('click', handleChangeColor2);
    this.addEventListener('click', handleChangeColor1);

}

divArray.forEach( el => el.addEventListener('click', handleChangeColor1));
