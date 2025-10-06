// task : est l'element que le btn va suprimé
function createBtnSupTask(task) {
    let btnSupTask = document.createElement("button");
    btnSupTask.textContent = "sup";
    //suprimé le task si le bouton est cliqué
    btnSupTask.addEventListener("click", (e) => {
        task.remove();
    });

    return btnSupTask;
}
//taskList est l'element qui contient toute les task
//htmlElement est le type de tasque ajouté (article , section ...)
function createBtnAddTask(taskList, htmlElement) {
    let btnAddTask = document.createElement("button");
    btnAddTask.textContent = "add";

    btnAddTask.addEventListener("click" ,e => {
        taskAppendByUserFromInput(taskList,htmlElement);
    })
    //cree temporairement l'input qui va permetre a l'utilisateur d'enter le task

    return btnAddTask;
}

//demandé a l'utilisateur d'entrer le nouveau task qu'il veut insert 
//task list et le conteneur de toute les tasks
function taskAppendByUserFromInput(taskList,htmlElement) {
    let inputContainer = document.createElement(htmlElement);
    inputContainer.classList.add("task");
    let input = document.createElement("input");
    let btnValide = document.createElement("button");
    btnValide.textContent = "validé";
    
    btnValide.addEventListener("click", e => {
        taskList.lastChild.replaceWith(createTask(htmlElement,input.value));
    });
    
    inputContainer.appendChild(input);
    inputContainer.appendChild(btnValide);
    taskList.appendChild(inputContainer);
    input.focus();
}

const taskList = document.getElementById("task-list");
document.body.appendChild(createBtnAddTask(taskList,"article"));