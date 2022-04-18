import { makeElement } from './DOMUtilities.js'
import plusSymbol from "./assets/icons/plusSymbol.svg";
import { makeNewProjectDiv } from "./projectFront.js";
import { addDefaultProject } from "./logic.js"





export let makeHeader = function () {

    let header = makeElement('header', undefined, "To-Do Application");

    return header;

}

export let make_main = function () {


    let make_project_sidebar = function () {
        let project_sidebar = makeElement('div', "project_sidebar", undefined);

        let project_sidebar_title = makeElement('div', "project_sidebar_title", "Projects");

        let plus_symbol = new Image();
        plus_symbol.src = plusSymbol;
        plus_symbol.classList.add("plus_symbol");
        plus_symbol.alt = "add-project"

        let project_sidebar_body = makeElement('div', "project_sidebar_body", undefined);

        project_sidebar_title.append(plus_symbol);
        project_sidebar.append(project_sidebar_title, project_sidebar_body);




        return project_sidebar
    }

    let make_task_container = function () {
        let task_container = makeElement("div", "task_container", undefined);
        let tasks_title = makeElement("div", "tasks_title", "Tasks");
        let plus_symbol = new Image();
        plus_symbol.src = plusSymbol;
        plus_symbol.classList.add("plus_symbol");
        plus_symbol.alt = "add task";
        let tasks_body = makeElement("div", "tasks_body", undefined);

        tasks_title.append(plus_symbol);
        task_container.append(tasks_title, tasks_body);

        return task_container

    }


    let main = makeElement('main', undefined, undefined);
    main.append(make_project_sidebar(), make_task_container())
    return main;
}

let make_footer = function () {
    let footer = makeElement("footer", undefined, "with Love");
    return footer;
}

export let makeHomePage = function () {

    let header = makeHeader();
    let main = make_main();
    let footer = make_footer();

    let container = document.querySelector(".container");
    container.append(header, main, footer);


    //add the default project in our logic
    addDefaultProject();
    //here make the UI for the default project. 
    makeNewProjectDiv("inbox");
}