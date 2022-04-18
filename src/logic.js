import {Project} from "./project.js";
import {Task} from "./task.js"


export let projectsArray= [];
let currentlySelectedProject;


//below function adds the "inbox" project to the array
export function addDefaultProject(){
    let defaultProject= new Project("inbox");
    projectsArray.push(defaultProject);
    currentlySelectedProject= defaultProject;
    console.log(projectsArray);
    console.log(currentlySelectedProject);
}

//below function adds any new project to the array
export function addNewProject(contentOfInput){
    console.log("new project added!.")
    console.log(contentOfInput);

    //make a new project and add to the projectsArray[]
    let newProject= new Project(contentOfInput);
    projectsArray.push(newProject);
    console.log(projectsArray);

}

//below function sets the project which the user clicked on as the "currentlySelectedProject"
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

//below function returns the project currently selected by the user
export function getCurrentlySelectedProject(){
    return currentlySelectedProject;
}

//adding a new task to the currently selected Project
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

export function persistData(){
    console.log("persisting data..!");
    let convertedProjectsToString= JSON.stringify(projectsArray);
    localStorage.setItem('projects', convertedProjectsToString);

}

//below function returns true if persisted data found on disk
//else it returns false
export function isDataAvailable(){
    if(!localStorage.getItem("projects")){
       return false;
    }

    return true;
}

//below function converts JSON data to normal data
export function convertSavedDataToNormalData(){

    let savedData= localStorage.getItem("projects");
    console.log(savedData);
    let parsedData= JSON.parse(savedData);
    console.log(parsedData);

    parsedData.forEach((element, index)=>{
        
        //setting the prototype of the tasks
        element.tasks.forEach(task=>{
            Object.setPrototypeOf(task, Task.prototype)
            console.log(task)

        })

        //setting the prototype of the elements

        Object.setPrototypeOf(element, Project.prototype);
        console.log(element);
        console.log(element.getNumberOfTasks());
    
    })

    projectsArray=parsedData;
    console.log(projectsArray);

}

