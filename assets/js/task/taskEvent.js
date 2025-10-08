//perpet de modifier le task quand on double clic dessus
//task : c'est le tache a modifier lors du double clique
function modifOnDoubleClicTaskHeader(task) {
    let taskHeader = task.querySelector(".task-header");
    taskHeader.addEventListener("dblclick", () => {
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

        let tempTaskInput = document.createElement("article");
        tempTaskInput.appendChild(input);
        taskHeader.replaceWith(tempTaskInput);
        input.focus();

        //valider lorsque l'element pert le focus ou qand la touche entrer est taper
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                descriptionOfTask.textContent = input.value;
                tempTaskInput.replaceWith(taskHeader);
            }
        });

        input.addEventListener("blur", (e) => {
            descriptionOfTask.textContent = input.value;
            tempTaskInput.replaceWith(taskHeader);
        });
    }

//permetre le focus sur une task
function appendChildOnFocusAndEnter(task) {
    task.tabIndex = 0;
    task.addEventListener("keydown",e=> {
        if(e.key ==="Enter" && task === document.activeElement) {
            console.log("append child");
            appendBrotherTask(task);
        }
    })
}