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
    toDoContainter.appendChild(div);

    //lägger till texten man skrev in som text till textrutan
    let newToDo = document.createElement("label");
    newToDo.setAttribute("class", "hej");
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

    checkbox.addEventListener('change', e => {

        if (e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;
            toDoContainter.removeChild(itemsleft)

            checkedElement.classList.add("completed");
            checkedElement.classList.remove("active");
        }

        if (!e.target.checked) {
            let checkedElement = e.target.parentNode.parentNode;

            checkedElement.classList.toggle("active");
            checkedElement.classList.remove("completed");
        }
    });
}

let allButton = document.getElementById("all")
allButton.onclick = event => {

}

let activeButton = document.getElementById("active")
activeButton.onclick = event => {
    let activeToDo = document.getElementsByClassName("active");
    let toDoContainter = document.getElementById('create-new-todo');

    var i;
    for (i = 0; i < activeToDo.length; i++) {
        toDoContainter.appendChild(activeToDo[i])
    }

}