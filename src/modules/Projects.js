import { addNode } from './TodoList';


const EventEmitter = require('events');
const events = new EventEmitter();


let projects = [];


function createProject(name){
    let keyID = key.newKey();
    let newProject = {
        tasks: [],
        key: keyID,
    }

    newProject["name"] = name;

    events.emit("newProject", newProject);
    return newProject;
}

function createProjectMenuNode(newProject){

    let projectListNode = document.createElement("li");
    projectListNode.innerHTML = `<button class="project__button" data-index="${newProject.key}">${newProject.name}</button>`;

    return projectListNode;
}

let key = (function(){
    let number = 0;
    function newKey(){
        return number++;
    };

    return {newKey};
})();

events.on("newProject", (newProject)=>{
    projects.push(newProject);
    let menuProjectNode = createProjectMenuNode(newProject);
    addNode(".projects__list", menuProjectNode);
});


export {createProject};