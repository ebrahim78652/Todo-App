import {Project} from "./project.js";

let projectsArray= [];
let currentlySelectedProject;

export function addDefaultProject(){
    let defaultProject= Project("inbox");
    projectsArray.push(defaultProject);
    currentlySelectedProject= defaultProject;
    console.log(projectsArray);
    console.log(currentlySelectedProject);
}

export function addNewProject(contentOfInput){
    console.log("new project added!.")
    console.log(contentOfInput);

    //make a new project and add to the projectsArray[]
    let newProject= Project(contentOfInput);
    projectsArray.push(newProject);
    console.log(projectsArray);

}

export function setCurrentlySelectedProject(clickedProject){
console.log(`the project selected  is: ${clickedProject} `);
let temp = projectsArray.filter((element)=>{
    if(element.project_name==clickedProject){
        return true;
    }
})
    currentlySelectedProject= temp[0];
    console.log(currentlySelectedProject);
}

export function getCurrentlySelectedProject(){
    return currentlySelectedProject;
}

export function addnewTaskToCurrentProject(taskName){
    currentlySelectedProject.addTask(taskName);
}

export function removeTaskFromArray(nameOfTask){
    console.log(currentlySelectedProject);
    console.log(nameOfTask);
    console.log(currentlySelectedProject.tasks);
    currentlySelectedProject.deleteTask(nameOfTask);
    console.log(currentlySelectedProject.tasks);


}