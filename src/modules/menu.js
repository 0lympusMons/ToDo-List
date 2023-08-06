import { inbox as tasksArr, displayTodayTasks, createChildNode } from "./TodoList";



let content = document.querySelector(".temporary__content--content");


function createMenu() {
    let buttons = document.querySelectorAll(".menu__button");
    let inboxButton = document.querySelector("#inboxButton");
    let todayButton = document.querySelector("#todayButton");
    let thisWeekButton = document.querySelector("#thisWeekButton");


    buttons.forEach(button => {
        button.onclick = () => {
            content.innerHTML = `
            <h1 id="content__title">${button.textContent}</h1>
            `;

        }
    });

    // inboxButton.onclick = createInbox;
    todayButton.onclick = createToday;
    thisWeekButton.onclick = createThisWeek;



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

//duplicate function!!! please decouple TodoList.addNode
function addNode(target, node) {
    target = "#tasks-wrapper"; //temporary

    (document.querySelector(target)).appendChild(node);

}




function createThisWeek() {
    content.innerHTML = `
            <h1 id="content__title">Today</h1>
            `;
    content.innerHTML += "yawa"
};
export default createMenu;
