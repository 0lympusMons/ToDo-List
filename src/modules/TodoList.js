const EventEmitter = require('events');

const events = new EventEmitter();

let inbox = {
    task: [],
};

//add form ay basta

let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

//event listener for new tasks
events.on("newTask", (task) => {

    inbox.task.push(task);

});

function newTask(title, description, dueDate, priority) {
    let task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        hasDescription: (description != null || undefined) ? true : false,
    }

    return task;
};

function createChildNode(task) {
    let taskNode = document.createElement("div");

    let priority = task.priority;

    taskNode.innerHTML = `
    <div class="task">
    <div class="task--1">
        <input type="checkbox" name="doneTask" id="doneTask">
        <h3 class="task-title">${task.title}</h3>
        <input type="date" name="date" id="date" value="${task.dueDate}">
        <h3 class="due-date"></h3>

        <select name="priority" id="priority">
        <option ${(priority == "Unset") ? "selected" : ""} value="none" disabled>Priority</option>
        <option ${(priority == "Important") ? "selected" : ""} value="Important">Important</option>
        <option ${(priority == "Not Important") ? "selected" : ""} value="Not Important">Not Important</option>
        </select>

    </div>


    <h3>${task.description}</h3>
    </div>
    `
        ;

    return taskNode;
};

function addNode(target, node) {
    // target = "#tasks-wrapper"; //temporary

    (document.querySelector(target)).appendChild(node);

}



function addTask() {

    let formData = fetchFormData();
    let bar = newTask(formData.title, "a", formData.date, formData.priority);
    let foo = createChildNode(bar);

    addNode('#tasks-wrapper', foo);

    events.emit("newTask", bar);
};


//fetches data from form
function fetchFormData() {

    let form = document.querySelector("form");
    let formData = new FormData(form);

    var title = formData.get("task-title"),
        date = formData.get("date"),
        priority = (formData.get("priority") == null) ? "Unset" : formData.get("priority");



    return { title, date, priority };

};


export { inbox, createChildNode, addNode, addTask };

//emit signal when new task created