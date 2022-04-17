import {Project} from "./project.js";

let projectsArray= [];
let currentlySelectedProject;


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

currentlySelectedProject= projectsArray.filter((element)=>{
    if(element.name==clickedProject){
        return true;
    }
})

console.log(currentlySelectedProject);

}