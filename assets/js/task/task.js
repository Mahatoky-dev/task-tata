//htmlElement est le type , section , article ..
// taskDescription est le contenu pricipale de la tache
function createTask( htmlElement,taskDescription) {
    let taskContainer = document.createElement(htmlElement);
    taskContainer.classList.add("task");

    //descripion principal du task
    let spanTaskDescription = document.createElement("span");
    spanTaskDescription.classList.add("task-description");
    spanTaskDescription.textContent = taskDescription;

    //ajout des action possible sur le task
    let spanTaskAction = document.createElement("span");

    //suppression de l'element
    let btnSup = createBtnSupTask(taskContainer);
    spanTaskAction.appendChild(btnSup);

    //ajout de sous task 
    let btnAddSousTask = createBtnAppendTaskChild(taskContainer,"section","article");
    spanTaskAction.appendChild(btnAddSousTask);

    //assemblage des elements
    taskContainer.appendChild(spanTaskDescription);
    taskContainer.appendChild(spanTaskAction);

    return taskContainer;
}

//cree un element pour stoquer la liste des task
function createListOfTask(htmlElement) {
    let element = document.createElement(htmlElement);
    element.classList.add("task-list");
    return element;
}