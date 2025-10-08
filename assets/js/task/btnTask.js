// task : est l'element que le btn va suprimé
function createBtnSupTask(task,btnClass) {
    let btnSupTask = document.createElement("button");
    btnSupTask.textContent = "sup";
    btnSupTask.classList.add(btnClass);
    //suprimé le task si le bouton est cliqué
    btnSupTask.addEventListener("click", (e) => {
        task.remove();
    });

    return btnSupTask;
}
//taskList est l'element qui contient toute les task
//htmlElement est le type de tasque ajouté (article , section ...)
function createBtnAddTask(taskList, htmlElement,btnClass) {
    let btnAddTask = document.createElement("button");
    btnAddTask.textContent = "add";
    btnAddTask.classList.add(btnClass);

    btnAddTask.addEventListener("click", e => {
        taskAppendByUserFromInput(taskList, htmlElement);
    })
    //cree temporairement l'input qui va permetre a l'utilisateur d'enter le task

    return btnAddTask;
}

function createBtnAppendTaskChild(task, htmlElementOfTaskList, htmlElementOfSousTask,btnClass) {
    let btnAddSousTask = document.createElement("button");
    btnAddSousTask.classList.add(btnClass);
    btnAddSousTask.textContent = "adst";
    let classNameOfListTask = "task-list";

    btnAddSousTask.addEventListener("click", e => {
        let sousTaskList = task.querySelector("." + classNameOfListTask);
        if (sousTaskList == null) {
            sousTaskList = createListOfTask(htmlElementOfTaskList,classNameOfListTask);
            task.appendChild(sousTaskList);
        }
        taskAppendByUserFromInput(sousTaskList, htmlElementOfSousTask);
    });

    return btnAddSousTask;
}


//creation d'un bouton permetant de mettre une task en terminé
//task est l'element que le bouton peut terminé
function createBtnFinishTaskWithIcone(task) {
    let btn = document.createElement("button");
    btn.textContent = "ok";
    btn.addEventListener("click", () => {
        finishTask(task);
    });
    return btn;
}

// taskHeder est le header de la task , qui contien les info du task
function createBtnModifTask(taskHeader) {
    let btn = document.createElement("button");
    btn.textContent = "update";
    let descriptionOfTask = taskHeader.querySelector(".task-description");
    btn.addEventListener("click", () => {
        let input = document.createElement("input");
        input.value = descriptionOfTask.textContent;

        let btnValide = document.createElement("button");
        btnValide.textContent = "update";
        let tempTaskInput = document.createElement("article");
        tempTaskInput.appendChild(input);
        tempTaskInput.appendChild(btnValide);
        taskHeader.replaceWith(tempTaskInput);
        input.focus();

        btnValide.addEventListener("click", () => {
            descriptionOfTask.textContent = input.value;
            tempTaskInput.replaceWith(taskHeader);
        });
    });
    return btn;
}

