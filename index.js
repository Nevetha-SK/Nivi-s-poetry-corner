document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
        });
        
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });
});