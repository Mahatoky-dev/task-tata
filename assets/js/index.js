const taskList = document.getElementById("task-list");
taskList.appendChild(createTask("section","Main task"));

const printerActiveElement = setInterval(()=> {
    console.log(document.activeElement);
},500);

clearInterval(printerActiveElement);