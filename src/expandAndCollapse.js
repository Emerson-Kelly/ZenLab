
export function toggleParagraphs(taskElement, expandButton) {
    const paragraphs = taskElement.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        if (paragraph !== expandButton.parentElement) { 
            paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
        }
    });

    // Update button text based on the display state of the paragraphs
    if (Array.from(paragraphs).some(paragraph => paragraph.style.display === 'block')) {
        expandButton.innerHTML = "details^";
    } else {
        expandButton.innerHTML = "details˅";
    }
}

export function handleExpandButton(taskElement) {
    const expandButton = taskElement.querySelector('.expand-collapse');
    expandButton.addEventListener('click', () => {
        toggleParagraphs(taskElement, expandButton);
    });
}
