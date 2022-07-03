const btnHome = document.getElementById('btnHome');

btnHome.addEventListener('click', () => {
    location.replace(`${location.origin}`);
});


function funHello(){
    alert('You are in About page!');
}

//setTimeout(funHello, 3000);

// менять время
const counter = document.getElementById('counter');
let c = 10;

function updateCounter(){
    if(c>=0){
    counter.innerText = c;
    c--;
    }
}

setInterval(updateCounter, 1000);

