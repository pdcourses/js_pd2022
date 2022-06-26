const list = document.getElementById('tasks');
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel');
const task = document.getElementById('task');

btnAdd.addEventListener('click', addNewTask);
btnDel.addEventListener('click', deleteCheckTasks);

function addNewTask(event) {
    const item = document.createElement('li');
    item.innerText = task.value;
    item.append(addCheckbox());
    list.append(item);
    task.value = "";
};

function addCheckbox(){
    const checkElem = document.createElement('input');
    checkElem.type = 'checkbox';
    checkElem.classList.add('check');
    return checkElem;
}

function deleteCheckTasks(event){
    const deletedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
    deletedTasks.forEach(el => el.parentNode.remove());
}