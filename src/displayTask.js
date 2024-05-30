import { renderCalendar } from './datePicker.js';
import { taskComplete } from './completeTask.js';
//import { toggleParagraphs } from './expandAndCollapse.js'
import { toggleParagraphs, handleExpandButton } from './expandAndCollapse.js';
import { addEditTaskEventListeners } from './editTask.js';




document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    appendTask();
   
});

export let taskArray = [];

export function handleTaskArray() {
    console.log(taskArray);
}

export default class DisplayTask {
    constructor(taskIndex, title, description, dueDate, priority, taskStatus) {
        this.taskIndex = taskIndex;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskStatus = taskStatus;
    }

    createTaskElement() {
        const taskElement = document.createElement('div');
        taskElement.classList.add('card', 'mb-2');
        taskElement.dataset.index = this.taskIndex;
        taskElement.innerHTML = `
            <div class="card-body">
                <div class="task-header">
                <div class="task-header-left">
                <button style="padding-left: 0" type="button" class="btn btn-link">
             <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" fill="#dc3545" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                 </svg>
                </button>
                    <h5 class="card-title" contenteditable="true">${this.title}</h5>
                    </div>
                    <div class="task-header-right">
                    <h6 class="due-date-header">Due: ${this.dueDate}</h6>
                    <button type="button" class="btn btn-outline-success">
                    Complete
                </button>
                    </div>
                </div>
                <p class="card-text" contenteditable="true">${this.description}</p>
                    <p>Priority: <span class="priority-text">${this.priority}</span></p>
                    <div class="task-footer">
                    <button type="button" class="btn btn-link expand-collapse">details˅</button>
                   
                </div>
            </div>
        `;

        addEditTaskEventListeners(taskElement);

        handleExpandButton(taskElement);
        
        return taskElement;
        
    }

}



export function appendTask() {
    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Check if a valid priority is selected
        const prioritySelect = document.getElementById('priority');
        if (prioritySelect.value === "") {
            alert("Please select a valid priority.");
            return; // Prevent form submission if the priority is not selected
        }

        // Gather input values
        const title = document.getElementById('taskname').value;
        const description = document.getElementById('taskdetails').value;
        const priority = document.getElementById('priority').value;
        const dueDate = document.getElementById('dateInput').value || 'No due date specified';
        const taskStatus = 'Incomplete';
       

        // Create a new DisplayTask object
        const taskIndex = taskArray.length;
        const newTask = new DisplayTask(taskIndex, title, description, dueDate, priority, taskStatus);

        // Create a task element and append it to the task container
        const taskElement = newTask.createTaskElement();
        document.getElementById('taskContainer').appendChild(taskElement);

        const priorityTextElements = taskElement.querySelectorAll('.priority-text');
        priorityTextElements.forEach(priorityText => {
            if (priority === "high") {
                priorityText.style.color = 'Red';
            }
            else if (priority === "medium") {
                priorityText.style.color = 'Orange';
            }
            else {
                priorityText.style.color = 'Green';
            }
            
        });

        taskArray.push(newTask);
        handleTaskArray();

        taskForm.reset();
        
        // Optionally log the new task
        console.log(newTask);
    });
    
}
