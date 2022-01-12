// reverse mouse hover script for the hero
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    e.stopPropagation();
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    //calculate width of the page
    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    let colorX = e.clientX / width * 200;
    let colorY = e.clientY / height * 200;
    let colorHue = Math.floor(colorX + colorY);

    console.log(colorHue)
    cursor.style.backgroundImage = `linear-gradient(90deg, hsla(${colorHue}, 100%, 50%, 1), hsla(${colorHue + 30}, 100%, 50%, 1))`;
})