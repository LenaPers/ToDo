
// Jakobs kod

const form = document.querySelector("form");

form.onsubmit = event => {
    event.preventDefault();
    //sparar ner både input och listan att placera input i
    let toDoInput = document.getElementById("toDoInput");
    let li = document.getElementById('toDo');
    
    let div = document.createElement("div");
    li.appendChild(div);
    
    //lägger till texten man skrev in som text till textrutan
    let newToDo = document.createElement("label");
    // newToDo.textContent = toDoInput.value;
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
    document.getElementById('toDo').style.display='block';
    document.getElementById('footer').style.display='block';
}


//toDo och footer ska va bort tills man 







