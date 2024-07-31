document.getElementById('toggle-task-input').addEventListener('click', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskForm');
    var btnSubmit = document.querySelector('.btn, .submit');
    var backgroundWrapper = document.getElementById('wrapper');
    var body = document.getElementsByTagName('body')[0];
    var closeTaskInput = document.getElementById('closeTaskInput');

   /* if (taskInput.style.display === 'none' || taskInput.style.display === '') {
        taskInput.style.display = 'block';
        backgroundWrapper.style.opacity = '.5';
        body.style.background = "#eeeeee";
    }  
    else {
        taskInput.style.display = 'none';
       
    }*/

    if (taskInput.style.opacity === '0' || taskInput.style.opacity === '') {
        taskInput.style.opacity = '1';
        backgroundWrapper.style.opacity = '.5';
        body.style.background = "#eeeeee";
        
    }  
    else {
        taskInput.style.opacity = '0';
    }

    btnSubmit.addEventListener('click', function(event){
        const prioritySelection = document.getElementById('priority');
        if (prioritySelection.value === "") {
            taskInput.style.opacity = '1';
        }
        else {
        taskInput.style.opacity = '0';
        backgroundWrapper.style.opacity = '1';
        body.style.removeProperty("background");
        }
    });
    closeTaskInput.addEventListener('click', function(event){
        taskInput.style.opacity = '0';
        backgroundWrapper.style.opacity = '1';
        body.style.removeProperty("background");
    });
});

