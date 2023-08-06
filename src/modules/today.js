import { isToday } from 'date-fns'
import { inbox as tasksArr, createChildNode, addNode } from "./TodoList";

let content = document.querySelector(".temporary__content--content");

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

        addNode("", node);
    });
};

export {createToday};
