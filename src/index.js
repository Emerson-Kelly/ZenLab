import _ from 'lodash';
import './style.css';
import DisplayTask, { appendTask } from './displayTask.js';
import { toggleMenu } from './toggleMenu.js';



if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', function() {
  toggleMenu();
});


function component() {

 
    const element = document.createElement('div');
    element.id = 'taskContainer'; // Adding an ID for better management
    return element;
  
   
   

}

document.body.appendChild(component());



// Initialize the task form event listener


//appendTask();
