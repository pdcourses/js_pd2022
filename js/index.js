const colors = document.querySelectorAll('input[type="range"]');
for(const i of colors){
    i.oninput = updateColor;
}

window.onload = function(){
    const color = localStorage.getItem('bodyColor');
    if(color){
        document.body.style.backgroundColor = color;
    }
};

window.onclose = function(){
    localStorage.setItem('bodyColor', 'document.body.style.backgroundColor');
}

function updateColor(){
    //rgba(r,g,b,a)
    const red = colors[0].value;
    const green = colors[1].value;
    const blue = colors[2].value;
    const a = colors[3].value;
    const newBodyColor = "rgba("+red+","+green+","+blue+","+a+")";
    document.body.style.backgroundColor = newBodyColor;
    localStorage.setItem('bodyColor', 'document.body.style.backgroundColor');
}