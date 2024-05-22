export function toggleMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var wrapper = document.getElementById('wrapper');
  
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('toggled');
    });
}