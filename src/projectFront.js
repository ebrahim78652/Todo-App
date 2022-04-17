import { addNewProject, setCurrentlySelectedProject } from "./logic.js"
import { makeElement } from './DOMUtilities.js'
import {displayAllTasks} from "./taskFront.js"


//now add listener to the add sign. 

function addListenerOnPlusSign() {

    //listener on the plus sign for the project

    let project_sidebar_title = document.querySelector(".project_sidebar_title");

    let plus_symbol = project_sidebar_title.querySelector(".plus_symbol");

    plus_symbol.addEventListener("click", () => {
        console.log("plus sign was clicked");
        //make an input box;
        makeAnInputBox();
    })

}


  //function to make an input box;
function makeAnInputBox(){
    let project_sidebar_body = document.querySelector(".project_sidebar_body");
    let input_box = makeElement("input", "project_input", undefined);
    project_sidebar_body.appendChild(input_box);
    input_box.focus();
    addListenerOnInputBox(input_box);
}

function addListenerOnInputBox(input_box) {
    //add a new div and add the project to the array.
    input_box.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed!");
            addNewProject(input_box.value);
            input_box.remove();

            //function call here
            makeNewProjectDiv(input_box.value);
        }
    })
}

export function makeNewProjectDiv(nameOfProject){
       //making new div
       let newProject = makeElement("div", "project", nameOfProject);
       //add listener on project 
       newProject.addEventListener("click", addListenerOnProject);
       let project_sidebar_body = document.querySelector(".project_sidebar_body");
       project_sidebar_body.append(newProject);

       switchCurrentProjectTo(newProject);

}


function addListenerOnProject(e) {
    console.log("project clicked!");
    let previouslyClickedProject = document.querySelector(".project-clicked");
    if (previouslyClickedProject) {
        previouslyClickedProject.classList.toggle("project-clicked");
    }
    e.target.classList.add("project-clicked");
    setCurrentlySelectedProject(e.target.textContent);

    //show the tasks only in the current project. 
    displayAllTasks()
}

function switchCurrentProjectTo(newProject) {
    let previouslyClickedProject = document.querySelector(".project-clicked");
    if (previouslyClickedProject) {
        previouslyClickedProject.classList.toggle("project-clicked");
    }
    newProject.classList.add("project-clicked");
    setCurrentlySelectedProject(newProject.textContent);

    //show the tasks only in the current project. 
    displayAllTasks()
}



export function setUpListeners() {
    addListenerOnPlusSign();
}