const form = document.querySelector("form");
let footer = document.getElementById('footer');
let counter = document.createElement("label");
counter.setAttribute('id', 'labelCounter');
let toDoContainter = document.getElementById('create-new-todo');
let markAll = document.getElementById('markAll');


let itemsleft = document.getElementsByClassName('active');

let all= document.getElementById('all')
footer.insertBefore(counter, all);

form.onsubmit = event => {
    event.preventDefault();
    //sparar ner både input och listan att placera input i
    let toDoInput = document.getElementById("toDoInput");

    //Skapar dive hela todoraden ligger i
    let div = document.createElement("div"); 

    let newToDo = document.createElement("label");

    //lägger till checkbox rutan
    let checkbox = document.createElement("input");
    
    let span = document.createElement("span");
    span.textContent = toDoInput.value;
    let button = document.createElement("img");
    if (span.textContent !="")
    {
        //målar upp diven
        div.setAttribute("class", "active");
        toDoContainter.appendChild(div);
        //målar upp checkboxen
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        newToDo.appendChild(checkbox);
        //lägger till labeln i diven
        div.appendChild(newToDo);
        //lägger till texten man skrev i input
        newToDo.appendChild(span);
        //lägger till kryssbildern till diven
        button.setAttribute("src", "xclose.png");
        button.setAttribute("class", "cross");
        div.appendChild(button);

          //för att få fram listan när man lagt till något
        document.getElementById('create-new-todo').style.display = 'inline-block';
        document.getElementById('footer').style.display = 'inline-block';

    }
    else{
        //gör inget
    }

    //sätter texten i input till inget
    document.getElementById('toDoInput').value = '';  
    counter.textContent = itemsleft.length + " items left";

    button.onclick = event => {   
        toDoContainter.removeChild(div);

        counter.textContent = itemsleft.length + " items left";

        if (toDoContainter.length === 0) {
            document.getElementById('footer').style.display = 'none';
            document.getElementById('create-new-todo').style.display = 'none';
        }
    }

    checkbox.addEventListener('change', e => {

        if (e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.add("completed");
            checkedElement.classList.remove("active");

            counter.textContent = itemsleft.length + " items left";
        }

        if (!e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.add("active");
            checkedElement.classList.remove("completed");

            counter.textContent = itemsleft.length + " items left";
        }

    });

    if (itemsleft === 0) {
        clearCompleted.style.display = "none";
    } else {
        clearCompleted.style.display = "inline-block";
    }
}
let activeToDo = document.getElementsByClassName("active");
let completedToDo = document.getElementsByClassName("completed");

let allButton = document.getElementById("all")
allButton.onclick = event => {
   

    var i;
    for (i = 0; i < activeToDo.length; i++) {
        activeToDo[i].style.display = "block";
    }

    var x;
    for (x = 0; x < completedToDo.length; x++) {
        completedToDo[x].style.display = "block";
    }
}

let activeButton = document.getElementById("active")
activeButton.onclick = event => {
    var i;
    for (i = 0; i < completedToDo.length; i++) {
        completedToDo[i].style.display = "none";
    }

    var x;
    for (x = 0; x < activeToDo.length; x++) {
        activeToDo[x].style.display = "block";
    }
}

let completedButton = document.getElementById("completed1")
completedButton.onclick = event => {
    var i;
    for (i = 0; i < activeToDo.length; i++) {
        activeToDo[i].style.display = "none";
    }

    var x;
    for (x = 0; x < completedToDo.length; x++) {
        completedToDo[x].style.display = "block";
    }
}

let clearCompleted = document.getElementById("clearCompleted")
clearCompleted.onclick = event => {

    while (completedToDo.length > 0){
        completedToDo[length].remove();
    }

    if (itemsleft.length === 0) {
        clearCompleted.style.display = "none";
        footer.style.display = "none";
        toDoContainter.style.display = "none";
    } 
    else {
        clearCompleted.style.display = "inline-block";
    }    
}

markAll.onclick = event => {
    let toDoContainterArray = Array.from(document.getElementById('create-new-todo'));
    
    //om någon är checkad ändra alla till active 
    if(toDoContainterArray.some(x=> x.checked)){
        var i;
        for (i = 0; i < toDoContainter.length; i++) {   
            toDoContainter[i].checked = false; 
            toDoContainter[i].closest('div').classList.remove('completed')
            toDoContainter[i].closest('div').classList.add('active')
        }         
        counter.textContent = itemsleft.length + " items left";
    }

    // //om någon är uncheckad ändra alla till completed
    else{   
        var i;
        for (i = 0; i < toDoContainter.length; i++) {
            toDoContainter[i].checked = true;  
            toDoContainter[i].closest('div').classList.remove('active')
            toDoContainter[i].closest('div').classList.add('completed')           
        }
        counter.textContent = itemsleft.length + " items left";        
    }  
}
