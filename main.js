// Jakobs kod

const form = document.querySelector("form");
let counter = document.createElement("p");
let footer = document.getElementById('footer');
footer.appendChild(counter);

form.onsubmit = event => {
    event.preventDefault();
    //sparar ner både input och listan att placera input i
    let toDoInput = document.getElementById("toDoInput");
    let toDoContainter = document.getElementById('mainContainer');

    let div = document.createElement("div");
    div.setAttribute("class", "active");
    toDoContainter.appendChild(div);

    //lägger till checkbox rutan och sparar info om att den finns
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "box");
    div.appendChild(checkbox)


    //lägger till texten man skrev in som text till textrutan
    let label = document.createElement("label");
    div.appendChild(label)
    
    
    let span = document.createElement("span");
    span.textContent = toDoInput.value;
    label.appendChild(span);

    let button = document.createElement('button');
    div.appendChild(button);

    // newToDo.setAttribute("id", "checkbox"); Temporary
    // div.appendChild(newToDo);

    //newToDo.appendChild(checkbox);


    //let button = document.createElement('button');
    //div.appendChild(button);


    //gör att texten i rutan försvinner dvs sätter texten till inget
    document.getElementById('toDoInput').value = '';

    //för att få fram listan när man lagt till något
    document.getElementById("mainContainer").style.display = 'block';
    document.getElementById('footer').style.display = 'block';



    button.onclick = event => {
        // event.preventDefault();    
        toDoContainter.removeChild(div);

        let itemsleft = toDoContainter.children.length;
        counter.textContent = itemsleft + " items left";

        if (itemsleft === 0) {
            document.getElementById('footer').style.display = 'none';
            document.getElementById("mainContainer").style.display = 'none';
        }
    }

    let itemsleft = toDoContainter.children.length;
    counter.textContent = itemsleft + " items left";

    let completed = document.getElementById('checkbox')

    completed.addEventListener('change', e => {

        if (e.target.checked) {
            alert('hej');
        }
    });



}

let all = document.getElementById("all")

all.onclick = event => {
    let allToDo = document.getElementById("footer");
    let toDoContainter = document.getElementById("mainContainer");
    toDoContainter.appendChild(allToDo)
}

let active = document.getElementById("active")

active.onclick = event => {
    let activeToDo = document.querySelectorAll("#active");
    let toDoContainter = document.getElementById("mainContainer");
    toDoContainter.appendChild(activeToDo)
}