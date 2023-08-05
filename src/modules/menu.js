
function createMenu() {
    let buttons = document.querySelectorAll(".menu__button");
    let contentTitle = document.querySelector("#content__title");

    buttons.forEach(button => {
        button.onclick = () => {
            contentTitle.textContent = button.textContent;
        }
    });
    
};

export default createMenu;
