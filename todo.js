// declare variables
const addBtn = document.querySelector('.addBtn');
const todoList = document.getElementById("todos");
const inputValueEl = document.getElementById("input");
const initList = ["coding", "work", "gym"];

const initPage = function() {
    for (i = 0; i < initList.length; i++) {
       let item =  initList[i];
       addTodo(item);
    }
}


const checkedOff = function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
};

const hideListItem = function() {
    const div = this.parentElement;
    div.style.display = "none";
} 

// function responsible for creating list items
const createTodo = function(todo) {  
    let liElem = document.createElement("li");   
    // create text node
    const t = document.createTextNode(todo);
    // append text to list
    liElem.appendChild(t);
    // add close span
    const closeButton = document.createElement("SPAN");
    const  x = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(x);
    liElem.appendChild(closeButton);

    closeButton.onclick = hideListItem;
    return liElem;
}

const addTodo = function(text) {
    // create a todo
    let todo = createTodo(text);
    
    todoList.appendChild(todo);    
    
}

const addTodoClickHandler = function() {
    // grab text with getElement ...
    let inputValueText = inputValueEl.value;
    // validate that text
    if (inputValueText === '') {
        alert("You must write something");
    } else {
        addTodo(inputValueText);
    }
    inputValueEl.value = "";
}



todoList.addEventListener('click', checkedOff);
addBtn.addEventListener('click', addTodoClickHandler);

initPage();















