import { createTaskContainer } from './createProjectContainer.js';
import { removeProject } from './removeProject.js';

export let projectCounter = 0;




document.getElementById("create-project").addEventListener("click", createSideBarDropDown);

// Initialize a default project when first entering the app
document.addEventListener('DOMContentLoaded', () => {
    createSideBarDropDown();
});




export default function createSideBarDropDown() {
    projectCounter++;
    console.log('Project Counter:', projectCounter);

    const listItem = document.createElement('li');
    listItem.classList.add('sidebar-nav-item');

    const projectElement = document.createElement('a');
    projectElement.classList.add('nav-link');

    const taskContainerId = `taskContainer-${projectCounter}`;
    const projectName = `New Project ${projectCounter}`;
    
    projectElement.href = `#${taskContainerId}`;
    projectElement.textContent = projectName;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = `...`;

    listItem.appendChild(projectElement);
    listItem.appendChild(deleteButton);

    const sidebar = document.querySelector('#sidebar-wrapper .projects');
    if (sidebar) {
        sidebar.appendChild(listItem);
    } else {
        console.error('Sidebar element not found');
    }

    const activateProject = () => {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        projectElement.classList.add('active');

        document.querySelectorAll('.task-container').forEach(container => {
            container.style.display = 'none';
        });

        const taskContainer = document.getElementById(taskContainerId);
        if (taskContainer) {
            taskContainer.style.display = 'block';
        }
    };

    let lastClickTime = 0;

    projectElement.addEventListener('click', (event) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 500) {
            event.preventDefault();
            projectElement.contentEditable = true;
            projectElement.focus();
        } else {
            lastClickTime = currentTime;
            activateProject();
        }
    });

    projectElement.addEventListener('blur', () => {
        projectElement.contentEditable = false;
    });

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        listItem.remove();
        
        const taskContainer = document.getElementById(taskContainerId);
        if (taskContainer) {
            taskContainer.remove();
        }
        
        removeProject(taskContainerId);
        projectCounter--;

        const nextListItem = listItem.nextElementSibling || listItem.previousElementSibling;
        if (nextListItem) {
            const nextProjectElement = nextListItem.querySelector('.nav-link');
            if (nextProjectElement) {
                nextProjectElement.classList.add('active');

                const nextTaskContainerId = nextProjectElement.getAttribute('href').substring(1);
                const nextTaskContainer = document.getElementById(nextTaskContainerId);
                if (nextTaskContainer) {
                    nextTaskContainer.style.display = 'block';
                }
            }
        }
    });

    createTaskContainer(taskContainerId, projectName);
    activateProject();
}
