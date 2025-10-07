//perpet de modifier le task quand on double clic dessus
//task : c'est le tache a modifier lors du double clique
function modifOnDoubleClic(task) {
    document.addEventListener("dblclick", () => {
        modiftask();
    });

    //toute les actions a faire lors du modification du task
    function modiftask() {
        let descriptionOfTask = task.querySelector(".task-description").textContent;
        let input = document.createElement("input");
            input.value = descriptionOfTask;

            let btnValide = document.createElement("button");
            btnValide.textContent = "update";
            let tempTaskInput = document.createElement("article");
            tempTaskInput.classList.add("task");
            tempTaskInput.appendChild(input);
            tempTaskInput.appendChild(btnValide);
            task.replaceWith(tempTaskInput);
            input.focus();

            btnValide.addEventListener("click", () => {
                tempTaskInput.replaceWith(createTask("article", input.value));
            });
    }
}