import { createInbox, createToday, createThisWeek } from "./content";

let content = document.querySelector(".temporary__content--content");

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

inboxButton.onclick = createInbox;
todayButton.onclick = createToday;
thisWeekButton.onclick = createThisWeek;





