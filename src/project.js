
import {Task} from "./task.js"
//here make the constructor for the project object. 

export let Project = function (name) {


    let project_name=name;
    let tasks=[];

    function addTask(task){
        tasks.push(Task(task));
    }

    function getNumberOfTasks(){
        return tasks.length;
    }

    function deleteTask(taskName){
         tasks.filter((element, index)=>{
            if(element.name==taskName){
                console.log(element)
                tasks.splice(index, 1);
            }
        })
    } 

    return {project_name, addTask, tasks, getNumberOfTasks, deleteTask};

}

