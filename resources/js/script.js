// reverse mouse hover script for the hero
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    e.stopPropagation();
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})