const btnAction = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

btnAction.addEventListener("click", function () {
    document.getElementById("saida").innerHTML = '';
    const textBox = document.getElementById("input").value;

    if (!textBox) {
        document.getElementById("saida").innerHTML = "Insira algo no campo";
        return;
    }

    const containerList = document.createElement("div");
    containerList.className = "card-notas";
    const textElement = document.createElement("p");
    textElement.textContent = textBox;

    const btnRemove = document.createElement("button");
    btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnRemove.className = "btnRemove";

    btnRemove.addEventListener("click", function () {
        containerList.remove();
        saveTasks(); 
    });

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    btnEdit.className = "btnEdit";

    btnEdit.addEventListener("click", function () {
        const alterar = prompt("Alterar tarefa!");
        if(!alterar){
            return;
        }else{
            textElement.textContent = alterar;
            saveTasks();
        }
        
    });

    containerList.appendChild(textElement);
    containerList.appendChild(btnRemove);
    containerList.appendChild(btnEdit);

    document.getElementById("container-notas").appendChild(containerList);

    saveTasks();
});

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (taskText) {
        const containerList = document.createElement("div");
        containerList.className = "card-notas";
        const textElement = document.createElement("p");
        textElement.textContent = taskText;

        const btnRemove = document.createElement("button");
        btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnRemove.className = "btnRemove";

        btnRemove.addEventListener("click", function () {
            containerList.remove();
            saveTasks();
        });

        const btnEdit = document.createElement("button");
        btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        btnEdit.className = "btnEdit";

        btnEdit.addEventListener("click", function () {
        const alterar = prompt("Alterar tarefa!");
        if(!alterar){
            return;
        }else{
            textElement.textContent = alterar;
        }
        saveTasks();
        
    });

        containerList.appendChild(textElement);
        containerList.appendChild(btnRemove);
        containerList.appendChild(btnEdit);

        document.getElementById("container-notas").appendChild(containerList);
    });
}

function saveTasks() {
    const taskElements = document.querySelectorAll(".card-notas p");
    const tasks = Array.from(taskElements).map((element) => element.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
