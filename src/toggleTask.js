document.getElementById('toggle-task-input').addEventListener('click', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskForm');
    var btnSubmit = document.querySelector('.btn, .submit');
    var backgroundWrapper = document.getElementById('wrapper');
    var body = document.getElementsByTagName('body')[0];
    if (taskInput.style.display === 'none' || taskInput.style.display === '') {
        taskInput.style.display = 'block';
        backgroundWrapper.style.opacity = '.5';
        body.style.background = "#eeeeee";
    }  
    else {
        taskInput.style.display = 'none';
       
    }
    btnSubmit.addEventListener('click', function(event){
        taskInput.style.display = 'none';
        backgroundWrapper.style.opacity = '1';
        body.style.removeProperty("background");
    });
});

