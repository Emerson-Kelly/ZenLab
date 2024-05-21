import { renderCalendar } from './datePicker.js';
//import { taskComplete } from './completeTask.js';

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    appendTask();
});

export let taskArray = [];

export function handleTaskArray() {
    console.log(taskArray);
}

export default class DisplayTask {
    constructor(title, description, dueDate, priority, taskStatus) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskStatus = taskStatus;
    }

    createTaskElement() {
        const taskElement = document.createElement('div');
        taskElement.classList.add('card', 'mb-2');
        taskElement.innerHTML = `
            <div class="card-body">
                <div class="task-header">
                    <h5 class="card-title">${this.title}</h5>
                    <div class="task-header-right">
                        <p class="due-date-header">Due: ${this.dueDate}</p>
                        <button type="button" class="btn btn-link">
                            <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" fill="#dc3545" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <p class="card-text">${this.description}</p>
                <div class="task-footer">
                    <p>Priority: ${this.priority}</p>
                    <button type="button" class="btn btn-outline-success">
                        Complete
                    </button>
                </div>
            </div>
        `;
        return taskElement;
    }
}

export function appendTask() {
    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Gather input values
        const title = document.getElementById('taskname').value;
        const description = document.getElementById('taskdetails').value;
        const priority = document.getElementById('priority').value;
        const dueDate = document.getElementById('dateInput').value || 'No due date specified';
        let taskStatus = 'Incomplete';

        // Create a new DisplayTask object
        const newTask = new DisplayTask(title, description, dueDate, priority, taskStatus);

        // Create a task element and append it to the task container
        const taskElement = newTask.createTaskElement();
        document.getElementById('taskContainer').appendChild(taskElement);

        taskArray.push(newTask);
        handleTaskArray();

        // Optionally log the new task
        console.log(newTask);
    });
}
