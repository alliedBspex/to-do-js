// create handler functions

const checkedOff = function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
};

const hideListItem = function() {
    const div = this.parentElement;
    div.style.display = "none";
} 

const newElement = function() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    const newSpan = document.createElement("SPAN");
    const newTxt = document.createTextNode("\u00D7");
    newSpan.className = "close";
    newSpan.appendChild(newTxt);
    li.appendChild(newSpan);

    for (j = 0; j < close.length; j++) {
        close[j].onclick = hideListItem;
    }
 
}

// create a close button and append it to each li

const myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on the close button to hide the list item

const close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = hideListItem;
}

// add a "checked" symbol when clicking on a li

const list = document.querySelector('ul');
list.addEventListener('click', checkedOff);


// create a new li when clicking on the "Add #" button

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', newElement);











