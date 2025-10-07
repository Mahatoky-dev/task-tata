//perpet de modifier le task quand on double clic dessus
//task : c'est le tache a modifier lors du double clique
function modifOnDoubleClic(taskHeader) {
    taskHeader.addEventListener("dblclick", () => {
        modiftask();
    });

    //toute les actions a faire lors du modification du task
    function modiftask() {
        let descriptionOfTask = taskHeader.querySelector(".task-description");
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
    }
}