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
       // taskElement.dataset.projectId = this.projectId;
        taskElement.innerHTML = `
        <div class="card-body">
            <div class="task-header">
                <div class="task-header-left">
                    <button style="padding-left: 0" type="button" class="btn btn-link">
                        <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                    </button>
                    <h5 class="card-title" contenteditable="true">${this.title}</h5>
                </div>
                <div class="task-header-right">
                <span class="priority-text">${this.priority}</span>
                    <button type="button" style="padding-right: 0;" class="btn ${this.taskStatus === 'Complete' ? 'incomplete' : 'complete'}">
                        ${this.taskStatus === 'Complete' ? 
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>' : 
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>'}
                    </button>
                </div>
            </div>
            <p class="card-text" contenteditable="true">${this.description}</p>
            <div class="task-footer">
            <h6 class="due-date-header">Due: ${this.dueDate}</h6>
            
                <button type="button" class="btn btn-link expand-collapse">details˅</button>
            </div>
        </div>
    `;

        const priorityTextElement = taskElement.querySelector('.priority-text');
        switch (this.priority) {
            case 'high':
                priorityTextElement.style.backgroundColor = '#f64556';
                break;
            case 'medium':
                priorityTextElement.style.backgroundColor = '#ffc457';
                break;
            case 'low':
                priorityTextElement.style.backgroundColor = '#4bb94b';
                break;
        }

        handleExpandButton(taskElement);

         addEditTaskEventListeners(taskElement);

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

        const activeProjectElement = document.querySelector('.nav-link.active');
        if (!activeProjectElement) {
            console.error('No active project found');
            return;
        }
        const activeProjectId = activeProjectElement.getAttribute('href').substring(1);

        const taskIndex = taskArray.length;
        const newTask = new DisplayTask(taskIndex, title, description, dueDate, priority, taskStatus, activeProjectId);

        taskArray.push(newTask);

        if (newTask.projectId === activeProjectId) {
            const taskElement = newTask.createTaskElement();
            document.getElementById(activeProjectId).appendChild(taskElement);
        }

        document.getElementById('taskForm').reset();
    });
}
