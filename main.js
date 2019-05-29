const form = document.querySelector("form");
let footer = document.getElementById('footer');
let counter = document.createElement("label");
counter.setAttribute('class', 'labelCounter');
let toDoContainter = document.getElementById('create-new-todo');
let itemsleft = document.getElementsByClassName('active');

let all= document.getElementById('all')
let markAll = document.getElementById('markAll');
footer.insertBefore(counter, all);

let activeToDo = document.getElementsByClassName("active");
let completedToDo = document.getElementsByClassName("completed");

let memory = window.localStorage;
let memoryItems =[];

form.onsubmit = event => {
    event.preventDefault();

    // hämtar allt i minnet o gör det till en array
    let hej= memory.getItem('toDo').split(',');
    // om det finns mer än 0 grejer i minnet
    if(hej.length > 0){
        hej.forEach(function(item, index, array) {
            //printa ut varje grej i en div är tanken här
            //alert(item, index);

            let toDoInput = document.getElementById("toDoInput");
            let div = document.createElement("div");
            let newToDo = document.createElement("label");
            newToDo.setAttribute("class","toDoLabel");
            let checkbox = document.createElement("input");
            let span = document.createElement("span");
            span.textContent = item;
            let imgCross = document.createElement("img");

            div.setAttribute("class", "active");
            toDoContainter.appendChild(div);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox");
            newToDo.appendChild(checkbox);
            div.appendChild(newToDo);
            newToDo.appendChild(span);      
            imgCross.setAttribute("src", "xclose.png");
            div.appendChild(imgCross);
    
            toDoContainter.style.display = 'inline-block';
            footer.style.display = 'inline-block';
            markAll.style.display = 'inline-block';

            //nu målar den upp alla stringar om och om igen (eftersom att de redan finns i listan i minnet) 
            // ändra så att den bara målar upp om man inte skrivit in ngt annat/ nyligen går in på sidan

        });
    }

    let toDoInput = document.getElementById("toDoInput");
    let div = document.createElement("div");
    let newToDo = document.createElement("label");
    newToDo.setAttribute("class","toDoLabel");
    let checkbox = document.createElement("input");
    let span = document.createElement("span");
    span.textContent = toDoInput.value;
    let imgCross = document.createElement("img");

    if (span.textContent !=""){
        //lägger till input i en array
        memoryItems.push(toDoInput.value);
        // her de i en sträng då localStorage vill ha det så
        let memoryString = memoryItems.toString();
        // lägger strängen i minnet
        memory.setItem('toDo',memoryString)

        div.setAttribute("class", "active");
        toDoContainter.appendChild(div);
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        newToDo.appendChild(checkbox);
        div.appendChild(newToDo);
        newToDo.appendChild(span);      
        imgCross.setAttribute("src", "xclose.png");
        div.appendChild(imgCross);

        toDoContainter.style.display = 'inline-block';
        footer.style.display = 'inline-block';
        markAll.style.display = 'inline-block';
    }
    else{

    }

    document.getElementById('toDoInput').value = '';
    counter.textContent = itemsleft.length + " items left";

    imgCross.onclick = event => {
        toDoContainter.removeChild(div);
        counter.textContent = itemsleft.length + " items left";

        if (toDoContainter.length === 0) {
            footer.style.display = 'none';
            toDoContainter.style.display = 'none';
        }
    }

    checkbox.addEventListener('change', e => {

        if (e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.add("completed");
            checkedElement.classList.remove("active");

            counter.textContent = itemsleft.length + " items left";

            if (completedToDo.length <= 0){
                clearCompleted.style.display = "none";
            }
            else{
                clearCompleted.style.display = "inline-block";
            }
        }

        if (!e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.add("active");
            checkedElement.classList.remove("completed");

            counter.textContent = itemsleft.length + " items left";

            if (completedToDo.length <= 0){
            clearCompleted.style.display = "none";
            }
            else{
            clearCompleted.style.display = "inline-block";
            }
        }

    });

    if (itemsleft === 0){
        clearCompleted.style.display = "none";
    }
    else {
        clearCompleted.style.display = "inline-block";
    }

    if (completedToDo.length <= 0){

        clearCompleted.style.display = "none";
    }
    else{
        clearCompleted.style.display = "inline-block";
    }
}


let allButton = document.getElementById("all")
allButton.onclick = event => {
   allButton.style.border = "0.2px solid #BFBFBF";
   activeButton.style.border = "none";
   completedButton.style.border = "none";
   location.hash = "all";

    var i;
    for (i = 0; i < activeToDo.length; i++) {
        activeToDo[i].style.display = "flex";
    }

    var x;
    for (x = 0; x < completedToDo.length; x++) {
        completedToDo[x].style.display = "flex";
    }
}

let activeButton = document.getElementById("active")
activeButton.onclick = event => {
    activeButton.style.border = "0.2px solid #BFBFBF";
    allButton.style.border = "none";
    completedButton.style.border = "none";
    location.hash = "active";

    var i;
    for (i = 0; i < completedToDo.length; i++) {
        completedToDo[i].style.display = "none";
    }

    var x;
    for (x = 0; x < activeToDo.length; x++) {
        activeToDo[x].style.display = "flex";
    }
}

let completedButton = document.getElementById("completed1")
completedButton.onclick = event => {
    completedButton.style.border = "0.2px solid #BFBFBF";
    allButton.style.border = "none";
    activeButton.style.border = "none";
    location.hash = "completed";

    var i;
    for (i = 0; i < activeToDo.length; i++) {
        activeToDo[i].style.display = "none";
    }

    var x;
    for (x = 0; x < completedToDo.length; x++) {
        completedToDo[x].style.display = "flex";
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

    if (completedToDo.length <= 0){
        clearCompleted.style.display = "none";
    }
    else{
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

    if (completedToDo.length <= 0){

        clearCompleted.style.display = "none";
    }
    else{
        clearCompleted.style.display = "inline-block";
    }


}



