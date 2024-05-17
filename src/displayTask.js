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
        taskElement.innerHTML = `
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <p>Due: ${this.dueDate}</p>
            <p>Priority: ${this.priority}</p>
            <p>Status: ${this.taskStatus}</p>
        `;
        return taskElement;
    }
}

export function appendTask() {
    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission
        
        // Gather input values
        const title = document.getElementById('taskname').value;
        const description = document.getElementById('taskdetails').value;
        const priority = document.getElementById('priority').value;
        const dueDate = 'No due date specified'; // Add a due date field to your form if needed
        const taskStatus = 'Incomplete'; // Add a task status field to your form if needed

        // Create a new DisplayTask object
        const newTask = new DisplayTask(title, description, dueDate, priority, taskStatus);

        // Create a task element and append it to the body or another container
        const taskElement = newTask.createTaskElement();
        document.body.appendChild(taskElement);

        // Optionally log the new task
        console.log(newTask);
    });
}
