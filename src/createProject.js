import { createTaskContainer } from './createProjectContainer.js';

let projectCounter = 0;

document.getElementById("create-project").addEventListener("click", createSideBarDropDown);

export default function createSideBarDropDown() {
    projectCounter++;
    console.log(projectCounter);

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.classList.add('sidebar-nav-item');

    // Create a new anchor element for the project
    const projectElement = document.createElement('a');
    projectElement.classList.add('nav-link');

    // Set the href to link to the respective task container
   const taskContainerId = `taskContainer-${projectCounter}`;
   
    projectElement.href = `#${taskContainerId}`;
    projectElement.textContent = `New Project ${projectCounter}`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>`;

    // Append the anchor element and the delete button to the list item
    listItem.appendChild(projectElement);
    listItem.appendChild(deleteButton);

    // Append the newly created listItem to the sidebar
    const sidebar = document.querySelector('#sidebar-wrapper .projects');
    if (sidebar) {
        sidebar.appendChild(listItem);
    } else {
        console.error('Sidebar element not found');
    }

    // Add click event listener to handle link click and make text editable
    let lastClickTime = 0;

    
    projectElement.addEventListener('click', (event) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 500) { // If the second click occurs within 500ms
            event.preventDefault();
            projectElement.contentEditable = true;
            projectElement.focus();
        } else {
            lastClickTime = currentTime;
        }
        // Make the clicked project active
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        projectElement.classList.add('active');

        // Hide all task containers
        document.querySelectorAll('.task-container').forEach(container => {
            container.style.display = 'none';
        });

        // Show the task container associated with the clicked project
        const taskContainer = document.getElementById(taskContainerId);
        if (taskContainer) {
            taskContainer.style.display = 'block';
        }
    });

    
    // Add blur event listener to handle exiting the editable state
    projectElement.addEventListener('blur', () => {
        projectElement.contentEditable = false;
    });

    // Add click event listener to handle delete button click
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        listItem.remove();
        document.getElementById(taskContainerId).remove();
    });

    createTaskContainer(taskContainerId, `New Project ${projectCounter}`);
}
