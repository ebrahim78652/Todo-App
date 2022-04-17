import { makeElement } from './DOMUtilities.js'
import { getCurrentlySelectedProject, addnewTaskToCurrentProject } from "./logic.js"


export function setUpListenerTask() {
    let task_title = document.querySelector(".tasks_title");
    let plus_symbol = task_title.querySelector(".plus_symbol");
    plus_symbol.addEventListener("click", addNewTask);

}

function addNewTask() {
    console.log("plus sign tasks clicked!");
    //add new task to the UI first
    makeAnInputBox();
}

function makeAnInputBox() {
    let tasks_body = document.querySelector(".tasks_body");
    let input_box = makeElement("input", "project_input", undefined);
    tasks_body.appendChild(input_box);
    input_box.focus();
    addListenerOnInputBox(input_box);
}

function addListenerOnInputBox(input_box) {
    //add a new div and add the project to the array.
    input_box.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed!");
            input_box.remove();

            //function call here
            newTaskDiv(input_box.value);
        }
    })
}

function newTaskDiv(taskName) {
    let taskdiv = makeElement("div", "task", undefined);
    let currentlySelectedProject = getCurrentlySelectedProject()
    console.log(currentlySelectedProject);
    console.log("the number of tasks in currently selected project is")
    console.log(currentlySelectedProject.getNumberOfTasks());

    let numberOftasksInCurrentlySelectedProject = currentlySelectedProject.getNumberOfTasks();
    let checkBoxInput = makeElement("input", undefined, undefined);
    checkBoxInput.setAttribute("type", "checkbox");
    checkBoxInput.setAttribute("data", numberOftasksInCurrentlySelectedProject);
    checkBoxInput.setAttribute("id", numberOftasksInCurrentlySelectedProject);
    console.log(checkBoxInput);

    //change below line in the end
    addnewTaskToCurrentProject(taskName);

    //change the name of the task here.
    let label = makeElement("label", undefined, taskName);
    label.setAttribute("for", numberOftasksInCurrentlySelectedProject);

    taskdiv.append(checkBoxInput, label);
    let tasks_body = document.querySelector(".tasks_body");
    tasks_body.append(taskdiv);




}