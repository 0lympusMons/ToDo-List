import { isToday } from 'date-fns'
import { inbox as tasksArr, createChildNode, addNode, addTask } from "./TodoList";

let content = document.querySelector(".temporary__content--content");

// ********************************************************************//
//inbox
// ********************************************************************//

function createInbox() {
    content.innerHTML = `
            <h1 id="content__title">Inbox</h1>
            <div id="tasks-wrapper">
            </div>
            `;

        
    (tasksArr.task).forEach(task => {
        let node = createChildNode(task)

        addNode("#tasks-wrapper", node);
    });

    addNode(".temporary__content--content", createFormNode());
};



// ********************************************************************//
//today
// ********************************************************************//


//returns array of tasks that are within this day
function displayTodayTasks(inbox) {

    let todayTasks = [];

    let tasks = inbox.task;
    tasks.forEach((task, index) => {

        let dateArr = task.dueDate.split('-');
        let year = parseInt(dateArr[0]);
        let month = dateArr[1] - 1;
        let day = parseInt(dateArr[2]);
        if (isToday(new Date(year, month, day))) {
            console.log(year + " " + month + " " + day);
            todayTasks.push(inbox.task[index]);

        }


    });

    return todayTasks;
};

function createToday() {
    content.innerHTML = `
            <h1 id="content__title">Today</h1>
            <div id="tasks-wrapper">
            </div>
            `;
    let todayTasks = displayTodayTasks(tasksArr);
    console.log(todayTasks);

    todayTasks.forEach(task => {
        let node = createChildNode(task)

        addNode("#tasks-wrapper", node);
    });
};

function createFormNode(){

    let form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("action", "");
    form.innerHTML = `

    <input required type="text" name="task-title" id="task-title">
    <input type="date" name="date" id="date">
    <select name="priority" id="priority">
        <option value="none" disabled selected>Priority</option>
        <option value="Important">Important</option>
        <option value="Not Important">Not Important</option>
    </select>

    <button type="submit" id="addTask">Add a task</button>

    `;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask();
    });

    return form;
};
export {createInbox, createToday};
