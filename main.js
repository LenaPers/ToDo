// Jakobs kod

const form = document.querySelector("form");
let counter = document.createElement("p");
let footer = document.getElementById('footer');
footer.appendChild(counter);

form.onsubmit = event => {
    event.preventDefault();
    //sparar ner både input och listan att placera input i
    let toDoInput = document.getElementById("toDoInput");
    let toDoContainter = document.getElementById('create-new-todo');

    let div = document.createElement("div");
    div.setAttribute("class", "active");
    div.setAttribute("id", "active");
    toDoContainter.appendChild(div);

    //lägger till texten man skrev in som text till textrutan
    let newToDo = document.createElement("label");
    newToDo.setAttribute("id", "checkbox");
    div.appendChild(newToDo);

    //lägger till checkbox rutan och sparar info om att den finns
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    
    newToDo.appendChild(checkbox);

    let span = document.createElement("span");
    span.textContent = toDoInput.value;
    newToDo.appendChild(span);

    let button = document.createElement('button');
    div.appendChild(button);


    //gör att texten i rutan försvinner dvs sätter texten till inget
    document.getElementById('toDoInput').value = '';

    //för att få fram listan när man lagt till något
    document.getElementById('create-new-todo').style.display = 'block';
    document.getElementById('footer').style.display = 'block';



    button.onclick = event => {
        // event.preventDefault();    
        toDoContainter.removeChild(div);

        let itemsleft = toDoContainter.children.length;
        counter.textContent = itemsleft + " items left";

        if (itemsleft === 0) {
            document.getElementById('footer').style.display = 'none';
            document.getElementById('create-new-todo').style.display = 'none';
        }
    }

    let itemsleft = toDoContainter.children.length;
    counter.textContent = itemsleft + " items left";

    let completed = document.getElementById('checkbox')
    
    completed.addEventListener('change', e => {
    
        if(e.target.checked){
            myFunction();
        }

        if(!e.target.checked){
            myFunction();
        }
    });
    
    
    
}

function myFunction() {
    var element = document.getElementById("active");
    element.classList.toggle("completed");
    element.classList.remove("active");
  }


let all = document.getElementById("all")

all.onclick = event => {
    let allToDo = document.getElementById("footer");
    let toDoContainter = document.getElementById('create-new-todo');
    toDoContainter.appendChild(allToDo)
}

let active = document.getElementById("active")

active.onclick = event => {
    let activeToDo = document.querySelectorAll("#active");
    let toDoContainter = document.getElementById('create-new-todo');
    toDoContainter.appendChild(activeToDo)
}



