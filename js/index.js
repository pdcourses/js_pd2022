const COLORS = ["#e91c1c", "#e91c86", "#1eca83", "#561ce9", "#f1a50d"];
const menuContainer = document.querySelector('.container');
const items = document.querySelectorAll('.item');
let indexActive = 0;
let activeElement = menuContainer[indexActive];
document.body.style.backgroundColor = COLORS[indexActive];

function workActive(i, index){
    if(activeElement == i) return;
        if(activeElement) activeElement.classList.remove("active");
        i.classList.add("active");
        document.body.style.backgroundColor = COLORS[index];
        activeElement = i;
        console.log(i,index,activeElement);
}

items.forEach((i, index) => {
    i.style.backgroundColor = COLORS[index];
    i.addEventListener("click", (event) => workActive(i, index));
});

