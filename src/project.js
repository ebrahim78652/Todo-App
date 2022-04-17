//here make the constructor for the project object. 

export let Project = function (name) {


    let project_name=name;
    let tasks=[];

    function addTask(task){
        tasks.push(task);
    }

    function getNumberOfTasks(){
        return tasks.length;
    }

    return {project_name, addTask, tasks, getNumberOfTasks};

}

