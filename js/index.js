let colors = ['green', 'red', 'yellow', 'blue'];

let container = document.getElementById('container');
const count = 100;
for(let i=0; i<=count; i++){
    const square = document.createElement('div');
    square.classList.add('squareStyle');
    container.append(square);
    square.addEventListener('mouseover', () => {
        square.style.background = getColor(colors);
        //square.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
    square.addEventListener('mouseleave', () => {
        square.style.background = 'gray';
    } )
}

function getColor(arr){
    const index = Math.floor( Math.random() * arr.length );
    console.log(index);
    const color = arr[index];
    return color;
}