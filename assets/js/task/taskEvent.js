//perpet de modifier le task quand on double clic dessus
//task : c'est le tache a modifier lors du double clique
function modifOnDoubleClicTaskHeader(task) {
    let taskHeader = task.querySelector(".task-header");
    taskHeader.addEventListener("dblclick", e => {
        e.stopPropagation();
        modiftask(task);
    });
}

//toute les actions a faire lors du modification du task
function modiftask(task) {
    //prendre la task header
    let taskHeader = task.querySelector(".task-header");
    let descriptionOfTask = taskHeader.querySelector(".task-description");
    let input = document.createElement("input");
    input.value = descriptionOfTask.textContent;

    descriptionOfTask.replaceWith(input);
    input.focus();

    //valider lorsque l'element pert le focus ou qand la touche entrer est taper
    input.addEventListener("keydown", (e) => {
        e.stopPropagation();
        if (e.key === "Enter" && input == document.activeElement) {
            descriptionOfTask.textContent = input.value;
            input.replaceWith(descriptionOfTask);
            e.stopPropagation();
            task.focus();
        }
    });

    input.addEventListener("blur", () => {
        descriptionOfTask.textContent = input.value;
        input.replaceWith(descriptionOfTask);
        
    });
}

//permetre le focus sur une task
function appendChildOnFocusAndEnter(task) {
    task.tabIndex = 0;
    task.addEventListener("keydown", event => {
        if (event.key === "Enter" && !event.ctrlKey && task === document.activeElement) {
            appendTaskAfter(task, task.nodeName);
        }
    })
}

//fonction pour cajouté un sous task lors du clique sur le touche ctrl et enter
function appendChildOnTabAndEnter(task) {
    task.addEventListener("keydown",(e) => {
        e.stopPropagation();
        //e.preventDefault();
        if(e.ctrlKey && e.key === "Enter") {
            appendChildByUser(task,"task-list","article");
        }
    })
}