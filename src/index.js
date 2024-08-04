import _ from 'lodash';
import './style.css';
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage, loadTasksFromLocalStorage, saveTasksToLocalStorage } from './localStorageFunctions.js'; // Adjusted import
import DisplayTask, { appendTask } from './displayTask.js';
import { toggleMenu } from './toggleMenu.js';
import { taskArray } from './displayTask.js';




if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


window.onload = function(){

  window.scrollTo(10,0);
};

document.addEventListener('DOMContentLoaded', function() {
  
loadProjectsFromLocalStorage();
toggleMenu();

  
  
});




function component() {
    const element = document.createElement('div');
    element.id = 'taskContainer'; // Adding an ID for better management
    return element;
}

document.body.appendChild(component());


export { taskArray, saveProjectsToLocalStorage, saveTasksToLocalStorage };


// Initialize the task form event listener

//appendTask();
