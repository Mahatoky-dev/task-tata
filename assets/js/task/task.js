//htmlElement est le type , section , article ..
// taskDescription est le contenu pricipale de la tache
function createTask( htmlElement,taskDescription) {
    let taskContainer = document.createElement(htmlElement);
    taskContainer.classList.add("task");

    //header de la task qui va contenir les informations de base et action sur la task
    let taskHeader = document.createElement("section");
    taskHeader.classList.add("task-header");

    //ajout du statut du task
    let spanStatut = document.createElement("span");
    spanStatut.classList.add("task-statut");
    
    //creation de l'image de base d'une statu 
    let imgStat = document.createElement("img");
    imgStat.className = "img-statut";
    imgStat.src = "assets/icone/non-ok.png";
    
    //descripion principal du task
    let spanTaskDescription = document.createElement("span");
    spanTaskDescription.classList.add("task-description");
    spanTaskDescription.textContent = taskDescription;

    //centenu principale du task
    let mainDesc = document.createElement("span");
    mainDesc.className = "task-main-desk";

    mainDesc.appendChild(spanStatut);
    mainDesc.appendChild(spanTaskDescription);
    taskHeader.appendChild(mainDesc);
    
    //ajout des action possible sur le task
    let spanTaskAction = document.createElement("span");
    
    //suppression de l'element
    let btnSup = createBtnSupTask(taskContainer,"btn-sup");
    spanTaskAction.appendChild(btnSup);
    
    //bouton finish task
    let btnFinishTask = createBtnFinishTaskWithIcone(taskContainer,imgStat);
    spanStatut.appendChild(btnFinishTask);
    

    spanTaskAction.appendChild(createBtnAppendTaskChild(taskContainer,"btn-append-sous-task"));

    //assemblage des elements
    taskHeader.appendChild(mainDesc);
    taskHeader.appendChild(spanTaskAction);
    
    
    //ajout du taskHeader dans le task principal
    taskContainer.appendChild(taskHeader);
    modifOnDoubleClicTaskHeader(taskContainer);

    //checker le toche ctrl tab pour l'ajout de child
    appendChildOnTabAndEnter(taskContainer);
    appendChildOnFocusAndEnter(taskContainer);
    
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
    let imgStatut = task.getElementsByClassName("img-statut")[0];
    console.log(imgStatut.src);
    if(imgStatut.getAttribute("src") === "assets/icone/non-ok.png") {
        imgStatut.src = "assets/icone/ok.png";
    } else {
        imgStatut.src = "assets/icone/non-ok.png";
    }
}

//ajotué une tache brother a une task , une task de meme niveau
function appendBrotherTask(task) {
    let containerListTask = task.parentElement;
    taskAppendByUserFromInput(containerListTask,task.nodeName.toLowerCase());
}

function appendTaskAfter(task,htmlElementOfTask) {
    let newTask = createTask(htmlElementOfTask,"");
    task.after(newTask);
    modiftask(newTask);
}

//demandé a l'utilisateur d'entrer le nouveau task qu'il veut insert 
//task list et le conteneur de toute les tasks
function taskAppendByUserFromInput(taskList, htmlElement) {
    let newTask = createTask(htmlElement,"");
    taskList.appendChild(newTask);
    modiftask(newTask);
}

function appendChildByUser(task,classNameOfListTask,htmlElementOfTaskList) {
    let sousTaskList = task.querySelector("." + classNameOfListTask);
        if (sousTaskList == null) {
            sousTaskList = createListOfTask(htmlElementOfTaskList,classNameOfListTask);
            task.appendChild(sousTaskList);
        }
        taskAppendByUserFromInput(sousTaskList,htmlElementOfTaskList);
}