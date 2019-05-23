const form = document.querySelector("form");
let counter = document.createElement("p");
let footer = document.getElementById('footer');
let toDoContainter = document.getElementById('create-new-todo');
let markAll = document.getElementById('markAll');


let itemsleft = document.getElementsByClassName('active');

footer.appendChild(counter);

form.onsubmit = event => {
    event.preventDefault();
    //sparar ner både input och listan att placera input i
    let toDoInput = document.getElementById("toDoInput");

    //Skapar dive hela todoraden ligger i
    let div = document.createElement("div");
    div.setAttribute("class", "active");
    toDoContainter.appendChild(div);

    //lägger till texten man skrev in som text till textrutan
    let newToDo = document.createElement("label");
    div.appendChild(newToDo);

    //lägger till checkbox rutan och sparar info om att den finns
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    newToDo.appendChild(checkbox);

    let span = document.createElement("span");
    span.textContent = toDoInput.value;
    newToDo.appendChild(span);

    let button = document.createElement('img');
    button.setAttribute("src", "kryss.png");
    div.appendChild(button);

    //gör att texten i rutan försvinner dvs sätter texten till inget
    document.getElementById('toDoInput').value = '';

    //för att få fram listan när man lagt till något
    document.getElementById('create-new-todo').style.display = 'block';
    document.getElementById('footer').style.display = 'block';

    button.onclick = event => {   
        toDoContainter.removeChild(div);

        let itemsleft = itemsleftsss.length;
        counter.textContent = itemsleft + " items left";

        if (itemsleft === 0) {
            document.getElementById('footer').style.display = 'none';
            document.getElementById('create-new-todo').style.display = 'none';
        }
    }  

    counter.textContent = itemsleft.length + " items left";

    checkbox.addEventListener('change', e => {

        if (e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.add("completed");
            checkedElement.classList.remove("active");

            counter.textContent = itemsleft.length + " items left";
        }

        if (!e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.toggle("active");
            checkedElement.classList.remove("completed");

            counter.textContent = itemsleft.length + " items left";
        }

    });
    
    if(itemsleft === 0){
        clearCompleted.style.display = "none";
    }
    else{
        clearCompleted.style.display = "inline-block";
    }    
}

let allButton = document.getElementById("all")
allButton.onclick = event => {
    let activeToDo = document.getElementsByClassName("active");
    let completedToDo = document.getElementsByClassName("completed");

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
    let completedToDo = document.getElementsByClassName("completed")
    let activeToDo = document.getElementsByClassName("active")

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
    let activeToDo = document.getElementsByClassName("active")
    let completedToDo = document.getElementsByClassName("completed");

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
    let done = document.getElementsByClassName("completed");
    
    while(done.length > 0) {
        done[0].remove();
    }
}

markAll.onclick = event => {
    let toDoContainterArray = Array.from(document.getElementById('create-new-todo'));
    //om någon är checkad ändra alla till completed 
    if(toDoContainterArray.some(x=> x.checked)){
        var i;
        for (i = 0; i < toDoContainter.length; i++) {   
            toDoContainter[i].checked = false; 
            toDoContainter[i].closest('div').classList.remove('completed')
            toDoContainter[i].closest('div').classList.add('active')
        } 
        
        counter.textContent = itemsleft.length + " items left";
    }

    // //om någon är uncheckad ändra alla till active
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
