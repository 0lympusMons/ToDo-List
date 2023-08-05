

const EventEmitter = require('events');

const events = new EventEmitter();

let inbox = {
    task: [],

};

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
    `;

    return taskNode;
};

function addNode(target, node) {
    target = "#tasks-wrapper"; //temporary
    let addTaskButton = document.querySelector("#addTask");

    (document.querySelector(target)).appendChild(node);

}

let addTaskButton = document.querySelector("#addTask");
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    addTask();
    e.preventDefault();
})

function addTask() {
    let formData = fetchFormData();
    let bar = newTask(formData.title, "a", formData.date, formData.priority);
    let foo = createChildNode(bar);

    // let foo = createChildNode({ title: formData.title, description: "aa", dueDate: formData.date, priority: formData.priority });
    addNode('useless argument', foo);

    events.emit("newTask", bar);
};

//event listener for new tasks
events.on("newTask", (task) => {
    inbox.task.push(task);
});

function fetchFormData() {
    let form = document.querySelector("form");
    let formData = new FormData(form);

    var title = formData.get("task-title"),
        date = formData.get("date"),
        priority = (formData.get("priority") == null) ? "Unset" : formData.get("priority");



    return { title, date, priority };

};



export { inbox, createChildNode, addNode };

//emit signal when new task created