import { makeHomePage } from "./homePageCreator.js";
import {setUpListeners} from "./projectFront.js" 
import {setUpListenerTask} from "./taskFront.js";

makeHomePage();
setUpListeners();
setUpListenerTask();