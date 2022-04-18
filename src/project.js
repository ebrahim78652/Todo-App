
import {Task} from "./task.js"
//here make the constructor for the project object. 

export let Project = function (name) {
    this.project_name=name;
    this.tasks=[];
}

Project.prototype.addTask=  function addTask(task){
    this.tasks.push(new Task(task));
}

Project.prototype.getNumberOfTasks= function getNumberOfTasks(){
    return this.tasks.length;
}

Project.prototype.deleteTask= function deleteTask(taskName){
    this.tasks.filter((element, index)=>{
       if(element.name==taskName){
           console.log(element)
           this.tasks.splice(index, 1);
       }
   })
} 