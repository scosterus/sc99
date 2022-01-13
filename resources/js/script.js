// reverse mouse hover script for the hero
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

    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    let maxHeight = height - scrollTop;

    //console.log(maxHeight)
    
    if(e.clientY < maxHeight) {
        cursor.style.top = e.clientY + 'px';
        cursor.style.height = '';
        cursor.style.width = '';
    }

    if(e.clientY > maxHeight) {
        cursor.style.top = maxHeight + 'px';
        cursor.style.height = '0px';
        cursor.style.width = '0px';
    }


    cursor.style.left = e.clientX + 'px';

    let colorX = e.clientX / width * 200;
    let colorY = e.clientY / height * 200;
    let colorHue = Math.floor(colorX + colorY);

    cursor.style.backgroundImage = `linear-gradient(90deg, hsla(${colorHue}, 100%, 50%, 1), hsla(${colorHue + 30}, 100%, 50%, 1))`;
})