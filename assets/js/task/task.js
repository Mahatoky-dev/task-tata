//htmlElement est le type , section , article ..
// taskDescription est le contenu pricipale de la tache
function createTask( htmlElement,taskDescription) {
    let taskContainer = document.createElement(htmlElement);
    taskContainer.classList.add("task");

    //header de la task qui va contenir les informations de base et action sur la task
    let taskHeader = document.createElement("section");
    taskHeader.classList.add("task-header");

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

    //bouton finish task
    let btnFinishTask = createBtnFinishTask(taskContainer);
    spanTaskAction.appendChild(btnFinishTask);

    //ajout des composant dans header 

    //assemblage des elements
    taskHeader.appendChild(spanTaskDescription);
    taskHeader.appendChild(spanTaskAction);
    
    //bouton modif task
    // let btnModifTask = createBtnModifTask(taskHeader);
    // taskHeader.appendChild(btnModifTask);
    modifOnDoubleClic(taskHeader);

    //ajout du taskHeader dans le task principal
    taskContainer.appendChild(taskHeader);
    
    return taskContainer;
}

//cree un element pour stoquer la liste des task
function createListOfTask(htmlElement,classNameOfListTask) {
    let element = document.createElement(htmlElement);
    element.classList.add(classNameOfListTask);
    return element;
}

function finishTask(task) {
    task.classList.toggle("text-decoration-line-through");
}