import { renderCalendar } from './datePicker.js';
import { taskComplete } from './completeTask.js';
import { toggleParagraphs, handleExpandButton } from './expandAndCollapse.js';
import { addEditTaskEventListeners } from './editTask.js';
import { projectCounter } from './createProject.js';


document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    appendTask();
});

export let taskArray = [];

export function handleTaskArray() {
    console.log(taskArray);
}

class DisplayTask {
    constructor(taskIndex, title, description, dueDate, priority, taskStatus, projectId) {
        this.taskIndex = taskIndex;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskStatus = taskStatus;
        this.projectId = projectId; // New property to associate task with a project
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
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                        <h5 class="card-title" contenteditable="true">${this.title}</h5>
                    </div>
                    <div class="task-header-right">
                        <h6 class="due-date-header">Due: ${this.dueDate}</h6>
                        <button type="button" class="btn ${this.taskStatus === 'Complete' ? 'btn-secondary' : 'btn-outline-success'}">
                            ${this.taskStatus === 'Complete' ? 'Unmark' : 'Complete'}
                        </button>
                    </div>
                </div>
                <p class="card-text" contenteditable="true">${this.description}</p>
                <div class="task-footer">
                <p>Priority: <span class="priority-text">${this.priority}</span></p>
                    <button type="button" class="btn btn-link expand-collapse">details˅</button>
                </div>
            </div>
        `;

        const priorityTextElement = taskElement.querySelector('.priority-text');
        switch (this.priority) {
            case 'high':
                priorityTextElement.style.color = 'Red';
                break;
            case 'medium':
                priorityTextElement.style.color = 'Orange';
                break;
            case 'low':
                priorityTextElement.style.color = 'Green';
                break;
        }

        handleExpandButton(taskElement);

        return taskElement;
    }
}

export function appendTask() {
    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const prioritySelect = document.getElementById('priority');
        if (prioritySelect.value === "") {
            alert("Please select a valid priority.");
            return;
        }

        const title = document.getElementById('taskName').value;
        const description = document.getElementById('taskdetails').value;
        const priority = document.getElementById('priority').value;
        const dueDate = document.getElementById('dateInput').value || 'No due date specified';
        const taskStatus = 'Incomplete';

        // Get the active project ID
        const activeProjectId = document.querySelector('.nav-link.active').getAttribute('href').substring(1);

        const taskIndex = taskArray.length;
        const newTask = new DisplayTask(taskIndex, title, description, dueDate, priority, taskStatus, activeProjectId);

        taskArray.push(newTask);

        // Only append the task if it belongs to the active project
        if (activeProjectId === `taskContainer-${projectCounter}`) {
            const taskElement = newTask.createTaskElement();
            document.getElementById(activeProjectId).appendChild(taskElement);
        }

        // Clear form fields
        document.getElementById('taskForm').reset();
    });
}

