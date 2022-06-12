let divContElem = document.querySelector('div.container');
divContElem.remove();

// создание нового элемента
// 1. тег? 
// 2. наполняем его (содержимое)  и/или дать класс/id
// 3. прикрепить к родителю или body

let testDiv = document.createElement('div');
testDiv.className = "test";
testDiv.style.width = "300px";
testDiv.style.height = "100px";
testDiv.style.backgroundColor = "orange";
testDiv.innerHTML = "<p class='innerP'> I am here ^) </p>";

let testP = document.createElement('p');
testP.className = "test-para";
testP.innerText = "It is my first message in DOM element!"
testP.setAttribute('class', 'bigText');

// добавление node.append(newNode) - в конец
// prepend(newСhild) в начало
// before(newChild), after(newChild), replaceWith(newChild)
document.body.append(testDiv);
document.body.append(testP);


/*
// получить див контейнер и туда добавить заголовок и параграф с помощью DOM
let divContElem = document.querySelector('div.container');
let h1Elem = document.createElement('h1');
let pElem = document.createElement('p');
divContElem.append(h1Elem);
divContElem.append(pElem);
*/