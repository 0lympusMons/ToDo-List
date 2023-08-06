
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
    



    todayButton.onclick = ()=>{
        createToday();
    };


};

function createToday(){
    content.innerHTML = `
            <h1 id="content__title">Today</h1>
            `;
    content.innerHTML += "yawa"
};


function createThisWeek(){
    content.innerHTML = `
            <h1 id="content__title">Today</h1>
            `;
    content.innerHTML += "yawa"
};
export default createMenu;
