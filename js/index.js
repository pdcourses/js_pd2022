const COLORS = ["red", "yellow", "geen", "blue", "orange"];
const menuContainer = document.querySelector('.container');
const items = document.querySelectorAll('.item');
let activeElement = menuContainer.querySelector(".active");

function workActive(i, index){
    if(activeElement == i) return;
        if(activeElement) activeElement.classList.remove("active");
        i.classList.add("active");
        document.body.style.backgroundColor = COLORS[index];
        activeElement = i;
        console.log(i,index,activeElement);
}

items.forEach((i, index) => {
    i.addEventListener("click", (event) => workActive(i, index));
});

