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

        let tempTaskInput = document.createElement("article");
        tempTaskInput.appendChild(input);
        taskHeader.replaceWith(tempTaskInput);
        input.focus();

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                descriptionOfTask.textContent = input.value;
                tempTaskInput.replaceWith(taskHeader);
            }
        });
    }
}
