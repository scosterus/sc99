const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    e.stopPropagation();

    //calculate width and height of the page
    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';

})