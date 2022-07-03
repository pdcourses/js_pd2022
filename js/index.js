const [widthElement, heightElement] = document.querySelectorAll('p');
//widthElement.innerText = `width ${window.innerWidth} px`;
//heightElement.innerText = `heigth ${window.innerHeight} px`;

function funRezize(){
    widthElement.innerText = `width ${window.innerWidth} px`;
    heightElement.innerText = `heigth ${window.innerHeight} px`;
}

function logEvent(event){
    console.log(event);
}

//1
//window.addEventListener("resize", funRezize);

//2
window.onresize = funRezize; 
window.onload = funRezize;
window.ondblclick = logEvent;
window.onclick = logEvent;
window.onkeydown = logEvent;
window.onkeyup = logEvent;

widthElement.onfocus = logEvent;
widthElement.onblur = logEvent;
widthElement.onchange = logEvent;
widthElement.oninput = logEvent;