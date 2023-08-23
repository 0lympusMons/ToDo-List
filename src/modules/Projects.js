import { addNode } from './TodoList';
import { createFormNode, setContentTitle, createPageTemplate, deletePage } from './content';


const EventEmitter = require('events');
const events = new EventEmitter();


let projects = [];


function createProject(name) {
    let keyID = key.newKey();
    let newProject = {
        tasks: [],
        key: keyID,
    }

    newProject["name"] = name;

    events.emit("newProject", newProject);
    return newProject;
}

function displayProject(key) {

    // createPageTemplate();

    let currentProject;

    //finds the project inside projects[]
    projects.forEach(project => {
        if (project.key == key) {
            currentProject = project;
            console.log(project);
        }
    });

    // display these tasks 
    let currentProjectTasks = currentProject.tasks;

    deletePage();

    // addNode(".temporary__content", createPageTemplate());
    createPageTemplate(currentProject.name);

    addNode(".temporary__content--content", createFormNode());


}


function displayTasks() {
}

function createProjectMenuNode(newProject) {

    let projectMenuNode = document.createElement("li");
    projectMenuNode.innerHTML = `<button class="project__button" data-index="${newProject.key}">${newProject.name}</button>`;
    projectMenuNode.addEventListener("mousedown", () => {
        displayProject(newProject.key);
    });
    return projectMenuNode;
}

let key = (function () {
    let number = 0;
    function newKey() {
        return number++;
    };

    return { newKey };
})();

events.on("newProject", (newProject) => {
    projects.push(newProject);
    let menuProjectNode = createProjectMenuNode(newProject);
    addNode(".projects__list", menuProjectNode);
});


export { createProject };