export function toggleMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var wrapper = document.getElementById('wrapper');
    var projects = document.querySelector('.projects');
    var createProject = document.getElementById('create-project');

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('toggled');

        var isToggled = wrapper.classList.contains('toggled');
        projects.style.display = isToggled ? 'none' : 'block';
        if (createProject) {
            createProject.style.display = isToggled ? 'none' : 'block';
        }
    });
}
